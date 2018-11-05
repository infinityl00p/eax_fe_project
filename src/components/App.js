import React, { Component } from 'react';
import AboutText from './AboutText';
import BackgroundMediaCarousel from './BackgroundMediaCarousel';
import '../styles/App.css'

const carouselData = [
  [
    {
      type: 'video',
      youtubeVideoId: '5GBVMGXXFMw',
      lengthInSeconds: 310
    }
  ],
  [
    {
      type: 'video',
      youtubeVideoId: 'yYjD78X1d9Q',
      lengthInSeconds: 115,
      gameIcon: 'https://Eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/182633/231.0x326.0/1038862_LB_231x326_en_US_^_2016-07-21-10-11-54_1b27093a8723b707c8433a4aafc9203fd660d669.jpg',
      gameIconLabel: 'FIFA 17'
    },
    {
      type: 'video',
      youtubeVideoId: 'QpnY1G3vt_0',
      lengthInSeconds: 109,
      gameIcon: 'https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/194331/231.0x326.0/1031469_LB_231x326_en_US_%5E_2015-06-08-12-38-28_34137b019ffbf482edfea4910a792707153fea75.jpg',
      gameIconLabel: 'Unravel'
    },
    {
      type: 'image',
      backgroundImage: 'https://data1.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_SWB.jpg',
      gameIcon: 'https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/192140/231.0x326.0/1030897_LB_231x326_en_US_%5E_2015-04-28-11-47-22_d5e1ae356894059158059186d1a1aa842cae8563.jpg',
      gameIconLabel: 'Star Wars Battlefront'
    }
  ], [
    {
      type: 'image',
      backgroundImage: 'https://data1.origin.com/content/dam/originx/web/app/games/titanfall/titanfall/titanfall-deluxe-edition_pdp_3840x2160_en_WW.jpg',
      gameIcon: 'https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/192492/231.0x326.0/1039096_LB_231x326_en_US_%5E_2016-05-06-05-17-52_63c62ad76b294c6dc44ea97fc0561b22fdc7c1c1.jpg',
      gameIconLabel: 'TitanFall 2'
    }
  ]
];
class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <BackgroundMediaCarousel mediaItems={carouselData[0]} />
          <AboutText>
            <h1 className="about-text__content--h1 about-text__content--light">Play great PC games and connect with your friends, all in one place</h1>
          </AboutText>
        </header>

        <main>
          <section className="about-section">
            <BackgroundMediaCarousel mediaItems={carouselData[1]} />
            <AboutText>
              <h2 className="about-text__content--h2 about-text__content--light">Great PC games</h2>
              <h3 className="about-text__content--h3 about-text__content--light">Epic RPGs, action-packed shooters, simulation hits - no matter your tastes, Origin's got you covered.</h3>
            </AboutText>
          </section>

          <section className="about-section">
            <BackgroundMediaCarousel mediaItems={carouselData[2]} />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
