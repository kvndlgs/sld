import React from "react";
import dynamic from "next/dynamic";

export default function MyMap() {
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
  });

  return <div className="w-auto h-auto"></div>;
}
