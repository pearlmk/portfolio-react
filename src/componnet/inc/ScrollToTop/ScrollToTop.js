import { useEffect , useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'
import './ScrollToTop.css'
import React from 'react';


function ScrollToTop() {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setScrollToTopBtn(true);
          } else {
            setScrollToTopBtn(false);
          }
        });
      }, []);

    function handleScrollToTop() {
        window.scrollTo(0, 0);
    }
  

  return (
    <>
    {scrollToTopBtn && 
     <button className='bg-orange p-1 fs-4 rounded-2'
      onClick={handleScrollToTop}
      style={
        {
            position:'fixed',
            bottom:'15px',
            right:'15px',
        }

    }
    >
     <AiOutlineArrowUp className='gototop text-light' />
    </button>}
   
    </>
  ) 
}

export default ScrollToTop