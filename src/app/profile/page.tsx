"use client";
// ToDo add path alias
import { Image } from "@heroui/react"
import ProfileText from "../../components/texts/profile-text";

export default function () {
  return (
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="mt-3 text-3xl font-bold underline">Profile</h1>
      </div>
      <div className="lg:mx-8 mx-4 mt-5 md:flex md:flex-row">
          <div className=" lg:w-1/5 md:w-2/5 lg:mr-10 mr-3 float-left">
          <Image className="md:w-[300px] w-[150px] lg:w-full lg:h-auto mb-2"
            isBlurred
            src={"/me.jpg"}
            alt={"Image of Joshua"}
          />
          </div>
          <div className="lg:w-4/5 md:w-3/5 mb-4">
            <ProfileText/>
          </div>
        </div>
    </>
  );
}
