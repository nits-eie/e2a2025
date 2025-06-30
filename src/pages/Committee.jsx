import React from 'react';
import '../assets/css/commitee.css';
import members from "../assets/members";
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';

const Committee = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="main-content" ref={container}>
        <div className="paper-heading">
          <span className="red-text">COMMITTEE MEMBERS</span>
          <div className="line"></div>
        </div>

        {/* Patron */}
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Patron</h1>
          <ProfileCard
            img={'/images/dilip-kr-baidya.jpg'}
            name="Prof. Dilip Kumar Baidya"
            aff="Director, NIT Silchar"
          />
        </div>

        {/* Honorary Chair */}
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Honorary Chair</h1>
          <ProfileCard
            img={'https://res.cloudinary.com/dprjiwgfo/image/upload/v1751045933/Ramjee-_Prasad_cvsxhd.jpg'}
            name="Prof. Ramjee Prasad"
            aff="Professor, CTIF Global Capsule"
            link="https://ctifglobalcapsule.org/cgc-member/ramjee-prasad/#:~:text=Professor%20Ramjee%20Prasad%20is%20Founder,international%20journals%20e.g.%20River%20Publishers."
          />
        </div>

        {/* General Chair */}
        {/* General Chair */}
<div className="list">
  <h1 style={{ marginBottom: "10px" }}>General Chair</h1>
  <div className="mt-2" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '100%' }}>
    <ProfileCard
      style={{ maxWidth: '300px' }}
      img={'/images/Sudarsan_Sahoo.png'}
      name="Dr. Sudarsan Sahoo"
      aff="NIT Silchar"
    />
    <ProfileCard
      style={{ maxWidth: '300px' }}
      img={'https://res.cloudinary.com/dprjiwgfo/image/upload/v1751048779/anup_jagha4.jpg'}
      name="Dr. Anup Kumar Sharma"
      aff="NIT Silchar"
    />
    <ProfileCard
      style={{ maxWidth: '300px' }}
      img={'/images/placeholder.png'} // Use a placeholder image
      name="To be updated soon"
      aff=""
    />
    <ProfileCard
      style={{ maxWidth: '300px' }}
      img={'/images/placeholder.png'}
      name="To be updated soon"
      aff=""
    />
    <ProfileCard
      style={{ maxWidth: '300px' }}
      img={'/images/placeholder.png'}
      name="To be updated soon"
      aff=""
    />
  </div>
</div>


        {/* Convenor */}
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Convenor</h1>
          <ProfileCard
            img={'https://res.cloudinary.com/dprjiwgfo/image/upload/v1751048772/munmun_y0v4n2.jpg'}
            name="Dr. Munmun Khanra"
            aff="NIT Silchar"
          />
        </div>

        {/* Organizing Chairs/Secretary */}
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Organizing Chairs/Secretary</h1>
          <div className="mt-2" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '100%' }}>
            <ProfileCard
              style={{ maxWidth: '300px' }}
              img={'/images/rd.jpg'}
              name="Dr. Rajdeep Dasgupta"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
            <ProfileCard
              style={{ maxWidth: '300px' }}
              img={'/images/jh.jpg'}
              name="Dr. Jupitara Hazarika"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
            <ProfileCard
              style={{ maxWidth: '300px' }}
              img={'https://res.cloudinary.com/dprjiwgfo/image/upload/v1751048765/shankar_zfkwbo.jpg'}
              name="Dr. Shankar K."
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
            <ProfileCard
              style={{ maxWidth: '300px' }}
              img={'https://res.cloudinary.com/dprjiwgfo/image/upload/v1751048759/vipin_abnmht.jpg'}
              name="Dr. Vipin Chandra Pal"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
          </div>
        </div>

        {/* Technical Program Chairs */}
        <div className="list textNames">
          <h1>Technical Program Chairs</h1>
          <h3><strong>Control & Robotics: </strong>Dr. Koena Mukherjee</h3>
          <h3><strong>Signal Processing: </strong>Dr. A.K. Sunaniya</h3>
          <h3><strong>Communication System: </strong>Dr. Ranjay Hazra</h3>
          <h3><strong>Sensors & Instrumentation: </strong>Dr. Anup Kumar Sharma</h3>
          <h3><strong>MEMS & VLSI: </strong>Dr. S.K. Pandey</h3>
          <h3><strong>AI & Soft Computing: </strong>Dr. Lalu Seban</h3>
          <h3><strong>Energy, Power Systems & Power Electronics: </strong>Dr. Vipin Chandra Pal</h3>
        </div>

        {/* Publication Chairs */}
        <div className="list textNames">
          <h1>Publication Chairs</h1>
          <h3>Dr. Anup Kumar Sharma</h3>
          <h3>Dr. Ranjay Hazra</h3>
          <h3>Dr. Sudipta Chakraborty</h3>
          <h3>Dr. Ripon Patgiri</h3>
          <h3>Dr. Sushant Negi</h3>
        </div>

        {/* Publicity Chairs */}
        <div className="list textNames">
          <h1>Publicity Chairs</h1>
          <h3>Dr. Shankar K.</h3>
          <h3>Dr. Jupitara Hazarika</h3>
          <h3>Dr. R. Murugan</h3>
          <h3>Dr. Biplab Das</h3>
          <h3>Dr. Manas K. Bera, NIT Rourkela</h3>
        </div>

        {/* Hospitality Chairs */}
        <div className="list textNames">
          <h1>Hospitality Chairs</h1>
          <h3>Dr. Vipin Chandra Pal</h3>
          <h3>Dr. Koena Mukherjee</h3>
          <h3>Dr. Ujjal Chakraborty</h3>
          <h3>Dr. Chinmay Kumar Sahoo</h3>
          <h3>Dr. Sudarsan Sahoo</h3>
        </div>

        {/* Technical Program Committee Table */}
        <div className="list">
          <h1 className="mtb-2">Technical Program Committee</h1>
          <table className="committeeTable mb-4">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Name of TPC Member</th>
                <th>Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.member}</td>
                  <td>{el.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Committee;
