import { cookies, headers } from "next/headers";

export const User = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const user_cookies = cookies();
  const user_headers = headers();

  const response = await fetch("https://api.github.com/users/l-fernandocosta");
  const user = await response.json();

  return (
    <div>
      <h1>USER : </h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(user_cookies.getAll(), null, 2)} COOKIES</pre>
      <pre>{JSON.stringify(user_headers.entries(), null, 2)} HEADERS</pre>
    </div>
  );
};
