<img width="963" height="2927" alt="LP" src="https://github.com/user-attachments/assets/35d69dc8-b256-4922-b59c-95de5a742208" />

https://github.com/user-attachments/assets/1a5ff48d-fbff-4ad4-99ef-8785c2411c14

# 🎓 Anhanguera — Landing Page de Captação

Landing page de alta conversão para parceiros da Anhanguera, com foco em captação de leads para Graduação e Pós-Graduação com condições exclusivas.

---

## 📁 Estrutura do Projeto

```
/
├── index.html                # Página principal (landing page)
├── sucesso.html              # Página de confirmação pós-cadastro
├── privacidade_termos.html   # Política de Privacidade e Termos de Uso
├── input.css                 # Entrada para compilação do Tailwind CSS
├── tailwind.config.js        # Configuração customizada do Tailwind
├── anhanguera-logo-branco-horizontal.png
├── fotoIA.png                # Foto hero da seção principal
├── Whisk_60dd74de2ac276cb13c4914e24ac6817dr.jpeg  # Imagem card Graduação
└── Whisk_0364561b33dbee5942a4adb4a2fe94afdr.jpeg  # Imagem card Pós-Graduação
```

---

## 🚀 Tecnologias

- **HTML5** — estrutura semântica
- **Tailwind CSS** (via CDN) — estilização utilitária com tema customizado
- **Alpine.js** — reatividade leve (navbar com scroll, reveal de elementos)
- **Google Fonts** — Plus Jakarta Sans + DM Sans
- **Google Apps Script** — backend para salvar leads em planilha

---

## ✨ Seções da Landing Page

| Seção | Descrição |
|---|---|
| **Nav** | Fixo com scroll, CTA responsivo |
| **Hero** | Headline principal, foto flutuante, contadores animados |
| **Benefícios** | Cards com diferenciais da parceria |
| **Modalidades** | Cards visuais para Graduação e Pós-Graduação |
| **Depoimentos** | 5 depoimentos de alunos reais |
| **Formulário** | Captura de lead com envio para Google Sheets |
| **Footer** | Links de privacidade, termos e contato |

---

## 📋 Campos do Formulário

- Nome Completo
- WhatsApp (com máscara automática)
- E-mail
- Concluiu o Ensino Médio?
- Curso Pretendido
- Modalidade (EAD ou Semipresencial)
- Empresa Parceira (AABB - Maravilha / PoupSaúde)

---

## ⚙️ Configuração do Backend

Os dados do formulário são enviados via `fetch` para um **Google Apps Script** (Apps Script Web App).

Para configurar:
1. Crie uma planilha no Google Sheets
2. Vá em **Extensões → Apps Script** e publique um Web App que receba `POST`
3. Substitua a URL no `index.html`:

```js
const SHEET_URL = "https://script.google.com/macros/s/SEU_ID_AQUI/exec";
```

---

## 🎨 Tema de Cores

| Token | Cor | Uso |
|---|---|---|
| `brand-500` | `#f15a22` | Laranja principal (CTAs, destaques) |
| `ink-950` | `#0d0c0a` | Fundo escuro |
| `ink-400` | `#938e82` | Texto secundário |

---

## 📄 Licença

Projeto proprietário — uso restrito à parceria Anhanguera.
