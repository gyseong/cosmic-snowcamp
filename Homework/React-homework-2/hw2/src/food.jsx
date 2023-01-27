import React from 'react';
import FoodItem from './food_item';

const FoodList = (props) => {
    return (
        <div>
            {props.foodname.map(inputValue => (
                <FoodItem key={inputValue.DESC_KOR}  inputvalue={inputValue} />
            ))}
        </div>
    );
};
export default FoodList;