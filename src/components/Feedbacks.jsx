import { motion } from "framer-motion" 
import { styles } from "../styles"
import { SectionWrapper } from "../hoc" 
import { achievements } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { Pagination } from "swiper/modules"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react"

const AwardCard =({name,description,role,index, designation, company, image})=>{

  return(
    <motion.div
      variants={fadeIn("","spring",index*0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="mt-1">
        <p className="font-semibold text-white tracking-wider text-[18px]">{role}</p>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col ">
            <p className="text-white font-medium text-[14px]">
              <span className="blue-text-gradient">@</span> {company}
            </p>

            
          </div>
          {
            image ? <img 
              src={image} alt={name} 
              className="w-10 h-10 rounded-full object-cover"  
            /> : ""
          }
          
        </div>

      </div>

    </motion.div>
  )
}

const Feedbacks = () => {

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slideLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="mt-12 w-full h-full bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Awards and Achievements.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        
        {!isBeginning && (
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="z-20 left-0 rounded-full my-28 mx-20 opacity-100 hover:opacity-100 absolute cursor-pointer"
          />
        )}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{clickable:true}}
          breakpoints={{
              640:{
                  slidesPerView: 1,
                  spaceBetween: 0,
              },
              768:{
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              1024:{
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {
            achievements.map((achievement,index)=>(
              <SwiperSlide>
                <AwardCard
                  key={achievement.name}
                  index={index}
                  {...achievement}
                />
              </SwiperSlide>
            ))
          }

        </Swiper>
        {!isEnd && (
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="z-20 right-0 rounded-full my-28 mx-20 opacity-100 hover:opacity-100 absolute cursor-pointer"
          />
        )}
        
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,"")