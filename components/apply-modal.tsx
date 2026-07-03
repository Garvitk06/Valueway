"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { H3, H2, Body } from "./ui/typography";
import { cn } from "@/lib/utils";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  resume: FileList;
  message: string;
}

export function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationForm>();

  const onSubmit = async (data: ApplicationForm) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Job application submitted:", {
      jobTitle,
      name: data.name,
      email: data.email,
      phone: data.phone,
      resumeName: data.resume[0]?.name,
      message: data.message,
    });
    setSuccess(true);
  };

  const handleClose = () => {
    onClose();
    // Delay resetting to let close animation complete
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg border border-zinc-800 bg-zinc-950/95 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Corner Decorative Blur */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-zinc-900">
              <div>
                <H3 className="text-white text-glow mb-1">Apply for Position</H3>
                <span className="text-xs text-accent font-display font-medium uppercase tracking-wider">
                  {jobTitle}
                </span>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-zinc-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      className={cn(
                        "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                        errors.name ? "border-red-500/80" : "border-zinc-800"
                      )}
                      {...register("name", { required: "Full name is required" })}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 font-medium">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane.doe@example.com"
                      className={cn(
                        "w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors",
                        errors.email ? "border-red-500/80" : "border-zinc-800"
                      )}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 font-medium">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
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

                  {/* Resume Upload */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="resume" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      Upload Resume (PDF, DOCX)
                    </label>
                    <div className="relative border border-dashed border-zinc-800 rounded-lg p-4 bg-zinc-900/60 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        {...register("resume", { required: "Resume upload is required" })}
                      />
                      <Upload className="w-6 h-6 text-accent mb-2" />
                      <span className="text-xs font-medium text-neutral-300">
                        Drag and drop file here, or click to browse
                      </span>
                      <span className="text-[10px] text-neutral-500 mt-1">
                        Max file size: 5MB
                      </span>
                    </div>
                    {errors.resume && (
                      <span className="text-[11px] text-red-400 font-medium">{errors.resume.message}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                      Cover Note / Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Briefly state why you're a good fit..."
                      className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      {...register("message")}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex items-center justify-end space-x-3">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleClose}
                      className="py-2.5 px-5 font-semibold text-xs md:text-sm"
                    >
                      {"Cancel"}
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="py-2.5 px-5 flex items-center gap-1.5 font-semibold text-xs md:text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {"Submitting..."}
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent mb-4 animate-bounce" />
                  <H2 className="text-white mb-2">Application Received!</H2>
                  <Body className="text-sm text-neutral-400 mb-8 max-w-sm">
                    {"Thank you for applying. Our talent placement specialists will review your application parameters and connect with you shortly."}
                  </Body>
                  <Button variant="primary" size="md" onClick={handleClose}>
                    {"Close"}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
