"use client"

import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { useRouter } from "next/navigation";
import CodeIcon from "../sprites/code-icon";
import ProfileIcon from "../sprites/profile-icon";
import ArticlesIcon from "../sprites/articles-icon";
import DocsIcon from "../sprites/docs-icon";


interface PropTypes {
  pageName: string;
}

//ToDo: Think of a new font for cards

export default function NavTile({ pageName }: PropTypes) {
  const router = useRouter()
  const pageNameLower = pageName.toLowerCase()
  const navItemColour = "#0077FF"
  // this is tailwind green-500, don't make both match for a bit of contrast
  // const navItemColour = "#22c55e"
  const spriteMap = {
    "profile": <ProfileIcon colour={navItemColour}/>,
    "projects": <CodeIcon colour={navItemColour} />,
    "articles": <ArticlesIcon colour={navItemColour}/>,
    "docs": <DocsIcon colour={navItemColour}/>,
  }

  return (
    <>
      <Card
        className="shadow-xl shadow-blue-600/50 ring-2 ring-blue-600/50 "
        isPressable
        isHoverable={true}
        onPress={() => router.push(`/${pageNameLower}`)}
      >
        <CardHeader className="item-center justify-center">
          {pageName}
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col items-center justify-center overflow-visible py-2 w-full">
          {spriteMap[pageName.toLowerCase()]}
        </CardBody>
      </Card>
    </>
  );
}
