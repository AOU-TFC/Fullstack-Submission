import React from 'react';
import "Styles/404.css";

export default function PageNotFound() {
  return (
    <React.Fragment>
        <div className='NotFound'>
              <div className="card">
                  <img
                      src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
                      alt=""
                      className="image"
                  />
                  <div className='heading f0f'>404</div>
                  <div className="heading">Page Not Found</div>
              </div>

        </div>
    </React.Fragment>
  )
}
