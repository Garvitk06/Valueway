"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase, Phone, CheckCircle2, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H1, H2, H3, Body, Eyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface HireTalentForm {
  // Step 1: Company Profile
  companyName: string;
  companyWebsite: string;
  companySize: string;
  
  // Step 2: Role Details
  roleTitle: string;
  roleIndustry: string;
  roleSeniority: string;
  roleUrgency: string;
  openingsCount: number;

  // Step 3: Contact Preferences
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactMethod: "email" | "phone";
}

const steps = [
  { id: 1, title: "Company", icon: Building2 },
  { id: 2, title: "Requirement", icon: Briefcase },
  { id: 3, title: "Contact", icon: Phone },
];

export default function HireTalentPage() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HireTalentForm>({
    defaultValues: {
      openingsCount: 1,
      contactMethod: "email",
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof HireTalentForm> = [];
    if (step === 1) {
      fieldsToValidate = ["companyName", "companyWebsite", "companySize"];
    } else if (step === 2) {
      fieldsToValidate = ["roleTitle", "roleIndustry", "roleSeniority", "roleUrgency", "openingsCount"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: HireTalentForm) => {
    // Validate final step
    const isValid = await trigger(["contactName", "contactEmail", "contactPhone", "contactMethod"]);
    if (!isValid) return;

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Talent request submitted successfully:", data);
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setStep(1);
    reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <title>Request Talent | Valueway HRC</title>
      <meta name="description" content="Submit hiring and vacancy requirements to initiate C-suite or technical placements audits with Valueway HRC." />
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Eyebrow>Employers</Eyebrow>
                <H1 className="mb-4 text-white text-glow">Request Talent</H1>
                <Body className="text-neutral-400">
                  {"Partner with Valueway HRC to secure exceptional executive, tech, or specialized industry leaders."}
                </Body>
              </div>

              {/* Progress Indicator */}
              <div className="relative flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md mb-8">
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  const isActive = step === s.id;
                  const isCompleted = step > s.id;

                  return (
                    <React.Fragment key={s.id}>
                      <div className="flex items-center space-x-2.5 z-10">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center border text-xs font-semibold font-display transition-all duration-300",
                            isActive && "border-accent bg-accent/10 text-accent glow-accent",
                            isCompleted && "border-accent bg-accent text-background",
                            !isActive && !isCompleted && "border-zinc-800 bg-zinc-900 text-neutral-500"
                          )}
                        >
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                        </div>
                        <span
                          className={cn(
                            "text-xs font-semibold tracking-wider uppercase transition-colors duration-300 hidden sm:inline",
                            isActive ? "text-white" : "text-neutral-500"
                          )}
                        >
                          {s.title}
                        </span>
                      </div>
                      
                      {idx < steps.length - 1 && (
                        <div className="flex-grow h-[1px] mx-4 bg-zinc-800 relative">
                          <div
                            className="absolute left-0 top-0 h-full bg-accent transition-all duration-300"
                            style={{ width: isCompleted ? "100%" : "0%" }}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Form Card */}
              <Card glow className="bg-zinc-950/50 p-6 sm:p-8 min-h-[350px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        {/* Step 1: Company Profile */}
                        {step === 1 && (
                          <div className="space-y-4">
                            <H3 className="text-white text-glow border-b border-zinc-900 pb-2">Company Profile</H3>
                            
                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="companyName" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Company Name
                              </label>
                              <input
                                id="companyName"
                                type="text"
                                placeholder="Nexus Systems"
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                  errors.companyName ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("companyName", { required: "Company name is required" })}
                              />
                              {errors.companyName && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.companyName.message}</span>
                              )}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="companyWebsite" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Company Website
                              </label>
                              <input
                                id="companyWebsite"
                                type="text"
                                placeholder="https://nexussystems.com"
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                  errors.companyWebsite ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("companyWebsite", {
                                  required: "Company website is required",
                                  pattern: {
                                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                                    message: "Invalid URL format",
                                  },
                                })}
                              />
                              {errors.companyWebsite && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.companyWebsite.message}</span>
                              )}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="companySize" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Team Size
                              </label>
                              <select
                                id="companySize"
                                className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                {...register("companySize", { required: "Team size is required" })}
                              >
                                <option value="">Select size...</option>
                                <option value="1-10">1-10 Employees</option>
                                <option value="11-50">11-50 Employees</option>
                                <option value="51-200">51-200 Employees</option>
                                <option value="201-500">201-500 Employees</option>
                                <option value="500+">500+ Employees</option>
                              </select>
                              {errors.companySize && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.companySize.message}</span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Step 2: Role Details */}
                        {step === 2 && (
                          <div className="space-y-4">
                            <H3 className="text-white text-glow border-b border-zinc-900 pb-2">Requirement Details</H3>
                            
                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="roleTitle" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Target Role/Title
                              </label>
                              <input
                                id="roleTitle"
                                type="text"
                                placeholder="Lead Infrastructure Architect"
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                  errors.roleTitle ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("roleTitle", { required: "Role title is required" })}
                              />
                              {errors.roleTitle && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.roleTitle.message}</span>
                              )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="roleIndustry" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Industry Sector
                                </label>
                                <select
                                  id="roleIndustry"
                                  className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                  {...register("roleIndustry", { required: "Industry is required" })}
                                >
                                  <option value="">Select industry...</option>
                                  <option value="IT & Tech">IT & Tech</option>
                                  <option value="BFSI">BFSI</option>
                                  <option value="Healthcare">Healthcare</option>
                                  <option value="Manufacturing">Manufacturing</option>
                                  <option value="Retail">Retail</option>
                                  <option value="FMCG">FMCG</option>
                                  <option value="Automobile">Automobile</option>
                                  <option value="Aviation">Aviation</option>
                                  <option value="Construction">Construction</option>
                                  <option value="Education & Training">Education &amp; Training</option>
                                  <option value="Engineering">Engineering / Heavy Equipment</option>
                                  <option value="Logistics">Logistics</option>
                                  <option value="Media">Media / Advertisement</option>
                                  <option value="Oil & Gas">Oil &amp; Gas</option>
                                  <option value="Telecom">Telecom</option>
                                  <option value="Travel">Travel &amp; Hospitality</option>
                                </select>
                                {errors.roleIndustry && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.roleIndustry.message}</span>
                                )}
                              </div>

                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="roleSeniority" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Seniority Level
                                </label>
                                <select
                                  id="roleSeniority"
                                  className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                  {...register("roleSeniority", { required: "Seniority is required" })}
                                >
                                  <option value="">Select seniority...</option>
                                  <option value="Junior">Junior</option>
                                  <option value="Mid">Mid</option>
                                  <option value="Senior">Senior</option>
                                  <option value="Lead">Lead</option>
                                  <option value="Director">Director / Executive</option>
                                </select>
                                {errors.roleSeniority && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.roleSeniority.message}</span>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="roleUrgency" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Hiring Urgency
                                </label>
                                <select
                                  id="roleUrgency"
                                  className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                  {...register("roleUrgency", { required: "Urgency is required" })}
                                >
                                  <option value="">Select urgency...</option>
                                  <option value="Immediate">Immediate (under 14 days)</option>
                                  <option value="1-2 Months">1-2 Months</option>
                                  <option value="Flexible">Flexible / Ongoing</option>
                                </select>
                                {errors.roleUrgency && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.roleUrgency.message}</span>
                                )}
                              </div>

                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="openingsCount" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Number of Openings
                                </label>
                                <input
                                  id="openingsCount"
                                  type="number"
                                  min={1}
                                  placeholder="1"
                                  className={cn(
                                    "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                    errors.openingsCount ? "border-red-500/80" : "border-zinc-800"
                                  )}
                                  {...register("openingsCount", {
                                    required: "Required",
                                    min: { value: 1, message: "Min 1" },
                                  })}
                                />
                                {errors.openingsCount && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.openingsCount.message}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Contact Preferences */}
                        {step === 3 && (
                          <div className="space-y-4">
                            <H3 className="text-white text-glow border-b border-zinc-900 pb-2">Contact Preferences</H3>
                            
                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="contactName" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Full Name
                              </label>
                              <input
                                id="contactName"
                                type="text"
                                placeholder="Alexander Vance"
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                  errors.contactName ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("contactName", { required: "Full name is required" })}
                              />
                              {errors.contactName && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.contactName.message}</span>
                              )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="contactEmail" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Corporate Email
                                </label>
                                <input
                                  id="contactEmail"
                                  type="email"
                                  placeholder="alexander.vance@nexus.com"
                                  className={cn(
                                    "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                    errors.contactEmail ? "border-red-500/80" : "border-zinc-800"
                                  )}
                                  {...register("contactEmail", {
                                    required: "Corporate email is required",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.contactEmail && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.contactEmail.message}</span>
                                )}
                              </div>

                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="contactPhone" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Phone Number
                                </label>
                                <input
                                  id="contactPhone"
                                  type="tel"
                                  placeholder="+91 98765 43210"
                                  className={cn(
                                    "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                    errors.contactPhone ? "border-red-500/80" : "border-zinc-800"
                                  )}
                                  {...register("contactPhone", {
                                    required: "Phone number is required",
                                    pattern: {
                                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                                      message: "Invalid phone number",
                                    },
                                  })}
                                />
                                {errors.contactPhone && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.contactPhone.message}</span>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2 pt-2">
                              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Preferred Contact Method
                              </span>
                              <div className="flex items-center space-x-6">
                                <label className="flex items-center space-x-2 text-sm text-neutral-350 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="email"
                                    className="accent-accent w-4 h-4 cursor-pointer"
                                    {...register("contactMethod")}
                                  />
                                  <span>Email</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-neutral-350 cursor-pointer">
                                  <input
                                    type="radio"
                                    value="phone"
                                    className="accent-accent w-4 h-4 cursor-pointer"
                                    {...register("contactMethod")}
                                  />
                                  <span>Phone Call</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between border-t border-zinc-900 pt-6 mt-6">
                        {step > 1 ? (
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={prevStep}
                            className="flex items-center gap-1.5 py-2 px-5 font-semibold text-xs md:text-sm"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                          </Button>
                        ) : (
                          <div />
                        )}

                        {step < 3 ? (
                          <Button
                            type="button"
                            variant="primary"
                            onClick={nextStep}
                            className="flex items-center gap-1.5 py-2.5 px-6 font-semibold text-xs md:text-sm"
                          >
                            Continue
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="flex items-center gap-1.5 py-2.5 px-6 font-semibold text-xs md:text-sm"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {"Submitting..."}
                              </>
                            ) : (
                              "Submit Request"
                            )}
                          </Button>
                        )}
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-10"
                    >
                      <CheckCircle2 className="w-16 h-16 text-accent mb-4 animate-bounce" />
                      <H2 className="text-white mb-2 font-display font-semibold">Request Received!</H2>
                      <Body className="text-sm text-neutral-450 text-neutral-400 mb-8 max-w-md">
                        {"Thank you for reaching out. A dedicated account placement manager will review your hiring profile parameters and contact you within 4 business hours."}
                      </Body>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" size="md" onClick={handleReset}>
                          {"Submit Another"}
                        </Button>
                        <Button variant="secondary" size="md" onClick={() => window.location.href = "/"}>
                          {"Back to Home"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            {/* Trust Sidebar Column */}
            <div>
              <Card glow className="border-zinc-800 bg-zinc-950/50 p-6 sm:p-8 space-y-8">
                
                {/* Stats */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                    Key Performance Indicators
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-2xl font-bold text-white font-display">{"14 Days"}</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Average Time-to-Fill Key Vacancies</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white font-display">{"50,000+"}</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Active Pre-Audited Talent Profiles</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white font-display">{"98%"}</span>
                      <p className="text-xs text-neutral-500 mt-0.5">Employer Interview Satisfaction Score</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                    Client Testimonial
                  </h3>
                  <p className="text-sm italic text-neutral-300 leading-relaxed">
                    {"\"Valueway sourced our entire engineering leadership team in under 3 weeks. Absolute game-changers in C-suite recruitment.\""}
                  </p>
                  <p className="text-xs font-semibold text-accent">
                    {"— CTO, TechUnicorn Inc."}
                  </p>
                </div>

                {/* Client Logos (Placeholder tags) */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                    Partner Network
                  </h3>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {["NEXUS", "APEX", "QUANTUM", "CROWN"].map((logo) => (
                      <div
                        key={logo}
                        className="py-2.5 px-4 bg-zinc-900/60 border border-zinc-800 text-center rounded-lg text-xs font-bold font-display text-neutral-500 hover:text-white hover:border-accent/25 hover:bg-zinc-900 transition-all duration-300 select-none cursor-default"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>

              </Card>
            </div>

          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
