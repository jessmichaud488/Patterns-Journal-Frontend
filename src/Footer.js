import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" className="row">
  <div>
      <div id="tw-3" className="tw-outside">
          <div className="tw-text"><img src="images/origami-bird-white.png" className="icon-button" /></div>
          <div className="tw-click">
              <a href="https://jessmichaud488.github.io/"><img src="images/origami-bird-white.png" className="icon-button" /></a>
              <a href="https://github.com/jessmichaud488"><img src="images/github-cat-white.png" className="icon-button" /></a>
              <a href="https://www.linkedin.com/in/jessicamichauddevlife/"><img src="images/linkedin-white.png" className="icon-button" /></a>
              <a href="https://angel.co/jessica-l-michaud"><img src="images/angels-list-white.png" className="icon-button" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer