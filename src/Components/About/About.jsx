import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import { dnt,light } from "../../assets/Images/images";
export default function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen py-[5rem] md:py-0 px-[1rem] md:px-[6rem] bg-dark2 flex justify-center items-center"
    >
      <div
        className="container max-w-[70rem] h-full gap-3 md:gap-0 w-full flex md:flex-row flex-col
       justify-center items-center"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="image flex justify-center items-center w-full md:w-[50%]"
        >
          <img
            src={dnt}
            className="w-[100%] z-10 transition-all hover:scale-105"
            alt=""
          />
        </motion.div>
        <div className="info flex flex-col justify-center md:justify-start md:items-start items-center md:text-start text-center gap-3 md:gap-0 w-full md:w-[50%]">
          <motion.h1 variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }} className="md:text-5xl text-5xl text-active font-bold">
            Aatiqa <span className="text-main">Bakes </span>&{" "}
            <span className="text-main">Cakes</span>
          </motion.h1>
          <motion.p variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }} className="text-sm text-justify md:text-start w-full text-unactive">
            Welcome to our bakery, owned by{" "}
            <span className="text-active">Azhar Qayoom</span> and located in the
            heart of <span className="text-active">Bhadarwah.</span> We blend
            the rich traditions of Kashmiri baking with modern favorites to
            create an unforgettable experience. From the soft, aromatic Kashmiri
            breads and bakarkhani to cakes, doughnuts, pastries, and cookies, each
            item is crafted with the finest ingredients and utmost care. Whether
            savoring the heritage of sheermal or enjoying a classic treat, every
            bite is a celebration of warmth, flavor, and delight.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
