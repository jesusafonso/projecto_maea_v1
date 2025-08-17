"use client";

import React from "react";
import FeatureCard from "@/components/feature-card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  BoltIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    title: "why.maea.certification.title",
    description: "why.maea.certification.description",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    icon: AcademicCapIcon,
    title: "why.maea.consulting.title",
    description: "why.maea.consulting.description",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200"
  },
  {
    icon: ClockIcon,
    title: "why.maea.support.title",
    description: "why.maea.support.description",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    icon: CheckCircleIcon,
    title: "why.maea.results.title",
    description: "why.maea.results.description",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: StarIcon,
    title: "why.maea.excellence.title",
    description: "why.maea.excellence.description",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: TrophyIcon,
    title: "why.maea.recognition.title",
    description: "why.maea.recognition.description",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
];

export function GetYourBookFromUs() {
  const { t } = useLanguage();
  return (
    <section className="relative -mt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 overflow-hidden py-20">
      {/* Enhanced Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-24 right-16 w-96 h-96 bg-gradient-to-br from-slate-300/30 to-slate-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-16 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-sky-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        {/* Additional Subtle Elements */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-sky-100/30 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-slate-100/30 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-8 leading-tight">
            {t('why.maea.title')}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('why.maea.subtitle')}
          </p>
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 w-full">
          {FEATURES.map(({ icon: Icon, title, description, color, bgColor, borderColor }) => (
            <div key={title} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-slate-100/80 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
              <div className="flex items-center gap-5 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-sky-500/30 transition-all duration-500`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-slate-900 font-bold text-xl">{t(title)}</h4>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(description)}
                  </p>
                </div>
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
        
        .animation-delay-1000 {
          animation-delay: 1s;
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

export default GetYourBookFromUs;
