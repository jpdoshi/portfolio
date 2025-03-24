"use client";

import { motion } from "framer-motion";

import Button from "../Button";

const About = () => {
  return (
    <section className="content text-center">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="poppins font-bold text-[30px] md:text-[36px] mb-[4px]">
          About Me
        </h2>
        <p className="text-[18px]">
          Hey, I am a Tech Geek from India. Know more about me
        </p>
        <div className="h-[36px]" />
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0, viewTarget: 0.5 }}
          viewport={{ once: true }}
          className="p-[18px] md:p-[24px] xl:p-[32px] text-start bg-[var(--light-color)] relative rounded-[24px]"
        >
          <p className="text-[18px] md:text-[20px] roboto-serif">
            Hey there! I am Jainam Doshi, a Tech Geek from India. I love to
            design cool apps and digital experiences with latest tools and
            technologies.
            <br />
            <br />
            I am Software Engineer who loves to make innovative apps and
            projects. I believe in self learning and have fond of building
            mobile apps as well as web solutions with React Eco-System. You can
            visit Github to know more about my personal projects and follow if
            you find my work helpful.
            <br />
            <br />
            I'm always happy to discuss about new projects and craft new ideas
            with my skill set. You can contact me via whatsapp or E-mail me for
            collaboration or to know more about my work and skills. Feel free to
            contact me anytime, I'd appreciate it.
          </p>
          <img
            className="h-[72px] xl:h-[120px] absolute opacity-5 top-0 left-0"
            src="/images/quotes.png"
            loading="lazy"
          />
          <img
            className="h-[72px] xl:h-[120px] absolute opacity-5 bottom-0 right-0 rotate-180"
            src="/images/quotes.png"
            loading="lazy"
          />
        </motion.div>
        <div className="h-[32px]" />
        <div className="flex">
          <div className="flex mx-auto flex-col md:flex-row gap-[8px] md:gap-[16px]">
            <Button
              href={"mailto:jpdoshi2811@gmail.com"}
              text={"Let's Connect"}
              sameTab={true}
              icon={
                <svg
                  className="translate-y-[20px]"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#fff"
                  />
                </svg>
              }
            />
            <Button
              href={"https://wa.me/919313041034/?text=Hi,%20Jainam"}
              text={"WhatsApp Me"}
              secondary={true}
              icon={
                <svg
                  className="translate-y-[20px]"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#000000"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
