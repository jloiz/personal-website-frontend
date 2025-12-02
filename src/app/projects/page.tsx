"use client";

import ComingSoon from "../../components/coming-soon";

export default function Projects() {

  const projects = ["website-frontend", "to-do-go"]

  return (
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="mt-3 text-3xl font-bold underline">Projects</h1>
      </div>
      <div className="flex flex-row items-center justify-center px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full px-2 sm:px-16">
          {projects.map((proj) => {
          return(
            <p>
              {proj}
            </p>
          )
        })}
        </div>

      </div>
    </>
  );
}
