import React from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constant'
import './Header.scss';

const scaleVariant ={
  whileInView:{
    scale:[0,1],
    opacity: [0,1],
    transition: {
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex' id="home">
     <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:1}}
      className="app__header-info"
     >
       <div className="app__header-badge">
           <div className="badge-cmp app__flex">
             <span>
             👋
             </span>
             <div style={{marginLeft:20}}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Teguh Dev</h1>
             </div>
           </div>

           <div className="tag-cmp app__flex">
             <p className="p-text">Web Devloper</p>
             <p className="p-text">Freelancer</p>
           </div>
         </div>
     </motion.div>

     <motion.div
         whileInView={{opacity:[0,1]}}
         transition={{duration:0.5,delayChildren:0.5}}
         className="app__header-img"
      >
         <img src={images.profile} alt="profile_bg" />
        <motion.img
           whileInView={{scale:[0,1]}}
           transition={{duration:0.5,ease:'easeInOut'}}
           className="overlay_circle"
           src={images.circle}
           alt="profile_bg"
        />
       
     </motion.div>

     <motion.div
          variants={scaleVariant}
          whileInView={scaleVariant.whileInView}
          className="app__header-circles"
        >
          {[images.flutter,images.redux,images.sass].map((circle)=>(
            <div className='circle-cmp app__flex' key={circle}>
              <img src={circle} alt={circle} />
            </div>
          ))}
        </motion.div>  
    </div>
  )
}

export default Header
