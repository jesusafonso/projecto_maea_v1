"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
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
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function EmpresaPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                {t('company.hero.title')}
              </h1>
              <p className="text-xl text-white mb-8 opacity-90">
                {t('company.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/consultoria" 
                  className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  {t('company.hero.cta.services')}
                </a>
                <a 
                  href="/contactos" 
                  className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {t('company.hero.cta.contact')}
                </a>
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

      {/* Missão e Visão */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <BuildingOfficeIcon className="h-12 w-12 text-[#00847e] mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('company.mission.title')}
              </h3>
              <p className="text-gray-600">
                {t('company.mission.description')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
                <GlobeAltIcon className="h-12 w-12 text-[#00847e] mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('company.vision.title')}
              </h3>
              <p className="text-gray-600">
                {t('company.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('company.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('company.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <CheckCircleIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('company.values.excellence')}
              </h5>
              <p className="text-gray-600">
                {t('company.values.excellence.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <UserGroupIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('company.values.team')}
              </h5>
              <p className="text-gray-600">
                {t('company.values.team.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('company.values.sustainability')}
              </h5>
              <p className="text-gray-600">
                {t('company.values.sustainability.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('company.team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('company.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-full">
                  <UserIcon className="h-16 w-16 text-[#00847e]" />
                </div>
              <h5 className="text-xl font-bold text-gray-800 mb-2">
                {t('company.team.elizabeth.name')}
              </h5>
              <p className="text-gray-600 mb-3">
                {t('company.team.elizabeth.role')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('company.team.elizabeth.description')}
              </p>
              
              <a 
                href="/portfolio-diretora-comercial" 
                className="inline-block bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                {t('company.portfolio.view')}
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-full">
                  <UserIcon className="h-16 w-16 text-[#00847e]" />
                </div>
              <h5 className="text-xl font-bold text-gray-800 mb-2">
                {t('company.team.jesus.name')}
              </h5>
              <p className="text-gray-600 mb-3">
                {t('company.team.jesus.role')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('company.team.jesus.description')}
              </p>
              
              <a 
                href="/portfolio-ceo" 
                className="inline-block bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                {t('company.portfolio.view')}
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-full">
                  <UserIcon className="h-16 w-16 text-[#00847e]" />
                </div>
              <h5 className="text-xl font-bold text-gray-800 mb-2">
                {t('company.team.borges.name')}
              </h5>
              <p className="text-gray-600 mb-3">
                {t('company.team.borges.role')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('company.team.borges.description')}
              </p>
              
              <a 
                href="/portfolio-borges" 
                className="inline-block bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                {t('company.portfolio.view')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência e Certificações */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t('company.experience.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('company.experience.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[#00847e]" />
                  <p className="text-gray-700">
                    {t('company.experience.iso')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[#00847e]" />
                  <p className="text-gray-700">
                    {t('company.experience.petroleum')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[#00847e]" />
                  <p className="text-gray-700">
                    {t('company.experience.engineering')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TrophyIcon className="h-6 w-6 text-[#00847e]" />
                  <p className="text-gray-700">
                    {t('company.experience.management')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/image/Certificacao_ISO.jpg"
                alt="Certificação ISO"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

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
                {t('company.certification.floating.title')}
                </div>
              </div>
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          
          {/* Simple Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="text-center">
              <div className="font-medium">{t('company.certification.floating.tooltip.title')}</div>
              <div className="text-xs text-slate-300">{t('company.certification.floating.tooltip.subtitle')}</div>
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