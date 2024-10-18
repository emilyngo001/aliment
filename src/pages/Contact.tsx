// // Contact.tsx
// import React from 'react'
// import Navbar from '../components/Navbar';
// import './Contact.css'

// export const Contact = () => {
//   return (
//     <div>
//       <div>
//         <Navbar/> 
//       </div>
//       <div>
//         <h1>
//           We'd love to hear your feedback.
//         </h1>
//         <div>
//           <input className='name' typeof='text' placeholder='Name (Optional)'></input>
//         </div>
//         <div>
//           <textarea className='feedback' placeholder='Feel free to share your suggestions!'></textarea>
//         </div>
//         <button>Submit</button>

//       </div>
//     </div>
//   )
// }

// export default Contact;
import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <h1>We'd love to hear your feedback.</h1>
        <form>
          <div className="input-group">
            <label htmlFor="name" className="input-label">Name (Optional)</label>
            <input 
              id="name" 
              className="name" 
              type="text" 
              placeholder="Name (Optional)" 
            />
          </div>
          <div className="input-group">
            <label htmlFor="feedback" className="input-label">Feedback</label>
            <textarea 
              id="feedback" 
              className="feedback" 
              placeholder="Feel free to share your suggestions!" 
            ></textarea>
          </div>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
