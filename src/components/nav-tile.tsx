import { Card, CardHeader, CardBody, Divider, Image } from "@heroui/react";

interface PropTypes {
  pageName: string;
}

//ToDo: Think of a new font for cards

export default function NavTile({ pageName }: PropTypes) {
  return (
    <>
      <Card isPressable onPress={(e) => console.log(pageName)}>
        <CardHeader className="item-center justify-center">
          {pageName}
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col items-center justify-center overflow-visible py-2 w-full">
        <Image
          className="items-center justify-center"
            isBlurred
            src={"/fallback.png"}
            alt={"placeholder image"}
            width={100}
          />
        </CardBody>
      </Card>
    </>
  );
}
