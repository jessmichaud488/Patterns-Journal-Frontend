import React from 'react';

class Footer extends React.Component {
render () {
    return (
  <div className="button-footer">
  <div className="links">
    <a className="footer-image" src="images/linkedin-white.png" target="_blank" href="https://www.linkedin.com/in/jessicamichauddevlife/" />
    <a className="footer-image" src="images/angels-list-white.png" target="_blank" href="https://angel.co/jessica-l-michaud" />
    <a class="footer-image" src="images/github-cat-image.png" target="_blank" href="https://github.com/jessmichaud488" />
    <a class="footer-image" src="images/origami-bird-white.png" target="_blank" href="https://jessmichaud488.github.io/" />
    <div className="overlay">
      <a>Connect with me!</a>
    </div>
</div>
</div>
);
}
}

export default Footer