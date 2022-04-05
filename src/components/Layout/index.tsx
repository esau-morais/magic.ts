import React from "react";

type LayoutType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutType) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-4">{children}</div>
  );
}
