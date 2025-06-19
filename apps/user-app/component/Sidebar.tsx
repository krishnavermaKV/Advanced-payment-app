"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex items-center cursor-pointer p-2 pl-8 rounded-md transition-colors duration-200 ${
        selected ? "text-[#6a51a6] bg-slate-100" : "text-slate-500 hover:text-[#6a51a6] hover:bg-slate-100"
      }`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="pr-3 text-lg">{icon}</div>
      <div className={`font-semibold`}>{title}</div>
    </div>
  );
};
