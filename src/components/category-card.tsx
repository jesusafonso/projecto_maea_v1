import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryCardProps {
    img: string;
    title: string;
    desc: string;
    icon: React.ElementType;
  }
  
  function CategoryCard({ img, title, desc, icon: Icon }: CategoryCardProps) {
    const { t } = useLanguage();
    
    const getLink = (title: string) => {
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
    };

    return (
      <div className="relative grid min-h-[14rem] w-full overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 group rounded-lg">
        <a href={getLink(title)} className="block h-full w-full">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#00847e] via-[#00847e]/80 to-[#00847e]/60">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 transform-gpu group-hover:rotate-12 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse"></div>
                <div className="absolute inset-2 bg-white/30 rounded-lg animate-ping"></div>
                <div className="absolute inset-4 bg-white/40 rounded-lg animate-bounce"></div>
                <div className="absolute inset-6 bg-white/50 rounded-lg animate-spin"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative flex flex-col justify-between p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h5 className="mb-2 font-bold text-white text-xl">
                {t(title)}
              </h5>
              <p className="text-sm font-medium opacity-90 leading-relaxed text-white">
                {t(desc)}
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
export default CategoryCard