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
  return (
    <>
      <Card isPressable onPress={() => router.push(`/${pageName.toLowerCase()}`)}>
        <CardHeader className="item-center justify-center">
          {pageName}
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col items-center justify-center overflow-visible py-2 w-full">
        {/*<Image*/}
        {/*  className="items-center justify-center"*/}
        {/*    isBlurred*/}
        {/*    removeWrapper*/}
        {/*    src={"/fallback.png"}*/}
        {/*    alt={"placeholder image"}*/}
        {/*    width={100}*/}
        {/*  />*/}
          <CodeIcon></CodeIcon>
        </CardBody>
        {/*<Image*/}
        {/*  className="items-center justify-center"*/}
        {/*  removeWrapper*/}
        {/*  src={"/fallback.png"}*/}
        {/*  alt={"placeholder image"}*/}
        {/*  // width={100}*/}
        {/*/>*/}

      </Card>

    </>
  );
}
