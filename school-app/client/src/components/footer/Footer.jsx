import React from 'react'
import "./styles.css"
function Footer() {
    return (
        <div className="main-footer">
            
            <div className="footerContainer">
                
                <div className="row">
                    
            {/* Column1 */}
            <div className="col">
              <h4>ABOUT US</h4>
              <ul className="list-unstyled">
                <li classname="list">About</li>
                <li classname="list">Meet the Proprietress</li>
                <li classname="list">Our facilities</li>
              </ul>
                    </div>
                    
            {/* Column2 */}
            <div className="col">
              <h4>OUR SCHOOLS</h4>
              <ul className="list-unstyled">
                <li classname="list">Pre-School</li>
                <li classname="list">Nursery</li>
                <li classname="list">Primary</li>
                <li classname="list">Secondary</li>
              </ul>
                    </div>
                    
            {/* Column3 */}
            <div className="col">
              <h4>WHY DANDEL</h4>
              <ul className="list-unstyled">
                <li classname="list">Our Facilities</li>
                <li classname="list">Parents as Partners</li>
                <li classname="list">Extra-curricula activities</li>
              </ul>
                    </div>
            {/* Column3 */}
            <div className="col">
              <h4>ADMISSION PROCEDURE </h4>
              <ul className="list-unstyled">
                <li classname="list">Admissions</li>
                <li classname="list">Entrance Examination</li>
              </ul>
                    </div>
                    
                </div>
                
          <hr />
          <div className="row-sm">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} DANDEL | All rights reserved
              | Terms Of Service | Privacy
            </p>
                </div>
                
        </div>
      </div>
    );
}

export default Footer
