import React, { Component } from 'react';
import AboutText from './AboutText';
import BackgroundMediaCarousel from './BackgroundMediaCarousel';
import carouselData from '../CarouselData'
import '../styles/App.css'

/**
 * App: Top Level Parent Component, handling general layout of application and dynamic generation of nav
 */
class App extends Component {
  /**
   * ComponentDidMount: handling the dynamic generation of a navigation based on randomly placed anchor tags
   */
  componentDidMount() {
    const navAnchors = document.getElementsByTagName('about-navigation-anchor');
    const navList = document.getElementsByClassName('nav-list');
    var htmlString = '';

    for (var i = 0; i < navAnchors.length; i++) {
      //handle case where ordering is not gauranteed
      if (htmlString !== '' && navAnchors[i].getAttribute('anchor-id') === 'greatpcgames') {
        htmlString = `<li><a href=#${navAnchors[i].getAttribute('anchor-id')}>${navAnchors[i].getAttribute('title-str')}</a></li>` + htmlString;
      } else {
        htmlString += `<li><a href=#${navAnchors[i].getAttribute('anchor-id')}>${navAnchors[i].getAttribute('title-str')}</a></li>`;
      }
    }

    navList[0].innerHTML = htmlString;
  }

  render() {
    return (
      <div className="app">
        <header>
          <BackgroundMediaCarousel mediaItems={carouselData[0]} />
          <div className="header__container">
            <AboutText>
              <h1 className="about-text__content--h1 about-text__content--light">Play great PC games and connect with your friends, all in one place</h1>
            </AboutText>
            <nav>
              <ul className='nav-list'>

              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section id="greatpcgames" className="about-section">
            <about-navigation-anchor title-str="Great PC games" anchor-id="greatpcgames"></about-navigation-anchor>
            <BackgroundMediaCarousel mediaItems={carouselData[1]} />
            <AboutText>
              <h2 className="about-text__content--h2 about-text__content--light">Great PC games</h2>
              <h3 className="about-text__content--h3 about-text__content--light">Epic RPGs, action-packed shooters, simulation hits - no matter your tastes, Origin's got you covered.</h3>
            </AboutText>
          </section>

          <section id="downloadnow" className="about-section">
            <about-navigation-anchor title-str="Download now" anchor-id="downloadnow"></about-navigation-anchor>
            <BackgroundMediaCarousel mediaItems={carouselData[2]} />
            <AboutText>
              <h2 className="about-text__content--h2 about-text__content--light">What are you waiting for?</h2>
              <h3 className="about-text__content--h3 about-text__content--light">Download the Origin client, grab a soda (or tea, if that's your thing), and dig into that game you've been obsessing over. Sounds like a perfect day to us.</h3>
            </AboutText>
          </section>
        </main>
      </div>
    )
  }
}

export default App;
