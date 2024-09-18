/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ShinyEffect = ({ left, right, top, size = 500 }) => {
    const positionStyles = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1,
        filter: 'blur(150px)', // tạo hiệu ứng mờ
        pointerEvents: 'none' // để không tương tác với các element khác
    };

    if (left !== undefined) {
        positionStyles.left = `${left}px`;
    }
    if (right !== undefined) {
        positionStyles.right = `${right}px`;
    }

    return <div style={positionStyles} className="shiny-effect"></div>;
};

export default ShinyEffect
