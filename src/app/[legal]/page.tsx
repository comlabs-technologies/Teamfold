import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FloatingHeader } from "@/components/sections/FloatingHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { brand, legalPages } from "@/data/site";

type Params = { legal: string };

export function generateStaticParams() {
  return legalPages.map((page) => ({ legal: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { legal } = await params;
  const page = legalPages.find((entry) => entry.slug === legal);
  if (!page) return {};
  return { title: `${page.title} — ${brand.name}`, description: page.intro };
}

export const dynamicParams = false;

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { legal } = await params;
  const page = legalPages.find((entry) => entry.slug === legal);
  if (!page) notFound();

  return (
    <>
      <FloatingHeader />
      <main className="relative pt-[148px] lg:pt-[188px]">
        <div className="pl-grid-bg pl-grid-fade" aria-hidden="true" />
        <div className="pl-shell relative pb-28">
          <div className="mx-auto max-w-[720px]">
            <h1 className="pl-h1">{page.title}</h1>
            <p className="mt-4 text-[13px] text-[var(--ink-muted)]">{page.updated}</p>
            <p className="pl-lead mt-8">{page.intro}</p>

            <div className="mt-12 flex flex-col gap-10">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-[22px] font-semibold leading-7 tracking-[-0.03em]">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[26px] text-[var(--ink-muted)]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-12 text-[15px] leading-6 text-[var(--ink-muted)]">
              Questions about this page? Email{" "}
              <a className="pl-textlink" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
