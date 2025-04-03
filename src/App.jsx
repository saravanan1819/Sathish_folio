import React from 'react'
import Header from './Components/Header'
import Page from './Components/Page'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import SlidingMenu from './Components/HTML'
gsap.registerPlugin(ScrollToPlugin);
function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsets = {
         home:100,
        about: 69,
        work: 65,
       gallery: 30,
        contact: 50,
      };
      const speeds = {
        home: 1,
        about: 1.5,
        work: 1.5,
        gallery:4,
        contact: 5, 
      };
      const offset = offsets[id] || 80;
      const duration = speeds[id] || 1.5;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const finalPosition = sectionPosition - offset;
  
      gsap.to(window, {
        duration: duration, 
        scrollTo: finalPosition,
        ease: "power2.out", 
      });
    }
  };
  return (
    <div className='overall-page'>
        <div className='page-white'>
                  <Header scrollToSection={scrollToSection} />
                  <Page/>     
                  {/* <SlidingMenu/>    */}
        </div>
    </div>
  )
}

export default App