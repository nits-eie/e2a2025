import React from 'react'
import "../assets/css/regularPaperSubmission.css"
import "../assets/css/regularPaper.css"
import Header from '../components/Header';

const RegularPaperSubmission = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
    <Header/>
    <div className='bg-white ptb-4' ref={container}>
      <div className="regular-papers">
        <h3>Paper Submission & Guidelines</h3>
        <ul className="ml-4 mt-3">
          <li>It is informed to all the authors that the peer reviewed and selected papers of conference will be published as proceedings with Springer in their prestigious &quot;Lecture Notes in Electrical Engineering&quot; series (<a href="https://www.springer.com/series/7818" target="_blank" rel="noreferrer"><span className='paperSubmissionLink'>https://www.springer.com/series/7818</span></a>).</li>
          <li>Submissions should be made according to the Springer LNEE format (<span className='paperSubmissionLink'><a href={"/documents/latex_template.zip"} target="_blank" rel="noreferrer">LaTeX template</a>, <a href={"/documents/word_template.zip"} target="_blank" rel="noreferrer">Word template</a></span>).</li>
          <li>Author must follow <a href={"/documents/Springer_Guidelines_for_Authors_of_Proceedings.pdf"} target="_blank" rel="noreferrer"><span className='paperSubmissionLink'>Springer_Guidelines_for_Authors_of_Proceedings</span></a>.</li>
          <li>Papers should be submitted through the <a href={"https://cmt3.research.microsoft.com/E2A2024/Submission/Index"} target="_blank" rel="noreferrer"><span className='paperSubmissionLink'>CMT (E2A)</span></a> platform.</li>
          <li>Papers should be in English. The maximum full length size of paper may be 12 pages.</li>
          <li>Any published work or submitted any other conference/journal work will be rejected in preliminary stage.</li>
          <li>All paper will be checked by Plagiarism checker software.</li>
          <li>The paper submissions must follow the Springer formatting guidelines.</li>
        </ul>
        {/* <div className='red'>To be updated Soon...</div> */}
      </div>
    </div>
    </>
  )
}

export default RegularPaperSubmission