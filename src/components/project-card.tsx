import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  CardFooter,
} from "@heroui/react";

interface PropTypes {
  project: string;
}

export default function ProjectCard({ project }: PropTypes) {
  const titleMap = {
    "website-frontend": "Personal Website - Front-end",
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
  // ToDo: Ideas for footer content: GitHub icon with gh link, detailed information button, linking to specifics
  //  of project (maybe can add this to the readme of the project?)
  const footerMap = {
    "website-frontend": <p>A website to showcase projects and learning</p>,
    "to-do-go": <p>A CRUD app using Go and Postgres</p>,
  };

  return (
    <>
      <Card isFooterBlurred={true} isHoverable={true} className="shadow-xl shadow-blue-600/50 ring-2 ring-blue-600/50 ">
        <CardHeader className="justify-center items-center">
          {titleMap[project]}
        </CardHeader>
        <div className="flex flex-col justify-center items-center">
          {imageMap[project]}
        </div>
        <CardFooter>{footerMap[project]}</CardFooter>
      </Card>
    </>
  );
}
