import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { diaz, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      {/* <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div> */}
      
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[250px] 
          lg:top-[250px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
          
          >
          <div className="flex flex-col justify-center items-center mt-5 ml-3"
          style={{marginLeft: '2rem', paddingLeft: '2rem'}}>
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-teal font-poppins uppercase mt-7`}
              style={{fontSize:50}}>
              Hi, I'm{' '}
              <br />
              <span
                className="sm:text-lightGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Diaz Permana
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 font-extrabold text-teal`}>
              AI/Backend Engineer. <br className="sm:block hidden" />
            </p>
            <p className={`${styles.heroText} mt-2 text-platinumLight`}>
              Help you to cut out mundane tasks.<br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute top-0 ml-[60vw] 
            lg:ml-[60vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[60vw]
            sm:h-[50vh] md:h-[50vh] xl:h-[50vh] "
            style={{marginTop:'230px'}}            
            src={diaz}
            alt="diaz"
          />
        </div>
        {/* <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div> */}
      </section>
    </>
  );
};

export default Hero;
