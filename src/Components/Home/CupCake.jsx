import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
import { light } from "../../assets/Images/images.js";
export default function CupCake({ cc }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="rounded-t-3xl relative w-[10rem] h-[7rem] md:w-[13rem] md:h-[10rem] border-[1px] border-main bg-gradient-to-t from-main to-dark1"
    >
      <img
        src={cc}
        className="absolute animate-float hover:scale-105 transition-all -top-12"
        alt=""
      />
    </motion.div>
  );
}
