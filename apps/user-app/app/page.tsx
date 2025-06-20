
import { PrismaClient } from "@repo/db/client";
import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";


const client = new PrismaClient();

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/dashboard');
  } else {
    redirect('/api/auth/signin');
  }

  return (
    <div className={"bg-black"}>
      <div className="bg-blue-700">light blue</div>
      <div className="bg-blue-500">regular blue</div>
      <div className="bg-blue-900">dark blue</div>
    </div>
  );
}
