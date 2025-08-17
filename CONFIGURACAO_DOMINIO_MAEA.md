# Configuração do Domínio maea.ao

## Visão Geral
Este documento descreve as configurações específicas implementadas para o domínio `maea.ao` no projeto Next.js da MAEA.

## Configurações Implementadas

### 1. Next.js Configuration (`next.config.js`)

#### Configurações de Imagem
```javascript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "maea.ao",
    },
    {
      protocol: "https",
      hostname: "www.maea.ao",
    }
  ]
}
```

#### Configurações de Asset
```javascript
assetPrefix: process.env.NODE_ENV === 'production' ? 'https://maea.ao' : ''
```

#### Redirecionamentos de Domínio
```javascript
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.maea.ao' }],
      destination: 'https://maea.ao/:path*',
      permanent: true,
    },
  ];
}
```

### 2. Arquivo .htaccess (Servidores Apache)

#### Redirecionamentos
- **www.maea.ao → maea.ao** (301 permanente)
- **HTTP → HTTPS** (301 permanente)
- **Next.js routing** para SPA

#### Headers de Segurança
```apache
Header always set Host "maea.ao"
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options SAMEORIGIN
```

### 3. Arquivo web.config (Servidores IIS/Windows)

#### Regras de Rewrite
- Redirecionamento de www para non-www
- Redirecionamento HTTP para HTTPS
- Configurações de Next.js

#### Headers Personalizados
```xml
<add name="Host" value="maea.ao" />
<add name="Access-Control-Allow-Origin" value="*" />
```

### 4. Arquivo de Configuração (config-maea-ao.js)

#### Configurações do Site
```javascript
site: {
  name: 'MAEA',
  description: 'Especialistas em gestão da qualidade e certificação ISO',
  url: 'https://maea.ao',
  email: 'info@maea.ao'
}
```

#### Configurações de API
```javascript
api: {
  baseUrl: 'https://maea.ao/api',
  endpoints: {
    contact: '/contact',
    newsletter: '/newsletter',
    projects: '/projects'
  }
}
```

## Funcionalidades Implementadas

### ✅ Redirecionamentos Automáticos
- `www.maea.ao` → `maea.ao`
- `http://maea.ao` → `https://maea.ao`
- URLs antigas → novas URLs (configurável)

### ✅ Configurações de Segurança
- Headers de segurança configurados
- CORS configurado para o domínio
- Proteção XSS e CSRF

### ✅ Otimizações de Performance
- Cache configurado para 1 ano
- Compressão gzip habilitada
- Assets otimizados para produção

### ✅ SEO e Metadados
- Meta tags configuradas para maea.ao
- Open Graph configurado
- Twitter Cards configurado

## Como Usar

### 1. Importar Configuração
```javascript
import maeaConfig from '../config-maea-ao.js';

// Usar configurações
const siteUrl = maeaConfig.site.url;
const apiUrl = maeaConfig.api.baseUrl;
```

### 2. Variáveis de Ambiente
```bash
# Criar arquivo .env.local com:
NEXT_PUBLIC_SITE_URL=https://maea.ao
NEXT_PUBLIC_SITE_NAME=MAEA
HOSTNAME=maea.ao
PROTOCOL=https
```

### 3. Componentes com Configuração
```javascript
// Exemplo de uso em componentes
const ContactForm = () => {
  const handleSubmit = async (data) => {
    const response = await fetch(`${maeaConfig.api.baseUrl}/contact`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Formulário */}
    </form>
  );
};
```

## Deploy e Configuração do Servidor

### 1. Upload de Arquivos
- Fazer upload de todos os arquivos para o servidor
- **Incluir arquivos de configuração:**
  - `.htaccess`
  - `web.config`
  - `config-maea-ao.js`

### 2. Configurações do Servidor
- **Apache**: Habilitar mod_rewrite e mod_headers
- **IIS**: Instalar URL Rewrite Module
- **Nginx**: Configurar rewrite rules

### 3. DNS e SSL
- Configurar registros A para `maea.ao`
- Configurar CNAME para `www.maea.ao`
- Instalar certificado SSL válido

### 4. Verificações Pós-Deploy
```bash
# Testar redirecionamentos
curl -I http://www.maea.ao
curl -I http://maea.ao

# Verificar headers
curl -I https://maea.ao
```

## Troubleshooting

### Problema: Redirecionamento não funciona
**Solução**: Verificar se mod_rewrite está habilitado no Apache

### Problema: Headers não são aplicados
**Solução**: Verificar se mod_headers está habilitado no Apache

### Problema: Erro 500 no IIS
**Solução**: Verificar se URL Rewrite Module está instalado

### Problema: Assets não carregam
**Solução**: Verificar se assetPrefix está configurado corretamente

## Manutenção

### 1. Atualizações de Configuração
- Modificar `config-maea-ao.js` para mudanças
- Fazer novo build após alterações
- Testar em ambiente de desenvolvimento

### 2. Monitoramento
- Verificar logs do servidor regularmente
- Monitorar redirecionamentos
- Verificar performance e cache

### 3. Backup
- Manter backup dos arquivos de configuração
- Documentar mudanças realizadas
- Versionar configurações importantes

---

**Nota**: Estas configurações foram otimizadas especificamente para o domínio `maea.ao` e devem ser ajustadas conforme necessário para outros domínios ou ambientes.
