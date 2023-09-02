import React, {useMemo, useRef, useState} from 'react';
import StateControl from "../../../stateControl/StateControl";
import {useParams} from "react-router-dom";
import {axiosRequest} from "../../../../utils/request/NewAxiosRequest";

const ScreeningStarting = ({data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed}) => {
    const [screeningStarted, setScreeningStarted] = useState({
        dateofstart: data.DateStartOfScreeningCondition.DateOfStart,
        timeofstart: data.TimeStartOfScreeningCondition.TimeOfStart,
    });
    const params = useParams();
    const ref1 = useRef();
    const ref2 = useRef();

    const handleScreeningStartChange = (event) => {
        const { name, value } = event.target;
        setScreeningStarted((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSave = async () => {
        await axiosRequest.patch('/subject/screening/startofscreening', {
            dateofstart: screeningStarted.dateofstart,
            protocol_id: parseInt(params.protocolId),
            subject_num: (index).toString(),
            timeofstart: screeningStarted.timeofstart
        })
        window.location.reload()
    }

    const colors = Object.values(data).map((condition: any) => condition.Color);
    if (colors.includes(3) || colors.includes(5)) {
        setIsColorRed(true);
        if (isOptionsColorRed.startOfScreening !== true) {
            setIsOptionsColorRed(prevState => ({
                ...prevState,
                startOfScreening: true
            }));
        }
    }

    return (
        <div className="form" id={anchorClassname}>
            <h3>Начало скрининга</h3>
            <hr className="hr" />
            <div className="section">
                <label>
                    Дата подписания
                    <div className="label-select">
                        <input
                            disabled={data && data?.DateStartOfScreeningCondition?.Color != 0}
                            type="date"
                            ref={ref1}
                            name="dateofstart"
                            value={screeningStarted.dateofstart}
                            onChange={handleScreeningStartChange}
                            className='exact-protocol-select'
                        />
                        <div className="label-select-block">
                            <StateControl color={data && data?.DateStartOfScreeningCondition.Color} refProps={ref1} element={
                                <input
                                    type="date"
                                    ref={ref1}
                                    name="dateofstart"
                                    value={screeningStarted.dateofstart}
                                    onChange={handleScreeningStartChange}
                                    className='exact-protocol-select'
                                />
                            } index={index} fieldName={'dateofstart'}/>
                        </div>
                    </div>
                </label>
                <hr className="hr" />
                <label>
                    Время подписания
                    <div className="label-select">
                        <input
                            disabled={data && data?.TimeStartOfScreeningCondition.Color != 0}
                            type="text"
                            ref={ref2}
                            name="timeofstart"
                            value={screeningStarted.timeofstart}
                            onChange={handleScreeningStartChange}
                            className='exact-protocol-select'
                        />
                        <div className="label-select-block">
                            <StateControl color={data && data?.TimeStartOfScreeningCondition.Color} refProps={ref2} element={
                                <input
                                    type="text"
                                    ref={ref2}
                                    name="timeofstart"
                                    value={screeningStarted.timeofstart}
                                    onChange={handleScreeningStartChange}
                                    className='exact-protocol-select'
                                />
                            } index={index} fieldName={'timeofstart'}/>
                        </div>
                    </div>
                </label>
            </div>
            {
                data && data?.TimeStartOfScreeningCondition.Color !== 1 ?
                    <button className="modal-button" type="submit" onClick={handleSave}>Отправить</button>
                    :
                    ''
            }
        </div>
    );
};

export default ScreeningStarting;