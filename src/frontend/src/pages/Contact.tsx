import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_DISPLAY,
  getWhatsAppLink,
  openWhatsApp,
} from "@/lib/whatsapp";
import { MACHINES } from "@/types";
import type { InquiryInput } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MACHINE_OPTIONS = [
  ...MACHINES.map((m) => ({ value: m.id, label: m.name })),
  { value: "general", label: "General Inquiry" },
];

const BUSINESS_HOURS = [
  { day: "Monday – Saturday", hours: "9:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
];

type FormState = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM: InquiryInput = {
  name: "",
  phone: "",
  email: "",
  machineInterest: "",
  message: "",
};

export default function Contact() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState<InquiryInput>(EMPTY_FORM);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<InquiryInput>>({});

  function validate(): boolean {
    const newErrors: Partial<InquiryInput> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-+()]{7,15}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.machineInterest)
      newErrors.machineInterest = "Please select an interest";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    try {
      if (actor) {
        await actor.submitInquiry(form);
      }
      setFormState("success");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch {
      setFormState("error");
    }
  }

  function handleChange(field: keyof InquiryInput, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const selectedMachineLabel =
    MACHINE_OPTIONS.find((m) => m.value === form.machineInterest)?.label ?? "";
  const whatsappMessage = form.machineInterest
    ? `Hi Lakshya Keshari, I'm interested in ${selectedMachineLabel}. ${form.message || DEFAULT_WHATSAPP_MESSAGE}`
    : DEFAULT_WHATSAPP_MESSAGE;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <section className="bg-card border-b rust-stripe py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-2">
              Get In Touch
            </p>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3 text-balance">
              Talk to Lakshya Keshari Directly
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-lg">
              Have a question about our food processing machinery? Reach out via
              WhatsApp for the fastest response, or fill in the inquiry form
              below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Hero CTA */}
      <section className="bg-accent/10 border-b border-accent/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-elevated shrink-0">
                <MessageCircle className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground font-body text-sm">
                  WhatsApp — Fastest Response
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-2xl md:text-3xl text-accent hover:text-accent/80 transition-smooth"
                  data-ocid="contact.whatsapp_link"
                  aria-label={`Chat on WhatsApp: ${WHATSAPP_DISPLAY}`}
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold text-base gap-2 px-8 shadow-elevated transition-smooth"
              onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
              data-ocid="contact.whatsapp_button"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Inquiry Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 md:p-8 shadow-elevated border border-border bg-card">
                <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-1">
                  Send an Inquiry
                </h2>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Fill in your details and we'll get back to you — or click the
                  WhatsApp button to connect instantly.
                </p>

                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6"
                    data-ocid="contact.success_state"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">
                        Inquiry received!
                      </p>
                      <p className="text-muted-foreground text-sm font-body">
                        Lakshya Keshari will reach out to you soon. For faster
                        response,{" "}
                        <a
                          href={getWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline underline-offset-2"
                        >
                          message on WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6"
                    data-ocid="contact.error_state"
                  >
                    <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">
                        Submission failed
                      </p>
                      <p className="text-muted-foreground text-sm font-body">
                        Please try again or{" "}
                        <button
                          type="button"
                          onClick={() => openWhatsApp(whatsappMessage)}
                          className="text-accent underline underline-offset-2 cursor-pointer"
                        >
                          contact via WhatsApp
                        </button>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-body font-medium text-sm"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={
                          errors.name
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        data-ocid="contact.name_input"
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-destructive text-xs font-body"
                          data-ocid="contact.name.field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-body font-medium text-sm"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 99999 99999"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={
                          errors.phone
                            ? "border-destructive focus-visible:ring-destructive"
                            : ""
                        }
                        data-ocid="contact.phone_input"
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-destructive text-xs font-body"
                          data-ocid="contact.phone.field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body font-medium text-sm"
                    >
                      Email Address{" "}
                      <span className="text-muted-foreground text-xs">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                      data-ocid="contact.email_input"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-destructive text-xs font-body"
                        data-ocid="contact.email.field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Machine Interest */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="machine-interest"
                      className="font-body font-medium text-sm"
                    >
                      Machine Interest{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.machineInterest}
                      onValueChange={(val) =>
                        handleChange("machineInterest", val)
                      }
                    >
                      <SelectTrigger
                        id="machine-interest"
                        className={`w-full ${errors.machineInterest ? "border-destructive focus:ring-destructive" : ""}`}
                        data-ocid="contact.machine_interest_select"
                        aria-describedby={
                          errors.machineInterest ? "machine-error" : undefined
                        }
                      >
                        <SelectValue placeholder="Select a machine or inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {MACHINE_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.machineInterest && (
                      <p
                        id="machine-error"
                        className="text-destructive text-xs font-body"
                        data-ocid="contact.machine.field_error"
                      >
                        {errors.machineInterest}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body font-medium text-sm"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your requirements — quantity, use case, budget, etc."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      data-ocid="contact.message_textarea"
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-destructive text-xs font-body"
                        data-ocid="contact.message.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="flex-1 font-display font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                      data-ocid="contact.submit_button"
                    >
                      {formState === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        "Send Inquiry"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 sm:flex-none font-display font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2 transition-smooth"
                      onClick={() => openWhatsApp(whatsappMessage)}
                      data-ocid="contact.whatsapp_form_button"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Instead
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Business Info Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Owner Card */}
              <Card
                className="p-5 border border-border bg-card shadow-subtle"
                data-ocid="contact.owner_card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-base leading-tight">
                      Lakshya Keshari
                    </p>
                    <p className="text-muted-foreground font-body text-xs">
                      Owner & Food Processing Specialist
                    </p>
                  </div>
                </div>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MessageCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground font-body text-xs mb-0.5">
                        WhatsApp
                      </p>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-accent text-base hover:text-accent/80 transition-smooth"
                        data-ocid="contact.sidebar_whatsapp_link"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground font-body text-xs mb-0.5">
                        Phone
                      </p>
                      <a
                        href="tel:+917905633007"
                        className="font-body font-medium text-foreground text-sm hover:text-primary transition-smooth"
                        data-ocid="contact.phone_link"
                      >
                        +91 79056 33007
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground font-body text-xs mb-0.5">
                        Address
                      </p>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        Kashipur Road, Near Orderly Bazaar
                        <br />
                        Varanasi, Kashipur
                        <br />
                        Uttar Pradesh — 221 001
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card
                className="p-5 border border-border bg-card shadow-subtle"
                data-ocid="contact.hours_card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {BUSINESS_HOURS.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex justify-between items-center py-1.5 border-b border-border last:border-0"
                    >
                      <span className="font-body text-sm text-foreground">
                        {slot.day}
                      </span>
                      <span className="font-body text-sm font-semibold text-primary">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                  <p className="text-muted-foreground font-body text-xs pt-1">
                    WhatsApp responses available outside hours — we reply as
                    soon as possible.
                  </p>
                </div>
              </Card>

              {/* WhatsApp Prompt */}
              <button
                type="button"
                className="rounded-xl bg-accent p-5 flex items-center gap-4 cursor-pointer shadow-elevated transition-smooth hover:bg-accent/90 w-full text-left"
                onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
                onKeyDown={(e) =>
                  e.key === "Enter" && openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)
                }
                data-ocid="contact.whatsapp_cta_card"
                aria-label="Chat on WhatsApp for quick inquiries"
              >
                <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-accent-foreground text-sm leading-tight">
                    Quick inquiry? WhatsApp us
                  </p>
                  <p className="text-accent-foreground/80 font-body text-xs mt-0.5">
                    Get pricing &amp; availability in minutes
                  </p>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Location Banner */}
      <section className="bg-muted/40 border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-1">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              See our food processing machines in person at our Varanasi
              showroom.
            </p>
          </motion.div>
          <div className="rounded-xl overflow-hidden border border-border shadow-subtle bg-card">
            <iframe
              title="Lakshya Keshari Machinery Showroom — Varanasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2def662ca2c3%3A0x1e6b10dc7bdff03a!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-ocid="contact.map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
