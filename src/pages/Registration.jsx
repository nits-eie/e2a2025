import React from "react";
import "../assets/css/registration.css";
import Header from "../components/Header";

const Registration = () => {
  const container = React.useRef(null);

  React.useEffect(() => {
    if (container.current) {
      container.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="registration-container" ref={container}>
        <div className="registration-content">
          <div className="registration-section">
            <h2 className="section-title">Registration Guidelines</h2>
            <div className="guidelines-container">
              <div className="guideline-item">
                <h3 className="guideline-title">Important Points</h3>
                <ul className="guideline-list">
                  <li>
                    All participants must fill the registration form to register themselves for the conference, after paying the registration fees.
                  </li>
                  <li>
                    Participants are informed to pay the registration fee through online mode in the bank account provided below. Please start this process early since until your payment is received and verified you will not be able to upload your papers.
                  </li>
                </ul>
              </div>

              <div className="guideline-item">
                <h3 className="guideline-title">Procedure for Registration</h3>
                <ul className="guideline-list">
                  <li>
                    During payment, please add <code>PAPERIdNumber_RegisteringAuthorName_2025</code> in the transaction/payment remarks/description column. For example, if your paper ID is 103 and your name is S Ganguly, you should write <code>103_S Ganguly_2025</code> in the remarks/description column during the payment.
                  </li>
                  <li>
                    Check the table below for registration fee details of different categories. Deposit your respective category fee in the conference bank account – please note down the transaction reference number and take a screenshot of the payment receipt.
                  </li>
                  <li>
                    Fill out the registration form with all the required details. Registration Form Link: <span className="highlight-text">………………</span>
                  </li>
                  <li>
                    Please have the following ready before you start filling the registration form:
                    <ol className="sublist">
                      <li>Your paper details (paper ID, title), and author(s) details (name(s) and affiliation)</li>
                      <li>Online transaction reference number</li>
                      <li>Student identity proof in PDF format of size not more than 10 MB (if you are a student registrant)</li>
                      <li>Scanned copy of online payment receipt in PDF format of size not more than 10 MB</li>
                    </ol>
                  </li>
                </ul>
              </div>

              <div className="guideline-item">
                <h3 className="guideline-title">Payment Information</h3>
                <p>
                  You can pay through online/internet banking of your account or through your UPI (PhonePe, Google Pay, etc.) – Bank transfer
                </p>
                <div className="bank-details">
                  <table className="bank-table">
                    <tbody>
                      <tr>
                        <th>Account Name</th>
                        <td>INTERNATIONAL CONFERENCE ON EMERGING ELECTRONICS & AUTOMATION</td>
                      </tr>
                      <tr>
                        <th>Account Number</th>
                        <td>40566029835</td>
                      </tr>
                      <tr>
                        <th>Type of Account</th>
                        <td>Regular Savings Bank Account</td>
                      </tr>
                      <tr>
                        <th>IFSC Code</th>
                        <td>SBIN0007061</td>
                      </tr>
                      <tr>
                        <th>SWIFT Code</th>
                        <td>SBININBB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="guideline-item">
                <h3 className="guideline-title">Additional Information</h3>
                <ul className="guideline-list">
                  <li>At least one of the authors of the accepted paper has to register for the conference.</li>
                  <li>The authors can register for a maximum of 3 accepted papers. For each extra paper, an additional fee of INR 3000 (USD 100) is to be paid.</li>
                  <li>Students can upload a maximum of 1 paper with a single registration.</li>
                  <li>The final camera-ready paper should have a maximum of 8 pages.</li>
                  <li className="highlight">
                    Registration Form Link: <span className="highlight-text">………………</span>
                  </li>
                  {/* <li className="highlight">
  Registration Form Link:{" "}
  <span className="highlight-text">
    <a
      href="https://cmt3.research.microsoft.com/EEA2025/Track/1/Submission/Create"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click Here
    </a>
  </span>
</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="registration-section">
            <h2 className="section-title">Registration Fees</h2>
            <div className="registration-table-container">
              <table className="registration-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Indian Authors (INR)</th>
                    <th>Foreign Authors (USD)</th>
                    <th>Late Registration - Indian Authors (INR)</th>
                    <th>Late Registration - Foreign Authors (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students</td>
                    <td>5000</td>
                    <td>200</td>
                    <td>6000</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td>Academician/Scientists</td>
                    <td>6000</td>
                    <td>300</td>
                    <td>7000</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>7000</td>
                    <td>400</td>
                    <td>8000</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td>Conference Attendee / Additional Paper per Author</td>
                    <td>3000</td>
                    <td>100</td>
                    <td>3000</td>
                    <td>125</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="registration-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">Do all participants have to register for the conference?</div>
                <div className="faq-answer">Yes, all participants must register for the conference.</div>
              </div>

              <div className="faq-item">
                <div className="faq-question">What is the preferred mode of paying registration fees for Indian participants in INR?</div>
                <div className="faq-answer">Electronic fund transfer to the conference bank account mentioned above.</div>
              </div>

              <div className="faq-item">
                <div className="faq-question">Is registration mandatory before final submission?</div>
                <div className="faq-answer">Yes, registration is mandatory before final submission.</div>
              </div>

              <div className="faq-item">
                <div className="faq-question">Can an author upload the final paper without paying the registration fees?</div>
                <div className="faq-answer">No, authors cannot upload the final paper without paying the registration fees.</div>
              </div>

              <div className="faq-item">
                <div className="faq-question">What are the ways to pay the registration fees?</div>
                <div className="faq-answer">Electronic fund transfer in INR to the conference organizer's account.</div>
              </div>

              <div className="faq-item">
                <div className="faq-question">Whom to contact for clarifications on payment of fees and the registration process?</div>
                <div className="faq-answer">
                  You can send an email to <a href="mailto:e2a@ei.nits.ac.in" className="contact-email">e2a@ei.nits.ac.in</a> with the subject line: &lt;CLARIFICATION&gt; - &lt;REGISTRATION FEE&gt; - &lt;YOUR PAPER ID&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
