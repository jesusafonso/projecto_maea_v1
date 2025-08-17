"use client";

import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { ArrowLeftIcon, DocumentTextIcon, GlobeAltIcon, FlagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TranslationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00847e] hover:text-[#00847e]/80 mb-4">
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <GlobeAltIcon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sistema de Traduções</h1>
              <p className="text-gray-600">Gerencie e visualize todas as traduções do projeto</p>
            </div>
          </div>
        </div>

        {/* Language Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Portuguese Translations */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <Link href="/traducoes/pt">
              <CardBody className="p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <FlagIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      Português
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600 mb-4">
                      Visualize todas as traduções em português utilizadas no projeto
                    </Typography>
                    <Button color="green" className="flex items-center gap-2">
                      <DocumentTextIcon className="h-4 w-4" />
                      Ver Traduções PT
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Link>
          </Card>

          {/* English Translations */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <Link href="/traducoes/en">
              <CardBody className="p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FlagIcon className="h-8 w-8 text-[#00847e]" />
                  </div>
                  <div>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      English
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600 mb-4">
                      View all English translations used in the project
                    </Typography>
                    <Button 
                      color="gray" 
                      className="bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                    >
                      <DocumentTextIcon className="h-4 w-4" />
                      View EN Translations
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Link>
          </Card>
        </div>

        {/* Information Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-sm">
            <CardBody className="p-6">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                📚 Organização
              </Typography>
              <Typography variant="paragraph" className="text-gray-700">
                As traduções estão organizadas por idioma e categoria para facilitar a manutenção e atualização.
              </Typography>
            </CardBody>
          </Card>

          <Card className="shadow-sm">
            <CardBody className="p-6">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                🔄 Consistência
              </Typography>
              <Typography variant="paragraph" className="text-gray-700">
                Todas as traduções são centralizadas para garantir consistência em todo o projeto.
              </Typography>
            </CardBody>
          </Card>

          <Card className="shadow-sm">
            <CardBody className="p-6">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                🚀 Performance
              </Typography>
              <Typography variant="paragraph" className="text-gray-700">
                Sistema otimizado para carregamento rápido e hidratação sem erros.
              </Typography>
            </CardBody>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <Typography variant="h6" color="blue-gray" className="mb-4 text-center">
            Estatísticas do Sistema de Traduções
          </Typography>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div>
              <Typography variant="h4" color="green" className="font-bold">
                50+
              </Typography>
              <Typography variant="paragraph" className="text-gray-600">
                Traduções em Português
              </Typography>
            </div>
            <div>
              <Typography variant="h4" color="blue" className="font-bold">
                50+
              </Typography>
              <Typography variant="paragraph" className="text-gray-600">
                English Translations
              </Typography>
            </div>
          </div>
        </div>

        {/* Navigation Tips */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
          <Typography variant="h6" color="orange" className="mb-3">
            💡 Dicas de Navegação
          </Typography>
          <ul className="space-y-2 text-gray-700">
            <li>• Clique nos cards acima para acessar as traduções específicas</li>
            <li>• Use Ctrl+F para pesquisar traduções específicas</li>
            <li>• As traduções são organizadas por categoria (navegação, formulários, etc.)</li>
            <li>• Todas as traduções são sincronizadas com o sistema principal</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 