# 🤖 AI Web — IA nativa no navegador

[![CI](https://github.com/gabrantoniette/ai-web/actions/workflows/ci.yml/badge.svg)](https://github.com/gabrantoniette/ai-web/actions/workflows/ci.yml)

Demos de **IA rodando 100% no navegador**, sem servidor e sem chave de API, usando as
[Built-in AI APIs do Chrome](https://developer.chrome.com/docs/ai/built-in) com o modelo **Gemini Nano**.

Projeto de estudo desenvolvido durante a pós **Engenharia de Software com IA Aplicada (UNIPDS)**, com base nas aulas de Erick Wendel.

## Demos

| Pasta / arquivo | O que faz | APIs usadas |
| --- | --- | --- |
| [`web-test.html`](web-test.html) | Verifica a disponibilidade do modelo e dispara o download. | `LanguageModel` |
| [`web1.html`](web1.html) | Prompt fixo com resposta em streaming renderizada como Markdown. | `LanguageModel.promptStreaming` |
| [`web2/`](web2) | Chat com ajuste de `temperature` e `topK` e botão de parar. | `LanguageModel`, `AbortController` |
| [`web3/`](web3) | Chat multimodal (texto + imagem/áudio) com tradução automática EN → PT, organizado em MVC. | `LanguageModel`, `Translator`, `LanguageDetector` |

## Requisitos

- **Google Chrome** recente (Stable 138+ ou Canary) em desktop com hardware compatível
  ([requisitos do Gemini Nano](https://developer.chrome.com/docs/ai/get-started#hardware)).
- Habilite as flags em `chrome://flags` e reinicie o navegador:
  - `#prompt-api-for-gemini-nano` (e `#prompt-api-for-gemini-nano-multimodal-input` para o `web3`)
  - `#translation-api`
  - `#language-detector-api`
- Node.js 22+ (apenas para servir os arquivos e rodar o lint).

Na primeira execução o Chrome baixa o modelo (alguns GB); acompanhe o progresso pelo console ou em `chrome://on-device-internals`.

## Como rodar

```bash
cd web3          # ou web2
npm install
npm start        # http-server em http://localhost:8080
```

Os arquivos soltos da raiz (`web-test.html`, `web1.html`) podem ser abertos servindo a raiz com `npx http-server .`.

## Estrutura do `web3`

```
web3/
├── index.js                     # bootstrap: checa requisitos e liga as camadas
├── controllers/formController.js
├── services/aiService.js        # sessão do LanguageModel, streaming, abort
├── services/translationService.js
└── views/view.js                # manipulação do DOM
```

## Qualidade

```bash
npm install
npm run lint     # ESLint (JS) + HTMLHint (HTML)
```

O mesmo lint roda no GitHub Actions em todo push e pull request para a `main`.

## Créditos

Conteúdo base das aulas de [Erick Wendel](https://github.com/ErickWendel) na pós-graduação Engenharia de Software com IA Aplicada — UNIPDS.
