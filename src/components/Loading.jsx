import React from 'react';
import logo from '../abc_logo.svg';
import '../styles/Loading.css';

const Loading = (props) => {
  const { setLoading } = props;
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <div className="loading-container">
      <img src={logo} className="loading-container__logo" alt="abc logo" />
    </div>
  );
};

export default Loading;
