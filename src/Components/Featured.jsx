import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const Hoverhandle = (index) => {
    cards[index].start({ y: "0" });
  };
  const HoverhandleEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-4 bg-zinc-100 text-black pt-20">
      <div className="w-full border-b-[.1vw] border-zinc-700 pb-12">
        <h1 className="text-7xl font-['Neue_Montreal']">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 w-full mt-10">
          <motion.div
            onHoverStart={() => Hoverhandle(0)}
            onHoverEnd={() => HoverhandleEnd(0)}
            className="cardcontainer relative w-1/2  h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 text-[#CDEA68] -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => Hoverhandle(1)}
            onHoverEnd={() => HoverhandleEnd(1)}
            className="cardcontainer relative w-1/2  h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-8xl z-[9] leading-none tracking-tighter right-full  translate-x-1/2 top-1/2 text-[#CDEA68] -translate-y-1/2">
              {"VIDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
