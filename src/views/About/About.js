import React, { Component } from 'react';
import { iframeResizer } from 'iframe-resizer';
import './About.css';


class About extends Component {
  componentDidMount() {
    iframeResizer({
        checkOrigin:['https://phazor.github.io', 'https://twitter.com', 'https://www.linkedin.com', 'https://github.com'],
        autoResize: false
      }, '#iframe'
    );
  }

  render() {
    return (
      <section className="About">
        <iframe id="iframe" src="https://phazor.github.io/about-me/" width="100%" onClick={this.resize}></iframe>
      </section>
    );
  }
}

export default About;
