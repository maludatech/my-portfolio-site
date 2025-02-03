import { DEV_NAME } from "@/libs/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const Profile = () => {
  return (
    <div className="flex justify-center h-[80vh] gap-[5rem] items-center">
      <div className="h-[400px] w-[400px] my-auto mx-0 relative">
        <Image
          src={"/assets/images/profile-pic-portrait.jpg"}
          alt={`${DEV_NAME} profile picture`}
          fill
          className="contain rounded-3xl"
        />
      </div>
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-lg text-[#555555] font-semibold">Hello, I'm</h2>
        <h1 className="text-5xl font-semibold">Victor Ugochukwu</h1>
        <h2 className="text-2xl text-[#555555] font-semibold">
          Fullstack Developer
        </h2>
        <div className="flex justify-between">
          <Button
            variant={"outline"}
            className="border-primary rounded-full font-semibold"
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
