// import React from 'react';
// import {twentyDataGet} from "../../../store/documentSlice/documentSlice";
// import {useAppDispatch} from "../../../store/redux-hook";
//
// const RenderTwentyInputs = ({setFormData, formData, formIndex}) => {
//
//     const dispatch = useAppDispatch();
//
//     const handleInputTwentyChange = (formIndex, index, field, value) => {
//         setFormData((prevFormData) => {
//             const newFormData = [...prevFormData];
//             if (field === "type") {
//                 value = value === null ? null : Number(value);
//             }
//             newFormData[formIndex] = {
//                 ...newFormData[formIndex],
//                 diagnosis: newFormData[formIndex].diagnosis.map((item, i) =>
//                     i === index ? { ...item, [field]: value } : item
//                 ),
//             };
//             return newFormData;
//         });
//         dispatch(twentyDataGet(formData[formIndex].diagnosis));
//     };
//
//     const handleAddTwentyInput = (formIndex) => {
//         setFormData((prevFormData) => {
//             const newFormData = [...prevFormData];
//             if (!newFormData[formIndex].diagnosis) {
//                 newFormData[formIndex].diagnosis = [{
//                     date: null,
//                     text: null,
//                     type: null,
//                     doctor: null
//                 }];
//             } else {
//                 newFormData[formIndex].diagnosis.push({
//                     date: null,
//                     text: null,
//                     type: null,
//                     doctor: null
//                 });
//             }
//             return newFormData;
//         });
//     };
//
//     const handleRemoveTwentyInput = (formIndex, index) => {
//         setFormData((prevFormData) => {
//             const newFormData = [...prevFormData];
//             newFormData[formIndex] = {
//                 ...newFormData[formIndex],
//                 diagnosis: newFormData[formIndex].diagnosis.filter((item, i) => i !== index)
//             };
//             return newFormData;
//         });
//         dispatch(twentyDataGet(formData[formIndex].diagnosis));
//     };
//
//     const renderTwentyInputs = (formIndex) => {
//         if (formData[formIndex] && Array.isArray(formData[formIndex].diagnosis) && formData[formIndex].diagnosis.length === 0) {
//             return (
//                 <div className='document-data-block-info-block-bottom-info-inputs'>
//                     <button onClick={() => handleAddTwentyInput(formIndex)}>Добавить строку</button>
//                 </div>
//             );
//         }
//
//         return formData[formIndex]?.diagnosis && formData[formIndex]?.diagnosis.map((item, index) => (
//             <div className='document-data-block-info-block-bottom-info-inputs' key={index}>
//                 <div className="document-input-block">
//                     <label htmlFor={`dateTwenty-${index}`}>
//                         <span className={'document-input-block-label-date-span'}>Дата начала диспансерного наблюдения</span>
//                         <input
//                             className='document-input'
//                             type="date"
//                             value={item.date ? item.date : null}
//                             onChange={(event) => handleInputTwentyChange(formIndex, index, 'date', event.target.value)}
//                             placeholder="Дата начала"
//                             id={`dateTwenty-${index}`}
//                         />
//                     </label>
//                     <label htmlFor={`isFirstTwenty-${index}`}>
//                         <span className={'document-input-block-label-date-span'}>Установленные впервые или повторно (+/-)</span>
//                         <select
//                             className='veneral-info'
//                             name="type"
//                             onChange={(event) => handleInputTwentyChange(formIndex, index, 'type', event.target.value)}
//                             value={item.type}
//                         >
//                             <option value="">Выберите</option>
//                             <option value={0}>Нет</option>
//                             <option value={1}>Да</option>
//                         </select>
//                     </label>
//                     <label className={'document-input-block-label-sm'} htmlFor={`doctorTwenty-${index}`}>
//                         <span className={'document-input-block-label-date-span'}>Заключительные (уточненные) диагнозы</span>
//                         <textarea
//                             style={{ resize: "none" }}
//                             className='document-input-doc-sm'
//                             value={item.text}
//                             onChange={(event) => handleInputTwentyChange(formIndex, index, 'text', event.target.value)}
//                             placeholder="Диагноз"
//                             id={`diagnosisTwenty-${index}`}
//                         />
//                     </label>
//                     <label className={'document-input-block-label'} htmlFor={`doctorTwenty-${index}`}>
//                         <span className={'document-input-block-label-date-span'}>Врач</span>
//                         <textarea
//                             style={{ resize: "none" }}
//                             className='document-input-doc'
//                             value={item.doctor}
//                             onChange={(event) => handleInputTwentyChange(formIndex, index, 'doctor', event.target.value)}
//                             placeholder="Врач"
//                             id={`doctorTwenty-${index}`}
//                         />
//                     </label>
//                     <div className="document-button-block">
//                         <button className='document-button' onClick={() => handleAddTwentyInput(formIndex)}>Добавить пункт</button>
//                         <button className='document-button' onClick={() => handleRemoveTwentyInput(formIndex, index)}>Удалить</button>
//                     </div>
//                 </div>
//             </div>
//         ));
//     };
//
//     return renderTwentyInputs(formIndex);
// };
//
// export default RenderTwentyInputs;
