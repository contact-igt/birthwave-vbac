"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/page/PageHero";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { TeamAvatar } from "@/components/TeamAvatar";
import { VideoExperience } from "@/components/home/VideoExperience";
import { site } from "@/lib/site";
import { getTeamMember } from "@/lib/team";

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-coral"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SectionIcon({ type }: { type: string }) {
  switch (type) {
    case "labour":
    case "pulse":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      );
    case "planning":
    case "document":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      );
    case "breathing":
    case "wind":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
      );
    case "movement":
    case "yoga":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="m5 17 3-6 4 2 4-2 3 6"/><path d="M12 13v8"/></svg>
      );
    case "partner":
    case "heart":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      );
    case "education":
    case "book":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
      );
    case "pelvic":
    case "shield":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      );
    case "nutrition":
    case "leaf":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z"/><path d="m2 21 7-7"/></svg>
      );
    case "emotional":
    case "sun":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      );
    case "lactation":
    case "drop":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      );
    case "medical":
    case "stethoscope":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"/><path d="M9 12.5v3.5a3 3 0 0 0 6 0v-2"/><circle cx="18" cy="10" r="3"/></svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      );
  }
}

const faqsData = [
  {
    q: "What is natural birth?",
    a: "Natural birth generally refers to an approach to labour and vaginal birth that aims to allow labour to progress naturally with minimal medical intervention when clinically appropriate.\n\nWomen may prepare using breathing and relaxation techniques, movement, comfortable positions, childbirth education and support from their birth partner and care team.\n\nYour individual pregnancy, health, preferences and clinical circumstances are considered when discussing your birth options.",
  },
  {
    q: "What is the difference between natural birth and normal vaginal delivery?",
    a: "Both can involve giving birth vaginally.\n\nNatural birth usually refers to an approach that aims for minimal medical intervention where appropriate, with greater emphasis on preparation, movement, breathing, relaxation and other supportive methods during labour.\n\nNormal vaginal delivery refers more broadly to the baby being delivered vaginally. Pain-relief options and other appropriate obstetric interventions may also be used depending on the woman’s preferences and clinical needs.\n\nYour obstetrician can explain which options are relevant to your individual pregnancy.",
  },
  {
    q: "When should I start preparing for natural birth?",
    a: "Birth preparation can begin during pregnancy rather than waiting until labour starts.\n\nAntenatal preparation gives you time to understand the stages of labour, discuss your birth preferences, learn breathing and relaxation techniques, explore movement and positioning, prepare your birth partner and ask questions about childbirth.\n\nThe timing and type of preparation can be personalized according to your stage of pregnancy and individual needs.",
  },
  {
    q: "Can I use pain relief if I originally planned for a natural birth?",
    a: "Yes. Your preferences around pain relief can be discussed during pregnancy and again during labour.\n\nThere are both non-medical and medical options for managing labour pain. What you choose can depend on your preferences, how labour progresses and your individual clinical circumstances.\n\nChoosing pain relief does not take away from the importance of being informed, supported and involved in decisions about your birth.",
  },
  {
    q: "Can I have a natural birth after a previous Caesarean?",
    a: "Some women who have previously had a Caesarean may be able to consider vaginal birth in a later pregnancy. This is called VBAC — Vaginal Birth After Caesarean.\n\nIf you have had a previous Caesarean, your obstetrician can review your previous birth history and current pregnancy and discuss the birth options that may be appropriate for you.",
    linkHref: "/vbac",
    linkText: "Learn More About VBAC",
  },
  {
    q: "Does Birthwave provide yoga, nutrition and birth preparation along with pregnancy care?",
    a: "Birthwave’s approach brings medical pregnancy care together with supportive services around pregnancy, childbirth and recovery.\n\nDepending on your individual needs and the services appropriate for your pregnancy, this may include pregnancy yoga and movement, nutrition guidance, childbirth education, birth-partner preparation, pelvic health support, lactation support and postpartum recovery.\n\nThis allows different aspects of pregnancy and birth preparation to be connected within your overall care journey.",
  },
  {
    q: "What does holistic natural birth preparation mean?",
    a: "Holistic preparation means looking beyond the day of delivery and considering the different aspects that can influence a woman’s experience of pregnancy and childbirth.\n\nAt Birthwave, this may include medical pregnancy care, childbirth education, physical preparation, movement, nutrition, emotional wellbeing, birth-partner involvement and postpartum preparation based on each woman’s individual needs.",
  },
];

export function BirthDeliveryCarePage() {
  const santoshi = getTeamMember("santoshi-nandigam")!;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main>
      {/* SECTION 1: Page Hero */}
      <PageHero
        eyebrow="NATURAL BIRTH CARE IN CHENNAI"
        heading="Prepare for a natural birth with confidence, knowledge and the right support."
        intro="At Birthwave, natural birth preparation begins during pregnancy. We help you understand labour, prepare your body and mind, explore your birth preferences, and approach childbirth with personalised obstetric care and holistic support."
        accent="coral"
        image={{
          src: "/images/birthwave/birthwave-childbirth-workshop-01.png",
          alt: "Birth preparation workshop at Birthwave",
        }}
        illustration="birth"
      />

      {/* SECTION 2: Understanding Natural Birth */}
      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <Container className="max-w-3xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
            Understanding Natural Birth
          </p>
          <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
            What is Natural Birth?
          </h2>
          <div className="mt-5 space-y-4 text-[16px] leading-[1.7] text-muted">
            <p>
              Natural birth is a way of giving birth vaginally while allowing labour to progress as naturally as possible, with less medical intervention when it is safe and appropriate.
            </p>
            <p>
              During labour, a mother may use breathing and relaxation techniques, walking or changing positions, gentle movement, massage, and physical and emotional support to help her stay comfortable and cope with contractions. These approaches are recognised in childbirth guidance as options that can support women during labour.
            </p>
            <p>
              At Birthwave, preparation for natural birth begins during pregnancy. We help you understand what happens during labour, practise ways to stay calm and comfortable, prepare your body and mind, and discuss your birth preferences with your doctor.
            </p>
            <p className="font-medium text-ink/85">
              Throughout your pregnancy and birth, your care is personalised around you, your baby and how your pregnancy and labour progress.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 3: CLEARING UP A COMMON QUESTION */}
      <section className="bg-cream/40 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Clearing Up A Common Question
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Natural birth and normal vaginal delivery — are they the same?
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              Both may result in a baby being born vaginally, but the terms are often used differently when discussing the approach to labour.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Card 1: Natural Birth */}
            <Reveal className="flex flex-col rounded-[26px] border border-border/90 bg-white p-7 sm:p-8 shadow-[0_4px_24px_rgba(46,36,33,0.04)]">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blush px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-rose">
                Focused Preparation
              </span>
              <h3 className="mt-4 font-display text-[22px] font-bold text-ink">
                Natural Birth
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Natural birth usually describes an approach where a woman wishes to experience labour with minimal medical intervention when appropriate. Preparation and support may include:
              </p>
              <ul className="mt-5 space-y-3 border-t border-border/60 pt-5">
                <li className="flex items-start gap-3 text-[14.5px] text-ink/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    ✓
                  </span>
                  <div>
                    <strong className="font-semibold text-ink">Breathing &amp; relaxation:</strong> Techniques to help you stay calm and work through contractions.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-[14.5px] text-ink/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    ✓
                  </span>
                  <div>
                    <strong className="font-semibold text-ink">Movement &amp; positioning:</strong> Using comfortable positions and movement during labour where appropriate.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-[14.5px] text-ink/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    ✓
                  </span>
                  <div>
                    <strong className="font-semibold text-ink">Non-medical comfort measures:</strong> Options such as massage and other supportive techniques may be considered based on individual preference and availability.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-[14.5px] text-ink/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    ✓
                  </span>
                  <div>
                    <strong className="font-semibold text-ink">Continuous support:</strong> Emotional and practical support from the care team and birth partner.
                  </div>
                </li>
              </ul>
            </Reveal>

            {/* Card 2: Normal Vaginal Delivery */}
            <Reveal delay={80} className="flex flex-col rounded-[26px] border border-border/90 bg-white p-7 sm:p-8 shadow-[0_4px_24px_rgba(46,36,33,0.04)]">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-brown">
                Clinical Overview
              </span>
              <h3 className="mt-4 font-display text-[22px] font-bold text-ink">
                Normal Vaginal Delivery
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Normal vaginal delivery refers more broadly to giving birth vaginally. Depending on the individual situation and the woman’s preferences, pain-relief options or other appropriate obstetric interventions may form part of the labour and delivery care.
              </p>
              <div className="mt-6 rounded-2xl border border-border/70 bg-cream/40 p-5">
                <p className="text-[14px] leading-relaxed text-ink/80">
                  Whether labour progresses naturally or requires supportive pain relief or medical assistance, the focus is always on ensuring the safety and comfort of both mother and baby.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 rounded-2xl border border-border/80 bg-white p-6 sm:p-7 shadow-sm">
            <h4 className="font-display text-[17px] font-bold text-ink">
              The right birth approach is individual to every woman.
            </h4>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
              Your obstetrician can help you understand your options based on your pregnancy, health, preferences and clinical circumstances.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 4: THE BIRTHWAVE APPROACH */}
      <section className="bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              The Birthwave Approach
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Natural birth preparation starts before the day of delivery.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              Birth preparation is not only about what happens once labour begins. At Birthwave, conversations about birth can begin during pregnancy, giving you time to understand labour, discuss your preferences, prepare physically and emotionally, and involve the person who will support you during birth.
            </p>
            <h3 className="mt-6 font-display text-[18px] font-bold text-ink">
              Your preparation may include
            </h3>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understanding Labour",
                desc: "Learn about the stages of labour, contractions, signs that labour may be beginning and when to contact your care team.",
                icon: "labour",
              },
              {
                title: "Birth Planning",
                desc: "Discuss your preferences and understand the choices that may be available during labour and birth.",
                icon: "planning",
              },
              {
                title: "Breathing & Relaxation",
                desc: "Learn practical breathing and relaxation techniques that may help you cope with labour.",
                icon: "breathing",
              },
              {
                title: "Movement & Positioning",
                desc: "Understand comfortable movement and positions that may be used during labour based on your individual circumstances.",
                icon: "movement",
              },
              {
                title: "Birth Partner Preparation",
                desc: "Help your partner understand labour and how they can provide practical and emotional support.",
                icon: "partner",
              },
              {
                title: "Childbirth Education",
                desc: "Prepare for what to expect during labour, delivery and the early period after birth.",
                icon: "education",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 50}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-cream/35 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(46,36,33,0.06)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-colors group-hover:bg-blush">
                    <SectionIcon type={item.icon} />
                  </span>
                  <h4 className="mt-4 font-display text-[17px] font-bold text-ink transition-colors group-hover:text-brown">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] shadow-[0_4px_16px_rgba(97,62,55,0.2)]"
            >
              Start Your Birth Preparation &rarr;
            </a>
          </div>
        </Container>
      </section>

      {/* SECTION 5: PREPARING YOUR BODY & MIND */}
      <section className="bg-cream/45 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Preparing Your Body &amp; Mind
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Preparing for natural birth during pregnancy
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              Preparation can begin well before your due date. Rather than approaching childbirth as something to think about only during the final weeks, Birthwave brings together pregnancy care, education, movement and supportive wellness practices throughout your journey.
            </p>
            <p className="mt-4 text-[14.5px] font-semibold text-ink/80">
              Depending on your individual pregnancy and care plan, this may include:
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pregnancy Yoga & Movement",
                desc: "Pregnancy-appropriate movement and guided practices.",
                icon: "yoga",
              },
              {
                title: "Pelvic Health",
                desc: "Support for pelvic health during pregnancy and preparation for recovery after childbirth.",
                icon: "pelvic",
              },
              {
                title: "Nutrition Guidance",
                desc: "Nutritional support appropriate to the different stages of pregnancy.",
                icon: "nutrition",
              },
              {
                title: "Childbirth Education",
                desc: "Practical knowledge about labour, birth and early motherhood.",
                icon: "education",
              },
              {
                title: "Emotional Wellbeing",
                desc: "A supportive space to discuss concerns, expectations and preparation for childbirth.",
                icon: "emotional",
              },
              {
                title: "Lactation Preparation",
                desc: "Guidance to help you prepare for breastfeeding and the early postpartum period.",
                icon: "lactation",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 50}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-cream/70 shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-colors group-hover:bg-blush">
                    <SectionIcon type={item.icon} />
                  </span>
                  <h4 className="mt-4 font-display text-[17px] font-bold text-ink transition-colors group-hover:text-brown">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: MEET YOUR DOCTOR */}
      <section className="bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Doctor-Led, Women-Centred Care
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Meet Dr. Santoshi Nandigam
            </h2>
            <p className="mt-1 text-[15px] font-semibold text-muted">
              Founder, Birthwave | Obstetrician &amp; Gynaecologist
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-border/80 bg-cream/35 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
              <div className="relative mx-auto h-[280px] w-[240px] shrink-0 overflow-hidden rounded-[24px] border border-border shadow-[0_8px_24px_rgba(46,36,33,0.08)]">
                <TeamAvatar member={santoshi} focal="top" className="h-full w-full" />
              </div>
              <div className="space-y-4 text-[16px] leading-[1.7] text-ink/85">
                <p>
                  At Birthwave, Dr. Santoshi works with women throughout pregnancy to understand their health, concerns, preferences and expectations around childbirth.
                </p>
                <p>
                  For women interested in natural birth, discussions can begin during antenatal care — helping you understand labour, explore your birth preferences and prepare for childbirth with medical guidance alongside Birthwave’s supportive approach to pregnancy and wellness.
                </p>
                <p className="font-medium text-ink">
                  The focus is on informed choices, individualised care and clear communication throughout pregnancy and birth.
                </p>
                <div className="pt-3">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] shadow-[0_4px_16px_rgba(97,62,55,0.2)]"
                  >
                    Book a Consultation with Dr. Santoshi &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: IS NATURAL BIRTH SOMETHING I CAN CONSIDER? */}
      <section className="bg-cream/40 py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-3xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
            Suitability &amp; Candidacy
          </p>
          <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
            Your natural birth journey starts with understanding your pregnancy.
          </h2>
          <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
            You may wish to discuss natural birth if you:
          </p>

          <ul className="mt-7 space-y-3.5">
            {[
              "Are pregnant and want to understand your birth options",
              "Are interested in preparing for a vaginal birth",
              "Would like to explore a lower-intervention approach to labour where appropriate",
              "Want to learn breathing, movement and relaxation techniques for labour",
              "Would like your birth partner to be involved in preparation",
              "Want childbirth education as part of your pregnancy journey",
              "Simply want to understand whether natural birth may be suitable for your individual pregnancy",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
              >
                <CheckIcon />
                <span className="text-[15px] font-medium leading-snug text-ink/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border/80 bg-blush/60 p-6 sm:p-7">
            <h4 className="font-display text-[17px] font-bold text-ink">
              You don’t need to have every decision made before your consultation.
            </h4>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              Start with a conversation about the birth experience you are hoping for.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 8: SUPPORT DURING LABOUR */}
      <section className="bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Support During Labour
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              When preparation meets the day of birth
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              The techniques and information you learn during pregnancy can help you feel more familiar with the experience of labour. Depending on your preferences and clinical circumstances, your labour experience may incorporate:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Breathing & Relaxation",
                desc: "Use techniques practised during pregnancy to help you remain focused and manage labour.",
                icon: "breathing",
              },
              {
                title: "Movement & Comfortable Positions",
                desc: "Move and explore comfortable positions during labour when appropriate.",
                icon: "movement",
              },
              {
                title: "Birth Partner Involvement",
                desc: "Your partner can provide reassurance, encouragement and practical support using what you have prepared together.",
                icon: "partner",
              },
              {
                title: "Individualised Obstetric Care",
                desc: "Your care team follows the progress of labour and the wellbeing of you and your baby, with care decisions based on your individual clinical needs.",
                icon: "medical",
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 60}
                className="group flex flex-col justify-between rounded-[24px] border border-border/80 bg-cream/35 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(46,36,33,0.06)]"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-white shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-colors group-hover:bg-blush">
                    <SectionIcon type={card.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-bold text-ink transition-colors group-hover:text-brown">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9: HOLISTIC CARE AROUND CHILDBIRTH */}
      <section className="bg-cream/45 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              More Than Delivery
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Care that connects pregnancy, birth and recovery
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              Birthwave’s approach extends beyond the day your baby is born. Your pregnancy and birth journey can connect with supportive care across:
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pregnancy & Antenatal Care",
                desc: "Regular pregnancy care and preparation throughout each stage.",
                href: "/pregnancy-antenatal-care",
                icon: "medical",
              },
              {
                title: "Childbirth Education",
                desc: "Understanding labour and preparing for childbirth.",
                href: "/birth-preparation",
                icon: "education",
              },
              {
                title: "Pregnancy Yoga & Movement",
                desc: "Pregnancy-appropriate movement and guided practices.",
                icon: "yoga",
              },
              {
                title: "Pelvic Health",
                desc: "Support through pregnancy and postpartum recovery.",
                href: "/postpartum-care",
                icon: "pelvic",
              },
              {
                title: "Nutrition",
                desc: "Guidance through pregnancy and after birth.",
                href: "/nutrition-emotional-wellbeing",
                icon: "nutrition",
              },
              {
                title: "Lactation Support",
                desc: "Preparation and guidance around breastfeeding.",
                href: "/lactation",
                icon: "lactation",
              },
              {
                title: "Postpartum Recovery",
                desc: "Support for physical recovery and wellbeing after childbirth.",
                href: "/postpartum-care",
                icon: "shield",
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 50}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-cream/70 shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-colors group-hover:bg-blush">
                    <SectionIcon type={card.icon} />
                  </span>
                  <h4 className="mt-4 font-display text-[17px] font-bold text-ink transition-colors group-hover:text-brown">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {card.desc}
                  </p>
                </div>
                {card.href ? (
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-link transition-colors group-hover:text-brown"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VIDEO EXPERIENCE */}
      <VideoExperience />

      {/* SECTION 10: FAQs */}
      <section id="faq" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-3xl">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Frequently Asked Questions About Natural Birth
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3.5">
            {faqsData.map((item, i) => {
              const open = openFaqIndex === i;
              return (
                <Reveal
                  key={item.q}
                  delay={i * 50}
                  className="overflow-hidden rounded-2xl border border-border bg-cream/30 transition-colors hover:border-brown/40"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaqIndex(open ? null : i)}
                    className="flex min-h-[62px] w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="text-[16px] font-semibold text-ink">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush text-rose transition-transform duration-200 ${
                        open ? "rotate-45" : ""
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
                    className={`grid overflow-hidden text-[15px] leading-relaxed text-muted transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden px-6 pb-5 space-y-3 whitespace-pre-line text-ink/80">
                      <p>{item.a}</p>
                      {item.linkHref && (
                        <div className="pt-2">
                          <Link
                            href={item.linkHref}
                            className="inline-flex items-center gap-1.5 font-semibold text-link hover:text-brown transition-colors"
                          >
                            {item.linkText} <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="bg-blush py-14 md:py-18">
        <Container className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
          <div className="max-w-xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Your Birth. Your Questions. Your Care.
            </p>
            <h2 className="mt-2 font-display text-[28px] sm:text-[32px] font-bold leading-tight text-ink">
              Considering natural birth? Start with a conversation.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Whether you’re early in pregnancy or already thinking about how you would like to give birth, you can begin by understanding your pregnancy, discussing your preferences and exploring the preparation and support available to you.
            </p>
            <p className="mt-2 font-semibold text-ink/85 text-[15px]">
              Meet Dr. Santoshi and discuss your birth preferences.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3.5">
            <a
              href="#contact-form"
              className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700 shadow-[0_4px_16px_rgba(97,62,55,0.2)]"
            >
              Book Your Consultation
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
        </Container>
      </section>

      {/* ENQUIRY SECTION */}
      <section id="contact-form" className="scroll-mt-[100px] bg-white py-16 md:py-20 pb-24 md:pb-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[26px] font-bold leading-tight text-ink">
            Send an enquiry
          </h2>
          <p className="mt-2 text-[15px] text-muted">
            Prefer to write ahead? Fill this in and continue on WhatsApp.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <EnquiryForm defaultService="natural-birth" />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
