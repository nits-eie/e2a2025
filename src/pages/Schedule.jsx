import React from "react";
import "../assets/css/schedule.css";
import Header from "../components/Header";

const Schedule = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);
  return (
    <>
      <Header/>
        <div className="bg-white ptb-4 schedule mb-2" ref={container}>
          <h3 className="mb-3 flexCenter">Schedule and Session Plan</h3>
          <table className="committeeTable mb-4">
            <tr>
              <th>Day &amp; Date</th>
              <th className="timeBox">Time (IST)</th>
              <th className="center">Session</th><th colSpan="3">Details of Session</th>
            </tr>
            <tr>
              <td rowSpan="10" className="writingStyle">15 December 2023 <br/> Day-1 (Friday)</td>
              <td className="center">08.30 - 08.55</td>
              <td></td><td colSpan="3">Registration <br/> Venue: Dr. Bhupen Hazarika Auditorium, New Library</td>
            </tr>
            <tr>
              <td className="center">09.00 - 09.30</td>
              <td></td>
              <td colSpan="2">Inaugural Ceremony<br/>Venue: Dr. Bhupen Hazarika Auditorium, New Library<br/>Google Meet Link: <a href="https://meet.google.com/pbs-eicn-hrx" target="__blank" className="blueText">meet.google.com/pbs-eicn-hrx</a></td>
              <td>Patron - Prof. Dilip Kumar Baidya, Director, NIT Silchar <br/> Honorary Chair - Prof. D. Subbaram Naidu, <br/>University of Minnesota, USA <br/>Chief Guest - Prof. Sarat Kumar Patra, Director, NIT Agartala</td>
            </tr>
            <tr>
              <td className="center">09.30 - 10.00</td>
              <td colSpan="4" className="boldCenter">High Tea</td>
            </tr>
            <tr>
              <td className="center">10.00 - 10.45</td>
              <td className="boldCenterGreen">Keynote Talk - 1 (Online)</td>
              <td colSpan="3">Prof. Jagannathan Sarangapani, Missouri Institute of Science and Technology, USA<br/><span className="boldText">Topic: Lifelong Online Learning in Feedback Control of Robotics/Autonomous Systems</span> <br/>Venue: Dr. Bhupen Hazarika Auditorium, New Library <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText">meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">11.00 - 11.55</td>
              <td className="boldCenterRed">Keynote Talk - 2 (Offline)</td>
              <td colSpan="3">Dr. Mustafijur Rahman, Indian Institute of Technology Delhi<br/><span className="boldText">Topic: RF/millimeter-wave ICs for 6G and Quantum Computing</span>  <br/>Venue: Dr. Bhupen Hazarika Auditorium, New Library <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText">meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">12.00 - 12.55</td>
              <td className="boldCenterRed">Keynote Talk - 3 (Offline)</td>
              <td colSpan="3">Prof. Rajib Bandyopadhyay, Jadavpur University<br/><span className="boldText">Topic:  Intelligent Sensing Systems: A New Era in Agriculture</span> <br/>Venue: Dr. Bhupen Hazarika Auditorium, New Library <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText">meet.google.com/igx-cqrb-szq</a></td>
              </tr>
            <tr>
              <td className="center">13.00 - 14.30 </td>
              <td colSpan="4" className="boldCenter">Lunch</td>
            </tr>
            <tr>
              <td className="center">14.45  - 15.30</td>
              <td className="boldCenterGreen">Keynote Talk - 4 (Online)</td>
              <td colSpan="3">Prof. M. K. Bhuyan, Indian Institute of Technology Guwahati<br/><span className="boldText">Topic:  Deep Learning Algorithms - Applications to Biomedical Image Analysis</span> <br/>Venue: Seminar Room, EIE Dept. <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText">meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">15.45 - 16.45</td>
              <td className="boldCenterBlue">Paper Presentation (Offline)</td>
              <td colSpan="2">Track 1: AI &amp; Soft Computing-I   <br/>3 Papers (15 mins each including Q&amp;A): <br/>Paper ID: 5076, 5438, 9882 <br/>Chaired By: Dr. Lalu Seban, NIT Silchar and Dr. Tripti Goel, NIT Silchar <br/>Venue: Seminar Room, Physics Department Google Meet Link: <a href="https://meet.google.com/oev-irrv-bhb" target="__blank" className="blueText">meet.google.com/oev-irrv-bhb</a></td>
              <td colSpan="2">Track 2: Energy, Power Systems &amp; Power Electronics-I  <br/>3 Papers (15 mins each including Q&amp;A): <br/>Paper ID: 6647, 8906, 1128 <br/>Chaired By:  Prof. Rajib Bandyopadhyay, Jadavpur University and Dr. Asha Rani, NIT Silchar <br/>Venue: Seminar Room, EIE Department Google Meet Link: <a href="https://meet.google.com/ntb-jejc-tbq" target="__blank" className="blueText"> meet.google.com/ntb-jejc-tbq</a></td>
            </tr>
            <tr>
              <td className="center">17.00 - 18.30</td>
              <td className="boldCenterBlue">Paper Presentation (Offline)</td>
              <td colSpan="2">Track 3: Control &amp; Robotics-I  <br/>5 Papers (15 mins each including Q&amp;A): <br/>Paper ID: 372, 669, 873, 4243, 7702 <br/>Chaired By: Prof. B.K. Roy, NIT Silchar,  Dr. Vipin Chandra Pal, NIT Silchar and Dr. Avadh Pati, NIT Silchar<br/>Venue: Seminar Room, Physics Department  <br/>Google Meet Link: <a href="https://meet.google.com/rnt-ryyp-ysq" target="__blank" className="blueText">meet.google.com/rnt-ryyp-ysq</a></td>
              <td colSpan="2">Track 4: Signal &amp; Image Processing -I   <br/>5 Papers (15 mins each including Q&amp;A): <br/>Paper ID: 1550, 1889, 4024, 4862, 8668 <br/>Chaired By: Dr. Shankar K., NIT Silchar and Dr. Murugan R., NIT Silchar <br/>Venue: Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/aje-etxd-vpz" target="__blank" className="blueText">meet.google.com/aje-etxd-vpz</a></td>
            </tr>
            <tr>
              <td rowSpan="5" className="writingStyle">17 December 2022 <br/> Day-2 (Saturday)</td><td className="center">10.00 - 10.45</td><td className="boldCenterGreen">Keynote Talk - 5 (Online)</td>
              <td colSpan="3">Prof. Shyam Sudhir Pandey, Kyushu Institute of Technology, Japan  <br/><span className="boldText">Topic: Prospects &amp; Challenges with Molecular Orientation Control of Organic Semiconductors Low-Cost Organic Electronic Devices</span> <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText">meet.google.com/igx-cqrb-szq</a> </td>
            </tr>
            <tr>
              <td className="center">11.00 - 11.45 </td>
              <td className="boldCenterGreen">Keynote Talk - 6 (Online)</td>
              <td colSpan="3">Prof. Wu Zhe, National University of Singapore <br/><span className="boldText">Topic: Machine Learning in Model Predictive Control</span> <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" className="blueText">meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">12.00 - 13.30</td>
              <td className="boldCenterPurple">Paper Presentation (online)</td>
              <td colSpan="2">Track 5: AI &amp; Soft Computing-II <br/>5 Papers (15 mins each including Q&amp;A): <br/>Paper Id:  463, 2578, 8989, 9634, 5475<br/>Chaired by: Dr. Koena Mukherjee, NIT Silchar, Dr. Jupitara Hazarika, NIT Silchar and Dr. Devendra S. Gurjar, NIT Silchar <br/>Venue: Seminar Room, Physics Department <br/>Google Meet Link: <a href="https://meet.google.com/oev-irrv-bhb" target="__blank" className="blueText">meet.google.com/oev-irrv-bhb</a></td>
              <td colSpan="2">Track 6: Sensors &amp; Instrumentation-I <br/>5 Papers (15 mins each including Q&amp;A): <br/>Paper Id: 2215, 626, 7825, 5521, 4038<br/>Chaired by: Prof. S.H. Laskar, NIT Silchar and Dr. R. Dasgupta, NIT Silchar<br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/nye-ssxz-owj" target="__blank" className="blueText"> meet.google.com/nye-ssxz-owj</a></td>
            </tr>
            <tr>
              <td className="center">13.30 - 14.30</td>
              <td colSpan="4" className="boldCenter">Lunch</td>
            </tr>
            <tr>
              <td className="center">15.00 - 17.00</td><td className="boldCenterPurple">Paper Presentation (online)</td>
              <td colSpan="2">Track 7:  Energy, Power Systems &amp; Power Electronics-II  <br/>6 Papers (15 mins each including Q&amp;A): <br/>Paper Id: 1767, 7410, 7627, 9198, 9138, 3480 <br/>Chaired by: Dr. Pravin P.S., NIT Silchar, Dr. Jiwanjot Singh, NIT Silchar and Dr. Khadim M. Siddiqui, SRMCEM Lucknow <br/>Venue: Seminar Room, Physics Department<br/>Google Meet Link:  meet.google.com/ntb-jejc-tbq<br/>Google Meet Link: <a href="https://meet.google.com/ntb-jejc-tbq" target="__blank" className="blueText">meet.google.com/ntb-jejc-tbq</a></td>
              <td colSpan="2">Track 8: Signal &amp; Image Processing-II  <br/>7 Papers (15 mins each including Q&amp;A):  <br/>Paper Id: 2450, 2485, 4537, 5070, 8275, 1516, 2037 <br/>Chaired by: Dr. Badal Soni, NIT Silchar, Dr. Shankar K, NIT Silchar and Dr. Sheetala Prasad, Galgotias University, Greater Noida <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/aje-etxd-vpz" target="__blank" className="blueText"> meet.google.com/aje-etxd-vpz</a></td>
            </tr>
            <tr>
              <td rowSpan="10" className="writingStyle">18 December 2022 <br/> Day-3 (Sunday)</td>
              <td className="center">09.30 - 10.15 </td>
              <td className="boldCenterGreen">Keynote Talk - 7 (Online)</td>
              <td colSpan="3">Dr. Hari Krishna Garg, National University of Singapore <br/><span className="boldText">Topic: Blockchain: Building Trust in Untrusted Environments, Past, present &amp; Future</span> <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText"> meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">10.30 - 11.30 </td>
              <td className="boldCenterRed">Keynote Talk - 8 (Offline)</td>
              <td colSpan="3">Dr. Ekant Sharma, IIT Roorkee <br/><span className="boldText">Topic: Full-Duplex Wireless Systems for Beyond 5G/6G: Energy Efficiency Perspective</span> <br/>Venue: Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText"> meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">11.45 - 13.00 </td>
              <td className="boldCenterPurple">Paper Presentation (online)</td>
              <td>Track 9: Communication Systems-I  <br/>2 Papers (15 mins each including Q&amp;A):  <br/>Paper Id: 6949, 9090 <br/>Chaired by: Dr. Wasim Arif, NIT Silchar and Dr. Prabina Pattanayak, NIT Silchar <br/>Venue: Seminar Room, Physics Department <br/>Google Meet Link: <a href="https://meet.google.com/zrp-ogps-vje" target="__blank" className="blueText"> meet.google.com/zrp-ogps-vje</a></td>
              <td>Track 10: Control &amp; Robotics-II<br/>3 Papers (15 mins each including Q&amp;A): <br/>Paper Id: 4391, 5014, 1317<br/>Chaired by: Dr. M.K. Bera, NIT Silchar and Dr. S. Chakraborty, NIT Silchar<br/>Venue: Seminar Room, EIE Department<br/>Google Meet Link: meet.google.com/rnt-ryyp-ysq<br/>Google Meet Link: <a href="https://meet.google.com/rnt-ryyp-ysq" target="__blank" className="blueText"> meet.google.com/rnt-ryyp-ysq</a></td>
              <td>Track 11: MEMS &amp; VLSI-I<br/>3 Papers (15 mins each including Q&amp;A): <br/>Paper Id: 5364, 7318, 601<br/>Chaired by: Dr. A.K. Sunaniya, NIT Silchar and Dr. A. K. Sharma, NIT Silchar<br/>Venue: VI Lab, EIE Department<br/>Google Meet Link: <a href="https://meet.google.com/ffy-yqmz-hqx" target="__blank" className="blueText"> meet.google.com/ffy-yqmz-hqx</a></td>
            </tr>
            <tr>
              <td className="center">13.00  - 14.00 </td><td colSpan="4" className="boldCenter">Lunch</td>
            </tr>
            <tr>
              <td className="center">14.30 - 15.30 </td>
              <td className="boldCenterRed">Keynote Talk - 9 (Offline)</td>
              <td colSpan="3">Dr. Abhishek Behera, IIT Roorkee <br/><span className="boldText">Topic:  Reduced-Order Event-Triggered Sliding Mode Control</span> <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/igx-cqrb-szq" target="__blank" className="blueText"> meet.google.com/igx-cqrb-szq</a></td>
            </tr>
            <tr>
              <td className="center">15.45  - 16.45  </td>
              <td className="boldCenterPurple">Paper Presentation (online)</td>
              <td colSpan="2">Track 12: MEMS &amp; VLSI-II <br/>4 Papers (15 mins each including Q&amp;A): <br/>Paper Id:  9173, 9388, 7249, 9622 <br/>Chaired by: Dr. Koushik Guha, NIT Silchar and Dr. S.K. Pandey, NIT Silchar <br/>Venue: Seminar Room, Physics Department <br/>Google Meet Link: <a href="https://meet.google.com/ffy-yqmz-hqx" target="__blank" className="blueText"> meet.google.com/ffy-yqmz-hqx</a></td>
              <td>Track 13:  Energy, Power Systems &amp; Power Electronics-III  <br/>3 Papers (15 mins each including Q&amp;A) <br/>Paper Id: 1079, 3362, 4268 <br/>Chaired by: Dr. Pravin P.S., NIT Silchar and Dr. Tapan Pradhan, NIT Silchar <br/>Venue:  Seminar Room, EIE Department <br/>Google Meet Link: <a href="https://meet.google.com/ntb-jejc-tbq" target="__blank" className="blueText"> meet.google.com/ntb-jejc-tbq</a></td>
            </tr>
            <tr>
              <td className="center">17.00 - 17.30</td>
              <td></td>
              <td colSpan="3">Valedictory Session <br/>Venue: Seminar Room, EIE Department</td>
            </tr>
          </table>
        </div>
    </>
  )
}

export default Schedule;