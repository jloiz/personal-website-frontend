"use client";
// ToDo add path alias
import ComingSoon from "../../components/coming-soon";

export default function () {
  return (
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="mt-5 text-3xl font-bold underline">Profile</h1>
      </div>
      <>
        <ComingSoon pageTitle={"Profile"} />
      </>
    </>
  );
}
