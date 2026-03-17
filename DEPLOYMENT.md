# A Plus Website Deployment Runbook (Ubuntu)

## Server Details
- Host: `192.95.32.192`
- SSH User: `ubuntu`
- SSH Key: `C:\Users\Dell Latitude 5350\.ssh\plughub_ed25519`
- App Path: `/srv/apluswebsite`
- Public Domain: `demo.aplus.plughub-ims.com`
- Do Not Touch: `/srv/clinicsuite`, `/srv/uploads`, and anything outside `/srv/apluswebsite`
- Service: `apluswebsite.service`
- Nginx Site: `demo.aplus.plughub-ims.com`

## Tech Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `next/image` with `sharp`

## Server Packages
Install only generic packages globally:

```bash
sudo apt update
sudo apt install -y nginx git rsync unzip build-essential
nginx -v
certbot --version
```

Important:
- Do not replace the system-wide Node.js used by other apps.
- This app uses its own local Node.js 20 runtime under `/srv/apluswebsite/.runtime/node`.

## App Directory
Create the app directory without touching `clinicsuite`:

```bash
sudo mkdir -p /srv/apluswebsite
sudo chown -R ubuntu:ubuntu /srv/apluswebsite
```

## Build (Local Windows)
Create a deployable zip that excludes env files, `node_modules`, and build output.

- Output: `C:\Users\Dell Latitude 5350\OneDrive\Desktop\build\apluswebsite.zip`

Recommended:

```powershell
python scripts/make_deploy_zip.py --output "C:\Users\Dell Latitude 5350\OneDrive\Desktop\build\apluswebsite.zip"
```

Note:
- The zip is uploaded to `/tmp`
- The zip is deleted after syncing
- No zip file should live under `/srv/apluswebsite`

## Upload
Upload the zip to the server:

```powershell
scp -o StrictHostKeyChecking=accept-new -i "C:\Users\Dell Latitude 5350\.ssh\plughub_ed25519" `
  "C:\Users\Dell Latitude 5350\OneDrive\Desktop\build\apluswebsite.zip" `
  ubuntu@192.95.32.192:/tmp/apluswebsite.zip
```

## First-Time Deploy (Safe Sync)
SSH to the server:

```powershell
ssh -o StrictHostKeyChecking=accept-new -i "C:\Users\Dell Latitude 5350\.ssh\plughub_ed25519" ubuntu@192.95.32.192
```

Then run on the server:

```bash
set -euo pipefail

ZIP=/tmp/apluswebsite.zip
APP=/srv/apluswebsite
TMPDIR=$(mktemp -d /tmp/apluswebsite_XXXX)
trap 'rm -rf "$TMPDIR"' EXIT

unzip -q "$ZIP" -d "$TMPDIR"

sudo rsync -a --delete \
  --no-perms --no-owner --no-group --omit-dir-times \
  --exclude='.env*' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='logs' \
  --exclude='data' \
  "$TMPDIR"/ "$APP"/

rm -f "$ZIP"

cd "$APP"
if [ -f .env.production.example ]; then
  cp -n .env.production.example .env.production
else
  touch .env.production
fi
mkdir -p .runtime
cd .runtime
rm -rf node node-v20.19.1-linux-x64 node-v20.19.1-linux-x64.tar.xz
curl -fsSLO https://nodejs.org/dist/v20.19.1/node-v20.19.1-linux-x64.tar.xz
tar -xf node-v20.19.1-linux-x64.tar.xz
mv node-v20.19.1-linux-x64 node
rm -f node-v20.19.1-linux-x64.tar.xz
cd "$APP"
export PATH="$APP/.runtime/node/bin:$PATH"
node -v
npm ci
npm run build
```

## Systemd Service
Copy the checked-in service file:

```bash
sudo cp /srv/apluswebsite/deploy/systemd/apluswebsite.service /etc/systemd/system/apluswebsite.service
sudo systemctl daemon-reload
sudo systemctl enable apluswebsite.service
sudo systemctl restart apluswebsite.service
systemctl is-active apluswebsite.service
```

## Nginx
Copy the checked-in Nginx site for this app only:

```bash
sudo cp /srv/apluswebsite/deploy/nginx/demo.aplus.plughub-ims.com.conf /etc/nginx/sites-available/demo.aplus.plughub-ims.com
sudo ln -s /etc/nginx/sites-available/demo.aplus.plughub-ims.com /etc/nginx/sites-enabled/demo.aplus.plughub-ims.com
sudo nginx -t
sudo systemctl reload nginx
```

Do not edit or reload any `clinicsuite` application files beyond the normal Nginx reload required for the new site.

## SSL
Before SSL:
- ensure DNS for `demo.aplus.plughub-ims.com` points to `192.95.32.192`

Issue the certificate:

```bash
sudo certbot --nginx -d demo.aplus.plughub-ims.com
sudo certbot renew --dry-run
```

## Update Deploys Later
For later releases, reuse the same zip/sync flow:

```bash
set -euo pipefail

ZIP=/tmp/apluswebsite.zip
APP=/srv/apluswebsite
TMPDIR=$(mktemp -d /tmp/apluswebsite_XXXX)
trap 'rm -rf "$TMPDIR"' EXIT

unzip -q "$ZIP" -d "$TMPDIR"

sudo rsync -a --delete \
  --no-perms --no-owner --no-group --omit-dir-times \
  --exclude='.env*' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='logs' \
  --exclude='data' \
  "$TMPDIR"/ "$APP"/

rm -f "$ZIP"

cd "$APP"
export PATH="$APP/.runtime/node/bin:$PATH"
npm ci
npm run build
sudo systemctl restart apluswebsite.service
systemctl is-active apluswebsite.service
```

## Verification
Check app locally on the server:

```bash
curl -I http://127.0.0.1:3006
```

Check service:

```bash
systemctl status apluswebsite.service --no-pager
```

Check public endpoint:

```bash
curl -I https://demo.aplus.plughub-ims.com
```

Check Nginx:

```bash
sudo nginx -t
```

## Important Isolation Rules
- Only deploy into `/srv/apluswebsite`
- Only install `/etc/systemd/system/apluswebsite.service`
- Only install `/etc/nginx/sites-available/demo.aplus.plughub-ims.com`
- Do not modify `/srv/clinicsuite`
- Do not modify any existing service units for `clinicsuite`
- Do not delete any existing Nginx sites
