import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  XMarkIcon,
  Bars3Icon,
  GlobeAltIcon,
  StarIcon,
  ClipboardDocumentListIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_MENU = [
  {
    name: "nav.company",
    icon: BuildingOfficeIcon,
    href: "/empresa",
  },
  {
    name: "nav.consulting",
    icon: UserGroupIcon,
    href: "/consultoria",
  },
  {
    name: "nav.certification",
    icon: GlobeAltIcon,
    href: "/sobreiso",
  },
  {
    name: "nav.plans",
    icon: StarIcon,
    href: "/planos",
  },
  {
    name: "nav.projects",
    icon: DocumentCheckIcon,
    href: "/projectos",
  },
  {
    name: "nav.policies",
    icon: ClipboardDocumentListIcon,
    href: "/politicas",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleLanguageChange(newLanguage: 'pt' | 'en') {
    setLanguage(newLanguage);
    setShowLanguageMenu(false);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showLanguageMenu && !target.closest('.language-menu-container')) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageMenu]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* Logo - Left Side (outside container) */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <a href="/" className="hover:opacity-80 transition-opacity duration-200">
          <Image
            src="/logos/logo.png"
            alt="MAEA"
            width={120}
            height={40}
            className="h-12 w-auto"
          />
        </a>
      </div>

      {/* Desktop Menu - Center */}
      <div className="container mx-auto flex items-center justify-center px-4 py-6">
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <li key={name}>
              <a
                href={href}
                className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
                {t(name)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Contact and Language Selector (outside container) */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center gap-2 z-10">
        <a href="/contactos" className="text-gray-700 hover:text-gray-900 font-medium">
          {t('nav.contact')}
        </a>
        <div className="relative language-menu-container">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowLanguageMenu(!showLanguageMenu);
            }}
          >
            <GlobeAltIcon className="h-5 w-5" />
            {language === "pt" ? "PT" : "EN"}
          </button>
          {showLanguageMenu && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLanguageChange("pt");
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                  language === "pt" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                }`}
              >
                <div className="w-5 h-3 bg-[#00847e] rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PT</span>
                </div>
                Português
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLanguageChange("en");
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                  language === "en" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                }`}
              >
                <div className="w-5 h-3 bg-[#00847e] rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">EN</span>
                </div>
                English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleOpen}
        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 z-10"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      
      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {t(name)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href="/contactos" className="text-gray-700 hover:text-gray-900 font-medium">
                {t('nav.contact')}
              </a>
              <div className="relative language-menu-container">
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowLanguageMenu(!showLanguageMenu);
                  }}
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  {language === "pt" ? "PT" : "EN"}
                </button>
                {showLanguageMenu && (
                  <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("pt");
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                        language === "pt" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                      }`}
                    >
                      <div className="w-5 h-3 bg-[#00847e] rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PT</span>
                      </div>
                      Português
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLanguageChange("en");
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                        language === "en" ? "bg-[#00847e]/10 text-[#00847e]" : "text-gray-700"
                      }`}
                    >
                      <div className="w-5 h-3 bg-[#00847e] rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">EN</span>
                      </div>
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
