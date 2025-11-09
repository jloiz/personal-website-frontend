import { Image } from "@heroui/react";

interface PropTypes {
  pageTitle: string;
}

export default function ComingSoon({ pageTitle }: PropTypes) {
  return (
    <>
      <div className="flex flex-row item-center mt-8 justify-center">
        <p>{`${pageTitle} Page content coming soon!`}</p>
      </div>
      <div className="flex flex-row item-center mt-8 justify-center">
        <Image
          isBlurred
          src={"/placeholder.gif"}
          alt={"Watch this space"}
          width={400}
        />
      </div>
    </>
  );
}
