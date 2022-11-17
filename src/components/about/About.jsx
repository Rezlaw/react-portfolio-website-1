import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Training</small>
            </article>

            <article className='about__card'>
              < FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>None</small>
            </article>

            <article className='about__card'>
              < VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Training</small>
            </article>
          </div>

          <p>
            It all started in grade 8, I can remember getting an A for english oral. I took the complete inside of a pentium 2
            which grade me with a A for english. Thats where my love was born for computers. Why SovTech, I have a equal passion   
            for building pc's and using software, being able to work at SovTech will help me leap in bounds as I believe theres much
            for me to learn.
          </p>

    <a href="#contact" className= 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About