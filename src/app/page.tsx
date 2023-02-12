import Link from "next/link";
import { Suspense } from "react";

import { User } from "@components/user";
import { UserWithButton } from "@components/user-with-button";

export default async function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/app">DASHBOARD</Link>
      <Suspense fallback={<p>CARREGANDO USUÁRIOS....</p>}>
        {/* @ts-ignore Async Server Component  */}
        <User />
      </Suspense>

      <UserWithButton />
    </>
  );
}

// server-side first !
