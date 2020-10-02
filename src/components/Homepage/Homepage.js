import React from 'react';
import designImage from '../../challenge/photo1.png';
import designerPhoto from '../../challenge/photo2.png';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="intro">
        <div className="main-title">Modern interior</div>
        <div className="main-text">A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</div>
        <div className="read-more">
          Read more
          <i className="material-icons">arrow_right_alt</i>
        </div>
      </div>
      <div className="design">
        <div className="design-image">
          <img src={designImage} alt="room" />
        </div>
        <div className="design-info">
          <div className="designer">
            <img src={designerPhoto} alt="designer" />
            <div>
              <div className="designer-name">Aliza Webber</div>
              <div className="designer-job">Interior designer</div>
            </div>
          </div>
          <div className="designer-text">Designed in 2020 by <br/> Aliza Webber</div>
        </div>
      </div>
    </div>
  );
}
 
export default Homepage;