import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Bgimg from './images/bg.png'
import Cards from './components/Cards'
// icons
import { FaMoneyBillWave,FaChartLine,FaChild,FaLightbulb } from 'react-icons/fa';
const App = () => {
  const [page, setPage] =useState(true)

  return (
    <div className={`${page ? "app-light": "app-dark" }`}>
      <Navbar mode={page}/>

      <section className="hero">
        <div className={`text ${page ? "text-light": "text-dark" }`}>
          <h1>Making Your Business Ideas <span>Come true</span></h1>
          <p>We listen carefully to your ideas, ensuring we capture every nuance and detail. </p>
          <div className="hero-btns">
          <button className={`${page ? "herobtn1-light": "herobtn1-dark" }`} onClick={()=> setPage(!page)}>{page ? "switch to dark":"switch to light "} </button>
          {/* <button className={`${page ? "herobtn2-light": "herobtn2-dark" }`} onClick={()=> setPage(false)}>Dark Mode</button> */}
          </div>
        </div>

        <div className="image">
          <img src={Bgimg} alt="background-image" />
        </div>
      </section>

      <section className={`${page ? "about-light": "about-dark" }`}>
       <div className='card-sec'>
       <Cards mode={page} icon={<FaMoneyBillWave/>} title="Money" text="trust your investment"/>
       <Cards mode={page} icon={<FaChartLine/>} title="Growth" text="Grow With Us"/>
       <Cards mode={page} icon={<FaChild/>} title="Money" text="Your life security"/>
       <Cards mode={page} icon={<FaLightbulb/>} title="help" text="help to build community"/>
       </div>

        <div className='about-inner'>
          <h1 className={`${page ? ".about-head-light": "about-head-dark" }`}>About Us</h1>
          <p className='about-para'>we are passionate about turning your creative ideas into functional code. We understand that your imagination knows no bounds, and we're here to bridge the gap between your vision and reality. </p>

          <div className='small-cards'>
            <div className="small-cont">
              <h1>600+</h1>
              <p>Happy Clients</p>
            </div>

            <div className="small-cont">
              <h1>100+</h1>
              <p>Software Developed</p>
            </div>

            <div className="small-cont">
              <h1>60+</h1>
              <p>Branches</p>
            </div>

            <div className="small-cont">
              <h1>20+</h1>
              <p>Company Awards</p>
            </div>
          </div>
        </div>
        <p className='right'>created by &copy; Hasnain Saleem </p>
      </section>
    </div>
  )
}

export default App