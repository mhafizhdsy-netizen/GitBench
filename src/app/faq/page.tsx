
'use client';

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQPage() {
  return (
    <motion.div
        className="container py-24 sm:py-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
                Ada Pertanyaan?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang GitBench.
            </p>
        </div>
        
      <div className="max-w-3xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg px-6 transition-all hover:border-primary/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      </motion.div>
  );
}
