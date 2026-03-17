type WhiteCanvasProps = {
  children: React.ReactNode;
};

export function WhiteCanvas({ children }: WhiteCanvasProps) {
  return (
    <div className="relative mx-auto max-w-[1320px] overflow-hidden border border-[#EFE6DB] bg-[#FCFAF7] shadow-[0_10px_40px_rgba(60,30,10,0.12)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,241,234,0.9),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(231,215,199,0.35),transparent_35%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
