import React from 'react';
import Image from 'next/image';

const NotFound404: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="cat-container">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <Image
            src="/cute-cat-404.svg"
            alt="Cute cat"
            width={200}
            height={200}
            className="cute-cat-image"
            priority
          />
        </div>
        <div className="error-content">
          {/* <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2> */}
          <p className="error-message">
            Sorry, please check later
          </p>
          {/* <div className="cat-emoji">🐱</div> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
