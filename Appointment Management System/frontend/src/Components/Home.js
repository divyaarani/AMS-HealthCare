import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useNavigate } from 'react-router-dom';
import apt1 from './Images/depositphotos_209987356-stock-photo-female-patient-having-appointment-chiropractic.jpg'
import apt2 from './Images/wysiwyg-uploads_1649075845211-pexels-karolina-grabowska-7195445-min.jpg'
import apt3 from './Images/basic-health-checkup.webp'
import about from './Images/healthcare-sector-1024x683.webp'

export default function Home() {
  // const navigate=useNavigate()
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src='https://www.unairan.org/wp-content/uploads/2019/04/5624bfab59e77-e-sante-1000x444.jpg' alt='img1' text="First slide" width={1500} height={600} />
            <Carousel.Caption>
              <h1 className='head1'>Quality Care For All</h1>
              <p>Our Mission is to provide Quality care and easily accessible to all patients.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src='https://th.bing.com/th/id/R.d53f10fba79d96b7b669bf96123ae458?rik=NOYwUGS5hdsmsw&riu=http%3a%2f%2frepertoiremag.com%2fwp-content%2fuploads%2f2020%2f11%2fiStock-1035479448-1024x666.jpg&ehk=6EBPO8GR1uT202xEe8MWAVu0jZ9nLJghW89as1%2ffDfc%3d&risl=&pid=ImgRaw&r=0' alt='img2' text="Second slide" width={1500} height={600} />
            <Carousel.Caption>
              <h1 className='head1'>Patients Experience And Trust</h1>
              <p>Our Vision emphasizes trust, patient experience and excellence in healthcare service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.metrohospitals.in/content/images/site/Appointment.jpg' alt='img3' text="Third slide" width={1500} />
            <Carousel.Caption>
              <h1 className='head1'>Schedule Your Appointment Online</h1>
              <p>Get 10% discount on all In-Hospital appointments*</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <div className='about'>
        <div class="homeContainer">
          <img src={apt1} alt="Avatar" className="homeImage" style={{ width: 400 }} />
          <div class="middle">
            <h2>In person appointment</h2>
            <button class="hometext">Book now</button>
          </div>
        </div>
        <div class="homeContainer">
          <img src={apt2} alt="Avatar" className="homeImage" style={{ width: 400 }} />
          <div class="middle">
          <h2>Tele Health appointment</h2>
            <button class="hometext">Book now</button>
          </div>
        </div>
        <div class="homeContainer">
          <img src={apt3} alt="Avatar" className="homeImage" style={{ width: 400 }} />
          <div class="middle">
          <h2>Health checkup appointment</h2>
            <button class="hometext">Book now</button>
          </div>
        </div>
      </div>
      <div className='aboutus'>
        <div>
        <img src={about} alt='img' width={700}/>
        </div>
        <div className='aboutustxt'>
        <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
             </p>
        <h2>MISSION</h2>
           <p>Is to provide Quality care and easily accessible to all patients.</p>

        <h2>VISION</h2>
          <p>Our Vision emphasizes trust, patient experience and excellence in healthcare service.</p>
        </div>
      </div>

    
    </div>
  )
}
