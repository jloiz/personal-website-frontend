import {
  Card,
  CardHeader,
  Image,
  CardFooter,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from "@heroui/react";
import { useMediaQuery } from "react-responsive";
import GithubButton from "./github-button";
import WebsiteFrontendText from "./texts/projects/website-frontend-text";

interface PropTypes {
  project: string;
}

export default function ProjectCard({ project }: PropTypes) {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const titleMap = {
    "website-frontend": "Personal Website: Front-end",
    "to-do-go": "To Do in Go",
  };

  const imageMap = {
    "website-frontend": (
      <Image
        removeWrapper
        className=""
        height={200}
        alt={"Website image"}
        src={"/website.png"}
      />
    ),
    "to-do-go": <Image alt="Golang gopher" height={200} src={"/gopher.png"} />,
  };

  const githubButtonsMap = {
    "website-frontend": (
      <GithubButton
        repoLink={"https://github.com/jloiz/personal-website-frontend"}
      />
    ),
    "to-do-go": (
      <GithubButton
        repoLink={"https://github.com/jloiz/personal-website-frontend"}
      />
    ),
  };

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
          {githubButtonsMap[project]}
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
          {githubButtonsMap[project]}
        </div>
      </div>
    ),
  };

  const moreMap = {
    "website-frontend": "Personal Website: Front-end",
    "to-do-go": "To Do in Go",
  };

  const moreTextMap = {
    "website-frontend": <WebsiteFrontendText />,
    "to-do-go": <p></p>,
  };

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
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          {...(!isSmallScreen && { size: "2xl" })}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  {moreMap[project]}
                </DrawerHeader>

                <DrawerBody>{moreTextMap[project]}</DrawerBody>

                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  {githubButtonsMap[project]}
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </Card>
    </>
  );
}
