import type { NextPage } from "next";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log("====================================");
  console.log(session);
  console.log("====================================");
  return <div></div>;
};

