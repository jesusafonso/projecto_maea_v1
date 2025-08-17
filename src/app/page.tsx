"use client";

import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// components
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";

// sections
import Hero from "./hero";
import TopBookCategories from "./top-book-categories";
import CarouselFeatures from "./carousel-features";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";

export default function Campaign() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <Hero />
      <TopBookCategories />
      <CarouselFeatures />
      <GetYourBookFromUs />
      <Faq />
      
      {/* Simple Professional Floating Certification Button */}
      <div className="fixed left-6 bottom-6 z-50 group">
        <div className="relative">
          {/* Simple Pulse Animation */}
          <div className="absolute inset-0 bg-[#00847e] rounded-2xl animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <a 
            href="/sobreiso" 
            className="relative inline-flex items-center gap-3 bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 min-w-[200px]"
          >
            <DocumentCheckIcon className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold text-sm">
                {t('common.certification')}
              </div>
              <div className="text-xs text-white">
                
              </div>
            </div>
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* Simple Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="text-center">
              <div className="font-medium">Certificação ISO</div>
              <div className="text-xs text-slate-300">Clique para saber mais</div>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
