import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50/50 to-white p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100/50">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/40 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Professional Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-b-full"></div>
      
      {/* Subtle Corner Accents */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gray-100/40 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
      
      {/* Card Content */}
      <div className="relative z-10">
        {/* Enhanced Icon Container */}
        <div className="relative mx-auto mb-8">
          {/* Main Icon Background with Advanced Styling */}
          <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 p-5 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-2">
            <Icon className="h-10 w-10 text-white drop-shadow-sm" />
          </div>
          
          {/* Multiple Glow Effects */}
          <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100"></div>
          <div className="absolute inset-0 rounded-2xl bg-blue-300/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-200 group-hover:scale-100 delay-100"></div>
          
          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 delay-200"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 delay-300"></div>
        </div>
        
        {/* Enhanced Title with Professional Typography */}
        <h3 className="mb-5 text-xl font-bold text-gray-900 text-center leading-tight group-hover:text-blue-600 transition-all duration-500">
          {title}
        </h3>
        
        {/* Enhanced Description with Better Readability */}
        <p className="text-gray-600 leading-relaxed text-sm text-center max-w-sm mx-auto group-hover:text-gray-700 transition-colors duration-500 font-medium">
          {children}
        </p>
        
        {/* Advanced Bottom Accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 scale-x-0 group-hover:scale-x-100"></div>
      </div>
      
      {/* Enhanced Hover State Border */}
      <div className="absolute inset-0 border-2 border-blue-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute top-4 right-4 w-1 h-1 bg-blue-200 rounded-full"></div>
        <div className="absolute top-8 right-8 w-0.5 h-0.5 bg-gray-200 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-100 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-0.5 h-0.5 bg-gray-100 rounded-full"></div>
      </div>
      
      {/* Professional Shadow Enhancement */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-gray-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    </div>
  );
}

export default FeatureCard;