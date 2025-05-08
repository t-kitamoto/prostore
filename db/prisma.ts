// db/prisma.ts

import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Neon を WebSocket 経由で使う設定（必要な場合）
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaNeon({ connectionString });

// PrismaClient を初期化（Decimal 型の string 変換付き）
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
