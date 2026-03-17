type WhiteCanvasProps = {
  children: React.ReactNode;
};

export function WhiteCanvas({ children }: WhiteCanvasProps) {
  return (
    <div className="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] border border-[#E7DDD2] bg-[#FCFAF7] shadow-[0_30px_100px_rgba(60,40,24,0.08)] sm:rounded-[2.5rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/80 via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(233,221,208,0.45),transparent_32%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
