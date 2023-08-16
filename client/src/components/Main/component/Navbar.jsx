import './navbar.css';
import Logo from "../images/logo.jpg";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <header>
    <a href="#" class="logo"><img src={Logo} alt="Logo" /></a>
    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
      <li><a href="#Home">Home</a></li>
      <li><a href="#Meet">Meet At</a></li>
      <li><a href="#Navigate">Navigate</a></li>
      <li><a href="#Reach">Reached</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><button className ="logout" onClick={handleLogout}>
          Logout
        </button></li>
    </ul>
   </header>
    </div>
  )
}
