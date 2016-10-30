import React, { Component } from 'react';
import { Parser } from 'html-to-react';
import './CloudChamber.css'

var codePenEmbedString = "<iframe height='500' scrolling='no' src='//codepen.io/phazor-1471862257/embed/xEXbmX/?height=500&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/phazor-1471862257/pen/xEXbmX/'>Cloud Chamber</a> by phazor (<a href='http://codepen.io/phazor-1471862257'>@phazor-1471862257</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>"
var htmlToReactParser = new Parser();
var reactComponent = htmlToReactParser.parse(codePenEmbedString);

class CloudChamber extends Component {
  render() {
    return (
      <div className="CloudChamber">
        <h1>Cloud Chamber</h1>
        <p>One of the coolest things in nature is how particles are constantly whizzing around us and through us, but at the same time they are imperceptible to human senses.</p>
        <p>I wanted to show what these particles would look like if we could somehow see them. A <a href="https://en.wikipedia.org/wiki/Cloud_chamber">Cloud Chamber</a> is how scientists achieve this, so if you have your own, you can probably stop reading ;). Unfortunately, I could not find any video footage of one that I felt did it justice. </p>
        <p>So I set out to create a visualisation of a Cloud Chamber in action:</p>
        { reactComponent }
        <p>Particles are generated in the center of the page, with a random velocity</p>
        <p>Particles are under the effect of a magnetic field, and are moving through a medium that slows them down.</p>
        <span>Three types of particles exist:</span>
        <ul>
          <li><i>Alpha particles</i>, which are heavy and have a positive charge.</li>
          <li><i>Beta particles</i>: which are light and have negative charge (they are fundamentally electrons).</li>
          <li><i>Gamma particles</i>, which are massless and have a no charge.</li>
        </ul>
        <p>Decay may happen to a particle at any point - changing it from one type of particle to another and randomising its new direction.</p>
        <h3>See Also:</h3>
        <p><a href="https://en.wikipedia.org/wiki/Bubble_chamber">Bubble Chamber</a>, inspired by beer! 🍻</p>
      </div>
    );
  }
}

export default CloudChamber;
