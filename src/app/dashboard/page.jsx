'use client'
// import { useAuthProvider } from "@/context/auth/AuthContext";
// import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

// import { useEffect } from "react";
async function getData(id = 1) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default  function Dashboard() {
  const projects =  getData();
  // const [{user}] = useAuthProvider();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // },[router, user])
  const handleClick = () => {
  };
  return (
    <div >
      <h1>Dashboard</h1>
      <h2>Projects</h2>
      <Button onClick={handleClick}>Try again</Button>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      {/* <p>Bienvenido, {user && user.username}</p> */}
    </div>
  );
}
