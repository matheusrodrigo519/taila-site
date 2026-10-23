# Taila — site público

Página de apresentação, reflexões e consulta de horários, publicada pelo GitHub Pages a partir de `main/docs`. O botão de agendamento abre o WhatsApp com a data e o horário escolhidos. A confirmação é feita na conversa com a terapeuta.

## Publicação e desenvolvimento

O código da interface está em `src/`. Para atualizar os arquivos publicados, execute `npm install`, `npm run check` e `npm run build`, e envie o código e `docs/` ao GitHub. O build inclui `docs/.nojekyll`. Em Settings → Pages, a origem é `main`, pasta `/docs`. O caminho base está configurado para `/taila-site/`.

## Agenda e área da terapeuta

GitHub Pages hospeda a interface estática. O banco de dados, a agenda compartilhada, as publicações e a área administrativa permanecem no serviço existente, configurado em `src/lib/service.ts`. A interface consulta apenas as APIs públicas, sem cookies nem credenciais. As alterações feitas pela terapeuta são lidas diretamente desse serviço; a agenda não depende de dados salvos no navegador do visitante.

A opção **Área da terapeuta** abre o painel seguro no serviço existente. O domínio desse painel continua sendo `taila-acolher.daringboar3.chatgpt.site`; o endereço de divulgação da página é do GitHub Pages. Senhas, dados de clientes e chaves de servidor não fazem parte deste repositório. O projeto completo permanece no repositório privado `taila-terapia`.

Textos identificados como ilustrativos são sugestões editoriais e podem ser substituídos pelo painel. A imagem de ambiente é ilustrativa e não representa um consultório real.
