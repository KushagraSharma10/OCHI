import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.3' className=" w-full h-screen bg-zinc-100 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "9vw" }}
                    transition={{ease:[0.76,0,0.24,1],duration:1}}
                    className="mr-[1vw] w-[9vw] h-[5.9vw] relative rounded-md -top-[1.1vw] overflow-hidden bg-red-500"
                  >
                    <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </motion.div>
                )}
                <h1 className='flex items-center  uppercase leading-[.75] pt-[2vw] -mb-[1vw]  text-[9vw] font-["Founders_Grotesk"] tracking-tighter font-regular'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
        {[
          "For Public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-[1.1vw] font-semilight tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-1">
          <div className="px-5 py-2 uppercase font-semibold text-[.9vw] border-[1px] border-zinc-500 rounded-full">
            Start the project
          </div>
          <div className="w-9 h-9 border-[1px] text-xl flex items-center justify-center border-zinc-500 rounded-full text-black">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
