import React from 'react';

import Card from './card';

import './list.css';

// export default function List() {
//     return (
//         <div className="list">
//             <h3>Example list</h3>
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//         </div>
//     );
// }
//same as above
export default function List() {
    const cards = [];
    for (let i=0; i<5; i++) {
        cards.push(<Card />);
    }
    return (
        <div className="list">
            <h3>Example list</h3>
            {cards}
        </div>
    );
}
