"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                {t('home.hero.title')}
              </h1>
            <p className="text-lg lg:text-xl text-white mb-8 opacity-90 leading-relaxed">
                {t('home.hero.description')}
              </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                color="gray" 
                variant="filled" 
                className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <a href="/consultoria" className="text-white">{t('home.hero.cta.services')}</a>
              </Button>
              <Button 
                color="gray" 
                variant="outlined" 
                className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="/contactos" className="text-inherit">{t('home.hero.cta.contact')}</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/image/logos/logo.png"
              alt="MAEA Logo"
              width={400}
              height={400}
              className="w-80 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
