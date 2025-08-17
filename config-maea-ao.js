// Configurações específicas para o domínio maea.ao
const maeaConfig = {
  // Configurações do site
  site: {
    name: 'MAEA',
    description: 'Especialistas em gestão da qualidade e certificação ISO',
    url: 'https://maea.ao',
    email: 'info@maea.ao',
    phone: '+244 XXX XXX XXX',
    address: 'Luanda, Angola'
  },
  
  // Configurações de domínio
  domain: {
    primary: 'maea.ao',
    www: 'www.maea.ao',
    protocol: 'https',
    port: 443
  },
  
  // Configurações de API
  api: {
    baseUrl: 'https://maea.ao/api',
    endpoints: {
      contact: '/contact',
      newsletter: '/newsletter',
      projects: '/projects'
    }
  },
  
  // Configurações de email
  email: {
    smtp: {
      host: 'smtp.maea.ao',
      port: 587,
      secure: false,
      user: 'info@maea.ao',
      pass: process.env.SMTP_PASSWORD || 'your_password_here'
    },
    from: 'info@maea.ao',
    to: 'info@maea.ao'
  },
  
  // Configurações de SEO
  seo: {
    title: 'MAEA - Especialistas em Gestão da Qualidade e Certificação ISO',
    description: 'Consultoria especializada em gestão da qualidade, certificação ISO e implementação de sistemas de gestão em Angola.',
    keywords: 'ISO, certificação, qualidade, gestão, consultoria, Angola, Luanda',
    ogImage: 'https://maea.ao/images/og-image.jpg',
    twitterCard: 'summary_large_image'
  },
  
  // Configurações de redes sociais
  social: {
    facebook: 'https://facebook.com/maea.ao',
    linkedin: 'https://linkedin.com/company/maea-ao',
    twitter: 'https://twitter.com/maea_ao',
    instagram: 'https://instagram.com/maea.ao'
  },
  
  // Configurações de analytics
  analytics: {
    googleAnalytics: 'GA_MEASUREMENT_ID',
    googleTagManager: 'GTM_XXXXXXX',
    facebookPixel: 'FB_PIXEL_ID'
  },
  
  // Configurações de cache
  cache: {
    maxAge: 31536000, // 1 ano
    staleWhileRevalidate: 86400 // 1 dia
  }
};

module.exports = maeaConfig;
