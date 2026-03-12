type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-semibold text-white">
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
