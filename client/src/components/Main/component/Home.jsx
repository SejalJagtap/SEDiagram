import './home.css'
import HomeImg from "../images/Home.jpg";

export default function Home() {
  return (
    <div>
      <section class="home" id="Home">
     <div class="home-text">
      <h2>Travel-ong</h2>
      <h3>Travelling Together makes it more fun</h3>
     </div>
     <div class="home-img">
      <img src={HomeImg} alt="home-img" />
     </div>
   </section>
    </div>
  )
}
