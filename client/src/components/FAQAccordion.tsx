import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-card-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
