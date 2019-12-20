import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" className="row">
  <div>
      <div id="tw-3" className="tw-outside">
          <div className="tw-text"><img src="images/origami-bird-white.png" className="icon-button" /></div>
          <div className="tw-click">
              <a target="_blank" href="https://jessmichaud488.github.io/"><img src="images/origami-bird-white.png" className="icon-button" alt="White portfolio logo" /></a>
              <a target="_blank" ref="https://github.com/jessmichaud488"><img src="images/github-cat-white.png" className="icon-button" alt="White Github logo" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/jessicamichauddevlife/"><img src="images/linkedin-white.png" className="icon-button" alt="White LinkedIn logo" /></a>
              <a target="_blank" href="https://angel.co/jessica-l-michaud"><img src="images/angels-list-white.png" className="icon-button" alt="White Angel's List logo" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer