import { Button } from "@heroui/react";
import Github from "../sprites/github";
import { Image } from "@heroui/react";
import { link } from "node:fs";

interface PropTypes {
  repoLink: string;
}

export default function GithubButton({ repoLink }: PropTypes) {
  const octoImage = (
    <>
      <Image alt={"Website image"} src={"/github-mark-white.png"} width={27} />
    </>
  );

  function handleClick(link: string) {
    window.open(link, "_blank");
  }

  return (
    <>
      <Button
        className="buttonStyle ml-2"
        endContent={octoImage}
        onPress={() => {
          handleClick(repoLink);
        }}
      >
        GitHub
      </Button>
    </>
  );
}
