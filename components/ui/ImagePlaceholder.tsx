type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Dummy visual slot used wherever the client's source material did not
 * include a final image. Keeps layout and aspect ratio intact so the
 * client can drop in the real asset later without touching the markup.
 */
export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex min-h-[280px] w-full items-center justify-center overflow-hidden border-2 border-dashed border-white/25 bg-white/5 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 text-white/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="M21 16l-5-5-4 4-3-3-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Imagen pendiente
        </p>
        <p className="max-w-[16rem] text-sm leading-snug text-white/40">{label}</p>
      </div>
    </div>
  );
}
