import type { LegalContent } from "@/lib/legal";

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="container-section pb-14 pt-36 md:pt-44">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 text-sm text-white/50">{content.updated}</p>
        </div>
      </section>

      <section className="bg-bg-light">
        <div className="container-section py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-text-muted">
              {content.intro}
            </p>
            <div className="mt-10 space-y-10">
              {content.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-lg font-bold text-brand-navy">
                    {s.heading}
                  </h2>
                  {s.body.split("\n\n").map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="mt-3 text-base leading-relaxed text-text-muted"
                    >
                      {para}
                    </p>
                  ))}
                  {s.bullets ? (
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-base leading-relaxed text-text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-teal"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
