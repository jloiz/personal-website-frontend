"use client";

import ComingSoon from "../../components/coming-soon";

export default function Articles() {
  return(
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="mt-5 text-3xl font-bold underline">Articles</h1>
      </div>
      <ComingSoon pageTitle={"Articles"}/>
    </>
  )
}