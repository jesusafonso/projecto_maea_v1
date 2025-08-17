"use client";

import React from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

export default function ProjectosPage() {
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
                {t('projects.hero.title')}
              </h1>
              <p className="text-xl text-white mb-8 opacity-90">
                {t('projects.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/consultoria" 
                  className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  {t('projects.hero.cta.services')}
                </a>
                <a 
                  href="/contactos" 
                  className="bg-gradient-to-r from-[#00847e]/10 to-[#00847e]/20 hover:from-[#00847e]/20 hover:to-[#00847e]/30 text-[#00847e] border-[#00847e] hover:text-[#00847e] font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {t('projects.hero.cta.contact')}
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

      {/* Projetos de Implementação ISO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('projects.implementation.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.implementation.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TLCN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                  <BuildingOfficeIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">TLCN</h3>
                  <p className="text-[#00847e] font-semibold">Empresa de Prestação de Serviços</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t('projects.tlcn.description')}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.tlcn.focus.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.tlcn.focus1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.tlcn.focus2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.tlcn.focus3')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.tlcn.certification.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 9001:2015 - Gestão da Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 14001:2015 - Gestão Ambiental</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.tlcn.process.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-sm text-gray-600">{t('projects.tlcn.process.step1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm text-gray-600">{t('projects.tlcn.process.step2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-sm text-gray-600">{t('projects.tlcn.process.step3')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">{t('projects.tlcn.results.title')}</h4>
                <p className="text-sm text-green-700">{t('projects.tlcn.results.description')}</p>
              </div>
            </div>

            {/* O.M.F */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                  <CogIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">O.M.F</h3>
                  <p className="text-[#00847e] font-semibold">Serviços Petrolíferos</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t('projects.omf.description')}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.omf.focus.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.omf.focus1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.omf.focus2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.omf.focus3')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.omf.certification.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 9001:2015 - Gestão da Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 45001:2018 - Segurança e Saúde Ocupacional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">API Q1 - Qualidade para Setor Petrolífero</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.omf.process.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-sm text-gray-600">{t('projects.omf.process.step1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm text-gray-600">{t('projects.omf.process.step2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-sm text-gray-600">{t('projects.omf.process.step3')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">{t('projects.omf.results.title')}</h4>
                <p className="text-sm text-green-700">{t('projects.omf.results.description')}</p>
              </div>
            </div>

            {/* Microtech */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                  <CogIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Microtech</h3>
                  <p className="text-[#00847e] font-semibold">Tecnologia e Telecomunicações</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t('projects.microtech.description')}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.microtech.focus.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.microtech.focus1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.microtech.focus2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.microtech.focus3')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.microtech.certification.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 9001:2015 - Gestão da Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 27001:2013 - Segurança da Informação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 20000-1:2018 - Gestão de Serviços de TI</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.microtech.process.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-sm text-gray-600">{t('projects.microtech.process.step1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm text-gray-600">{t('projects.microtech.process.step2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-sm text-gray-600">{t('projects.microtech.process.step3')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">{t('projects.microtech.results.title')}</h4>
                <p className="text-sm text-green-700">{t('projects.microtech.results.description')}</p>
              </div>
            </div>

            {/* Senega */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                  <ShieldCheckIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Senega</h3>
                  <p className="text-[#00847e] font-semibold">Bens Alimentares</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t('projects.senega.description')}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.senega.focus.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.senega.focus1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.senega.focus2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">{t('projects.senega.focus3')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.senega.certification.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 9001:2015 - Gestão da Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">ISO 22000:2018 - Segurança Alimentar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                    <span className="text-sm text-gray-600">HACCP - Análise de Perigos e Pontos Críticos</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">{t('projects.senega.process.title')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-sm text-gray-600">{t('projects.senega.process.step1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-sm text-gray-600">{t('projects.senega.process.step2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-sm text-gray-600">{t('projects.senega.process.step3')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">{t('projects.senega.results.title')}</h4>
                <p className="text-sm text-green-700">{t('projects.senega.results.description')}</p>
              </div>
            </div>

            {/* Sofama */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                  <UserGroupIcon className="h-8 w-8 text-[#00847e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Sofama</h3>
                  <p className="text-[#00847e] font-semibold">Estofos e Restauros de Alta Qualidade</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    {t('projects.sofama.description')}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">{t('projects.sofama.focus.title')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                        <span className="text-sm text-gray-600">{t('projects.sofama.focus1')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                        <span className="text-sm text-gray-600">{t('projects.sofama.focus2')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#00847e]" />
                        <span className="text-sm text-gray-600">{t('projects.sofama.focus3')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">{t('projects.sofama.certification.title')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                        <span className="text-sm text-gray-600">ISO 9001:2015 - Gestão da Qualidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DocumentCheckIcon className="h-4 w-4 text-[#00847e]" />
                        <span className="text-sm text-gray-600">ISO 14001:2015 - Gestão Ambiental</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">{t('projects.sofama.process.title')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-sm text-gray-600">{t('projects.sofama.process.step1')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-sm text-gray-600">{t('projects.sofama.process.step2')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00847e] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-sm text-gray-600">{t('projects.sofama.process.step3')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">{t('projects.sofama.results.title')}</h4>
                    <p className="text-sm text-green-700">{t('projects.sofama.results.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia de Implementação */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('projects.methodology.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.methodology.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#00847e] rounded-full">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {t('projects.methodology.step1.title')}
              </h3>
              <p className="text-gray-600">
                {t('projects.methodology.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#00847e] rounded-full">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {t('projects.methodology.step2.title')}
              </h3>
              <p className="text-gray-600">
                {t('projects.methodology.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#00847e] rounded-full">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {t('projects.methodology.step3.title')}
              </h3>
              <p className="text-gray-600">
                {t('projects.methodology.step3.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#00847e] rounded-full">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {t('projects.methodology.step4.title')}
              </h3>
              <p className="text-gray-600">
                {t('projects.methodology.step4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados e Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('projects.results.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('projects.results.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
              <TrophyIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('projects.results.certification.title')}
              </h5>
              <p className="text-gray-600">
                {t('projects.results.certification.description')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
              <StarIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('projects.results.quality.title')}
              </h5>
              <p className="text-gray-600">
                {t('projects.results.quality.description')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
              <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                {t('projects.results.market.title')}
              </h5>
              <p className="text-gray-600">
                {t('projects.results.market.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00847e] to-[#00847e]/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('projects.cta.title')}
          </h2>
          <p className="text-xl text-white mb-8 opacity-90 max-w-3xl mx-auto">
            {t('projects.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contactos" 
              className="bg-white text-[#00847e] hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t('projects.cta.contact')}
            </a>
            <a 
              href="/consultoria" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#00847e] font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t('projects.cta.services')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
