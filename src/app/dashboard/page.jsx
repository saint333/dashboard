// 'use client'
// import { useAuthProvider } from "@/context/auth/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const projects = await getData();
  console.log("🚀 ~ Dashboard ~ projects:", projects);
  // const [{user}] = useAuthProvider();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // },[router, user])
  return (
    <div className='w-full h-[calc(100%-83px)]'>
      <h1>Dashboard</h1>
      <h2>Projects</h2>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      {/* <p>Bienvenido, {user && user.username}</p> */}
    </div>
  );
}
