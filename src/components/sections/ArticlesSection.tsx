import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { OutlineButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/motion/Reveal";
import { articles, articlesHeading } from "@/data/site";

export function ArticlesSection() {
  return (
    <section id="insights" className="pl-section relative" aria-labelledby="insights-heading">
      <div className="pl-shell relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="insights-heading" className="pl-h2">
            {articlesHeading.title}
          </h2>
          <OutlineButton href={articlesHeading.cta.href} label={articlesHeading.cta.label} />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.09}>
              <article className="pl-article-card group flex h-full flex-col">
                <div className="pl-article-media relative aspect-[16/6] w-full overflow-hidden rounded-[16px] bg-[var(--surface-soft)]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 560px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <span className="w-fit rounded-full bg-[var(--peach-light)] px-3 py-1 text-[12px] font-semibold text-[var(--ink)]">
                    {article.category}
                  </span>
                  <h3 className="mt-4 text-[24px] font-semibold leading-[30px] tracking-[-0.035em]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--ink-muted)]">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-6">
                    <a className="pl-textlink" href={article.href}>
                      Read more
                      <ArrowRight size={15} aria-hidden="true" />
                      <span className="sr-only">: {article.title}</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
