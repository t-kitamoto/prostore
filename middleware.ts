// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Array of regex patterns of paths we want to protect
const protectedPaths = [
  /^\/shipping-address/,
  /^\/payment-method/,
  /^\/place-order/,
  /^\/profile/,
  /^\/user\/.*/,
  /^\/order\/.*/,
  /^\/admin/,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ 1. sessionCartId がなければ生成
  const sessionCartId = request.cookies.get('sessionCartId');
  const response = NextResponse.next();

  if (!sessionCartId) {
    const newSessionCartId = crypto.randomUUID();
    response.cookies.set('sessionCartId', newSessionCartId);
  }

  // ✅ 2. ログインが必要なパスかチェック
  const isProtected = protectedPaths.some((regex) => regex.test(pathname));

  // ✅ 3. ログインしていない場合は /sign-in にリダイレクト
  const isLoggedIn =
    request.cookies.get('authjs.session-token') ||
    request.cookies.get('__Secure-authjs.session-token');

  if (isProtected && !isLoggedIn) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // 最終的なレスポンス返却
  return response;
}
