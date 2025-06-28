import React from 'react'
import Header from '../components/Header';

const Program = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
    <Header/>
    <div className='main-content' ref={container}>
        <div className='paper-heading'>
          <span className='red-text'>To be updated soon...</span>
        </div>
      </div>
      </>
  )
}

export default Program