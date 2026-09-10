import { AccordionItem } from "@/components/ui/AccordionItem";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section id="faq" className="pl-section relative" aria-labelledby="faq-heading">
      <div className="pl-shell relative">
        <Reveal className="text-center">
          <h2 id="faq-heading" className="pl-h2">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-[900px]">
          <div className="border-t border-[var(--line-soft)]">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
