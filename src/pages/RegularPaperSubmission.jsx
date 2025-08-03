import React from 'react';
import "../assets/css/regularPaperSubmission.css";
import Header from '../components/Header';

const RegularPaperSubmission = () => {
  const container = React.useRef(null);

  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="paper-submission-container" ref={container}>
        <div className="paper-submission-content">
          <h3 className="paper-submission-heading">Paper Submission & Guidelines</h3>
          <ul className="paper-submission-list">
            <li className="paper-submission-list-item">
              All Accepted papers after peer review and successful presentation will be published as proceedings with Springer in their prestigious Scopus Indexed{" "}
              <a href="https://www.springer.com/series/7818" target="_blank" rel="noreferrer" className="paper-submission-link">
                "Lecture Notes in Electrical Engineering" series
              </a>
              . (Approval Pending)
            </li>
            <li className="paper-submission-list-item">
              Submissions should be made according to the Springer LNEE format (
              <a href="/documents/latex_template.zip" target="_blank" rel="noreferrer" className="paper-submission-link">LaTeX template</a>,{" "}
              <a href="/documents/word_template.zip" target="_blank" rel="noreferrer" className="paper-submission-link">Word template</a>).
            </li>
            <li className="paper-submission-list-item">
              Authors must follow the{" "}
              <a href="/documents/Springer_Guidelines_for_Authors_of_Proceedings.pdf" target="_blank" rel="noreferrer" className="paper-submission-link">
                Springer Guidelines for Authors of Proceedings
              </a>.
            </li>
            <li className="paper-submission-list-item">
              Papers should be submitted through the{" "}
              <a href="https://cmt3.research.microsoft.com/E2A2024/Submission/Index" target="_blank" rel="noreferrer" className="paper-submission-link">
                CMT (E2A) platform
              </a>.
            </li>
            <li className="paper-submission-list-item">
              Papers should be in English. The maximum full-length size of the paper may be 8 pages.
            </li>
            <li className="paper-submission-list-item">
              Any published work or submissions to any other conference/journal will be rejected in the preliminary stage.
            </li>
            <li className="paper-submission-list-item">
              All papers will be checked by plagiarism checker software.
            </li>
            <li className="paper-submission-list-item">
              The paper submissions must follow the Springer formatting guidelines.
            </li>
            <li className="paper-submission-list-item">
              Instruction guidelines for paper submission:{" "}
              <a href="https://docs.google.com/document/d/1A3cVyQ3nDunldy6CQ-L7TzYNEEPQXmfFA5kHfcSx-Do/edit?usp=sharing" target="_blank" rel="noreferrer" className="paper-submission-link">
                Read Here
              </a>.
            </li>
          </ul>
          <p className="paper-submission-note">
  {/* <span className="note-label"> </span> */}
  CMT Ackhnowledgment :  The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
</p>

        </div>
      </div>
    </>
  );
};

export default RegularPaperSubmission;
