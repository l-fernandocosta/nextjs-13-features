import React from "react";

export const UserRepositories = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://api.github.com/users/l-fernandocosta/repos",
    {
      cache: "no-store",
    }
  );

  const user_repositories = await response.json();
  return (
    <div>
      <h1>USER REPOSITORIES: </h1>
      <pre>{JSON.stringify(user_repositories, null, 2)}</pre>
    </div>
  );
};
