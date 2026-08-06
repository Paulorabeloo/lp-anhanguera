<img width="963" height="2927" alt="LP" src="https://github.com/user-attachments/assets/766209e2-6551-4e6e-ac97-6e479c729196" />

# Lead Capture Landing Page (Anhanguera)

Single-page lead capture site built for a partnership campaign. A visitor picks
their partner organization, submits the form, and the lead lands directly in a
Google Sheet the marketing team already works in. No CRM, no backend, no new
tool for anyone to learn.

## The problem it solves

The team needed to collect partnership leads and act on them the same day. A
full CRM integration would have taken weeks and forced a new workflow on people
who live in spreadsheets. Using Google Sheets as the storage layer removed that
friction entirely.

## How it works

```
Form  ->  fetch POST (with sendBeacon fallback)  ->  Google Apps Script  ->  Google Sheet
```

The `sendBeacon` fallback matters. It keeps the submission alive when the
browser is already tearing the page down, which is exactly when mobile users
close the tab right after tapping submit.

## Stack

- **HTML** and **Tailwind CSS** (compiled from `input.css`)
- **Vanilla JavaScript**, with no framework and no build step beyond Tailwind
- **Google Apps Script** as a serverless write endpoint
- **Google Sheets** as the datastore

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Landing page and form |
| `sucesso.html` | Post-submission confirmation |
| `privacidade_termos.html` | Privacy policy and terms |
| `tailwind.config.js` | Design tokens and brand colors |

## Configuration

The Apps Script endpoint is set in `index.html`:

```js
const SHEET_URL = "<your Apps Script /exec deployment URL>";
```

Deploy the Apps Script with access set to **Anyone**, then paste the resulting
`/exec` URL. Rotate the deployment if the URL is ever exposed somewhere it
should not be.

---

# Landing Page de Captação de Leads (Anhanguera)

Site de página única para captação de leads, feito para uma campanha de
parceria. O visitante escolhe a organização parceira, envia o formulário e o
lead cai direto em uma planilha do Google que o time de marketing já usa. Sem
CRM, sem backend, sem ferramenta nova para ninguém aprender.

## O problema que resolve

O time precisava captar leads de parceria e agir sobre eles no mesmo dia. Uma
integração completa de CRM levaria semanas e imporia um fluxo novo a pessoas que
trabalham dentro de planilhas. Usar o Google Sheets como camada de dados
eliminou esse atrito por completo.

## Como funciona

```
Formulário  ->  fetch POST (com fallback em sendBeacon)  ->  Google Apps Script  ->  Google Sheets
```

O fallback com `sendBeacon` não é detalhe. Ele mantém o envio vivo quando o
navegador já está descarregando a página, que é exatamente o que acontece quando
o usuário de celular fecha a aba logo depois de tocar em enviar.

## Stack

- **HTML** e **Tailwind CSS** (compilado a partir do `input.css`)
- **JavaScript puro**, sem framework e sem build além do Tailwind
- **Google Apps Script** como endpoint serverless de escrita
- **Google Sheets** como armazenamento

## Estrutura

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Landing page e formulário |
| `sucesso.html` | Confirmação pós-envio |
| `privacidade_termos.html` | Política de privacidade e termos |
| `tailwind.config.js` | Tokens de design e cores da marca |

## Configuração

O endpoint do Apps Script fica definido no `index.html`:

```js
const SHEET_URL = "<URL /exec do seu deployment do Apps Script>";
```

Publique o Apps Script com acesso definido como **Qualquer pessoa** e cole a URL
`/exec` resultante. Rotacione o deployment caso a URL seja exposta em algum
lugar indevido.
