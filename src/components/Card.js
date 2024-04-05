import React from 'react';


const Card = ({ title, text, buttonText, link, image }) => { 
  return (
    <div className="col-md-4 mb-3"> 
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} /> 
        {/* You can also use an image in Flipp-Card */}
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h4>{title}</h4>
          <p>{text}</p>
          <a href={link} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
