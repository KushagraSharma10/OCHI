import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '.1' className="w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]">
      <div className="text border-t-2  border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-semibold tracking-tighter font-['Founders_Grotesk'] -mb-[6vw] pt-10 uppercase pr-20"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-semibold tracking-tighter font-['Founders_Grotesk'] -mb-[6vw] pt-10 uppercase pr-20 "
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
