"use client"

import { Card, CardHeader, CardBody, Divider, Image, Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import CodeIcon from "../sprites/code-icon";


interface PropTypes {
  pageName: string;
}

//ToDo: Think of a new font for cards

export default function NavTile({ pageName }: PropTypes) {
  const router = useRouter()
  const pageNameLower = pageName.toLowerCase()
  const navItemColour = "#0077FF"
  const spriteMap = {

    "projects": <CodeIcon colour={navItemColour} />,

  }

  return (
    <>
      <Card
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
