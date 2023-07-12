// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
// import { MdContentCopy } from 'react-icons/md';
// import styles from "./styles.module.css";

// const Main = () => {
//   const location = useLocation();
//   const baseUrl = window.location.origin + location.pathname;
//   const [open, setOpen] = useState(false);
//   const [roomLink, setRoomLink] = useState('');

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   const handleCreateRoom = () => {
//     setOpen(true);
//     const urlParams = new URLSearchParams(window.location.search);
//     const roomId = urlParams.get("id");
//     if (roomId) {
//       setRoomLink(baseUrl + "?id=" + roomId);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(roomLink);
//   };

//   return (
//     <div className={styles.main_container}>
//       <nav className={styles.navbar}>
//         <h1>fakebook</h1>
//         <button className={styles.white_btn} onClick={handleLogout}>
//           Logout
//         </button>
//       </nav>
//       <div className="box">
//         <button type="button" className={styles.green_btn} onClick={handleCreateRoom}>
//           Create Room
//         </button>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>Create Room</DialogTitle>
//           <DialogContent>
//             <p>Share this room link:</p>
//             <div className={styles.room_link_container}>
//               <input type="text" value={roomLink} readOnly />
//               {roomLink && (
//                 <button className={styles.copy_btn} onClick={handleCopyLink}>
//                   <MdContentCopy />
//                 </button>
//               )}
//             </div>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default Main;
