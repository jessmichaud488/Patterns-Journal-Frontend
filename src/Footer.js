import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" nameClass="row">
  <div>
      <div id="tw-3" nameClass="tw-outside">
          <div nameClass="tw-text"><img src="images/origami-bird-white.png" nameClass="icon-button" /></div>
          <div nameClass="tw-click">
              <a href="https://jessmichaud488.github.io/"><img src="images/origami-bird-white.png" nameClass="icon-button" /></a>
              <a href="https://github.com/jessmichaud488"><img src="images/github-cat-white.png" nameClass="icon-button" /></a>
              <a href="https://www.linkedin.com/in/jessicamichauddevlife/"><img src="images/linkedin-white.png" nameClass="icon-button" /></a>
              <a href="https://angel.co/jessica-l-michaud"><img src="images/angels-list-white.png" nameClass="icon-button" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer