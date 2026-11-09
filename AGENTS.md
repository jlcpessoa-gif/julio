# julio

App React + Vite. A barra do Agentation aparece só em `npm run dev` e envia as
anotações para o servidor `agentation-mcp` em http://localhost:4747
(configurado em `.mcp.json`, `.cursor/mcp.json`, `.vscode/mcp.json` e `.gemini/settings.json`).

## Anotações do Agentation

- Quando eu disser "ver anotações", chame `agentation_get_all_pending` e trate
  cada anotação: `agentation_acknowledge`, faça a mudança no código e depois
  `agentation_resolve` com um resumo curto do que foi feito.
- Quando eu disser "modo vigia", chame `agentation_watch_annotations` em loop e
  trate cada anotação do mesmo jeito, até eu dizer "parar".
- Se uma anotação não estiver clara, use `agentation_reply` para perguntar em
  vez de adivinhar.
