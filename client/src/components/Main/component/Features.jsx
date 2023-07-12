import './features.css';
import { Link, useNavigate } from "react-router-dom";
// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react'; // Add useState import
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
// import { MdContentCopy } from 'react-icons/md';

export default function Features(props) {
  // const [open, setOpen] = useState(false); // Add useState for open state
  // const [roomLink, setRoomLink] = useState(''); // Add useState for roomLink state

  

  // const handleClose = () => {
  //   setOpen(false);
  //   window.location.reload();
  // };

  // const handleCopyLink = () => {
  //   navigator.clipboard.writeText(roomLink);
  // };
  // const url=window.location.origin;

  return (
    <div>
      <section className="features"> {/* Replace 'class' with 'className' */}
        <div className="container">
          <div className="features-img">
            <img src="./images/reached.jpg" alt="features bg img" />
          </div>
          <div className="features-text">
            <h2>{props.event}</h2>
            <h2>{props.notify}</h2>
            <p>{props.details}</p>

            <Link to={"https://shimmering-kelpie-53c504.netlify.app/"}>
            <button >{props.name}</button>
		        </Link>
            
            
          </div> 
        </div>
      </section>
    </div>
  );
}
