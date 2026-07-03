import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats";
import { Services } from "@/components/services";
import { Industries } from "@/components/industries";
import { WhyUs } from "@/components/why-us";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Valueway HRC | Next-Gen Talent Sourcing & HR Placements",
  description: "Futuristic HR consultancy, executive search, and cross-border staffing integrations for technology, finance, and healthcare industries.",
  openGraph: {
    title: "Valueway HRC | Next-Gen Talent Sourcing & HR Placements",
    description: "Futuristic HR consultancy, executive search, and cross-border staffing integrations for technology, finance, and healthcare industries.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Sticky Top Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Futuristic Full-Height Hero Section */}
        <Hero />

        {/* Scroll-Triggered Animated Stats Bar */}
        <StatsBar />

        {/* Dynamic Services Grid Section */}
        <Services />

        {/* Dynamic Industries Grid Section */}
        <Industries />

        {/* Why Choose Valueway Section */}
        <WhyUs />
      </main>

      {/* Dynamic Footer */}
      <Footer />
    </div>
  );
}
