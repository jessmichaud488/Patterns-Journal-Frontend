import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" class="row">
  <div class="col-xs-6">
      <div id="tw-3" class="tw-outside">
          <div class="tw-text"><span><img src="src/images/origami-bird-white.png" /></span></div>
          <div class="tw-click">
              <a href="" class="twitter-follow-button" data-show-count="false"><img src="src/images/origami-bird-white" /></a>
              <a href="" class="twitter-follow-button" data-show-count="false"><img src="src/images/github-cat-white.png" /></a>
              <a href="" class="twitter-follow-button" data-show-count="false"><img src="src/images/linkedin-white" /></a>
              <a href="" class="twitter-follow-button" data-show-count="false"><img src="src/images/angels-list-white.png" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer