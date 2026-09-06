import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Instagram, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Reveal } from "@/components/SiteChrome";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact PYAR Architects | Bangalore" }, { name: "description", content: "Start your architecture, interior design or construction project with PYAR Architects in Bangalore." },
  { property: "og:title", content: "Contact PYAR Architects" }, { property: "og:description", content: "Tell us about the space you want to create." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: ContactPage });

function ContactPage() {
  const [sent,setSent]=useState(false);
  const details: Array<{ Icon: LucideIcon; text: string; href?: string }> = [
    { Icon: MapPin, text: "Bangalore, India" },
    { Icon: Phone, text: "+91 84383 12410", href: "tel:+918438312410" },
    { Icon: Mail, text: "pyararchitects@gmail.com", href: "mailto:pyararchitects@gmail.com" },
    { Icon: Clock3, text: "Mon–Sun, 10:00 AM – 8:00 PM" },
  ];
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true);e.currentTarget.reset();}
  return <><PageHero eyebrow="Begin a conversation" title="Let’s shape something remarkable." image={images.interior}/><section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-32"><Reveal><p className="label">Project inquiry</p><h2 className="mt-5 font-display text-4xl">Tell us about your vision.</h2><form onSubmit={submit} className="mt-10 space-y-7"><label className="block"><span className="label">Name</span><Input required name="name" className="mt-3 h-12 rounded-none border-x-0 border-t-0 bg-transparent px-0 focus-visible:ring-0" placeholder="Your full name"/></label><div className="grid gap-7 sm:grid-cols-2"><label className="block"><span className="label">Email</span><Input required type="email" name="email" className="mt-3 h-12 rounded-none border-x-0 border-t-0 bg-transparent px-0 focus-visible:ring-0" placeholder="you@example.com"/></label><label className="block"><span className="label">Phone</span><Input required type="tel" name="phone" className="mt-3 h-12 rounded-none border-x-0 border-t-0 bg-transparent px-0 focus-visible:ring-0" placeholder="+91"/></label></div><label className="block"><span className="label">Message</span><Textarea required name="message" className="mt-3 min-h-36 rounded-none border-x-0 border-t-0 bg-transparent px-0 focus-visible:ring-0" placeholder="Project type, location and what you hope to create..."/></label><Button type="submit" variant="luxe" size="lg">Send Inquiry</Button>{sent&&<p className="text-sm text-primary" role="status">Thank you. Your inquiry is ready for the PYAR team.</p>}</form></Reveal><Reveal><aside className="glass-panel p-7 sm:p-10"><p className="label">Studio details</p><div className="mt-9 space-y-7">{details.map(({Icon,text,href})=><div key={text} className="flex items-start gap-4"><Icon className="mt-0.5 size-5 shrink-0 stroke-1 text-primary"/>{href?<a href={href} className="text-sm text-muted-foreground hover:text-primary">{text}</a>:<p className="text-sm text-muted-foreground">{text}</p>}</div>)}</div><a href="https://www.instagram.com/pyar_architects" target="_blank" rel="noreferrer" className="mt-10 flex items-center gap-3 border-t border-border pt-7 text-sm text-primary"><Instagram className="size-5"/> @pyar_architects</a></aside></Reveal></section><section className="h-[520px] border-y border-border"><iframe title="PYAR Architects location in Bangalore" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6474512399045!2d77.5601724741196!3d12.930365965782874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1587c43ee78d%3A0x898b3f7a561c2005!2sManya%20Enterprises!5e0!3m2!1sen!2sin!4v1769165072231!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale invert-[.88] contrast-[.85]"/></section></>;
}