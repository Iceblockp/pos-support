"use client";

import { useState } from "react";
import { Menu, X, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const manualSections = [
  {
    id: "introduction",
    title: "မိတ်ဆက်",
    images: [
      "./images/introduction/1.png",
      "./images/introduction/2.png",
      "./images/introduction/3.png",
      "./images/introduction/4.png",
      "./images/introduction/5.png",
      "./images/introduction/6.png",
    ],
  },
  {
    id: "overview",
    title: "သုံးသပ်ချက်",
    images: [
      "./images/overview/1.png",
      "./images/overview/2.png",
      "./images/overview/3.png",
      "./images/overview/4.png",
      "./images/overview/5.png",
    ],
  },

  {
    id: "sales",
    title: "ရောင်းချခြင်း",
    images: ["./images/sales/1.png"],
  },
  {
    id: "product-sale",
    title: "ကုန်ပစ္စည်းရောင်းချခြင်း",
    images: [
      "./images/sales/2.png",
      "./images/sales/3.png",
      "./images/sales/4.png",
      "./images/sales/5.png",
      "./images/sales/6.png",
      "./images/sales/7.png",
      "./images/sales/8.png",
      "./images/sales/9.png",
    ],
  },
  {
    id: "rawbt",
    title: "RawBT ချိတ်ဆက်ခြင်း",
    images: [
      "./images/rawbt/1.png",
      "./images/rawbt/2.png",
      "./images/rawbt/3.png",
      "./images/rawbt/4.png",
      "./images/rawbt/5.png",
    ],
  },
  {
    id: "products",
    title: "ကုန်စာရင်းများ",
    images: [
      "./images/products/1.png",
      "./images/products/2.png",
      "./images/products/3.png",
      "./images/products/4.png",
      "./images/products/5.png",
      "./images/products/6.png",
      "./images/products/7.png",
    ],
  },
  {
    id: "reports",
    title: "စာရင်းချုပ်ကြည့်ခြင်း",
    images: [
      "./images/reports/1.png",
      "./images/reports/2.png",
      "./images/reports/3.png",
    ],
  },
];

export default function ManualPage() {
  const [activeSection, setActiveSection] = useState(manualSections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = manualSections.find(
    (section) => section.id === activeSection
  );

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="flex h-screen overflow-hidden">
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200
            transform transition-transform duration-300 ease-in-out
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">User Manual</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {manualSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                      flex items-center justify-between group
                      ${
                        activeSection === section.id
                          ? "bg-blue-50 text-blue-700 font-semibold shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                  >
                    <span>{section.title}</span>
                    <ChevronRight
                      className={`
                        w-4 h-4 transition-transform
                        ${
                          activeSection === section.id
                            ? "text-blue-700"
                            : "text-slate-400"
                        }
                        ${
                          activeSection === section.id
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>
            </nav>

            <div className="p-4 border-t border-slate-200">
              <Link href="/">
                <Button variant="outline" className="w-full justify-start">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Support
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto">
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-4 py-4 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {currentSection?.title}
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Step-by-step guide with screenshots
                </p>
              </div>
            </div>
            <div>
              <a
                href="/apk/base.apk"
                className="text-blue-600 font-semibold"
                download
              >
                Download RawBT APK
              </a>
            </div>
          </div>

          <div className="px-4 py-8 lg:px-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              {currentSection?.images.map((imageUrl, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Step {index + 1}
                    </h3>
                  </div>
                  <div className="relative w-full aspect-video bg-slate-100">
                    <Image
                      src={imageUrl}
                      alt={`${currentSection.title} - Step ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  {/* <div className="px-6 py-4 bg-white">
                    <p className="text-slate-600">
                      Follow the instructions shown in the screenshot above to
                      complete this step.
                    </p>
                  </div> */}
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Help?
              </h3>
              <p className="text-blue-700 mb-4">
                If you need additional assistance or have questions about this
                feature, feel free to contact our support team.
              </p>
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
