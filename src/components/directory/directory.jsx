import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
// import candles from '../../assets/candles.jpg';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'soy candles',
                    imageUrl: 'https://fee.org/media/26184/scentedcandle.jpg?anchor=center&mode=crop&width=1920&rnd=131602403570000000',
                    id: 1,
                    linkUrl: 'soycandles'
                },
                {
                    title: 'gel candles',
                    imageUrl: 'https://tiimg.tistatic.com/fp/2/006/181/scented-and-colored-gel-candles-356.jpg',
                    id: 2,
                    linkUrl: 'gelcandles'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}  />
                    ))
                }
            </div>    
        )
    }
} 

export default Directory;