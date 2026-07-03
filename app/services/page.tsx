import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { H1, Body, Eyebrow } from "@/components/ui/typography";
import { Search, Users, Briefcase, GraduationCap, TrendingUp, Coins, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Valueway HRC",
  description: "Executive search, permanent staffing, contract staffing, campus hiring, HR consulting, and payroll solutions by Valueway HRC.",
};

const services = [
  {
    slug: "executive-search",
    title: "Executive Search",
    description: "C-suite and leadership talent scouting.",
    details: "Locating executive leaders who drive digital acceleration and organizational excellence.",
    icon: Search,
  },
  {
    slug: "permanent-staffing",
    title: "Permanent Staffing",
    description: "End-to-end recruitment for vital roles.",
    details: "High-quality, curated hiring pipeline aligning skilled professionals with company culture.",
    icon: Users,
  },
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    description: "Agile, scalable contractor pools.",
    details: "Flexible workforce options to adapt rapidly to changing market and project demands.",
    icon: Briefcase,
  },
  {
    slug: "campus-hiring",
    title: "Campus Hiring",
    description: "Early talent programs and recruitment.",
    details: "Connecting industry leaders with fresh minds from top universities across India.",
    icon: GraduationCap,
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    description: "Blueprint organizational redesigns.",
    details: "Performance engineering, culture restructuring, and strategic capacity mapping.",
    icon: TrendingUp,
  },
  {
    slug: "payroll-solutions",
    title: "Payroll Solutions",
    description: "Compliant automated financial operations.",
    details: "End-to-end salary processing, benefits management, and multi-country tax compliance.",
    icon: Coins,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] animate-blob-1" />
          <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-purple-950/5 blur-[130px] animate-blob-2" />
        </div>

        <Section padding="sm" direction="none" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Capabilities</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Human Capital Services</H1>
            <Body className="text-neutral-400">
              Engineered to scale. Our core staffing and consultancy products leverage data intelligence
              to deliver premium talent outcomes across India.
            </Body>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full group">
                  <Card glow className="h-full flex flex-col justify-between hover:border-accent/50 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center mb-4 text-accent transition-colors group-hover:bg-accent group-hover:text-background group-hover:border-accent duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {service.details}
                    </CardContent>
                    <CardFooter className="justify-between">
                      <span className="text-xs text-neutral-500 uppercase tracking-widest">
                        Explore Service
                      </span>
                      <span className="text-accent flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
