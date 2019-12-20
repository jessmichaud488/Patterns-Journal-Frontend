import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" class="row">
  <div class="col-xs-6">
      <div id="tw-3" class="tw-outside">
          <div class="tw-text"><span src="images/origami-bird-white.png"></span></div>
          <div class="tw-click">
              <a href="https://jessmichaud488.github.io/" class="twitter-follow-button" data-show-count="false"><img src="images/origami-bird-white.png" /></a>
              <a href="https://github.com/jessmichaud488" class="twitter-follow-button" data-show-count="false"><img src="images/github-cat-white.png" /></a>
              <a href="https://www.linkedin.com/in/jessicamichauddevlife/" class="twitter-follow-button" data-show-count="false"><img src="images/linkedin-white.png" /></a>
              <a href="https://angel.co/jessica-l-michaud" class="twitter-follow-button" data-show-count="false"><img src="images/angels-list-white.png" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer