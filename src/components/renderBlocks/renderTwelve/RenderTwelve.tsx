import React from 'react';
import {addDiseaseToFormData} from "./addTwelveInputs";
import {updateDiseaseFieldInFormData} from "./twelveInputChange";
import {removeDiseaseFromFormData} from "./removeTwelveInputs";

const RenderTwelve = ({formIndex, formData}) => {
    if (
        !formData[formIndex]?.deseases ||
        formData[formIndex]?.deseases.length === 0
    ) {
        return (
            <div className='document-data-block-info-block-bottom-info-inputs'>
                <button onClick={() => addDiseaseToFormData(formData ,formIndex)}>
                    Добавить строку
                </button>
            </div>
        );
    }

    return (
        formData[formIndex]?.deseases &&
        formData[formIndex]?.deseases.map((item, index) => (
            <div
                className='document-data-block-info-block-bottom-info-inputs'
                key={index}
            >
                <div className='document-input-block'>
                    <label
                        className={'document-input-block-label-date'}
                        htmlFor={`startDateTwelve-${index}`}
                    >
                            <span
                                className={
                                    'document-input-block-label-date-span'
                                }
                            >
                                Дата начала диспансерного наблюдения
                            </span>
                        <input
                            className='document-input'
                            type='date'
                            max='9999-12-31'
                            value={item.date ? item.date : null}
                            onChange={(event) =>
                                updateDiseaseFieldInFormData(
                                    formData,
                                    formIndex,
                                    index,
                                    'date',
                                    event.target.value
                                )
                            }
                            placeholder='Дата начала'
                            id={`startDateTwelve-${index}`}
                        />
                    </label>
                    <label
                        className={'document-input-block-label-date'}
                        htmlFor={`endDateTwelve-${index}`}
                    >
                            <span
                                className={
                                    'document-input-block-label-date-span'
                                }
                            >
                                Дата прекращения диспансерного наблюдения
                            </span>
                        <input
                            className='document-input'
                            type='date'
                            max='9999-12-31'
                            value={item.endDate ? item.endDate : null}
                            onChange={(event) =>
                                updateDiseaseFieldInFormData(
                                    formData,
                                    formIndex,
                                    index,
                                    'endDate',
                                    event.target.value
                                )
                            }
                            placeholder='Дата прекращения'
                            id={`endDateTwelve-${index}`}
                        />
                    </label>
                    <label htmlFor={`mkbCodeTwelve-${index}`}>
                            <span
                                className={
                                    'document-input-block-label-date-span'
                                }
                            >
                                Код по МКБ-10
                            </span>
                        <input
                            className='document-input'
                            type='text'
                            value={item.code}
                            onChange={(event) =>
                                updateDiseaseFieldInFormData(
                                    formData,
                                    formIndex,
                                    index,
                                    'code',
                                    event.target.value
                                )
                            }
                            placeholder='Код по МКБ-10'
                            id={`mkbCodeTwelve-${index}`}
                        />
                    </label>
                    <label className={'document-input-block-label-sm'}>
                            <span
                                className={
                                    'document-input-block-label-date-span'
                                }
                            >
                                Диагноз
                            </span>
                        <textarea
                            style={{ resize: 'none' }}
                            className='document-input-doc-sm'
                            value={item.diagnosis}
                            onChange={(event) =>
                                updateDiseaseFieldInFormData(
                                    formData,
                                    formIndex,
                                    index,
                                    'diagnosis',
                                    event.target.value
                                )
                            }
                            placeholder='Диагноз'
                            id={`diagnosisTwelve-${index}`}
                        />
                    </label>
                    <label
                        className={'document-input-block-label'}
                        htmlFor={`doctorTwelve-${index}`}
                    >
                            <span
                                className={
                                    'document-input-block-label-date-span'
                                }
                            >
                                Врач
                            </span>
                        <textarea
                            style={{ resize: 'none' }}
                            className='document-input-doc'
                            value={item.doctor}
                            onChange={(event) =>
                                updateDiseaseFieldInFormData(
                                    formData,
                                    formIndex,
                                    index,
                                    'doctor',
                                    event.target.value
                                )
                            }
                            placeholder='Врач'
                            id={`doctorTwelve-${index}`}
                        />
                    </label>
                    <div className='document-button-block'>
                        <button
                            className='document-button'
                            onClick={() => addDiseaseToFormData(formData, formIndex)}
                        >
                            Добавить пункт
                        </button>
                        <button
                            className='document-button'
                            onClick={() =>
                                removeDiseaseFromFormData(formData, formIndex, index)
                            }
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        ))
    );
};

export default RenderTwelve;