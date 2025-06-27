import React from 'react';
import '../assets/css/commitee.css';
import members from "../assets/members"
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';

const Committee = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="main-content" ref={container}>
        <div className="paper-heading">
          <span className="red-text">COMMITTEE MEMBERS</span>
          <div className="line"></div>
        </div>

        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Patron</h1>
          <ProfileCard
            img={"/images/dilip-kr-baidya.jpg"}
            name="Prof. Dilip Kumar Baidya"
            aff={"Director, NIT Silchar"}
          />
        </div>
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Honorary Chair</h1>

          <ProfileCard
            img={"/images/Deepak_Mathur.jpg"}
            name="Deepak Mathur"
            aff={"Former Chief General Manager, ONGC"}
            style={{ maxWidth: "350px" }}
            link="https://scse.d.umn.edu/faculty-staff/desineni-subbaram-naidu"
          />
        </div>

        <div className="list">
          <h1 style={{ marginBottom: "-5px" }}>General Chair</h1>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/Mohan_K.jpg"}
              name={`Prof. Mohan Kankanhalli`}
              aff={"National University of Singapore, Singapore"}
              link={""}
            />
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"images/Sharad_Bhartiya.jpg"}
              name={`Prof. Sharad Bhartiya`}
              aff={"IIT Bombay"}
              link={""}
            />
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"images/Utkal_Mehta.jpeg"}
              name={`Dr. Utkal Mehta`}
              aff={
                "The University of the South Pacific (USP), Laucala Campus, Suva, FIJI ISLAND"
              }
              link={""}
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"images/Sudipta_Chakraborty.jpeg"}
              name={`Dr. Sudipta Chakraborty`}
              aff={"NIT Silchar"}
              link={""}
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/pps.jpg"}
              name={`Dr. Pravin P.S.`}
              aff={"NIT Silchar"}
              link={""}
            />
          </div>
        </div>
        <div className="list">
          <h1 style={{ marginBottom: "10px" }}>Convenor</h1>
          <ProfileCard
            img={"/images/rd.jpg"}
            name="Dr. Rajdeep Dasgupta,"
            aff="NIT Silchar"
            link="http://www.nits.ac.in/departments/instru/eie.php"
          />
        </div>

        <div className="list">
          <h1>Organizing Chairs/Secretary</h1>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"images/lalu.jpg"}
              name="Dr. Lalu Seban"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"images/Koena_M.jpg"}
              name="Dr. Koena Mukherjee"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/Sudarsan_Sahoo.png"}
              name="Dr. Sudarsan Sahoo"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />

            <ProfileCard
              style={{ maxWidth: "300px" }}
              img={"/images/jh.jpg"}
              name="Dr. Jupitara Hazarika"
              aff="NIT Silchar"
              link="http://www.nits.ac.in/departments/instru/eie.php"
            />
          </div>
        </div>

        <div className="list textNames">
          <h1>Technical Program Chairs</h1>
          <h3>
            <strong>Control & Robotics: </strong> Dr. Vipin Chandra Pal
          </h3>
          <h3>
            <strong>Signal Processing: </strong>Dr. Anup Kumar Sharma
          </h3>
          <h3>
            <strong>Communication System: </strong>Dr. Ranjay Hazra
          </h3>
          <h3>
            <strong>MEMS & VLSI: </strong>Dr. Arun Kumar Sunaniya
          </h3>
          <h3>
            <strong>AI & Soft Computing: </strong>Dr. Lalu Seban
          </h3>
          <h3>
            <strong>Sensors & Instrumentation: </strong>: Dr. Shankar K.
          </h3>
          <h3>
            <strong>Energy, Power Systems & Power Electronics: </strong>Dr.
            Munmun Khanra
          </h3>
        </div>

        <div className="list textNames">
          <h1>Publication Chairs</h1>
          <h3>Dr. Ranjay Hazra, NIT Silchar</h3>
          <h3>Dr. Sudipta Chakraborty, NIT Silchar</h3>
          <h3>Dr. Shivendra Kumar Pandey, NIT Silchar</h3>
          <h3>Dr. Nabanita Adhikary, NIT Silchar</h3>
          <h3>Dr. Ramanujan, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Publicity Chairs</h1>
          <h3>Dr. Shankar K., NIT Silchar</h3>
          <h3>Dr. Koena Mukherjee, NIT Silchar</h3>
          <h3>Dr. Biplab Das, NIT Silchar</h3>
          <h3>Dr. Manas Kumar Bera, NIT Rourkela</h3>
        </div>

        <div className="list textNames">
          <h1>Hospitality Chairs</h1>
          <h3>Dr. Sudipta Chakraborty, NIT Silchar</h3>
          <h3>Dr. Ujjal Chakraborty, NIT Silchar</h3>
          <h3>Dr. Chinmaya Kumar Sahoo, NIT Silchar</h3>
          <h3>Dr. Sudarsan Sahoo, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Finance Chairs</h1>
          <h3>Dr. Sudarsan Sahoo, NIT Silchar</h3>
          <h3>Dr. Vipin Chandra Pal, NIT Silchar</h3>
          <h3>Mr. Niharendu Dhar, NIT Silchar</h3>
          <h3>Dr. Dipankar Bhanja, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Registration Committee</h1>
          <h3>Dr. Shankar K., NIT Silchar</h3>
          <h3>Dr. Jupitara Hazarika, NIT Silchar</h3>
          <h3>Dr. Rajdeep Dasgupta, NIT Silchar</h3>
          <h3>Dr. Shivendra Kumar Pandey, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Website & Online Platform Commitee</h1>
          <h3>Dr. Lalu Seban, NIT Silchar</h3>
          <h3>Dr. Pravin P.S., NIT Silchar</h3>
          <h3>Dr. Partha Pakray, NIT Silchar</h3>
          <h3>Dr. Ripon Patgiri, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Web Team</h1>
          <h3>Rupantar Borphukan, NIT Silchar</h3>
          <h3>Shabnam Haque, NIT Silchar</h3>
          <h3>Vinayak Das, NIT Silchar</h3>
        </div>

        <div className="list textNames">
          <h1>Sponsorship</h1>
          <h3>Dr. Ranjay Hazra, NIT Silchar</h3>
          <h3>Dr. Shivendra Kumar Pandey, NIT Silchar</h3>
          <h3>Dr. Vipin Chandra Pal, NIT Silchar</h3>
          <h3>Dr. Shankar K., NIT Silchar</h3>
          <h3>Dr. Wasim Arif, NIT Silchar</h3>
          <h3>Dr. Pallab Das, NIT Silchar</h3>
          <h3>Dr. Prabina Pattanayak, NIT Silchar</h3>
        </div>

        <div className="list">
          <h1 className="mtb-2">Technical Program Committee </h1>
          <table className="committeeTable mb-4">
            <tr>
              <th>S. No.</th>
              <th>Name of TPC Member</th>
              <th>Affiliation</th>
            </tr>
            {members.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.member}</td>
                <td>{el.affiliation}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Committee;
