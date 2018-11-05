import React, { Component } from 'react';
import BackgroundMediaCarouselImage from './BackgroundMediaCarouselImage';

class App extends Component {
  render() {
    return (
      <BackgroundMediaCarouselImage
        backgroundImage={"https://data1.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_SWB.jpg"}
        gameIcon={"https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/192140/231.0x326.0/1030897_LB_231x326_en_US_%5E_2015-04-28-11-47-22_d5e1ae356894059158059186d1a1aa842cae8563.jpg"}
        gameIconLabel={"Star Wars Battlefront"}
      />
    )
  }
}

export default App;
