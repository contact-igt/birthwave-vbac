import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("vbac")!;

export const metadata: Metadata = {
  title: "VBAC — Vaginal Birth After Caesarean in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Individual assessment, honest discussions and birth planning for patients considering VBAC with Dr. Santoshi Nandigam at The Birth Wave, Nungambakkam, Chennai.",
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
      "Individual assessment and honest planning for patients considering VBAC with Dr. Santoshi Nandigam.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <ServiceLandingPage service={service} />
      <Footer />
    </>
  );
}
