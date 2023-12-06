import React from 'react'
import './Button.css'
import Img from '../../../img/resume.png'

function Button({firstBtn , secBtn} ) {
    return (
        <>
            <a href={Img} type="button" className="btn first-btn text-transparant  rounded-pill border border-light border-2 btn-sm  text-light ms-3 fw-semibold py-2 w-40 my-2 my-md-0">{firstBtn}</a>
            <a href={Img} download={Img} type="button" className="btn sec-btn rounded-pill text-light btn-sm ms-3  fw-semibold py-2 text-nowrap w-40 " style={{background:"orangered",boxSizing:"border-box"}}>{secBtn}</a>
        </>
    )
}

export default Button