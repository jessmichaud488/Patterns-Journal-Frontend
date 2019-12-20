import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="twitter-circle" class="row">
  <div class="col-xs-6">
      <div id="tw-3" class="tw-outside">
          <div class="tw-text"><span><img src="src/images/origami-bird-white.png" /></span></div>
          <div class="tw-click">
              <a href="https://twitter.com/scotch_io" class="twitter-follow-button" data-show-count="false">Follow @scotch_io</a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer