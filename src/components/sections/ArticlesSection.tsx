import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { articles, articlesHeading } from "@/data/site";

/**
 * Article routes do not exist yet, so cards without an `href` render as
 * plain editorial cards rather than links that lead nowhere.
 */
export function ArticlesSection() {
  return (
    <section id="insights" className="pl-section relative" aria-labelledby="insights-heading">
      <div className="pl-shell relative">
        <Reveal className="max-w-[620px]">
          <h2 id="insights-heading" className="pl-h2">
            {articlesHeading.title}
          </h2>
          <p className="pl-lead mt-4">{articlesHeading.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <article className="pl-article-card group flex h-full flex-col">
                <div className="pl-article-media relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-[var(--surface-soft)]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 380px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <span className="w-fit rounded-full bg-[var(--peach-light)] px-3 py-1 text-[12px] font-semibold text-[var(--ink)]">
                    {article.category}
                  </span>
                  <h3 className="mt-4 text-balance text-[21px] font-semibold leading-[28px] tracking-[-0.03em]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--ink-muted)]">
                    {article.excerpt}
                  </p>

                  {article.href ? (
                    <div className="mt-auto pt-5">
                      <a className="pl-textlink" href={article.href}>
                        Read more
                        <ArrowRight size={15} aria-hidden="true" />
                        <span className="sr-only">: {article.title}</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
