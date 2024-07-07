import React from "react";

import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    //HOC = Higher Order Component
    const currentYear = new Date().getFullYear();

    return (
      <div id={idName} className={ `app__container ${classNames}` }>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{currentYear} Siddhartha Sarkar</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
