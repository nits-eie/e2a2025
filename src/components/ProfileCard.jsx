import React from 'react';

const ProfileCard = ({ img, name, aff, link, designation }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={img} alt={name} className="profile-image" />
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        {designation && <p className="profile-designation">{designation}</p>}
        <p className="profile-affiliation">{aff}</p>
        {/* {link && (
          <a
            className="profile-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        )} */}
      </div>
    </div>
  );
};

export default ProfileCard;
