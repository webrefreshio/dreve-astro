import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  MessageSquare,
  UserPlus,
  CreditCard,
  Stethoscope,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="h-5 w-5 text-primary shrink-0" />,
  CreditCard: <CreditCard className="h-5 w-5 text-primary shrink-0" />,
  MessageSquare: <MessageSquare className="h-5 w-5 text-primary shrink-0" />,
  UserPlus: <UserPlus className="h-5 w-5 text-primary shrink-0" />,
  FileText: <FileText className="h-5 w-5 text-primary shrink-0" />,
};

interface AccordionItemData {
  id: string;
  icon: string;
  title: string;
  contentHtml: string;
}

interface Props {
  sectionTitle: string;
  sectionSubtitle: string;
  items: AccordionItemData[];
}

export default function PatientInfoSection({ sectionTitle, sectionSubtitle, items }: Props) {
  return (
    <section id="patsiendile" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2 text-center">
        {sectionTitle}
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        {sectionSubtitle}
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple" className="space-y-3">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="glass-card rounded-xl px-6 border-border/50"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  {ICON_MAP[item.icon]}
                  <span className="font-semibold text-foreground">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <div
                  className="prose-sm prose-neutral max-w-none
                    [&_strong]:text-foreground [&_strong]:font-semibold
                    [&_a]:text-primary [&_a]:hover:underline
                    [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1
                    [&_p]:mb-2 [&_h4]:font-medium [&_h4]:text-foreground [&_h4]:mb-2
                    [&_table]:w-full [&_table]:text-sm
                    [&_thead_tr]:border-b [&_thead_tr]:border-border
                    [&_th]:py-2 [&_th]:font-medium [&_th]:text-foreground
                    [&_th:first-child]:text-left [&_th:first-child]:pr-4
                    [&_th:last-child]:text-right
                    [&_tbody]:divide-y [&_tbody]:divide-border/50
                    [&_td]:py-2 [&_td:first-child]:pr-4
                    [&_td:last-child]:text-right [&_td:last-child]:whitespace-nowrap
                    [&_blockquote]:text-xs [&_blockquote]:text-muted-foreground [&_blockquote]:mt-4"
                  dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
