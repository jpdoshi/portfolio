const index = () => {
  return (
    <section className="p-6 absolute top-[20vh] h-[80vh] xl:top-[20vh] xl:h-[80vh] left-0 w-full overflow-hidden">
      <div className="grid grid-cols-1 gap-3 md:gap-[32px] xl:grid-cols-2">
        <div>
          <h1 className="text-[30px] md:text-[40px] xl:text-[50px] font-semibold leading-[1.4]">
            Front-End Engineer{" "}
            <span className="font-extralight text-red-400">|</span> React Web &
            Native Dev
          </h1>
        </div>
        <div className="xl:pt-3">
          <p className="text-neutral-700 md:text-lg font-medium leading-[1.6] tracking-normal">
            I'm a Frontend Engineer with a strong focus on the React ecosystem.
            I build scalable web and mobile apps using React/Next and React
            Native. In my current role, I work on creating clean, maintainable,
            and reusable front-end architectures. I enjoy transforming complex
            requirements into intuitive and performant user interfaces. I'm
            passionate about building high-quality, cross-platform user
            experiences.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 xl:translate-y-[10vh] text-center">
        <p className="text-[17dvw] md:text-[18dvw] xl:text-[19dvw] xl:font-light">
          TheJDDev.
        </p>
      </div>
    </section>
  );
};

export default index;
