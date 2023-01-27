import React from 'react';

const FoodItem = (props) => {
    return (
        <div>
            <h5>{props.inputValue.DESC_KOR}</h5>
        </div>
    );
};

export default FoodItem;