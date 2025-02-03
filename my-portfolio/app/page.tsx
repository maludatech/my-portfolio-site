import About from "@/components/shared/About";
import Profile from "@/components/shared/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="body-container font-poppins">
      <About id={"#about"} />
    </div>
  );
}
