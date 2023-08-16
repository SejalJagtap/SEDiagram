import './about.css';
import AboutImg from "../images/about.jpg";

export default function About() {
  return (
    <div>
      <section class="about" id="About">
    <div class="about-img">
      <img src={AboutImg} alt="About-img" />
    </div>
    <div class="about-text">
      <h1 className='headColour'>About Us</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius facere ipsam maxime laborum</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius facere ipsam maxime laborum</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius facere ipsam maxime laborum</p>
      <a href="#" class="btn">Learn More</a>
     </div>
   </section>
    </div>
  )
}
