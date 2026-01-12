import React from 'react';

const ProfileCard = ({ img, name, aff, link, designation }) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <div className="image-wrapper">
            <img src={img} alt={name} className="profile-image" />
          </div>
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          {designation && <p className="profile-designation">{designation}</p>}
          <p className="profile-affiliation">{aff}</p>
          {link && (
            <a
              className="profile-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-text">View Profile</span>
              <span className="link-icon">→</span>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        :root {
          --primary-color: #4a6baf;
          --secondary-color: #6b4aaf;
          --tertiary-color: #af4a6b;
          --quaternary-color: #4aaf6b;
          --text-color: #2b2d42;
          --light-color: #f8f9fa;
          --dark-color: #212529;
        }

        .profile-card-container {
          display: flex;
          justify-content: center;
          padding: 1rem;
          background-color: var(--light-color);
        }

        .profile-card {
          background: linear-gradient(145deg, #ffffff, #e9ecef);
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          width: 100%;
          max-width: 400px;
          transition: all 0.3s ease;
          padding: 2.5rem 0 2rem;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.05);
          font-family: 'Poppins', sans-serif;
        }

        .profile-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(74, 107, 175, 0.2);
        }

        .profile-image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .image-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #ffffff, var(--light-color));
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          position: relative;
          border: 3px solid transparent;
          background: linear-gradient(#ffffff, #ffffff) padding-box,
                      linear-gradient(45deg, var(--primary-color), var(--tertiary-color), var(--secondary-color)) border-box;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
        }

        .profile-info {
          padding: 0 1.5rem;
          text-align: center;
        }

        .profile-name {
          color: var(--text-color);
          font-size: 1.7rem;
          font-weight: 600;
          margin: 0;
          margin-bottom: 0.5rem;
          position: relative;
          padding-bottom: 0.5rem;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .profile-name::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          border-radius: 1px;
        }

        .profile-designation {
          color: var(--secondary-color);
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
          margin-bottom: 0.75rem;
          font-style: italic;
        }

        .profile-affiliation {
          color: var(--dark-color);
          font-size: 1rem;
          margin: 0;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          max-width: 350px;
          margin-left: auto;
          margin-right: auto;
        }

        .profile-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          border-radius: 50px;
          padding: 0.6rem 1.5rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          margin-top: 1rem;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 4px 12px rgba(74, 107, 175, 0.3);
        }

        .profile-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(74, 107, 175, 0.4);
          background: linear-gradient(45deg, var(--secondary-color), var(--tertiary-color));
        }

        .profile-link:hover .link-icon {
          transform: translateX(3px);
        }

        .link-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        /* Animation for the card */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .profile-card {
          animation: fadeIn 0.5s ease-out forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 400px) {
          .profile-card {
            max-width: 300px;
            padding: 2rem 0 1.5rem;
          }

          .image-wrapper {
            width: 120px;
            height: 120px;
          }

          .profile-info {
            padding: 0 1rem;
          }

          .profile-name {
            font-size: 1.5rem;
          }

          .profile-designation {
            font-size: 1rem;
          }

          .profile-affiliation {
            max-width: 250px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
