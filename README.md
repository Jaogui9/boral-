# Boralá — Starter Expo React Native App

Este repositório é um **projeto inicial** (template) para o aplicativo **Boralá** — um app de divulgação e venda de ingressos para eventos locais (Piracicaba, Limeira e região).

## O que está incluído
- Expo (React Native) app básico
- Autenticação com Firebase (placeholder para config)
- Feed de eventos simples (mock)
- Tela de detalhes do evento
- Tela para organizadores criarem eventos (mock)
- Estrutura para integrar pagamentos (MercadoPago/Stripe) — placeholder

## Como usar
1. Instale o Expo CLI (se necessário):
```bash
npm install -g expo-cli
```
2. Entre na pasta:
```bash
cd borala-starter
```
3. Instale dependências:
```bash
npm install
```
4. Configure o Firebase:
- Abra `src/config/firebaseConfig.js` e cole as suas credenciais do Firebase.

5. Rode o app:
```bash
expo start
```

## Deploy
- Para publicar: siga instruções do Expo para build: `eas build` ou `expo build`.
- Para backend (opcional): use Firebase Firestore/Functions, Supabase, ou seu servidor em Node.js.

## Observações
Este é um **ponto de partida**. Posso estender com:
- Integração real com Firestore (CRUD de eventos)
- Pagamentos (Stripe/MercadoPago)
- Push notifications
- UI/UX avançada (Figma -> implementação)

Bom deploy! 🚀
