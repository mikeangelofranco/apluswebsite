from __future__ import annotations

import argparse
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


EXCLUDED_DIRS = {
    ".git",
    ".next",
    "node_modules",
}

EXCLUDED_FILES = {
    ".env",
    ".env.local",
    ".env.production",
    ".env.development",
}

ALLOWED_ENV_FILES = {
    ".env.production.example",
}

EXCLUDED_SUFFIXES = {
    ".pyc",
}


def should_skip(path: Path, root: Path) -> bool:
    relative = path.relative_to(root)
    parts = set(relative.parts)

    if parts & EXCLUDED_DIRS:
        return True

    if path.name in EXCLUDED_FILES:
        return True

    if path.name.startswith(".env.") and path.name not in ALLOWED_ENV_FILES:
        return True

    if path.suffix in EXCLUDED_SUFFIXES:
        return True

    return False


def build_zip(root: Path, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)

    with ZipFile(output, "w", compression=ZIP_DEFLATED) as archive:
        for path in root.rglob("*"):
            if path.is_dir():
                continue

            if output.resolve() == path.resolve():
                continue

            if should_skip(path, root):
                continue

            archive.write(path, path.relative_to(root).as_posix())


def main() -> None:
    parser = argparse.ArgumentParser(description="Create a Linux-friendly deploy zip for apluswebsite.")
    parser.add_argument(
        "--root",
        default=".",
        help="Project root directory. Defaults to the current directory.",
    )
    parser.add_argument(
        "--output",
        required=True,
        help="Output zip path.",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    output = Path(args.output).resolve()

    build_zip(root, output)
    print(f"Created deploy zip: {output}")


if __name__ == "__main__":
    main()
