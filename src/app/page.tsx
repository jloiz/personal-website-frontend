"use client";

import NavTile from "../components/nav-tile";

export default function Page() {
  // ToDo: Move to constants and dynamically render with navbar
  const pages: string[] = ["Profile", "Projects", "Articles", "Docs"];

  return (
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="text-3xl font-bold underline mt-3">Welcome!</h1>
      </div>
      <div className="flex flex-row item-center mt-8 justify-center">
        <br />
        <p className="text-center mb-8">
          Welcome to my personal site. This is a one of my personal projects.
          Feel free to explore this site and view my projects, academic works
          and articles.
        </p>
      </div>
      <div className="flex flex-row item-center justify-center px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-2 sm:px-16">
          {pages.map((page) => {
            return <NavTile pageName={page}/>;
          })}
        </div>

      </div>
    </>
  );
}
