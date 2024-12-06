import profile from "../../Persada1.jpeg";

function AboutPage() {
  return (
    <div className="px-16 py-8 flex justify-between ">
      <img
        src={profile}
        alt="profile-pic"
        className="rounded-md"
        width={300}
      />

      <div className="gap-4 flex flex-col justify-center items-end">
        <p className="w-[50%] h-full text-right text-gold text-xl">
          I’m a passionate Front-End Developer
          with 3 years of hands-on experience
          crafting dynamic, JavaScript-driven
          applications. Enthusiastic about
          creating responsive web designs and
          championing best practices in code
          implementation, I thrive on solving
          complex challenges to deliver seamless
          and engaging user experiences.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
