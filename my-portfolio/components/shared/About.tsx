import Profile from "./Profile";

const About = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-col">
      <Profile />
    </div>
  );
};

export default About;
