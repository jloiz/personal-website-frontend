import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  CardFooter,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent
} from "@heroui/react";
import { useState } from "react";

interface PropTypes {
  project: string;
}

export default function ProjectCard({ project }: PropTypes) {
  const [moreTrayActive, setMoreTrayActive] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function handleMoreClick() {
    return;
  }

  const titleMap = {
    "website-frontend": "Personal Website: Front-end",
    "to-do-go": "To Do in Go",
  };

  const imageMap = {
    "website-frontend": (
      <Image
        removeWrapper
        className=""
        //width={50}
        height={200}
        alt={"Website image"}
        src={"/website.png"}
      />
    ),
    "to-do-go": <Image alt="Golang gopher" height={200} src={"/gopher.png"} />,
  };
//ToDo: Componentise buttons and add icon. Add specific text for each
  const footerMap = {
    "website-frontend": (
      <div className="flex justify-between items-center w-full">
        <p>A website to showcase projects and learning</p>
        <div>
          <Button
            className="buttonStyle ml-2 mb-1"
            color="primary"
            onPress={onOpen}
          >
            More
          </Button>
          <Button className="buttonStyle ml-2">GitHub</Button>
        </div>
      </div>
    ),
    "to-do-go": (
      <div className="flex justify-between items-center w-full">
        <p>A CRUD app using Go and Postgres</p>
        <div>
          <Button
            className="buttonStyle ml-2 mb-1"
            color="primary"
            onPress={onOpen}
          >
            More
          </Button>
          <Button className="buttonStyle ml-2">GitHub</Button>
        </div>
      </div>
    ),
  };

  const moreMap = {
    "website-frontend": "Personal Website: Front-end",
    "to-do-go": "To Do in Go",
  }

  return (
    <>
      <Card
        isFooterBlurred={true}
        isHoverable={true}
        className="shadow-xl shadow-blue-600/50 ring-2 ring-blue-600/50 "
      >
        <CardHeader className="justify-center items-center">
          {titleMap[project]}
        </CardHeader>
        <div className="flex flex-col justify-center items-center">
          {imageMap[project]}
        </div>
        <CardFooter>{footerMap[project]}</CardFooter>
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <DrawerBody>
                <p>
                  {moreMap[project]}
                </p>
              </DrawerBody>
            )}
          </DrawerContent>
        </Drawer>
      </Card>
    </>
  );
}
