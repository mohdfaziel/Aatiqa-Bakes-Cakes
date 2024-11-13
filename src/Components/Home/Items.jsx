import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
export default function Item({ item }) {
  return (
    <div
     
      className="text-sm hover:scale-105 transition-all text-unactive w-fit rounded-md px-4 py-2 border-[1px] border-unactive"
    >
      {item}
    </div>
  );
}
