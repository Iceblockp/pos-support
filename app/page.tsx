"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  FileText,
  Send,
  CheckCircle2,
  Smartphone,
  Globe,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6 shadow-lg">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Mini POS Support
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete Business Solution for Small Businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Email Support</CardTitle>
              <CardDescription>
                We typically respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:ksl124980@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ksl124980@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Documentation</CardTitle>
              <CardDescription>
                Guides and tutorials to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#faq"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Browse FAQ
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Privacy Policy</CardTitle>
              <CardDescription>Your data stays on your device</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="#privacy"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Policy
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Send us a message and we'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleChange("category", value)}
                      required
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing Question
                        </SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose Mini POS?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Complete POS Solution
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Process transactions, manage inventory, and track sales
                      all in one powerful app designed for small businesses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Privacy First
                    </h3>
                    <p className="text-slate-600 text-sm">
                      100% local data storage. Your business data never leaves
                      your device, ensuring complete privacy and security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Multi-Language
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Full English and Myanmar language support with seamless
                      switching to serve diverse customer bases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Multiple payment methods (Cash, Card, Mobile)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Barcode scanning and inventory tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Professional receipt printing (4 templates)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Comprehensive analytics and reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Export data (XLSX, PDF, Images)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Works completely offline</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Card className="border-2 shadow-lg">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      Does Mini POS require an internet connection?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    No, Mini POS works completely offline. All data is stored
                    locally on your device, so you can continue business
                    operations even without internet connectivity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      Is my business data secure?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, absolutely. All your business data is stored locally on
                    your device using SQLite. Your data never leaves your device
                    unless you choose to export it. We do not have access to
                    your business information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      What thermal printers are supported?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Mini POS supports Bluetooth thermal printers with standard
                    ESC/POS protocol. Most popular 58mm and 80mm thermal
                    printers are compatible with our app.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      Can I export my sales data?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, you can export your sales data, inventory reports, and
                    analytics in multiple formats including XLSX (Excel), PDF,
                    and images. This makes it easy to backup your data or share
                    reports with your accountant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      Does Mini POS support multiple languages?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, Mini POS fully supports both English and Myanmar
                    languages. You can easily switch between languages in the
                    app settings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">
                      Can I customize receipt templates?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, Mini POS offers 4 professional receipt templates
                    (Classic, Modern, Minimal, and Elegant). You can also add
                    your business logo and customize business information on all
                    receipts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div id="privacy" className="mb-16">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              <CardDescription>Last updated: October 2025</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
                Data Collection and Storage
              </h3>
              <p className="text-slate-600 mb-4">
                Mini POS is designed with your privacy as the top priority. All
                business data, including sales transactions, inventory, customer
                information, and analytics, is stored locally on your device
                using SQLite database technology. We do not collect, transmit,
                or store any of your business data on external servers.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                No Cloud Dependency
              </h3>
              <p className="text-slate-600 mb-4">
                Unlike many POS systems, Mini POS does not require or use cloud
                services for data storage. This means your sensitive business
                information never leaves your device unless you explicitly
                choose to export it.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                Data Ownership
              </h3>
              <p className="text-slate-600 mb-4">
                You retain complete ownership and control of all your business
                data. You can export, backup, or delete your data at any time
                directly from the app.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                Permissions
              </h3>
              <p className="text-slate-600 mb-4">
                Mini POS only requests permissions necessary for its
                functionality, including camera access for barcode scanning,
                storage access for data backup, and Bluetooth for printer
                connectivity. We never request unnecessary permissions.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                Contact Information
              </h3>
              <p className="text-slate-600">
                If you have questions about our privacy practices, please
                contact us at ksl124980@gmail.com.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center py-12 border-t border-slate-200">
          <p className="text-slate-600 mb-2">
            Built with care for small businesses
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Mini POS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
