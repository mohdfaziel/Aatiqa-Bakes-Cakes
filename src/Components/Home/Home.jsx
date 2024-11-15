import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import { cc1, cc2, light, mc1 } from "../../assets/Images/images";
import CupCake from "./CupCake";
import Item from "./Items";
export default function Home() {
  const items = ["Cakes", "Cookies", "Doughnuts", "Pastries"];
  return (
    <div
      id="home"
      className="w-full min-h-screen pt-[5rem] md:py-0 px-[1rem] md:px-[6rem] bg-dark1 flex md:flex-row flex-col justify-center items-center"
    >
      <div className="container h-full gap-3 md:gap-0 w-full flex md:flex-row flex-col-reverse justify-center items-center">
        <div className="cake  transition-all relative  h-full w-full md:w-[50%] flex justify-center items-center flex-col">
          <motion.img
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            src={mc1}
            whileHover={{ scale: 1.05 }}
            className="w-[30rem] z-10 -m-3"
            alt=""
          ></motion.img>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="items z-20 flex justify-center items-center flex-wrap gap-4"
          >
            {items.map((item) => (
              <Item item={item} />
            ))}
          </motion.div>
          <img className="absolute animate-pulse" src={light} alt="" />
        </div>
        <div className="info w-full md:w-[50%] md:h-screen max-h-[40rem] flex flex-col justify-between items-start">
          <div className="upper md:pt-[7rem] max-w-[30rem] flex justify-center text-center md:text-start items-center md:items-start gap-2 flex-col">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="md:text-6xl text-5xl text-active font-bold"
            >
              Where Every <span className="text-main">Bite</span> is a Delight.
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="text-sm w-[80%] md:w-full text-unactive"
            >
              At our bakery, Each treat is crafted with care and the finest
              ingredients to make every bite a moment of pure joy.
            </motion.p>
            <motion.a
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
             href="https://wa.me/919906072559?text=Hello%20Aatiqa%20Bakes%20%26%20Cakes%0A%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
            >
              <button className="w-24 self-center md:self-start mt-5 hover:scale-105 font-semibold bg-main py-1 rounded-full transition-all">
                Order
              </button>
            </motion.a>
          </div>
          <div className="lower hidden md:flex justify-center md:justify-start w-full items-center gap-5">
            <CupCake cc={cc1} />
            <CupCake cc={cc2} />
          </div>
        </div>
      </div>
        <div className="lower mt-16 md:hidden flex justify-center md:justify-start w-full items-center gap-5">
            <CupCake cc={cc1} />
            <CupCake cc={cc2} />
          </div>
    </div>
  );
}
