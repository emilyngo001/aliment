import React from 'react';
import Navbar from '../components/Navbar';
import './About.css'; 
import emily from '../emily.jpg'; 
import melody from '../melody.jpg';
import arjun from '../arjun.jpg';
import justin from '../justin.jpg';
import ethan from '../ethan.webp';

export const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <h1>Our Team</h1>

      <div className="team-member">
        <img src={melody}/>
        <div>
          <p><strong>Melody Vahadi</strong></p>
          <p>Project Manager</p>
          <p>Computational Linguistics, MS</p>
          {/* <p>Email: <a href="mailto:mvahadi@uw.edu">mvahadi@uw.edu</a></p>
          <p> 
            <a href="https://www.linkedin.com/in/melodyvahadi/"> LinkedIn </a>
          </p> */}
        </div>
      </div>

      <div className="team-member">
        <img src={emily}/>
        <div>
          <p><strong>Emily Ngo</strong></p>
          <p>Full-Stack Developer</p>
          <p>Computer Engineering, BS</p>
          {/* <p>Email: <a href="mailto:emilyngo@uw.edu">emilyngo@uw.edu</a></p>
          <p><a href="https://www.linkedin.com/in/emilyngo"> LinkedIn </a>
          </p> */}
        </div>
      </div>

      <div className="team-member">
        <img src={arjun}/>
        <div>
          <p><strong>Arjun Tiwari</strong></p>
          <p>Full-Stack Developer</p>
          <p>Computer Science, BS</p>
          {/* <p>Email: <a href="mailto:atiw@uw.edu">atiw@uw.edu</a></p>
          <p> 
            <a href="https://www.linkedin.com/in/arjun-d-tiwari/"> LinkedIn </a>
          </p> */}
        </div>
      </div>

      <div className="team-member">
        <img src={justin} />
        <div>
          <p><strong>Justin Dang</strong></p>
          <p>Frontend Developer</p>
          <p>Intended Informatics, BS</p>
          {/* <p>Email: <a href="mailto:dangjus@uw.edu">dangjus@uw.edu</a></p>
          <p> 
            <a href="https://www.linkedin.com/in/justin-dang-0733b723b/"> LinkedIn </a>
          </p> */}
        </div>
      </div>

      <div className="team-member">
        <img src={ethan}/>
        <div>
          <p><strong>Ethan Tran</strong></p>
          <p>Backend Developer</p>
          <p>Intended Computer Science, BS</p>
          {/* <p>Email: <a href="mailto:etran05@uw.edu">etran05@uw.edu</a></p>
          <p> 
            <a href="https://www.linkedin.com/in/ethan-tran-942220293/"> LinkedIn </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
