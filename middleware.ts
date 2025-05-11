// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionCartId = request.cookies.get('sessionCartId');

  if (!sessionCartId) {
    const newSessionCartId = crypto.randomUUID();

    // 新しいヘッダーを複製（実質使われないが型的に必要）
    const requestHeaders = new Headers(request.headers);

    // レスポンスを作成
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    // クッキーをレスポンスに設定
    response.cookies.set('sessionCartId', newSessionCartId);

    return response;
  }

  return NextResponse.next();
}
