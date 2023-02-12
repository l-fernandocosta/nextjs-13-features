import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Sign in",
};

const SigninPage = () => {
  return (
    <div>
      <h1>SigninPage</h1>
      <Link href={"/app"}>NAVEGAR PARA DASHBOARD</Link>
    </div>
  );
};

export default SigninPage;
