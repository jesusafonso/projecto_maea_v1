"use client";

import Image from "next/image";
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  ExclamationTriangleIcon,
  ChevronRightIcon,
  StarIcon,
  GlobeAltIcon,
  BoltIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  LightBulbIcon
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

export function CarouselFeatures() {
  const { t } = useLanguage();
  return (
    <div className="px-8 py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/50">
      <section className="mx-auto relative overflow-hidden">
        {/* Enhanced Professional Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-slate-50/60 rounded-3xl"></div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute top-24 right-16 w-96 h-96 bg-gradient-to-br from-slate-100/40 to-slate-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-16 left-1/2 w-96 h-96 bg-gradient-to-br from-sky-50/50 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        
        <div className="relative z-10 py-16 px-12">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
            {/* Enhanced Professional Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6 leading-tight">
                {t('services.integrated.title')}
              </h2>
              
              <p className="text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
                {t('services.integrated.description')}
              </p>
            </div>
            
            {/* Enhanced Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 w-full">
              {/* Compliance & Regulation */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-slate-100/80 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-sky-500/30 transition-all duration-500">
                    <CogIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl">{t('services.integrated.compliance.title')}</h4>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.compliance.local.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.local.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.compliance.audit.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.audit.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.compliance.esg.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.compliance.esg.description')}
                    </p>
                  </div>
                </div>
                

              </div>
              
              {/* Certifications */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-slate-100/80 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl">{t('services.integrated.certifications.title')}</h4>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.certifications.iso.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.iso.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.certifications.security.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.security.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.certifications.api.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.certifications.api.description')}
                    </p>
                  </div>
                </div>
                

              </div>
              
              {/* Risk Management */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-slate-100/80 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-amber-500/30 transition-all duration-500">
                    <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl">{t('services.integrated.risk.title')}</h4>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.risk.hazop.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.hazop.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.risk.hazid.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.hazid.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-slate-800 font-semibold text-base mb-2">{t('services.integrated.risk.prevention.title')}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('services.integrated.risk.prevention.description')}
                    </p>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselFeatures;
