"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Button, Input, Textarea, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const CONTACT_INFO = [
  {
    icon: EnvelopeIcon,
    titleKey: "contact.info.email.title",
    value: "comercial@maea.ao",
    link: "mailto:comercial@maea.ao",
    descriptionKey: "contact.info.email.description"
  },
  {
    icon: PhoneIcon,
    titleKey: "contact.info.phone.title",
    value: "+244 948 607 248",
    link: "tel:+244948607248",
    descriptionKey: "contact.info.phone.description"
  },
  {
    icon: PhoneIcon,
    titleKey: "contact.info.phone_alt.title",
    value: "+244 935 127 672",
    link: "tel:+244935127672",
    descriptionKey: "contact.info.phone_alt.description"
  },
  {
    icon: MapPinIcon,
    titleKey: "contact.info.address.title",
    value: "Luanda, Av. Pedro de Castro Vandunem Loy, Nº 9, Edifício Valência, 2ª Andar, Porta direita, Mundo Verde, Talatona",
    link: "#",
    descriptionKey: "contact.info.address.description"
  },
  {
    icon: ClockIcon,
    titleKey: "contact.info.hours.title",
    valueKey: "contact.hours.weekdays",
    link: "#",
    descriptionKey: "contact.info.hours.description"
  },
  {
    icon: GlobeAltIcon,
    titleKey: "contact.info.website.title",
    value: "www.maea.ao",
    link: "https://www.maea.ao",
    descriptionKey: "contact.info.website.description"
  }
];

const SERVICES_CONTACT = [
  {
    titleKey: "contact.services.business.title",
    descriptionKey: "contact.services.business.description",
    contact: "consultoria@maea.ao"
  },
  {
    titleKey: "contact.services.iso.title",
    descriptionKey: "contact.services.iso.description",
    contact: "certificacao@maea.ao"
  },
  {
    titleKey: "contact.services.petroleum.title",
    descriptionKey: "contact.services.petroleum.description",
    contact: "petroleo@maea.ao"
  },
  {
    titleKey: "contact.services.training.title",
    descriptionKey: "contact.services.training.description",
    contact: "treinamento@maea.ao"
  }
];

// Dados para os selects dinâmicos
const ASSUNTOS = [
  { value: "servicos", label: "form.subjects.services" },
  { value: "consultor", label: "form.subjects.consultant" },
  { value: "orcamento", label: "form.subjects.quote" },
  { value: "parceria", label: "form.subjects.partnership" },
  { value: "outro", label: "form.subjects.other" }
];

const SERVICOS_POR_ASSUNTO = {
  servicos: [
    { value: "consultoria-empresarial", label: "form.services.business" },
    { value: "consultoria-ambiental", label: "form.services.environmental" },
    { value: "certificacao-iso", label: "form.services.iso" },
    { value: "treinamento-corporativo", label: "form.services.training" },
    { value: "setor-petrolifero", label: "form.services.petroleum" },
    { value: "consultoria-tecnica", label: "form.services.technical" },
    { value: "sustentabilidade", label: "form.services.sustainability" }
  ],
  consultor: [
    { value: "consultor-empresarial", label: "form.services.business_consultant" },
    { value: "consultor-iso", label: "form.services.iso_consultant" },
    { value: "consultor-ambiental", label: "form.services.environmental_consultant" },
    { value: "consultor-tecnico", label: "form.services.technical_consultant" },
    { value: "consultor-petroleo", label: "form.services.petroleum_consultant" }
  ],
  orcamento: [
    { value: "orcamento-consultoria", label: "form.services.quote_consulting" },
    { value: "orcamento-certificacao", label: "form.services.quote_certification" },
    { value: "orcamento-treinamento", label: "form.services.quote_training" },
    { value: "orcamento-projeto", label: "form.services.quote_project" }
  ],
  parceria: [
    { value: "parceria-comercial", label: "form.services.commercial_partnership" },
    { value: "parceria-tecnica", label: "form.services.technical_partnership" },
    { value: "parceria-estrategica", label: "form.services.strategic_partnership" }
  ],
  outro: [
    { value: "outro", label: "form.services.other" }
  ]
};

export default function ContactosPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cidade: "",
    provincia: "",
    assunto: "",
    servico: "",
    mensagem: ""
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset serviço quando assunto muda
    if (name === "assunto") {
      setFormData(prev => ({
        ...prev,
        servico: ""
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      cidade: "",
      provincia: "",
      assunto: "",
      servico: "",
      mensagem: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Preparar dados do formulário
      const assuntoSelecionado = ASSUNTOS.find(a => a.value === formData.assunto)?.label || formData.assunto;
      const servicoSelecionado = servicosDisponiveis.find(s => s.value === formData.servico)?.label || formData.servico;
      
      // Dados para envio
      const emailData = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        cidade: formData.cidade,
        provincia: formData.provincia,
        assunto: assuntoSelecionado,
        servico: servicoSelecionado,
        mensagem: formData.mensagem
      };

      // Enviar email através da API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Formulário processado:", result);
        
        // Limpar formulário
        resetForm();
        
        // Mostrar modal de sucesso
        setShowSuccessModal(true);
        
        // Se houver dados retornados (email não configurado), mostrar no console
        if (result.data) {
          console.log("Dados do formulário (email não configurado):", result.data);
        }
      } else {
        throw new Error(result.message || 'Erro ao enviar email');
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obter serviços disponíveis baseado no assunto selecionado
  const servicosDisponiveis = formData.assunto ? SERVICOS_POR_ASSUNTO[formData.assunto as keyof typeof SERVICOS_POR_ASSUNTO] || [] : [];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Typography variant="h1" color="white" className="mb-6">
              {t('contact.hero.title')}
            </Typography>
            <Typography variant="lead" color="white" className="mb-8 opacity-90 max-w-4xl mx-auto">
              {t('contact.hero.description')}
            </Typography>
          </div>
        </div>
      </section>

      {/* Informações de Contacto */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('contact.info.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('contact.info.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTACT_INFO.map((info, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="p-6 text-center">
                  <info.icon className="h-12 w-12 text-[#00847e] mx-auto mb-4" />
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {t(info.titleKey)}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600 mb-3">
                    {t(info.descriptionKey)}
                  </Typography>
                  <a 
                    href={info.link} 
                    className="text-[#00847e] hover:text-[#00847e]/80 font-medium transition-colors"
                  >
                    {info.valueKey ? t(info.valueKey) : info.value}
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contacto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Typography variant="h2" color="blue-gray" className="mb-6">
                {t('contact.form.title')}
              </Typography>
              <Typography variant="paragraph" className="text-gray-600 mb-8">
                {t('contact.form.subtitle')}
              </Typography>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('contact.features.quick_response.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('contact.features.quick_response.description')}
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('contact.features.free_consultation.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('contact.features.free_consultation.description')}
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-8 w-8 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {t('contact.features.personalized_support.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      {t('contact.features.personalized_support.description')}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg">
              <CardBody className="p-8">
                <Typography variant="h4" color="blue-gray" className="mb-6">
                  {t('contact.form.title_hardcoded')}
                </Typography>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         <Input
                       type="text"
                       label={t('contact.form.name')}
                       name="nome"
                       value={formData.nome}
                       onChange={handleInputChange}
                       required
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                     <Input
                       type="email"
                       label={t('contact.form.email')}
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       required
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         <Input
                       type="tel"
                       label={t('contact.form.phone')}
                       name="telefone"
                       value={formData.telefone}
                       onChange={handleInputChange}
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                     <Input
                       type="text"
                       label={t('contact.form.company')}
                       name="empresa"
                       value={formData.empresa}
                       onChange={handleInputChange}
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         <Input
                       type="text"
                       label={t('contact.form.city')}
                       name="cidade"
                       value={formData.cidade}
                       onChange={handleInputChange}
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                     <Input
                       type="text"
                       label={t('contact.form.province')}
                       name="provincia"
                       value={formData.provincia}
                       onChange={handleInputChange}
                       className="!border-gray-300 focus:!border-blue-500"
                     />
                  </div>
                  
                  {/* Assunto e Serviço */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-200 bg-white"
                      required
                    >
                      <option value="">{t('contact.form.subject.placeholder')}</option>
                      {ASSUNTOS.map((assunto) => (
                        <option key={assunto.value} value={assunto.value}>
                          {t(assunto.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {formData.assunto && servicosDisponiveis.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.service')}
                      </label>
                      <select
                        name="servico"
                        value={formData.servico}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-200 bg-white"
                        required
                      >
                        <option value="">{t('contact.form.service.placeholder')}</option>
                        {servicosDisponiveis.map((servico) => (
                          <option key={servico.value} value={servico.value}>
                            {t(servico.label)}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  
                  <div>
                                         <Textarea
                       label={t('contact.form.message')}
                       name="mensagem"
                       value={formData.mensagem}
                       onChange={handleInputChange}
                       required
                       rows={4}
                       className="!border-gray-300 focus:!border-blue-500"
                       placeholder={t('contact.form.message.placeholder')}
                     />
                  </div>
                  
                                     <Button 
                    type="submit" 
                    color="blue" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00847e] to-[#00847e]/80 hover:from-[#00847e]/90 hover:to-[#00847e] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                     {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                   </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Contactos por Serviço */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('contact.specialized.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('contact.specialized.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_CONTACT.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="p-6">
                  <Typography variant="h5" color="blue-gray" className="mb-3">
                    {t(service.titleKey)}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600 mb-4">
                    {t(service.descriptionKey)}
                  </Typography>
                  <a 
                    href={`mailto:${service.contact}`}
                    className="text-[#00847e] hover:text-[#00847e]/80 font-medium transition-colors"
                  >
                    {service.contact}
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              {t('contact.location.title')}
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
              {t('contact.location.subtitle')}
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h4" color="blue-gray" className="mb-6">
                {t('contact.location.office.title')}
              </Typography>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-6 w-6 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      {t('contact.location.address.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      Av. Pedro de Castro Vandunem Loy, Nº 9<br />
                      Edifício Valência, 2ª Andar, Porta direita<br />
                      Mundo Verde, Talatona<br />
                      Luanda, Angola
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ClockIcon className="h-6 w-6 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      {t('contact.location.hours.title')}
                    </Typography>
                                         <Typography variant="paragraph" className="text-gray-600">
                       {t('contact.hours.weekdays')}<br />
                       {t('contact.hours.saturday')}<br />
                       {t('contact.hours.sunday')}
                     </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-6 w-6 text-[#00847e] mt-1" />
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      {t('contact.location.phone.title')}
                    </Typography>
                    <Typography variant="paragraph" className="text-gray-600">
                      +244 948 607 248<br />
                      +244 935 127 672
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <Typography variant="h6" color="blue-gray" className="mb-4">
                {t('contact.location.map.title')}
              </Typography>
              <Typography variant="paragraph" className="text-gray-600">
                {t('contact.location.map.description')}
                <br />
                <br />
                {t('contact.location.coordinates')}
              </Typography>
            </div>
          </div>
        </div>
             </section>

       {/* Modal de Sucesso */}
       <Dialog open={showSuccessModal} handler={() => setShowSuccessModal(false)} size="sm">
                   <DialogHeader className="flex items-center gap-3">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <Typography variant="h4" color="blue-gray">
              {t('contact.success.title')}
            </Typography>
          </DialogHeader>
          <DialogBody>
            <Typography variant="paragraph" className="text-gray-600">
              {t('contact.success.message')}
            </Typography>
          </DialogBody>
         <DialogFooter className="flex gap-2">
                       <Button 
              variant="outlined" 
              color="gray" 
              onClick={() => setShowSuccessModal(false)}
            >
              {t('contact.success.close')}
            </Button>
            <Button 
              color="blue" 
              onClick={() => {
                setShowSuccessModal(false);
                // Scroll para o topo da página
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {t('contact.success.explore')}
            </Button>
         </DialogFooter>
       </Dialog>

       <Footer />
     </>
   );
 } 