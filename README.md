# DemoStore（Next.js ECサイトポートフォリオ）

このアプリは、Udemy講座「Next.js Ecommerce 2025」をベースに構築したECサイトです。  
ポートフォリオとして活用するにあたり、主に以下のような微調整を行っています。

- サイト名（ProStore → DemoStore）変更
- 一部UIの修正
- デプロイ用の設定および表示最適化
  
レポジトリ名は元教材に準じて「ProStore」のままですが、サイト上では「DemoStore」として公開しています。

## デプロイURL
https://prostore-kappa-six.vercel.app/

## 使用技術
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui　Radix UIベースの再利用可能なコンポーネントライブラリ 
- Prisma + PostgreSQL (Neon) 　型安全なORMとクラウドDBを用いたデータ管理 
- Zod　スキーマ定義による型安全なバリデーション
- Auth.js　OAuthや認証機能の実装を簡潔に管理
- PayPal　オンライン決済の導入 
- Stripe　カード決済の実装  
- Uploadthing 画像アップロード機能

---

![サンプルイメージ](https://github.com/t-kitamoto/prostore/blob/main/public/images/sample.png)

---

## 元教材
Next.js Ecommerce 2025 - Shopping Platform From Scratch - Udemy by Traversy Media　https://www.udemy.com/course/nextjs-ecommerce-course
