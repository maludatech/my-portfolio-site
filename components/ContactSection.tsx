import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="p-10 h-[70vh] flex flex-col items-center justify-center"
    >
      <p className="text-lg text-center">Get In Touch</p>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <Card className="p-4">
        <CardContent className="flex items-center gap-2">
          <Mail size={28} className="text-primary" />
          <p>
            <a href="mailto:nwitevictor7@gmail.com" className="text-lg">
              nwitevictor7@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
