# Guia da Área Administrativa - Grupo Escoteiro

## 🔐 Acesso à Área Administrativa

### Como Acessar
1. No rodapé do site principal, clique em "Área Administrativa"
2. Ou acesse diretamente: `public/login.html`

### Credenciais de Login
- **Usuário:** `admin`
- **Senha:** `escoteiro2024`

### Sessão
- A sessão expira em 2 horas de inatividade
- Após o login, você será redirecionado para o menu administrativo

## 📋 Funcionalidades Disponíveis

### 1. Gerenciar Documentos (Transparência)
**Acesso:** Menu Admin → Gerenciar Documentos

**Funcionalidades:**
- ✅ Adicionar novos documentos
- ✅ Visualizar documentos publicados
- ✅ Excluir documentos
- ✅ Diferentes tipos de documento (Estatuto, Relatório Financeiro, Ata, etc.)
- ✅ Upload de arquivos PDF
- ✅ Integração automática com a seção "Transparência" do site

**Como usar:**
1. Preencha o formulário com título, descrição, tipo e data
2. Faça upload do arquivo PDF
3. Clique em "Salvar Documento"
4. O documento aparecerá automaticamente na seção "Transparência" do site

### 2. Gerenciar Fotos
**Acesso:** Menu Admin → Gerenciar Fotos

**Funcionalidades:**
- ✅ Adicionar novas fotos ao álbum
- ✅ Visualizar fotos publicadas
- ✅ Excluir fotos
- ✅ Upload de imagens (JPG, PNG, GIF)
- ✅ Integração automática com a seção "Álbum de Fotos" do site

**Como usar:**
1. Preencha título, descrição e data do evento
2. Faça upload da imagem
3. Clique em "Salvar Foto"
4. A foto aparecerá automaticamente no álbum do site

### 3. Painel de Estatísticas
**Localização:** Menu Administrativo Principal

**Informações exibidas:**
- Número total de documentos
- Número total de fotos
- Data da última atualização

### 4. Ações Rápidas
**Localização:** Menu Administrativo Principal

**Opções disponíveis:**
- **Limpar Dados:** Remove todos os documentos e fotos
- **Exportar Dados:** Baixa backup em formato JSON
- **Ver Site:** Acessa o site principal
- **Sair:** Faz logout da área administrativa

## 🔄 Sincronização Automática

### Como Funciona
- Os dados são salvos no `localStorage` do navegador
- O site principal verifica automaticamente por atualizações
- Quando você volta do admin para o site, os dados são recarregados
- Atualização automática a cada 5 segundos

### Integração Site ↔ Admin
1. **Documentos:** Salvos em `escoteiroDocuments`
2. **Fotos:** Salvas em `escoteiroPhotos`
3. **Eventos:** `reloadDocuments` e `reloadPhotos` para sincronização

## 🛡️ Segurança

### Proteção de Acesso
- Login obrigatório para todas as páginas administrativas
- Sessão com tempo limite (2 horas)
- Redirecionamento automático para login se não autenticado

### Validações
- Apenas arquivos PDF para documentos
- Apenas imagens (JPG, PNG, GIF) para fotos
- Campos obrigatórios nos formulários
- Confirmação para exclusões

## 📱 Responsividade

- Interface adaptada para desktop, tablet e mobile
- Design moderno com Bootstrap 5
- Ícones Font Awesome para melhor UX

## 🔧 Manutenção

### Backup dos Dados
1. Acesse o Menu Administrativo
2. Clique em "Exportar Dados"
3. Arquivo JSON será baixado com todos os dados

### Limpeza de Dados
1. Acesse o Menu Administrativo
2. Clique em "Limpar Dados"
3. Confirme a ação (irreversível)

### Alteração de Credenciais
Para alterar usuário/senha, edite o arquivo `public/login.html`:
```javascript
if (username === 'NOVO_USUARIO' && password === 'NOVA_SENHA') {
```

## 🎨 Personalização

### Cores do Tema
As cores podem ser alteradas nos arquivos CSS através das variáveis:
```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #dc2626;
}
```

### Tipos de Documento
Para adicionar novos tipos, edite o `<select>` em `admin-docs.html`:
```html
<option value="novo_tipo">Novo Tipo</option>
```

E adicione o ícone correspondente na função `getDocIcon()`.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se está usando as credenciais corretas
2. Confirme se o navegador suporta localStorage
3. Teste em modo privado/incógnito para descartar cache
4. Verifique o console do navegador para erros JavaScript

---

**Versão:** 1.0  
**Última atualização:** Janeiro 2024