import React from 'react';

class Footer extends React.Component {
render () {
    return (
<div id="footer-circle" className="row">
  <div>
      <div id="ft-3" className="ft-outside">
          <div className="ft-text"><img src={require('../src/images/origami-bird-white.png')} className="footer-icon-button" alt="White portfolio logo" /></div>
          <div className="ft-click">
              <a target="_blank" rel="noopener noreferrer" href="https://jessmichaud488.github.io/"><img src={require('../src/images/origami-bird-white.png')} className="icon-button" alt="White portfolio logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jessmichaud488"><img src={require('../src/images/github-cat-white.png')} className="icon-button" alt="White Github logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jessicamichauddevlife/"><img src={require('../src/images/linkedin-white.png')} className="icon-button" alt="White LinkedIn logo" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://angel.co/jessica-l-michaud"><img src= {require('../src/images/angels-list-white.png')} className="icon-button" alt="White Angel's List logo" /></a>
          </div>
      </div>
  </div>
  </div>
);
}
}

export default Footer