"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { TeamAvatar } from "@/components/TeamAvatar";
import { VideoExperience } from "@/components/home/VideoExperience";
import { site } from "@/lib/site";
import { getTeamMember } from "@/lib/team";


function SectionIcon({ type }: { type: string }) {
  switch (type) {
    case "caesarean":
    case "history":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      );
    case "birth-history":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      );
    case "records":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>
      );
    case "pregnancy":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="m5 17 3-6 4 2 4-2 3 6"/><path d="M12 13v8"/></svg>
      );
    case "preferences":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      );
    case "antenatal":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"/><path d="M9 12.5v3.5a3 3 0 0 0 6 0v-2"/><circle cx="18" cy="10" r="3"/></svg>
      );
    case "understanding-labour":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      );
    case "preparation":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
      );
    case "partner":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      );
    case "planning":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      );
    case "yoga":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="m5 17 3-6 4 2 4-2 3 6"/><path d="M12 13v8"/></svg>
      );
    case "nutrition":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z"/><path d="m2 21 7-7"/></svg>
      );
    case "postpartum":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      );
  }
}

const reviewFactors = [
  {
    icon: "caesarean",
    title: "Your Previous Caesarean",
    description: "Why was the Caesarean needed and were there any complications?",
  },
  {
    icon: "birth-history",
    title: "Your Previous Birth History",
    description: "Any previous vaginal births and your overall obstetric history are relevant to the discussion.",
  },
  {
    icon: "records",
    title: "Your Previous Medical Records",
    description: "Where available, records from your previous delivery can help your obstetrician understand the circumstances and type of previous uterine incision.",
  },
  {
    icon: "pregnancy",
    title: "Your Current Pregnancy",
    description: "Your health, baby’s wellbeing and the progress of this pregnancy are considered.",
  },
  {
    icon: "preferences",
    title: "Your Birth Preferences",
    description: "Your questions, concerns and previous birth experience are part of the conversation too.",
  },
];

const preparationPillars = [
  {
    icon: "antenatal",
    title: "Regular Antenatal Care",
    description: "Monitoring the health and progress of you and your baby.",
  },
  {
    icon: "understanding-labour",
    title: "Understanding Labour",
    description: "Learning how labour may begin and when to contact or come to the hospital.",
  },
  {
    icon: "preparation",
    title: "Birth Preparation",
    description: "Discussing movement, breathing, comfort measures, pain-relief choices and birth preferences.",
  },
  {
    icon: "partner",
    title: "Birth Partner Preparation",
    description: "Helping your partner understand how they can support you.",
  },
  {
    icon: "planning",
    title: "Planning Ahead",
    description: "Understanding both the intended VBAC plan and circumstances that could require that plan to change.",
  },
];

const connectedCareCards = [
  {
    icon: "antenatal",
    title: "Pregnancy & Antenatal Care",
    description: "Ongoing pregnancy monitoring and preparation.",
  },
  {
    icon: "preparation",
    title: "Childbirth Education",
    description: "Understand labour, birth and what to expect.",
  },
  {
    icon: "birth-history",
    title: "Normal Vaginal Delivery",
    description: "Learn about vaginal birth and birth preparation.",
  },
  {
    icon: "yoga",
    title: "Pregnancy Yoga & Movement",
    description: "Pregnancy-appropriate movements where medically suitable.",
  },
  {
    icon: "nutrition",
    title: "Nutrition",
    description: "Guidance throughout pregnancy.",
  },
  {
    icon: "postpartum",
    title: "Postpartum Care",
    description: "Support following childbirth, whether your baby is born vaginally or by Caesarean.",
  },
];

const vbacFaqs = [
  {
    q: "What does VBAC mean?",
    a: "VBAC stands for Vaginal Birth After Caesarean — giving birth vaginally after having previously had a Caesarean birth.",
  },
  {
    q: "Can I have a vaginal delivery after one C-section?",
    a: "For many women, it may be an option, but it depends on your previous Caesarean, medical and obstetric history and current pregnancy. Your obstetrician needs to assess these factors individually.",
  },
  {
    q: "Does one previous C-section mean I need another C-section?",
    a: "Not necessarily. After a previous Caesarean, both VBAC and a planned repeat Caesarean may be options depending on your individual circumstances.",
  },
  {
    q: "When should I discuss VBAC with my doctor?",
    a: "It is helpful to discuss your previous birth and options during pregnancy rather than waiting until labour. RCOG recommends discussing birth options during antenatal care.",
  },
  {
    q: "Will my previous C-section records be useful?",
    a: "Yes. Information about why your previous Caesarean was performed, any complications and the type of incision made in the uterus can be relevant when assessing birth options.",
  },
  {
    q: "Can I have pain relief if I am planning a VBAC?",
    a: "Yes. Pain-relief options can be discussed with your maternity team; RCOG specifically notes that various options, including an epidural, may be used during VBAC labour.",
  },
  {
    q: "What happens if labour does not progress as expected?",
    a: "Your maternity team will monitor you and your baby. If circumstances change, your obstetrician may recommend changing the birth plan, which can include Caesarean delivery when clinically appropriate.",
  },
  {
    q: "Is VBAC the same as normal vaginal delivery?",
    a: "VBAC describes a vaginal birth specifically in someone who has previously had a Caesarean. A vaginal birth without that previous Caesarean history would not be called VBAC.",
  },
];

export function VbacLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const doctor = getTeamMember("santoshi-nandigam");

  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-cream py-14 sm:py-16 md:py-20 border-b border-border/50">
        <Container className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-blush/80 px-4 py-1.5 text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-rose">
                <span>VBAC — VAGINAL BIRTH AFTER CAESAREAN</span>
              </div>

              <h1 className="mt-4 max-w-xl font-display text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-[1.12] text-ink">
                Had a C-Section Before? Let’s Talk About Your Birth Options This Time.
              </h1>

              <div className="mt-5 max-w-xl space-y-3.5 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-muted">
                <p>
                  Having had a Caesarean birth before does not automatically mean that every future birth must happen the same way.
                </p>
                <p>
                  For some women, planning for a vaginal birth after a previous Caesarean may be an option. The right approach depends on your previous birth, your medical history and your current pregnancy.
                </p>
                <p className="font-medium text-ink/90">
                  At BirthWave, the conversation begins by understanding you and your previous birth.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(97,62,55,0.2)] transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700"
                >
                  Book a VBAC Consultation
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 8.8c.3-.7.6-.7 1-.7h.6c.2 0 .4 0 .6.5l.6 1.5c.1.3 0 .5-.1.7l-.5.6c-.1.2-.2.4 0 .7.4.8 1.5 1.9 2.3 2.3.3.2.5.1.7 0l.6-.6c.2-.2.4-.2.7-.1l1.5.7c.4.2.4.4.4.6-.1 1-1.2 1.6-1.9 1.6-1.7 0-4.4-1.5-5.7-4.4-.3-.7-.5-1.4-.5-2 0-.6.2-1 .3-1.2Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[13px] text-muted/90 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                <p>VBAC suitability requires individual medical assessment.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[32px] bg-blush p-3.5 sm:h-[460px] sm:p-4 shadow-[0_12px_40px_rgba(46,36,33,0.06)] border border-border/70">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/birthwave/birthwave-childbirth-workshop-02.png"
                  alt="Birth preparation and VBAC consultation at Birthwave"
                  fill
                  sizes="(min-width: 1280px) 500px, 90vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-md p-3.5 border border-white/40 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose/15 text-rose">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-ink">Obstetrician-Led Assessment</p>
                      <p className="text-[12px] text-muted">Evidence-based planning guided by RCOG &amp; ACOG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. UNDERSTANDING VBAC SECTION */}
      <section id="understanding-vbac" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left: Text Content */}
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-blush/70 px-4 py-1.5 text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-rose">
                  <span>UNDERSTANDING VBAC</span>
                </div>

                <h2 className="mt-4 font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.14] text-ink">
                  What is VBAC?
                </h2>

                <div className="mt-7 space-y-6">
                  <div className="rounded-[24px] border border-border/80 border-l-4 border-l-brown bg-cream/55 p-6 sm:p-7 shadow-2xs">
                    <p className="font-display font-bold text-ink text-[19px] sm:text-[21px] md:text-[23px] leading-snug">
                      VBAC stands for Vaginal Birth After Caesarean.
                    </p>
                    <p className="mt-3 text-[16.5px] sm:text-[18px] text-muted leading-relaxed">
                      It means giving birth vaginally after having had a Caesarean birth in a previous pregnancy.
                    </p>
                  </div>

                  <p className="text-[17px] sm:text-[18.5px] leading-[1.7] text-ink/85">
                    Whether VBAC is an appropriate option for you cannot be decided simply because you have had “one C-section.” Your obstetrician needs to consider your previous Caesarean, medical and obstetric history, and how your current pregnancy is progressing.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Featured Image & Floating Trust Pill */}
            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-lg">
                {/* Soft ambient gradient behind the card */}
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-rose/25 via-blush to-sky/30 blur-xl opacity-60" />

                <div className="relative overflow-hidden rounded-[30px] border border-border/80 bg-blush p-3 sm:p-4 shadow-[0_16px_44px_rgba(46,36,33,0.08)]">
                  <div className="relative h-[360px] sm:h-[430px] w-full overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/doctorwithchild.webp"
                      alt="Doctor with newborn child at Birthwave"
                      fill
                      sizes="(min-width: 1024px) 500px, 90vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Floating Glassmorphic Info Badge */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white/60 shadow-md">
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-brown">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <path d="m9 12 2 2 4-4"/>
                          </svg>
                        </span>
                        <div>
                          <p className="text-[13.5px] font-bold text-ink">Evidence-Based Obstetric Care</p>
                          <p className="text-[12px] text-muted">Aligned with international RCOG &amp; ACOG guidelines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. YOUR FIRST CONVERSATION */}
      <section id="first-conversation" className="scroll-mt-[100px] bg-cream py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                YOUR FIRST CONVERSATION
              </p>
              <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                “Can I Have a Vaginal Birth After My Previous C-Section?”
              </h2>
              <p className="mt-3.5 text-[16px] sm:text-[17px] font-medium text-ink/90">
                This is one of the most important questions to discuss with your obstetrician early in pregnancy.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Your consultation may include reviewing:
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewFactors.map((factor, index) => (
              <Reveal
                key={factor.title}
                delay={index * 60}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-cream/80 shadow-[0_2px_6px_rgba(46,36,33,0.03)] transition-colors group-hover:border-brown/30 group-hover:bg-blush">
                    <SectionIcon type={factor.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] sm:text-[18px] font-bold leading-snug text-ink transition-colors group-hover:text-brown">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {factor.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* RCOG Callout Note with straight line */}
          <Reveal delay={reviewFactors.length * 60} className="mt-6 sm:mt-8">
            <div className="rounded-2xl border border-border/80 border-l-4 border-l-rose bg-blush/50 p-5 sm:px-6 sm:py-4.5 shadow-2xs">
              <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-ink/85">
                These are among the factors RCOG recommends considering when discussing birth after a previous Caesarean.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. INDIVIDUAL ASSESSMENT */}
      <section id="individual-assessment" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <div>
                <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                  INDIVIDUAL ASSESSMENT
                </p>
                <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                  VBAC Is an Individual Decision
                </h2>
                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
                  <p>
                    There isn’t one answer that applies to every woman who has previously had a Caesarean.
                  </p>
                  <p>
                    For many women after one previous Caesarean, VBAC can be an option, while particular previous uterine incisions, previous uterine rupture or certain complications in the current pregnancy may make a planned Caesarean more appropriate.
                  </p>
                  <p className="rounded-xl border-l-4 border-brown bg-cream p-4 font-medium text-ink">
                    That is why BirthWave’s approach begins with an individual obstetric assessment rather than assuming the method of delivery in advance.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-lg">
                {/* Soft ambient gradient behind the card */}
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-rose/25 via-blush to-sky/30 blur-xl opacity-60" />

                <div className="relative overflow-hidden rounded-[30px] border border-border/80 bg-blush p-3 sm:p-4 shadow-[0_16px_44px_rgba(46,36,33,0.08)]">
                  <div className="relative h-[360px] sm:h-[430px] w-full overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/birthwave/birthwave-antenatal-movement-coaching.png"
                      alt="Individual VBAC assessment and consultation at Birthwave"
                      fill
                      sizes="(min-width: 1024px) 500px, 90vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Floating Glassmorphic Info Badge */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white/60 shadow-md">
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-brown">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <path d="m9 12 2 2 4-4"/>
                          </svg>
                        </span>
                        <div>
                          <p className="text-[13.5px] font-bold text-ink">Personalised Clinical Assessment</p>
                          <p className="text-[12px] text-muted">Individualised care tailored to your unique history</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. PREPARING DURING PREGNANCY */}
      <section id="preparation" className="scroll-mt-[100px] bg-cream py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                PREPARING DURING PREGNANCY
              </p>
              <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                If VBAC Is an Option, Preparation Begins Before Labour
              </h2>
              <p className="mt-3.5 text-[16px] leading-relaxed text-muted">
                Once you and your obstetrician have discussed VBAC, preparation can continue throughout pregnancy.
              </p>
              <p className="mt-1 text-[14.5px] font-semibold text-brown uppercase tracking-wider">
                This may include:
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {preparationPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 60}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-cream/80 shadow-[0_2px_6px_rgba(46,36,33,0.03)] transition-colors group-hover:border-brown/30 group-hover:bg-blush">
                    <SectionIcon type={pillar.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] sm:text-[18px] font-bold leading-snug text-ink transition-colors group-hover:text-brown">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. DURING LABOUR */}
      <section id="labour-safety" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <div>
                <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                  DURING LABOUR
                </p>
                <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                  What Happens During Labour When Planning VBAC?
                </h2>
                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
                  <p>
                    If you plan to attempt a vaginal birth after Caesarean, your maternity team will discuss when to come to the hospital and how you and your baby will be monitored during labour.
                  </p>
                  <p>
                    RCOG advises hospital birth for planned VBAC where an emergency Caesarean can be performed if necessary, and recommends continuous monitoring of the baby’s heartbeat once regular contractions begin. Pain-relief options, including epidural analgesia, can still be considered.
                  </p>
                  <p className="rounded-xl border-l-4 border-brown bg-cream p-4 font-medium text-ink">
                    Your care team will continue assessing how labour is progressing and how you and your baby are doing.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-lg">
                {/* Soft ambient gradient behind the card */}
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-rose/25 via-blush to-sky/30 blur-xl opacity-60" />

                <div className="relative overflow-hidden rounded-[30px] border border-border/80 bg-blush p-3 sm:p-4 shadow-[0_16px_44px_rgba(46,36,33,0.08)]">
                  <div className="relative h-[360px] sm:h-[430px] w-full overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/ot.webp"
                      alt="Hospital labour and emergency obstetric surgical facility at Birthwave"
                      fill
                      sizes="(min-width: 1024px) 500px, 90vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 7. IMPORTANT PATIENT INFORMATION */}
      <section id="patient-information" className="scroll-mt-[100px] bg-cream py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3.5 py-1.5 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-rose">
                  <span>IMPORTANT PATIENT INFORMATION</span>
                </div>
                <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                  What if My Birth Plan Needs to Change?
                </h2>
                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
                  <p>
                    Planning a VBAC does not guarantee that the baby will ultimately be born vaginally.
                  </p>
                  <p>
                    Sometimes labour does not progress as expected or concerns develop about the mother or baby. In those circumstances, the obstetric team may recommend changing the plan, including proceeding to a Caesarean birth when appropriate. ACOG similarly notes that circumstances arising during labour can alter the balance of benefits and risks and therefore change the delivery plan.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-[28px] border border-rose/30 bg-blush/60 p-6 sm:p-8 md:p-9 shadow-[0_6px_24px_rgba(46,36,33,0.03)]">
                <div className="rounded-2xl bg-white p-5 sm:p-6 border border-border/80 shadow-sm">
                  <p className="text-[15px] sm:text-[16px] font-semibold leading-relaxed text-brown">
                    “Changing the birth plan is not a failure. It is part of responding to the circumstances of your labour and making decisions with the wellbeing of you and your baby in mind.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8. VIDEO EXPERIENCE */}
      <div id="video" className="scroll-mt-[100px]">
        <VideoExperience
          eyebrow="Inside Birthwave"
          heading="Care designed around the whole journey."
          body="See how Birthwave brings pregnancy, birth, recovery and newborn care together in one connected experience."
        />
      </div>

      {/* 9. DOCTOR SECTION */}
      <section id="doctor" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
          <Reveal>
            <div className="relative mx-auto h-[380px] w-full max-w-sm xl:h-[440px]">
              {doctor && <TeamAvatar member={doctor} className="h-full w-full" />}
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(46,36,33,0.08)] border border-border/60">
                <p className="font-display text-[15px] font-bold text-ink">Dr. Santoshi Nandigam</p>
                <p className="text-[13px] text-muted">Obstetrician &amp; Gynaecologist · VBAC Specialist</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                PERSONALISED OBSTETRIC CARE
              </p>
              <h2 className="mt-3 font-display text-[30px] sm:text-[36px] font-bold leading-tight text-ink">
                Start With Your Previous Birth Story
              </h2>
              <div className="mt-5 space-y-3.5 text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted">
                <p>
                  Your previous Caesarean is part of your medical history, but it does not by itself determine how your next birth must happen.
                </p>
                <p>
                  At your consultation, Dr. Santoshi Nandigam can review your previous birth history, discuss your current pregnancy and help you understand the birth options that may be appropriate for you.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(97,62,55,0.2)] transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700"
                >
                  Book a VBAC Consultation
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 10. CONNECTED CARE */}
      <section id="connected-care" className="scroll-mt-[100px] bg-cream py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                CONNECTED CARE
              </p>
              <h2 className="mt-3 font-display text-[28px] sm:text-[34px] md:text-[38px] font-bold leading-tight text-ink">
                Support Through Pregnancy, Birth &amp; Recovery
              </h2>
              <p className="mt-3.5 text-[16px] leading-relaxed text-muted">
                VBAC preparation is supported by comprehensive clinical and allied care at every stage.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {connectedCareCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 60}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-cream/80 shadow-[0_2px_6px_rgba(46,36,33,0.03)] transition-colors group-hover:border-brown/30 group-hover:bg-blush">
                    <SectionIcon type={card.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] sm:text-[18px] font-bold leading-snug text-ink transition-colors group-hover:text-brown">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. VBAC FAQ */}
      <section id="faqs" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
              VBAC FAQ
            </p>
            <h2 className="mt-3 font-display text-[30px] sm:text-[36px] font-bold leading-tight text-ink">
              Frequently Asked Questions About VBAC
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3">
            {vbacFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal
                  key={faq.q}
                  delay={i * 40}
                  className="overflow-hidden rounded-2xl border border-border/80 bg-cream/35 transition-colors hover:border-brown/40"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`vbac-faq-${i}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex min-h-[62px] w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-ink"
                  >
                    <span className="text-[16px] sm:text-[17px]">{faq.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush text-rose transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1v14M1 8h14"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`vbac-faq-${i}`}
                    className={`grid overflow-hidden text-[15px] leading-relaxed text-muted transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className={`min-h-0 overflow-hidden px-6 ${isOpen ? "pb-5" : "pb-0"}`}>
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 12. FINAL CTA */}
      <section className="bg-blush py-14 sm:py-16 border-b border-border/60">
        <Container className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
                TAKE THE FIRST STEP
              </p>
              <h2 className="mt-2 font-display text-[26px] sm:text-[32px] font-bold leading-tight text-ink">
                Had a Previous C-Section and Thinking About Your Next Birth?
              </h2>
              <div className="mt-3 space-y-1.5 text-[15.5px] leading-relaxed text-muted">
                <p>You don’t need to decide based on general information online.</p>
                <p>Bring your previous delivery records, if available, and speak with your obstetric care team about your individual pregnancy and birth options.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex shrink-0 flex-wrap items-center gap-3.5">
              <a
                href="#contact-form"
                className="rounded-full bg-brown px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(97,62,55,0.2)] transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700"
              >
                Book a VBAC Consultation
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98]"
              >
                Chat on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98]"
              >
                Call: {site.phone}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 13. ENQUIRY / BOOKING FORM */}
      <section id="contact-form" className="scroll-mt-[100px] bg-cream py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <p className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] text-rose">
              APPOINTMENT BOOKING
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[36px]">
              Book Your VBAC Consultation
            </h2>
            <p className="mt-2 text-[16px] text-muted">
              Speak with Dr. Santoshi Nandigam to review your previous birth history and plan your pregnancy options.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <Suspense fallback={<div className="h-64 rounded-2xl bg-white/50 animate-pulse" />}>
              <EnquiryForm defaultService="vbac" />
            </Suspense>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
