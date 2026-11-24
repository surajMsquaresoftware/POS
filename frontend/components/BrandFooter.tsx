export function BrandFooter({ className }: { className?: string }) {
  return (
    <p className={`text-center text-[11px] leading-tight text-foreground/40 ${className ?? ""}`}>
      Developed by{" "}
      <span className="font-medium text-foreground/60">
        Suraj Choudhari
      </span>
    </p>
  );
}
