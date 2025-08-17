import React from 'react';
import Modal from './Modal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Política de Privacidade">
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Política de Privacidade da MAEA</h3>
          <p className="text-gray-600 mb-4">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">1. Informações que Coletamos</h4>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h5 className="font-semibold text-gray-700 mb-2">Informações Pessoais:</h5>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Nome completo e informações de contacto</li>
              <li>Endereço de email e número de telefone</li>
              <li>Informações da empresa e cargo</li>
              <li>Dados de navegação e cookies</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">2. Como Utilizamos suas Informações</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#00847e]/10 p-4 rounded-lg">
              <h5 className="font-semibold text-[#00847e] mb-2">Serviços de Consultoria</h5>
              <p className="text-[#00847e]/80 text-sm">Para fornecer serviços de consultoria empresarial e certificação ISO personalizados.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Comunicação</h5>
              <p className="text-green-700 text-sm">Para responder a consultas e manter contacto profissional.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Melhorias</h5>
              <p className="text-purple-700 text-sm">Para melhorar nossos serviços e experiência do usuário.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Compliance</h5>
              <p className="text-orange-700 text-sm">Para cumprir obrigações legais e regulamentares.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">3. Proteção de Dados</h4>
          <div className="bg-gradient-to-r from-gray-50 to-[#00847e]/10 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#00847e]/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Segurança de Alto Nível</h5>
                <p className="text-gray-600 text-sm">Implementamos medidas técnicas e organizacionais robustas</p>
              </div>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>• Criptografia de dados em trânsito e em repouso</li>
              <li>• Controle de acesso rigoroso e autenticação multifator</li>
              <li>• Auditorias regulares de segurança e conformidade</li>
              <li>• Treinamento da equipe em práticas de proteção de dados</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">4. Seus Direitos</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Acesso</h5>
              <p className="text-gray-600 text-sm">Solicitar acesso aos seus dados pessoais</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-[#00847e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#00847e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Correção</h5>
              <p className="text-gray-600 text-sm">Solicitar correção de dados incorretos</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Exclusão</h5>
              <p className="text-gray-600 text-sm">Solicitar exclusão de seus dados</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">5. Contacto</h4>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Para questões relacionadas a esta política de privacidade, entre em contacto connosco:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Email:</h5>
                <p className="text-[#00847e]">comercial@maea.ao</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Telefone:</h5>
                <p className="text-[#00847e]">+244 948 607 248</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            Esta política está em conformidade com as regulamentações de proteção de dados aplicáveis em Angola.
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default PrivacyPolicyModal; 