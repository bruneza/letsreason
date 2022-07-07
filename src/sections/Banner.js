import React from 'react'
import banImg from '../imgs/img-01.png'
import Image from './elements/Image'

function Banner() {
  return (
    <section className="banner-section pad-40-y">
      <div className="container content-middle">
        <div className="banner-image">
        <Image img={banImg} />
      </div>
      <div className="banner-content">
        <h2 className="banner-title"> Let's Reason and understand <span>Mental Health</span></h2>
        <p className="banner-descr">We are a digital health company focused on ensuring all Africans
          have access to the mental health services they need.
        </p>
        <a href="/#">Learn More</a>
      </div>
      </div>
      
    </section>
  )
}

export default Banner