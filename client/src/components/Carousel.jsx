import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// change this to the file path of your overrides
//import {styles} from 'react-responsive-carousel/lib/styles/carousel.min.css';

class TheCarousel extends React.Component {
  render() {
    return (
        <Carousel autoPlay>
        <div>
            <img src="https://i.imgur.com/tB5cuSe.png" />
            <p className="legend">Synergizing with food Ministry</p>
        </div>
        <div>
            <img src="https://i.imgur.com/ru4JZsR.jpg" />
            <p className="legend">Our Ministry</p>
        </div>
        <div>
            <img src="https://i.imgur.com/0iZXzow.jpg" />
            <p className="legend">Unloading pallets</p>
        </div>
        <div>
            <img src="https://i.imgur.com/prYxCUW.jpg" />
            <p className="legend">The Food Car</p>
        </div>
                        <div>
            <img src="https://i.imgur.com/QHMWkgr.jpg" />
            <p className="legend">Working with local farms</p>
        </div>
    </Carousel>
    
)
  }
};

//FooBar.propTypes = {
 // secretData: PropTypes.string.isRequired
//};
export default TheCarousel;