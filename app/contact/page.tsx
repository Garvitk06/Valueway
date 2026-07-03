"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, School, Phone, Mail, Clock, MessageSquare, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H1, H2, H3, Body, Eyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type UserType = "candidate" | "employer" | "campus";

interface ContactFormValues {
  // Shared fields
  name: string;
  email: string;
  phone: string;

  // Candidate fields
  roleInterest: string;
  candidateMessage: string;

  // Employer fields
  companyName: string;
  companyWebsite: string;
  urgency: string;
  hiringNeeds: string;

  // Campus Partner fields
  institutionName: string;
  department: string;
  collaborationType: string;
  campusMessage: string;
}

// Social SVG Icons
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ContactPage() {
  const [userType, setUserType] = useState<UserType>("candidate");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      urgency: "Immediate",
      collaborationType: "Placement Drive",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(`Submitted data for ${userType}:`, data);
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    reset();
  };

  // Dynamic success message
  const getSuccessMessage = () => {
    if (userType === "candidate") {
      return "Thank you for submitting your credentials. Our recruiting architects will evaluate your profile against active mandates.";
    }
    if (userType === "employer") {
      return "Talent requirement request logged. An account placement partner will reach out within 4 business hours.";
    }
    return "Campus relations request logged. Our partnerships coordinator will reach out to align schedules.";
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <title>Contact Coordinates | Valueway HRC</title>
      <meta name="description" content="Reach out to Valueway coordinates, access WhatsApp chat lines, or review Gurugram HQ office hours." />
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Form Column (span 2) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Eyebrow>CONNECT</Eyebrow>
                <H1 className="mb-4 text-white text-glow">Get in Touch</H1>
                <Body className="text-neutral-400">
                  {"Reach out to coordinates, explore strategic collaborations, or launch placements audits."}
                </Body>
              </div>

              {/* Dynamic Tabs Select */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md">
                {(["candidate", "employer", "campus"] as UserType[]).map((type) => {
                  const isActive = userType === type;
                  const labels = {
                    candidate: "Candidate",
                    employer: "Employer",
                    campus: "Campus Partner",
                  };
                  const Icons = {
                    candidate: User,
                    employer: Building2,
                    campus: School,
                  };
                  const Icon = Icons[type];

                  return (
                    <button
                      key={type}
                      onClick={() => {
                        setUserType(type);
                        setSuccess(false);
                      }}
                      className={cn(
                        "flex items-center justify-center gap-2 py-3.5 px-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300",
                        isActive
                          ? "bg-accent/10 border border-accent/25 text-accent glow-accent"
                          : "border border-transparent text-neutral-400 hover:text-white"
                      )}
                    >
                      <Icon className="w-4 h-4 hidden sm:inline" />
                      {labels[type]}
                    </button>
                  );
                })}
              </div>

              {/* Form Card wrapper */}
              <Card glow className="bg-zinc-950/50 p-6 sm:p-8 min-h-[400px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      {/* Form inputs container with transitions */}
                      <motion.div
                        key={userType}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                        {/* Shared Core Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <label htmlFor="name" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                              Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Sophia Thorne"
                              className={cn(
                                "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                errors.name ? "border-red-500/80" : "border-zinc-800"
                              )}
                              {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                              <span className="text-[11px] text-red-400 font-medium">{errors.name.message}</span>
                            )}
                          </div>

                          <div className="flex flex-col space-y-1.5">
                            <label htmlFor="email" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="sophia@valuewayhrc.com"
                              className={cn(
                                "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                errors.email ? "border-red-500/80" : "border-zinc-800"
                              )}
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email format",
                                },
                              })}
                            />
                            {errors.email && (
                              <span className="text-[11px] text-red-400 font-medium">{errors.email.message}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-1.5">
                          <label htmlFor="phone" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+91 97281 00300"
                            className={cn(
                              "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                              errors.phone ? "border-red-500/80" : "border-zinc-800"
                            )}
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                                message: "Invalid phone number",
                              },
                            })}
                          />
                          {errors.phone && (
                            <span className="text-[11px] text-red-400 font-medium">{errors.phone.message}</span>
                          )}
                        </div>

                        {/* Mode 1: Candidate Dynamic Fields */}
                        {userType === "candidate" && (
                          <div className="space-y-4">
                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="roleInterest" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Preferred Domain
                              </label>
                              <select
                                id="roleInterest"
                                className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                {...register("roleInterest", { required: "Domain is required" })}
                              >
                                <option value="">Select Domain...</option>
                                <option value="Executive Placements">Executive Search & C-Suite</option>
                                <option value="Tech Hiring">Tech & Cloud Engineering</option>
                                <option value="Finance & Sourcing">BFSI & Fintech Sourcing</option>
                                <option value="Other">Other</option>
                              </select>
                              {errors.roleInterest && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.roleInterest.message}</span>
                              )}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="candidateResume" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Resume Upload
                              </label>
                              <div className="relative border border-dashed border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 rounded-lg px-4 py-3 flex items-center justify-between transition-colors cursor-pointer group">
                                <input
                                  id="candidateResume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                                  Select file (.pdf, .doc, .docx)...
                                </span>
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest border border-zinc-800 bg-zinc-950 px-2.5 py-1 rounded">
                                  Browse
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="candidateMessage" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Profile Summary
                              </label>
                              <textarea
                                id="candidateMessage"
                                rows={4}
                                placeholder="Summarize your professional experience, technical credentials, and target placements..."
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors resize-none",
                                  errors.candidateMessage ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("candidateMessage", { required: "Message is required" })}
                              />
                              {errors.candidateMessage && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.candidateMessage.message}</span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Mode 2: Employer Dynamic Fields */}
                        {userType === "employer" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="companyName" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Company Name
                                </label>
                                <input
                                  id="companyName"
                                  type="text"
                                  placeholder="QuantumPay Inc."
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
                                  placeholder="https://quantumpay.io"
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
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="urgency" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Sourcing Urgency
                              </label>
                              <select
                                id="urgency"
                                className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                {...register("urgency")}
                              >
                                <option value="Immediate">Immediate (under 14 days)</option>
                                <option value="Flexible">Flexible / Ongoing</option>
                              </select>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="hiringNeeds" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Hiring Requirement Summary
                              </label>
                              <textarea
                                id="hiringNeeds"
                                rows={4}
                                placeholder="Describe the role profiles, target experience brackets, and regulatory compliance scopes..."
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors resize-none",
                                  errors.hiringNeeds ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("hiringNeeds", { required: "Requirement summary is required" })}
                              />
                              {errors.hiringNeeds && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.hiringNeeds.message}</span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Mode 3: Campus Partner Dynamic Fields */}
                        {userType === "campus" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="institutionName" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Institution Name
                                </label>
                                <input
                                  id="institutionName"
                                  type="text"
                                  placeholder="Stanford University"
                                  className={cn(
                                    "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                    errors.institutionName ? "border-red-500/80" : "border-zinc-800"
                                  )}
                                  {...register("institutionName", { required: "Institution name is required" })}
                                />
                                {errors.institutionName && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.institutionName.message}</span>
                                )}
                              </div>

                              <div className="flex flex-col space-y-1.5">
                                <label htmlFor="department" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                  Department
                                </label>
                                <input
                                  id="department"
                                  type="text"
                                  placeholder="Career Services Office"
                                  className={cn(
                                    "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                                    errors.department ? "border-red-500/80" : "border-zinc-800"
                                  )}
                                  {...register("department", { required: "Department is required" })}
                                />
                                {errors.department && (
                                  <span className="text-[11px] text-red-400 font-medium">{errors.department.message}</span>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="collaborationType" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Collaboration Type
                              </label>
                              <select
                                id="collaborationType"
                                className="w-full bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                                {...register("collaborationType")}
                              >
                                <option value="Placement Drive">Placement Drive & Sourcing Programs</option>
                                <option value="Guest Lecture">Executive Guest Lectures</option>
                                <option value="Industry Project">Joint Research & Industry Projects</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <label htmlFor="campusMessage" className="text-xs font-bold text-neutral-400 uppercase tracking-wider pl-1">
                                Collaboration Proposal
                              </label>
                              <textarea
                                id="campusMessage"
                                rows={4}
                                placeholder="Outline your proposal for campus onboarding drives, cohort benchmarks, or event sync schedules..."
                                className={cn(
                                  "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors resize-none",
                                  errors.campusMessage ? "border-red-500/80" : "border-zinc-800"
                                )}
                                {...register("campusMessage", { required: "Proposal details are required" })}
                              />
                              {errors.campusMessage && (
                                <span className="text-[11px] text-red-400 font-medium">{errors.campusMessage.message}</span>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {/* Submit Button block */}
                      <div className="pt-6 border-t border-zinc-900">
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-2.5 px-6 font-semibold text-xs md:text-sm"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              {"Submitting Inquiry..."}
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </div>

                    </form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <CheckCircle2 className="w-16 h-16 text-accent mb-4 animate-bounce" />
                      <H2 className="text-white mb-2 font-display font-semibold">Message Dispatched!</H2>
                      <Body className="text-sm text-neutral-400 mb-8 max-w-md">
                        {getSuccessMessage()}
                      </Body>
                      <div className="flex gap-4">
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

            {/* Info & Map Column (span 1) */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <Card glow className="bg-zinc-950/40 p-6 sm:p-8 space-y-6">
                <H3 className="text-white text-lg font-bold border-b border-zinc-900 pb-2">Coordinates</H3>
                
                <div className="space-y-4">
                  
                      {/* Phone */}
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Call Us</span>
                          <a href="tel:+919728100300" className="text-sm font-semibold text-white hover:text-accent transition-colors">
                            +91 97281 00300
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Email Us</span>
                          <a href="mailto:contact@valuewayhrc.com" className="text-sm font-semibold text-white hover:text-accent transition-colors">
                            contact@valuewayhrc.com
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Office Hours</span>
                          <p className="text-sm text-neutral-300">Monday – Friday: 9 AM – 7 PM IST</p>
                        </div>
                      </div>

                      {/* WhatsApp Click-to-chat */}
                      <div className="flex items-start space-x-3 pt-2">
                        <MessageSquare className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Direct Chat</span>
                          <a
                            href="https://wa.me/919728100300"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline uppercase tracking-wider pt-0.5"
                          >
                            WhatsApp Chat
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-zinc-900/60 flex items-center space-x-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-neutral-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-neutral-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-neutral-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </Card>

              {/* Map Radar */}
              <Card glow className="bg-zinc-950/40 p-6 flex flex-col justify-between border-zinc-900 relative overflow-hidden min-h-[300px]">
                <div>
                  <H3 className="text-white text-base font-bold mb-1">Gurugram HQ</H3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {"DLF Cyber City, Building 10, Tower B, Gurugram, India"}
                  </p>
                </div>
                
                {/* Styled map graphic */}
                <div className="w-full h-44 rounded-lg border border-zinc-900 bg-zinc-950/60 relative overflow-hidden flex items-center justify-center select-none cursor-crosshair mt-4">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
                  
                  {/* Radar Circles */}
                  <div className="absolute w-36 h-36 border border-accent/10 rounded-full animate-ping opacity-25" />
                  <div className="absolute w-24 h-24 border border-accent/20 rounded-full opacity-40" />
                  <div className="absolute w-12 h-12 border border-accent/30 rounded-full opacity-65" />
                  
                  {/* Pin Point */}
                  <div className="absolute w-3 h-3 bg-accent rounded-full glow-accent ring-4 ring-accent/15 z-10" />
                  
                  {/* Visual coordinate details in corner */}
                  <div className="absolute bottom-2 left-2 text-[8px] font-mono text-zinc-600 font-bold uppercase tracking-widest select-none">
                    {"LOC: 28.4595° N, 77.0266° E"}
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
