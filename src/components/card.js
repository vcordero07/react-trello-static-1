import React from 'react';

import './card.css';

// export default function Card() {
//     const text  = 'Example card';
//     return (
//         <div className="card">
//             {text}
//         </div>
//     );
// };

// export default class Card extends React.Component {
//     render() {
//         const text  = 'Example card';
//         return (
//             <div className="card">
//                 {text}
//             </div>
//         );
//     }
// }

export default function Card() {
    const text  = 'Example card';

    const style = {
        background: '#FAFAFA',
        marginBottom: '8px',
        padding: '8px',
        borderRadius: '4px'
    };

    return (
        <div className="card" style={style}>
            {text}
        </div>
    );
};
