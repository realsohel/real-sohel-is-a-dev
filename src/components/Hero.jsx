import {motion} from "framer-motion";
import {styles} from "../styles"
import {ComputersCanvas} from "./canvas"
import { useEffect, useState } from "react";

const Hero = () => {
  const [renderCanvas, setRenderCanvas] = useState(false);

  useEffect(() => {
    // Trigger a re-render of ComputersCanvas when the component mounts
    setRenderCanvas(true);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}  absolute inset-0 top-[60px] max-w-7xl mx-auto 
        flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mohd Sohel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An entry level Fullstack Software Developer, <br className="sm:block hidden"/> passionate about building excellent websites that <br className="sm:block hidden"/> improves the lives of those around me.
          </p>
        </div>
      </div>

      {renderCanvas && <ComputersCanvas />}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=' w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero