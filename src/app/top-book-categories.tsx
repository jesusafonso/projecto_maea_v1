"use client";

import React from "react";
import CategoryCard from "@/components/category-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Typography } from "@material-tailwind/react";

import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  ChevronRightIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/Certificacao_ISO.jpg",
    icon: ShieldCheckIcon,
    title: "services.certification.title",
    desc: "services.certification.description",
    features: [
      "services.certification.feature1",
      "services.certification.feature2",
      "services.certification.feature3"
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    img: "/image/Consultoria_empresarial.jpg",
    icon: BuildingOfficeIcon,
    title: "services.business.title",
    desc: "services.business.description",
    features: [
      "services.business.feature1",
      "services.business.feature2",
      "services.business.feature3"
    ],
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200"
  },
  {
    img: "/image/sustentabilidade_responsabilidade.jpg",
    icon: GlobeAltIcon,
    title: "services.environmental.title",
    desc: "services.environmental.description",
    features: [
      "services.environmental.feature1",
      "services.environmental.feature2",
      "services.environmental.feature3"
    ],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  }
];

export function TopBookCategories() {
  const { t } = useLanguage();
  return (
    <section className="relative py-12 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-slate-300/30 to-slate-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-sky-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 mx-auto px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">
            {t('services.section.title')}
          </h2>
          
          <p className="text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
            {t('services.section.subtitle')}
          </p>
        </div>
        
        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(({ img, icon: Icon, title, desc, features, color, bgColor, borderColor }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-slate-100/80">
              {/* Enhanced Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={img}
                  alt={t(title)}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Enhanced Icon */}
                <div className={`absolute top-5 right-5 w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-white/25 transition-all duration-500 transform group-hover:scale-110`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Enhanced Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                    {t(title)}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {t(desc)}
                  </p>
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="p-8">
                <div className="space-y-5 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-3 h-3 bg-gradient-to-br ${color} rounded-full mt-2 flex-shrink-0 shadow-lg`}></div>
                      <span className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300 font-medium">
                        {t(feature)}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced CTA Button */}
                <a 
                  href="/contactos" 
                  className="inline-flex items-center gap-3 bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[200px] justify-center"
                >
                  <span className="text-base">{t('common.learn_more')}</span>
                  <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

// Helper function to get service links
function getServiceLink(title: string): string {
  switch (title) {
    case "services.business.title":
    case "services.environmental.title":
      return "/consultoria";
    case "services.certification.title":
      return "/sobreiso";
    case "services.training.title":
      return "/consultoria";
    default:
      return "/consultoria";
  }
}

export default TopBookCategories;
