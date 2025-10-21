"use client";
import {
  Shield,
  Database,
  Lock,
  Eye,
  Download,
  Smartphone,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-slate-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Support
          </Button>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: October 21, 2025
          </p>
        </div>

        <Card className="border-2 shadow-lg mb-8">
          <CardContent className="pt-6">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                At Mini POS, your privacy is our highest priority. We believe
                your business data belongs to you and only you. This Privacy
                Policy explains how Mini POS handles your information.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                <p className="text-blue-900 font-semibold text-lg">
                  Simple Summary: Mini POS stores all your data locally on your
                  device. We do not collect, access, transmit, or store any of
                  your business data on external servers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 mb-12">
          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Data Collection and Storage
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                Mini POS is designed with privacy-first architecture. All
                business data, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sales transactions and receipts</li>
                <li>Product inventory and pricing</li>
                <li>Customer information</li>
                <li>Business analytics and reports</li>
                <li>Supplier and vendor details</li>
                <li>Expense records</li>
                <li>User preferences and settings</li>
              </ul>
              <p>
                All of this information is stored locally on your device using
                SQLite database technology. Your data is never transmitted to
                our servers or any third-party services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    No Cloud Dependency
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                Unlike many modern POS systems that require cloud connectivity
                and store your data on external servers, Mini POS operates
                completely offline. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Your sensitive business information never leaves your device
                </li>
                <li>No internet connection is required for daily operations</li>
                <li>We have no access to your business data</li>
                <li>Your data cannot be compromised through server breaches</li>
                <li>You maintain complete control over your information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    What We Do NOT Collect
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>Mini POS does not collect, access, or transmit:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information</li>
                <li>Business transaction data</li>
                <li>Customer data or contact information</li>
                <li>Financial information or payment details</li>
                <li>Product inventory or pricing data</li>
                <li>Usage analytics or behavior tracking</li>
                <li>
                  Location data beyond what your device requires for
                  functionality
                </li>
                <li>Device identifiers for tracking purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Data Ownership and Control
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                You retain complete ownership and control of all your business
                data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Export Anytime:</strong> Export your data in multiple
                  formats (XLSX, PDF, Images) whenever you need
                </li>
                <li>
                  <strong>Backup Control:</strong> Create backups on your terms,
                  stored where you choose
                </li>
                <li>
                  <strong>Data Portability:</strong> Move your data to other
                  systems using standard export formats
                </li>
                <li>
                  <strong>Delete Rights:</strong> Permanently delete your data
                  directly from the app at any time
                </li>
                <li>
                  <strong>No Vendor Lock-in:</strong> Your data is accessible
                  and portable, not locked into our ecosystem
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    App Permissions
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                Mini POS only requests permissions that are essential for its
                functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Camera:</strong> Required for barcode scanning
                  functionality to quickly add products
                </li>
                <li>
                  <strong>Storage:</strong> Needed to save your business data
                  locally and export reports
                </li>
                <li>
                  <strong>Bluetooth:</strong> Used to connect to thermal
                  printers for receipt printing
                </li>
              </ul>
              <p className="mt-4">
                We never request unnecessary permissions. Each permission serves
                a clear, user-visible purpose that directly enhances your
                experience with the app.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Security Measures
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                While your data is stored locally and we have no access to it,
                we implement security best practices in our app design:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Data is stored using industry-standard SQLite database with
                  built-in integrity checks
                </li>
                <li>
                  App follows secure coding practices to prevent vulnerabilities
                </li>
                <li>
                  Regular security updates and patches through app updates
                </li>
                <li>
                  No third-party tracking or analytics SDKs that could
                  compromise privacy
                </li>
              </ul>
              <p className="mt-4">
                <strong>Your Responsibility:</strong> Since data is stored
                locally, we recommend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keeping your device secure with a lock screen</li>
                <li>
                  Regularly exporting backups of your important business data
                </li>
                <li>Keeping the Mini POS app updated to the latest version</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                Mini POS does not integrate with any third-party services that
                collect or process your data. The app operates entirely
                independently without external dependencies for data processing
                or storage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                Mini POS is a business application not directed at children
                under the age of 13. We do not knowingly collect information
                from children, though given our privacy-first approach, we
                collect no personal information from users of any age.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">
                Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal reasons. Any changes will
                be posted on this page with an updated "Last updated" date.
                Given that Mini POS does not collect your data, changes to this
                policy are unlikely to impact your privacy in any material way.
              </p>
              <p>
                We will notify you of any significant changes through an in-app
                notification when you update to a new version of Mini POS.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-4">
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-slate-900">Email:</p>
                <a
                  href="mailto:ksl124980@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ksl124980@gmail.com
                </a>
              </div>
              <p className="mt-4">
                We will respond to your inquiries as soon as possible, typically
                within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Privacy Commitment</h2>
          <p className="text-blue-50 leading-relaxed">
            We built Mini POS with the belief that your business data should
            remain private and under your complete control. We will never
            compromise on this principle. Your trust is the foundation of our
            relationship with you, and we take that responsibility seriously.
          </p>
        </div>

        <div className="text-center py-8 border-t border-slate-200">
          <Link href="/">
            <Button variant="outline" size="lg" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Support
            </Button>
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            © 2025 Mini POS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
