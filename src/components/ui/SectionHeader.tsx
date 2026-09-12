import Reveal from "./Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  aside?: React.ReactNode;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  aside,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="eyebrow">
            <span className="eyebrow-index">{index}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            {eyebrow}
          </span>
          <h2 className="section-title">{title}</h2>
          {lede && <p className="section-lede">{lede}</p>}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
    </Reveal>
  );
}
