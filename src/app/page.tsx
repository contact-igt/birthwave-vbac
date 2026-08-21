import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VbacLandingPage } from "@/components/vbac/VbacLandingPage";

export const metadata: Metadata = {
  title: "VBAC — Vaginal Birth After Caesarean in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Had a C-section before? Individual obstetric assessment, honest birth planning and preparation for VBAC with Dr. Santoshi Nandigam at The Birth Wave, Nungambakkam, Chennai.",
  keywords: [
    "VBAC Chennai",
    "Vaginal Birth After Caesarean",
    "Dr. Santoshi Nandigam",
    "Obstetrician Nungambakkam",
    "Previous C-Section Normal Delivery",
    "VBAC Consultation Chennai",
  ],
  openGraph: {
    title: "VBAC — Vaginal Birth After Caesarean – The Birth Wave",
    description:
      "Had a C-section before? Individual obstetric assessment, honest birth planning and preparation for VBAC with Dr. Santoshi Nandigam.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <VbacLandingPage />
      <Footer />
    </>
  );
}
