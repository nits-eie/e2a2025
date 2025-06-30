import React from "react";
import PropTypes from "prop-types";
import "../assets/css/SpeakerCard.css";

const SpeakerCard = ({ img, name, designation, college, socialLinks }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  return (
    <div className="speaker-card">
      <div className="speaker-card-top">
        <div className="speaker-img-wrapper">
          {img ? (
            <img src={img} alt={name} className="speaker-img" />
          ) : (
            <div className="speaker-initials">{getInitials(name)}</div>
          )}
        </div>
      </div>
      <div className="speaker-card-body">
        <h4 className="speaker-name">{name}</h4>
        <p className="speaker-designation">{designation}</p>
        <p className="speaker-college">{college}</p>
        {socialLinks && (
          <div className="speaker-social">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

SpeakerCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string,
  college: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

SpeakerCard.defaultProps = {
  designation: "Speaker",
  college: "",
  socialLinks: null,
};

export default SpeakerCard;
