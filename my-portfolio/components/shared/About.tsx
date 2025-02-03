import Profile from "./Profile";

const About = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <Profile />
    </div>
  );
};

export default About;
