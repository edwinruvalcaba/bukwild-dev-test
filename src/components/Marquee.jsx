import React from 'react';
import '../styles/Marquee.css';

const Marquee = (props) => {
  const { pageData } = props;

  return (
    <>
      {pageData.blocks.map((block, i) => {
        return (
          <div key={i} className="marquee-container">
            <div className="headline-subhead__container">
              <h1 className="headline">{block.headline}</h1>
              <h2 className="subhead">{block.subhead}</h2>
            </div>
            <div className="cta">
              <p>{block.cta}</p>
              <button className="talk-btn" aria-label="Lets talk">
                LET'S TALK.{' '}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="talk-arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Marquee;
