import React from "react";
import "../assets/css/registration.css";
import Header from "../components/Header";

const Registration = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);
  return (
    <>
      <Header />
      <div className="bg-white ptb-4" ref={container}>
        <div className="registration mt-4">
          <h3>Registration Guidelines</h3>
          <ol className="ml-4 mt-2">
            <li className="bold">
              <span className="paperSubmissionLink">
                Important points (please read before you proceed for
                registration):
              </span>
              <ul className="ml-3 mt-1">
                <li className="mt-1">
                All participants must fill the registration form to register themselves for the conference, after paying the registration fees.
                </li>
                <li className="mt-1">
                  Participants are informed to pay the registration fee
                  throughonline mode in the bank account given below. Please
                  start this process early since until your payment is received
                  and verified you will not be able to upload your papers.
                </li>
              </ul>
            </li>
            <li className="bold mt-2">
              <span className="paperSubmissionLink">
                Procedure for registration:
              </span>
              <ul className="ml-3 mt-1">
                <li className="mt-1">
                  During payment, please add  PAPERIdNumber_RegisteringAuthorName_2024 in the transaction/payment remarks/description column. 
                  It will help us to track your payment easily.<br/>For e.g., if your paper id is 103, and your name is S Gangully then you need to write 103_S Gangully_2024 in the remarks/description column during the payment.
                </li>
                <li className="mt-1">
                  Check the table (“Registration category”) given below for
                  registration fee details of different categories. Deposit your
                  respective category fee in the conference bank account -
                  please note down the transaction reference number and take a
                  screenshot of the payment receipt.
                </li>
                <li className="mt-1">
                  Fill out the registration form with all the required details.
                  Please click{" "}
                  <a
                    className="paperSubmissionLink"
                    href="https://forms.gle/Lf7FRsaHUjsaqvPY8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>{" "}
                  for the registration form.
                </li>
                <li className="mt-1">
                  Please keep ready the following before you start filling the
                  registration form:
                </li>
                <ol className="ml-4 list3">
                  <li className="mt-1">
                    Your paper details (paper id, title), and author(s) details
                    (name(s) and affiliation)
                  </li>
                  <li className="mt-1">Online transaction reference number</li>
                  <li className="mt-1">
                    Student identity proof in PDF format of size not more than
                    10 MB (if you are a student registrant)
                  </li>
                  <li className="mt-1">
                    Scanned copy of online payment receipt in PDF format of size
                    not more than 10 MB.
                  </li>
                </ol>
              </ul>
            </li>
            <li className="bold mt-2">
              <span className="paperSubmissionLink">
                Paying through Electronic Funds Transfer:
              </span>
              <ul className="ml-3 mt-1">
                <li className="mt-1">
                  Choose the appropriate amount as per the information given
                  above in the table.
                </li>
                <li className="mt-1">
                  You can pay through online/ internet banking of your account
                  OR through your UPI (PhonePe, Google Pay, etc.) - Bank
                  transfer
                  <table className="table mt-2">
                    <tr className="text-center">
                      <th>Account Name</th>
                      <td>
                        INTERNATIONAL CONFERENCE ON EMERGING ELECTRONICS &
                        AUTOMATION
                      </td>
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
                      <th>IFSC code</th>
                      <td>SBIN0007061</td>
                    </tr>
                    <tr>
                      <th>SWIFT code</th>
                      <td>SBININBB</td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
            <li className="bold mt-2">
              <span className="paperSubmissionLink">
                Additional information:
              </span>
              <ul className="ml-3 mt-1">
                <li className="mt-1">
                  At least one of the authors of the accepted paper has to
                  register for the conference.
                </li>
                <li className="mt-1">
                  The authors can register for a maximum of 3 accepted papers.
                  For each extra paper, an additional fee of INR 3000 (USD 100) is to be paid.
                </li>
                <li className="mt-1">
                  Students can upload a maximum of 1 paper with a single
                  registration.
                </li>
                <li className="mt-1">
                  The final camera ready paper should have minimum 6 pages and
                  maximum 12 pages.
                </li>
                <li className="mt-1 bold">
                  <span className="highlightText">
                    Registration Form Link:{" "}
                    <a
                      className="paperSubmissionLink"
                      href="https://forms.gle/Lf7FRsaHUjsaqvPY8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://forms.gle/Lf7FRsaHUjsaqvPY8
                    </a>
                  </span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <br />
        <div className="registration">
          <h3>Registration Category</h3>
          <table className="table mt-2">
            <tr className="text-center">
              <th>Category</th>
              <th>
                Indian Authors <br /> (in INR)
              </th>
              <th>
                Foreign Authors <br /> (in USD)
              </th>
              <th>
                Late registration - Indian Authors <br /> (in INR)
              </th>
              <th>
                Late registration - Foreign Authors <br /> (in USD)
              </th>
            </tr>
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
          </table>
        </div>
        <div className="registration mt-4">
          <h3>FAQs about registration:</h3>
          <ol className="ml-4 mt-2">
            <li className="bold mb-1">
              <span className="question">
                Whether all the participants have to register for the
                conference?
              </span>
              <div className="ml-3 mt-1 answer">A1: Yes</div>
            </li>
            <li className="bold mb-1">
              <span className="question">
                What is the preferred mode of paying registration fees for
                Indian participants in INR?
              </span>
              <div className="ml-3 mt-1 answer">
                A2: Electronic fund transfer in the above-mentioned conference
                bank account.
              </div>
            </li>
            <li className="bold mb-1">
              <span className="question">
                Is it mandatory to do registration before final submission?
              </span>
              <div className="ml-3 mt-1 answer">A3: Yes</div>
            </li>
            <li className="bold mb-1">
              <span className="question">
                Can an author upload the final paper without paying the
                registration fees?
              </span>
              <div className="ml-3 mt-1 answer">A4: No</div>
            </li>
            <li className="bold mb-1">
              <span className="question">
                What are the ways of payment of the registration fees?
              </span>
              <div className="ml-3 mt-1 answer">
                A5: Electronic fund transfer in INR to the conference organiser
                account.
              </div>
            </li>
            <li className="bold mb-1">
              <span className="question">
                Whom to contact for any clarifications on payment of fees and
                the registration process?
              </span>
              <div className="ml-3 mt-1 answer">
                A6: You can send an e-mail to{" "}
                <a
                  className="paperSubmissionLink"
                  href="mailto:e2a@ei.nits.ac.in"
                >
                  e2a@ei.nits.ac.in
                </a>{" "}
                with a subject line &lt;CLARIFICATION&gt; - &lt;REGISTRATION
                FEE&gt; - &lt;YOUR PAPER ID&gt;
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Registration;
