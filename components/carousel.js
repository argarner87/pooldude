import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Carousel = ({ children }) => {
    // const [ sliderRef ] = useKeenSlider(
    //     {
    //         loop: true,
    //     },
    //     [
    //         (slider) => {
    //             let timeout
    //             let mouseOver = false
    //             function clearNextTimeout() {
    //                 clearTimeout(timeout)
    //             }
    //             function nextTimeout({
    //                 // if (mouseOver) return 
    //                 timeout = setTimeout(() => {
    //                     slider.next()
    //                 }, 1000)
                
    //             }
    //             )
    //         }
        // ]
    // )
    
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 2,
      },
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
  );};

export default Carousel