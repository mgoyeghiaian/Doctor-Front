import React, { useState } from "react";
import "./About.css";
import doctorImg from "../../assets/images.jpeg";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Our Doctor</h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor ac diam non ultrices. Fusce pellentesque, magna id tristique
          congue, nunc lacus volutpat nisi, sit amet rutrum purus leo ac
          turpis. Sed eget convallis risus, vel bibendum nisi. Nullam vel
          sagittis enim. Nunc nec mauris lectus. Vivamus aliquam auctor felis
          sed consequat. Vivamus scelerisque erat quis arcu eleifend, vel
          posuere nibh ultrices. Vestibulum eget semper est. Vestibulum et
          velit id diam ullamcorper efficitur. Nullam vitae sem ut odio
          elementum vulputate. Sed ac dui nec ex facilisis efficitur vitae
          ut enim. Sed sit amet nibh ac tortor bibendum euismod.
        </p>
        {showMore && (
          <p className="about-text">
            More text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor ac diam non ultrices. Fusce pellentesque, magna id tristique
            congue, nunc lacus volutpat nisi, sit amet rutrum purus leo ac
            turpis. Sed eget convallis risus, vel bibendum nisi. Nullam vel
            sagittis enim. Nunc nec mauris lectus. Vivamus aliquam auctor felis
            sed consequat. Vivamus scelerisque erat quis arcu eleifend, vel
            posuere nibh ultrices. Vestibulum eget semper est. Vestibulum et
            velit id diam ullamcorper efficitur. Nullam vitae sem ut odio
            elementum vulputate. Sed ac dui nec ex facilisis efficitur vitae
            ut enim. Sed sit amet nibh ac tortor bibendum euismod.
          </p>
        )}
        <button className="about-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Learn More About Our Doctor"}
        </button>
      </div>
      <div className="about-image-container">
        <img src={doctorImg} alt="doctor" className="about-image" />
      </div>
    </div>
  );
}

export default About;
