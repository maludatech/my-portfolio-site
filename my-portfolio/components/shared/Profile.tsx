"use client";

import { DEV_NAME } from "@/libs/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[80vh] gap-[5rem] px-8">
      <div className="flex justify-center md:h-[400px] md:w-[400px] h-[50vw] w-auto my-auto">
        <Image
          src="/assets/images/profile-pic-portrait.jpg"
          alt="Victor Ugochukwu profile picture"
          width={400}
          height={400}
          className="object-contain rounded-full"
        />
      </div>
      <div className="text-center flex flex-col gap-2 justify-center items-center">
        <h2 className="text-lg text-[#555555] font-semibold">Hello, I'm</h2>
        <h1 className="text-5xl font-semibold">Victor Ugochukwu</h1>
        <h2 className="text-2xl text-[#555555] font-semibold">
          Fullstack Developer
        </h2>
        <div className="flex gap-4 py-2">
          <Button
            variant={"outline"}
            className="border-primary py-2 rounded-full font-semibold text-bold hover:bg-[#555555] hover:text-white hover:border-none"
            onClick={() => window.open("/assets/my-resume.pdf")}
          >
            Download CV
          </Button>
          <Button
            variant={"default"}
            className="border-primary py-2 rounded-full font-semibold text-bold bg-[#555555] text-white hover:bg-black"
            onClick={() => router.push("/#contact")}
          >
            Contact Info
          </Button>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/assets/icons/linkedin.png"}
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/nwite-victor-95aaa31b0")
            }
            alt="icon.png"
            width={40}
            height={40}
          />
          <Image
            src="/assets/icons/github.png"
            className="icon"
            onClick={() =>
              window.open("https://github.com/maludatech?tab=overview")
            }
            alt="icon.png"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
