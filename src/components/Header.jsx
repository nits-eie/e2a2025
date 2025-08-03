import React from "react";

// Custom Image Slider Component with a minimalistic theme
const ImageSlider = ({ images, interval = 2000, transition = 2500 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'scale(1)' : 'scale(1.1)',
            transition: `all ${transition}ms ease-in-out`,
            zIndex: index === currentIndex ? 1 : 0
          }}
        />
      ))}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)',
        zIndex: 2
      }} />
    </div>
  );
};

// Dropdown component with improved styling and functionality
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        style={{
          color: '#333333',
          textDecoration: 'none',
          padding: '0.6rem 1rem',
          fontWeight: '500',
          fontSize: '14px',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
          border: 'none'
        }}
        onMouseEnter={handleMouseEnter}
      >
        {title}
        <span style={{ marginLeft: '6px', fontSize: '10px' }}>▼</span>
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: '#ffffff',
            minWidth: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            borderRadius: '4px',
            border: '1px solid #e0e0e0',
            padding: '8px 0',
            marginTop: '4px'
          }}
          onMouseEnter={handleMouseEnter}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.pathname}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noopener noreferrer" : ""}
              style={{
                display: 'block',
                padding: '12px 20px',
                textDecoration: 'none',
                color: '#333333',
                borderBottom: index < items.length - 1 ? '1px solid #f0f0f0' : 'none',
                transition: 'all 0.2s ease',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '1.4'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.color = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#333333';
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile menu component
const MobileMenu = ({ navItems, isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      zIndex: 2000,
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
      overflowY: 'auto',
      padding: '80px 20px 20px'
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          color: '#333'
        }}
      >
        ×
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {navItems.map((item, i) => (
          <div key={i}>
            {item.subItems && item.subItems.length > 0 ? (
              <div>
                <button
                  onClick={() => toggleDropdown(i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#333',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #f0f0f0',
                    paddingBottom: '12px',
                    marginBottom: '8px'
                  }}
                >
                  {item.name}
                  <span style={{ fontSize: '16px', marginLeft: '8px' }}>
                    {activeDropdown === i ? '−' : '+'}
                  </span>
                </button>
                {activeDropdown === i && (
                  <div style={{ paddingLeft: '15px' }}>
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.pathname}
                        target={subItem.external ? "_blank" : ""}
                        rel={subItem.external ? "noopener noreferrer" : ""}
                        style={{
                          display: 'block',
                          padding: '10px 0',
                          textDecoration: 'none',
                          color: '#555',
                          fontSize: '14px',
                          transition: 'all 0.2s ease',
                          borderBottom: subIndex < item.subItems.length - 1 ? '1px solid #f5f5f5' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#0056b3';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#555';
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.pathname === "/about" ? "/#about" : item.pathname}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                }}
              >
                {item.name}
                {item.name === "Important Dates" && (
                  <img src="/logos/tnew.gif" width="35px" alt="New" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                )}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const navItems = [
  { pathname: "/", name: "Home" },
  { pathname: "/about", name: "About Conference" },
  {
    name: "For Authors",
    subItems: [
      { name: "Registration", pathname: "/author-registration" },
      { name: "Regular Paper Submission", pathname: "/author-regular-paper-submission" },
      { name: "Instructions for Online Presentation", pathname: "/author-instructions-online" },
      { name: "Instructions for Offline Presentation", pathname: "/author-instructions-offline" },
    ],
  },
  { pathname: "/call-for-papers", name: "Call for Papers" },
  {
    name: "Program",
    subItems: [
      { name: "Brochure", pathname: "/program-brochure", external: true },
      { name: "Keynote Speakers", pathname: "/keynote-speakers" },
    ],
  },
  { pathname: "/important-dates", name: "Important Dates" },
  { pathname: "/committee", name: "Committee" },
  { pathname: "/sponsorship", name: "Sponsorship" },
  { pathname: "/contact-us", name: "Contact us" },
];

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 768 && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const images = [
    "/images/homeImg_d.jpg",
    "/images/homeImg_c.jpg",
    "/images/homeImg_e.jpg",
    "/images/homeImg_f.jpg",
    "/images/homeImg_b.jpg",
    "/images/depImg3.jpeg",
    "/images/homeImg_a.jpg",
    "/images/depImg2.jpeg",
  ];

  return (
    <div style={{ width: '100vw', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div className="header" id="header" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <ImageSlider interval={5000} transition={3000} images={images} />
        {/* Navigation Bar */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.5rem 2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.4s ease',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px'
        }}>
          {/* Logo - Visible on desktop */}
          <div className="logo" style={{ display: windowWidth > 768 ? 'block' : 'none' }}>
            <img src="e2a25.png" alt="Logo" style={{ height: '60px', objectFit: 'contain' }} />
          </div>
          {/* Navigation Links - Desktop */}
          {windowWidth > 768 && (
            <div className="links" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%'
            }}>
              {navItems.map((item, i) =>
                item.subItems ? (
                  <Dropdown
                    key={i}
                    title={item.name}
                    items={item.subItems}
                  />
                ) : (
                  <div key={i}>
                    <a
                      href={item.pathname === "/about" ? "/#about" : item.pathname}
                      className="nav-btn"
                      style={{
                        color: item.pathname === "/" ? '#0056b3' : '#333333',
                        textDecoration: 'none',
                        padding: '0.6rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontWeight: '500',
                        fontSize: '14px',
                        transition: 'all 0.2s ease',
                        borderRadius: '4px',
                        position: 'relative',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (item.pathname !== "/") {
                          e.target.style.color = '#0056b3';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (item.pathname !== "/") {
                          e.target.style.color = '#333333';
                        }
                      }}
                    >
                      {item.name}
                      {item.name === "Important Dates" && <img src="/logos/tnew.gif" width="25px" alt="New" style={{ marginLeft: '5px' }} />}
                    </a>
                  </div>
                )
              )}
            </div>
          )}
          {/* Mobile Menu Button */}
          {windowWidth <= 768 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div className="logo" style={{ display: 'block' }}>
                <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1754194518/xxxx_ihljjj.jpg" alt="Logo" style={{ height: '52px', objectFit: 'contain' }} />
              </div>
              <button
                onClick={toggleMobileMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '20px',
                  width: '30px',
                  zIndex: 2001
                }}
              >
                <div style={{ width: '30px', height: '3px', backgroundColor: '#333', transition: 'all 0.3s ease' }}></div>
                <div style={{ width: '30px', height: '3px', backgroundColor: '#333', transition: 'all 0.3s ease' }}></div>
                <div style={{ width: '30px', height: '3px', backgroundColor: '#333', transition: 'all 0.3s ease' }}></div>
              </button>
            </div>
          )}
        </nav>
        {/* Mobile Menu */}
        <MobileMenu
          navItems={navItems}
          isOpen={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
        <div className="headerContent" style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 60px)',
          padding: '2rem 1rem',
          boxSizing: 'border-box',
          textAlign: 'center',
          color: '#ffffff',
          marginTop: '60px'
        }}>
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <img
              src="/logos/logo2.png"
              alt="NIT Silchar Logo"
              style={{
                height: '100px',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                backgroundColor: 'transparent'
              }}
            />
          </div>
          <div className="content-container" style={{ maxWidth: '1200px', width: '100%' }}>
            <div className="heading" style={{
              fontSize: 'clamp(1.5rem, 4.2vw, 2.4rem)',
              fontWeight: '700',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              5<sup style={{ fontSize: '0.6em' }}>th</sup> INTERNATIONAL CONFERENCE ON <br />
              <span className="highlight-text" style={{ color: '#C5A880', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                EMERGING ELECTRONICS AND AUTOMATION
              </span>
            </div>
            <div className="date" style={{
              fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
              marginBottom: '1.2rem',
              fontWeight: '600',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              17<sup style={{ fontSize: '0.7em' }}>th</sup> - 19<sup style={{ fontSize: '0.7em' }}>th</sup> Dec, <span style={{ color: '#F5F5DC' }}>2025</span>
            </div>
            <div className="hybridText" style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              marginBottom: '0.8rem',
              fontWeight: '600',
              background: 'rgba(132, 190, 132, 0.1)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              border: '2px solid rgba(0, 86, 179, 0.3)',
              display: 'inline-block',
              backdropFilter: 'blur(3px)',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}>
              HYBRID
            </div>
            <div className="organised-by" style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              marginBottom: '1.8rem',
              lineHeight: '1.5'
            }}>
              <span style={{ fontSize: '0.9em', color: '#f0f0f0', fontWeight: '500' }}>Organised by</span> <br />
              <span style={{ fontWeight: '600', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>Department of Electronics and Instrumentation Engineering</span>
            </div>
            <div className="college-name" style={{
              fontSize: 'clamp(1rem, 2.4vw, 1.5rem)',
              marginBottom: '2rem',
              fontWeight: '600',
              lineHeight: '1.4'
            }}>
              <span style={{
                fontSize: '1.1em',
                fontWeight: '700',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR</span> <br />
              <span style={{ fontSize: '0.8em', color: '#f0f0f0', fontWeight: '500' }}>Assam, India - 788010</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
