# julio

App React + Vite com o [Agentation](https://agentation.com), uma barra de
feedback visual: você clica em qualquer parte da página, escreve uma nota e o
agente de IA recebe o elemento exato e o arquivo/linha do código.

A barra só aparece em desenvolvimento (`npm run dev`), nunca no site publicado.

## Requisitos

- Node.js 22 ou mais novo

## Uso rápido

```bash
npm install
npm run dev
```

Abra http://localhost:5173, clique no botão preto no canto inferior direito,
clique em um elemento e escreva sua nota.

## Conectar ao agente (MCP)

As configurações já estão no repositório, então basta abrir a pasta no agente:

| Agente      | Arquivo                 |
|-------------|-------------------------|
| Claude Code | `.mcp.json`             |
| Cursor      | `.cursor/mcp.json`      |
| VS Code     | `.vscode/mcp.json`      |
| Gemini CLI  | `.gemini/settings.json` |

Para outros agentes (Codex, Grok Build etc.):

```bash
npx add-mcp "npx -y agentation-mcp server"
```

O agente inicia o servidor sozinho (porta 4747) e o app já envia as notas para
ele. Na primeira vez, o agente pede para aprovar o servidor `agentation`.

Depois, peça ao agente:

- **"ver anotações"**: ele lê as notas pendentes, faz as mudanças e marca como resolvidas.
- **"modo vigia"**: ele fica esperando novas notas e resolve cada uma assim que chegam, até você dizer "parar".

## Comandos úteis

```bash
npm run agentation          # sobe o servidor manualmente (sem agente)
npm run agentation:doctor   # verifica se está tudo funcionando
```

Para usar outra porta ou servidor, crie `.env.local` com:

```
VITE_AGENTATION_ENDPOINT=http://localhost:4747
```

Sem o servidor ligado, a barra continua funcionando: as notas ficam no
navegador e podem ser copiadas e coladas no chat.
