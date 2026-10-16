# 🤖 AI Web — On-device AI in the browser

[![CI](https://github.com/gabrantoniette/ai-web/actions/workflows/ci.yml/badge.svg)](https://github.com/gabrantoniette/ai-web/actions/workflows/ci.yml)

Demos of **AI running 100% in the browser**, with no server and no API key, using
[Chrome's Built-in AI APIs](https://developer.chrome.com/docs/ai/built-in) powered by **Gemini Nano**.

Study project built during the **Software Engineering with Applied AI** graduate program (UNIPDS).

## Demos

| Folder / file | What it does | APIs used |
| --- | --- | --- |
| [`web-test.html`](web-test.html) | Checks model availability and triggers the download. | `LanguageModel` |
| [`web1.html`](web1.html) | Fixed prompt with a streamed answer rendered as Markdown. | `LanguageModel.promptStreaming` |
| [`web2/`](web2) | Chat with `temperature` and `topK` controls and a stop button. | `LanguageModel`, `AbortController` |
| [`web3/`](web3) | Multimodal chat (text + image/audio) that translates answers from English to Portuguese, structured as MVC. | `LanguageModel`, `Translator`, `LanguageDetector` |

## Requirements

- A recent **Google Chrome** (Stable 138+ or Canary) on a desktop with supported hardware
  ([Gemini Nano requirements](https://developer.chrome.com/docs/ai/get-started#hardware)).
- Enable these flags in `chrome://flags` and restart the browser:
  - `#prompt-api-for-gemini-nano` (plus `#prompt-api-for-gemini-nano-multimodal-input` for `web3`)
  - `#translation-api`
  - `#language-detector-api`
- Node.js 22+ (only to serve the files and run the linter).

On first run Chrome downloads the model (a few GB); follow the progress in the console or at `chrome://on-device-internals`.

## Getting started

```bash
cd web3          # or web2
npm install
npm start        # http-server at http://localhost:8080
```

The standalone files at the root (`web-test.html`, `web1.html`) can be opened by serving the root with `npx http-server .`.

## `web3` structure

```
web3/
├── index.js                     # bootstrap: checks requirements and wires the layers
├── controllers/formController.js
├── services/aiService.js        # LanguageModel session, streaming, abort
├── services/translationService.js
└── views/view.js                # DOM manipulation
```

## Code quality

```bash
npm install
npm run lint     # ESLint (JS) + HTMLHint (HTML)
```

The same lint runs on GitHub Actions on every push and pull request to `main`.

## Author

Gabriel Antoniette — [@gabrantoniette](https://github.com/gabrantoniette)
