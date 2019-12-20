import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" class="row">
  <div class="col-xs-6">
      <div id="tw-3" class="tw-outside">
          <div class="tw-text"><span src="images/origami-bird-white.png"></span></div>
          <div class="tw-click">
              <a href="https://jessmichaud488.github.io/" class="icon-button"><span><img src="images/origami-bird-white.png" /></span></a>
              <a href="https://github.com/jessmichaud488" class="icon-button"><span><img src="images/github-cat-white.png" /></span></a>
              <a href="https://www.linkedin.com/in/jessicamichauddevlife/" class="icon-button"><span><img src="images/linkedin-white.png" /></span></a>
              <a href="https://angel.co/jessica-l-michaud" class="icon-button"><span><img src="images/angels-list-white.png" /></span></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer