import React from 'react';
import './stateContol.scss';
import CircleNoDropDown from "../circle/CircleNoDropDown";
import Circle from "../circles/Circle";

const StateControl = ({color, element, refProps, fieldName, index}) => {
    switch (color) {
        case 0: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'pending'}/>
                    <CircleNoDropDown status={'pending'}/>
                    <CircleNoDropDown status={'pending'}/>
                </div>
            )
        }
        case 1: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'success'}/>
                    <Circle status={'pending'} element={element} refProps={refProps} fieldName={fieldName} index={index} isThird={false}/>
                    <CircleNoDropDown status={'pending'}/>
                </div>
            )
        }
        case 2: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'success'}/>
                    <CircleNoDropDown status={'success'}/>
                    <Circle status={'pending'} element={element} refProps={refProps} fieldName={fieldName} index={index} isThird={true}/>
                </div>
            )
        }
        case 3: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'success'}/>
                    <Circle status={'error'} element={element} refProps={refProps} fieldName={fieldName} index={index} isThird={false}/>
                    <CircleNoDropDown status={'pending'}/>
                </div>
            )
        }
        case 4: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'success'}/>
                    <CircleNoDropDown status={'success'}/>
                    <CircleNoDropDown status={'success'}/>
                </div>
            )
        }
        case 5: {
            return (
                <div className='case-0'>
                    <CircleNoDropDown status={'success'}/>
                    <CircleNoDropDown status={'success'}/>
                    <Circle status={'error'} element={element} refProps={refProps} fieldName={fieldName} index={index} isThird={true}/>
                </div>
            )
        }
    }
};

export default StateControl;