"use client";
// ToDo add path alias
import { Image } from "@heroui/react"
import ProfileText from "../../components/profile-text";

export default function () {
  console.log(window.screen.width)
  return (
    <>
      <div className="flex flex-row item-center mb-2; justify-center">
        <h1 className="mt-3 text-3xl font-bold underline">Profile</h1>
      </div>
      <div className="lg:mx-16 mx-4 mt-5 md:flex md:flex-row">
          <div className=" lg:w-1/5 md:w-2/5 lg:mr-10 mr-3 float-left">
          <Image className="md:w-[300px] w-[150px]"
            isBlurred
            src={"/me.jpg"}
            alt={"Image of Joshua"}
            //width={300}
          />
          </div>
          <div className="lg:w-4/5 md:w-3/5">
            <ProfileText/>
          </div>
        </div>

      </>
  );
}
