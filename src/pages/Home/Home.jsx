import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'
import Carousell from '../../components/Carousel/Carousel'
import BookAppointment from '../../components/Apointment/Apointment'
// import Datepicker from '../../components/Datepicker'
const Home = () => {
  return (
    <>
      <Carousell />
      <div>
        <h1 className='Text-Head'>Book Now:</h1>
        <BookAppointment />
      </div>
    </>
  )
}

export default Home