import Link from "next/link";
import { Suspense } from "react";
import { UserRepositories } from "@components/user-repository";

const DashboardPage = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Link href={"/"}>
        <h1>home</h1>
      </Link>

      <Suspense fallback={<p>CARREGANDO REPOSITÓRIOS</p>}>
        {/* @ts-ignore Async Server Component  */}
        <UserRepositories />
      </Suspense>
    </>
  );
};

export default DashboardPage;
