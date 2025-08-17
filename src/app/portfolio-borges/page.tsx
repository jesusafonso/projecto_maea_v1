"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
  ArrowLeftIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function PortfolioBorgesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Navigation Button */}
            <div className="mb-8">
              <Button 
                color="white" 
                variant="outlined" 
                size="sm"
                className="backdrop-blur-sm border-white/30 text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <a href="/empresa" className="flex items-center gap-2 text-white">
                  <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Voltar à Empresa
                </a>
              </Button>
            </div>
            
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                {/* Name and Title */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <Typography variant="h1" color="white" className="mb-2 font-bold tracking-tight">
                      BORGES LUBAKI
                    </Typography>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  
                  <Typography variant="h2" color="white" className="font-light opacity-95 text-2xl lg:text-3xl">
                    Gestor de Projectos, Qualidade & Operações
                  </Typography>
                  
                  {/* Professional Badges */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      ✨ Gestão de Projetos
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      🎯 Qualidade ISO
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      📈 Operações
                    </span>
                  </div>
                </div>
                

              </div>
              
              {/* Right Side - Profile Image */}
              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative group">
                  {/* Main Profile Container */}
                  <div className="w-64 h-80 rounded-2xl border-4 border-white/40 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-200 to-emerald-200 transform group-hover:scale-105 transition-all duration-500">
                    <div className="w-full h-full flex items-center justify-center text-[#00847e] relative">
                      <UserIcon className="w-40 h-40 group-hover:scale-110 transition-transform duration-500" />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Professional Message */}
            <div className="mt-12 p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <Typography variant="h3" color="white" className="font-light italic text-2xl lg:text-3xl leading-relaxed">
                  "Profissional dinâmico e orientado para resultados"
                </Typography>
                
                <Typography variant="paragraph" color="white" className="text-lg leading-relaxed opacity-90 max-w-4xl mx-auto">
                  Com experiência em Gestão de Projetos, Qualidade e Operações. 
                  Forte atuação em planeamento estratégico, otimização de processos e liderança de equipas multidisciplinares. 
                  Capacidade comprovada para gerir múltiplos projetos simultaneamente, garantindo o cumprimento de prazos, 
                  orçamento e qualidade.
                </Typography>
                
                {/* Decorative Dots */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                H A B I L I D A D E S T É C N I C A S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conjunto abrangente de competências técnicas e certificações para gestão eficaz de projetos e qualidade
            </Typography>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Gestão de Projetos */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Gestão de Projetos
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        '(PMP)® Profissional de Gerenciamento de Projetos - PMI',
                        'Sustentability Pulse - PMI Angola',
                        'Conceitos e características dos Projetos - FGV',
                        'Introdução ao SCRUM - FGV',
                        'Kanban e Ferramentas Ágeis de Gestão de Projetos - FGV'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        PMP Certified
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Gestão de Operações */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Gestão de Operações
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Gestão de Operações (OPS) - By Alison',
                        'Suporte Básico de Vida (SBV) - Fast Care Angola',
                        'Atendimento & Gestão de Relacionamento com o Cliente (CRM) - By Alison'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Operations Expert
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Certificações ISO */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Certificações ISO
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'ISO 9001:2015 - Interpretação da Norma ISO',
                        'ISO 9001:2015 - Introdução ao Sistema da Gestão de Qualidade (QMS) - By Alison',
                        'ISO 14001:2015 - Sistema de Gestão Ambiental (EMS) - By Alison'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        ISO Certified
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Saúde e Ambiente */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Saúde e Ambiente
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Saúde Ocupacional, Segurança e Ambiente (OHSE) - By Alison',
                        'QHSA - Qualidade Higiene Saúde e Ambiente'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        OHSE Specialist
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Ferramentas e Software */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Ferramentas e Software
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Pacote Office',
                        'SAP Ariba',
                        'SMART GEP',
                        'HCP',
                        'Primavera V10'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Tech Tools
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Soft Skills */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        Soft Skills
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Skills List */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Gestão de tempo',
                        'Trabalho em equipa',
                        'Negociação',
                        'Capacidade de adaptação',
                        'Criatividade',
                        'Comunicação eficaz',
                        'Adaptabilidade'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {skill}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Soft Skills
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Skills Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-lg">
                <Typography variant="h4" color="slate-900" className="mb-4 font-semibold">
                  Perfil de Competências Integradas
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Combinação equilibrada de gestão de projetos, certificações ISO, ferramentas tecnológicas e soft skills para liderança operacional eficaz e desenvolvimento sustentável.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">PMP Certified</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">ISO Standards</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Operations Expert</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Soft Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gradient-to-br from-white via-indigo-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                E X P E R I Ê N C I A P R O F I S S I O N A L
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trajetória profissional marcada por liderança, gestão de projetos e excelência operacional
            </Typography>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* MAEA - Present */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-indigo-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-[#00847e]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                MAEA
                              </Typography>
                              <span className="px-4 py-2 text-sm text-[#00847e] bg-[#00847e]/10 rounded-full font-semibold border border-[#00847e]/20">
                                JANEIRO 2024 - PRESENTE
                              </span>
                            </div>
                            <Typography variant="h5" color="indigo-700" className="mb-4 font-semibold">
                              Gestor de Projetos e Consultor ISO
                            </Typography>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Gestão de Projetos ISO:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Implementação de Sistemas de Gestão da Qualidade</li>
                                  <li>• Auditorias internas e externas ISO 9001:2015</li>
                                  <li>• Desenvolvimento de procedimentos e documentação</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Consultoria e Formação:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Aconselhamento em conformidade regulatória</li>
                                  <li>• Formação de equipas em gestão da qualidade</li>
                                  <li>• Preparação para certificações ISO</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Gestão de Operações:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Otimização de processos organizacionais</li>
                                  <li>• Implementação de melhorias contínuas</li>
                                  <li>• Monitorização de indicadores de desempenho</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Desenvolvimento de Negócio:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Expansão de serviços de consultoria</li>
                                  <li>• Relacionamento com clientes e parceiros</li>
                                  <li>• Estratégias de crescimento organizacional</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Gestão de Projetos</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Consultoria ISO</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Operações</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* PM Neves - Present */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-blue-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-[#00847e]/20 to-[#00847e]/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-[#00847e]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                PM Neves Comercio Geral (SU), Lda
                              </Typography>
                              <span className="px-4 py-2 text-sm text-[#00847e] bg-[#00847e]/10 rounded-full font-semibold border border-[#00847e]/20">
                                AGOSTO 2023 - JANEIRO 2024
                              </span>
                            </div>
                            <Typography variant="h5" color="[#00847e]" className="mb-4 font-semibold">
                              Gestor de Projectos para o Sector Petrolífero e para o Estado - Contratação Pública
                            </Typography>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Planeamento e Gestão de Projetos:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Desenvolvia planos detalhados, cronogramas e orçamentos</li>
                                  <li>• Garantia execução eficiente dentro dos prazos e custos</li>
                                  <li>• Geri riscos e mitigava impactos nos projetos</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Coordenação de Equipas:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Supervisionava equipas multidisciplinares</li>
                                  <li>• Geria contratos e fornecedores</li>
                                  <li>• Otimizava recursos materiais, financeiros e humanos</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Conformidade e Qualidade:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Garantia normas regulatórias</li>
                                  <li>• Políticas de segurança, meio ambiente e qualidade</li>
                                  <li>• Coordenava auditorias e certificações</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Relacionamento e Monitorização:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Comunicação com clientes e stakeholders</li>
                                  <li>• Relatórios de progresso e KPIs</li>
                                  <li>• Melhoria contínua e inovação</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Gestão de Projetos</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Sector Petrolífero</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Contratação Pública</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* FastCare Angola */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-emerald-500 border-0 bg-white/90 backdrop-blur-sm">
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <BriefcaseIcon className="h-10 w-10 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Typography variant="h4" color="slate-900" className="font-bold">
                                FastCare Angola, SA
                              </Typography>
                              <span className="px-4 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-full font-semibold border border-emerald-200">
                                2018 - 2021
                              </span>
                            </div>
                            <Typography variant="h5" color="emerald-700" className="mb-4 font-semibold">
                              Chefe de Dept. de Coordenação de Operações / Gestor Operacional
                            </Typography>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Gestão Operacional:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Coordenava transportes de emergência e não urgentes</li>
                                  <li>• Garantia disponibilidade de veículos e equipas</li>
                                  <li>• Supervisionava protocolos e normas de segurança</li>
                                </ul>
                              </div>
                              <div>
                                <Typography variant="h6" color="slate-700" className="mb-2 font-semibold text-sm">
                                  Gestão de Equipas:
                                </Typography>
                                <ul className="space-y-1 text-sm text-slate-600">
                                  <li>• Coordenava técnicos, médicos, socorristas</li>
                                  <li>• Formação contínua em primeiros socorros</li>
                                  <li>• Geria escalas de trabalho 24h</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Operações</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Emergência</span>
                              <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Gestão de Equipas</span>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Formation */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                F O R M A Ç Ã O A C A D É M I C A
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Base educacional sólida em línguas e engenharia para desenvolvimento profissional
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-[#00847e]" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Língua e Literaturas em Língua Inglesa
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-[#00847e] bg-[#00847e]/10 rounded-full font-semibold border border-[#00847e]/20">
                          2016 - 2019
                        </span>
                      </div>
                      <Typography variant="h5" color="blue-700" className="mb-3 font-semibold">
                        Faculdade de Humanidades | Universidade Agostinho Neto
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                        Formação completa em língua e literaturas inglesas, proporcionando competências avançadas em comunicação, análise literária e compreensão cultural.
                      </Typography>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Língua Inglesa</span>
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Literaturas</span>
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Comunicação</span>
                      </div>
                      <div className="mt-3">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Concluído
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <AcademicCapIcon className="h-10 w-10 text-[#00847e]" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h4" color="slate-900" className="mb-3 font-bold">
                        Engenharia de Petróleos
                      </Typography>
                      <div className="mb-4">
                        <span className="px-4 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-full font-semibold border border-emerald-200">
                          2015
                        </span>
                      </div>
                      <Typography variant="h5" color="emerald-700" className="mb-3 font-semibold">
                        Faculdade de Engenharia | Universidade Católica de Angola
                      </Typography>
                      <Typography variant="paragraph" className="text-slate-600 leading-relaxed">
                        Formação em engenharia de petróleos fornecendo base sólida em tecnologias de exploração, produção e gestão de recursos energéticos.
                      </Typography>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Engenharia</span>
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Petróleos</span>
                        <span className="px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-medium rounded-full">Energia</span>
                      </div>
                      <div className="mt-3">
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">
                          Não concluído
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                I D I O M A S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Competências linguísticas para comunicação global e expansão de negócios internacionais
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Português */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col items-center text-center">
                    {/* Language Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    
                    {/* Language Info */}
                    <Typography variant="h4" color="slate-900" className="font-bold text-2xl mb-3">
                      Português
                    </Typography>
                    
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-semibold">
                        Nativo
                      </span>
                    </div>
                    
                    {/* Proficiency Details */}
                    <div className="space-y-3 text-left w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compreensão</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-[#00847e] rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Fala</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-[#00847e] rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Escrita</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-[#00847e] rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Língua Materna
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Inglês */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col items-center text-center">
                    {/* Language Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    
                    {/* Language Info */}
                    <Typography variant="h4" color="slate-900" className="font-bold text-2xl mb-3">
                      Inglês
                    </Typography>
                    
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                        Intermédio
                      </span>
                    </div>
                    
                    {/* Proficiency Details */}
                    <div className="space-y-3 text-left w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compreensão</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          ))}
                          {[...Array(1)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Fala</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          ))}
                          {[...Array(1)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Escrita</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          ))}
                          {[...Array(1)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                        Falado e Escrito
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Francês */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col items-center text-center">
                    {/* Language Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    
                    {/* Language Info */}
                    <Typography variant="h4" color="slate-900" className="font-bold text-2xl mb-3">
                      Francês
                    </Typography>
                    
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                        Básico
                      </span>
                    </div>
                    
                    {/* Proficiency Details */}
                    <div className="space-y-3 text-left w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Compreensão</span>
                        <div className="flex gap-1">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Fala</span>
                        <div className="flex gap-1">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Escrita</span>
                        <div className="flex gap-1">
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                        Nível Básico
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Language Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl border border-blue-100 shadow-lg">
                <Typography variant="h4" color="slate-900" className="mb-4 font-semibold">
                  Competências Linguísticas
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Capacidade de comunicação em português nativo, inglês intermédio e francês básico, permitindo interação eficaz em contextos nacionais e internacionais.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Português Nativo</span>
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Inglês Intermédio</span>
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Francês Básico</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Comunicação Eficaz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mx-auto mb-4"></div>
              <Typography variant="h2" color="slate-900" className="mb-4 font-bold tracking-wider text-3xl lg:text-4xl">
                P R O J E C T O S T R A B A L H A D O S
              </Typography>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mx-auto"></div>
            </div>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experiência diversificada em projetos de grande escala para empresas multinacionais do sector energético
            </Typography>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* CABGOC - CHEVRON */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        CABGOC - CHEVRON
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Project Details */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Ex. Pack. Delivery',
                        'Provision of Lubrificants and Grease'
                      ].map((project, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {project}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Sector Petrolífero
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* ETU ENERGIA */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        ETU ENERGIA
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Project Details */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Serviços de Restruturação de Armazéns',
                        'Identificação e Contagem de Inventários'
                      ].map((project, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {project}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Gestão de Armazéns
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* TOTAL ENERGIES */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        TOTAL ENERGIES
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Project Details */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Dalia HVAC Revamping Project',
                        'Provision of HVAC Electrical Motors Revamping on block 17',
                        'Manutenção de Postos de Abastecimentos'
                      ].map((project, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {project}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        HVAC & Manutenção
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* EXXONMOBIL */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        EXXONMOBIL
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Project Details */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Cargo Oil Tank Cleaning'
                      ].map((project, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {project}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Limpeza de Tanques
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* SONANGOL EP */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <Card className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardBody className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <Typography variant="h5" color="slate-900" className="font-bold text-xl mb-2">
                        SONANGOL EP
                      </Typography>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Project Details */}
                    <ul className="space-y-3 flex-1">
                      {[
                        'Aquisição e Montagem de Medidores Fluxo nas Instalações LPG - SONAGÁS',
                        'Aquisição de Serviços para Melhoria e Adequação das Componentes Funcionais e de Imagem do Posto de Abastecimento do Cazenga - SONANGOL DISTRIBUIDORA'
                      ].map((project, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircleIcon className="h-5 w-5 text-[#00847e] group-hover/item:scale-110 transition-transform duration-200" />
                          </div>
                          <Typography variant="small" className="text-gray-700 font-medium text-sm leading-relaxed">
                            {project}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-[#00847e]/20 text-[#00847e] text-xs font-semibold rounded-full">
                        Infraestruturas
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Projects Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-3xl border border-emerald-100 shadow-lg">
                <Typography variant="h4" color="slate-900" className="mb-4 font-semibold">
                  Portfolio de Projetos
                </Typography>
                <Typography variant="paragraph" className="text-gray-600 max-w-3xl mx-auto mb-6">
                  Experiência comprovada em gestão de projetos para empresas líderes do sector energético, incluindo Chevron, Total, ExxonMobil e Sonangol, com foco em qualidade, segurança e eficiência operacional.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Sector Petrolífero</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Gestão de Projetos</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Multinacionais</span>
                  <span className="px-4 py-2 bg-[#00847e]/20 text-[#00847e] rounded-full text-sm font-medium">Qualidade ISO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Typography variant="h2" color="white" className="mb-6 font-bold text-3xl lg:text-4xl">
              Interessado em Colaborar?
            </Typography>
            <Typography variant="lead" color="white" className="opacity-90 mb-8 max-w-3xl mx-auto text-lg">
              Entre em contacto para discutir oportunidades de parceria, consultoria ou projetos colaborativos.
            </Typography>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                color="white" 
                variant="filled" 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0 group"
              >
                <a href="/contactos" className="flex items-center gap-3 text-white">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contactar Agora
                </a>
              </Button>
              <Button 
                color="white" 
                variant="outlined" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
              >
                <a href="/empresa" className="flex items-center gap-3 text-white">
                  <ArrowLeftIcon className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
                  Voltar à Empresa
                </a>
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 max-w-2xl mx-auto">
              <Typography variant="h5" color="white" className="mb-4 font-semibold">
                Por que escolher Borges Lubaki?
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-[#00847e]" />
                  <span>PMP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-[#00847e]" />
                  <span>ISO Standards Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-[#00847e]" />
                  <span>Multilingual</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-[#00847e]" />
                  <span>Energy Sector Experience</span>
                </div>
              </div>
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
          <Button
            color="white"
            variant="filled"
            size="lg"
            className="relative bg-[#00847e] hover:bg-[#006d68] text-white font-semibold px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 min-w-[200px]"
          >
            <a href="/sobreiso" className="flex items-center gap-3 text-white">
              <DocumentCheckIcon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold text-sm">
                  Certificação
                </div>
                <div className="text-xs text-white">
                  
                </div>
              </div>
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          
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
