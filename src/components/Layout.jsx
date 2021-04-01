import React from 'react';
import logo from '../abc_logo.svg';
import '../styles/Layout.css';

const Layout = (props) => {
  const { data } = props;
  return (
    <div className="layout-container">
      <div className="layout">
        <div className="logo-menu-container">
          <img src={logo} className="logo" alt="abc logo" />
          <ul className="menu">
            {data.pages.map((page, i) => {
              return (
                <li
                  className="menu-item"
                  key={i}
                  onClick={() => props.setPage(i)}
                >
                  <button
                    className="menu-item__button"
                    title={page.title}
                    aria-label={page.title}
                  >
                    {page.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="button-container">
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
