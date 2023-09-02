import React, {useEffect, useState} from 'react';
import './exactProtocolUpdate.scss'
import {useAppSelector} from "../../../store/redux-hook";
import {journalSelector} from "../../../store/journalSlice/journalSelector";
import {useNavigate} from "react-router-dom";

const ExactJournalUpdate = () => {
    const { selectedItem, selectedMethod, selectedType } = useAppSelector(journalSelector);
    const navigate = useNavigate();
    const [localData, setLocalData] = useState(selectedItem);

    useEffect(() => {
        setLocalData(selectedItem);
    }, [selectedItem]);

    useEffect(() => {
        if (!localData) {
            navigate('/journal');
        }
    }, [localData, navigate]);

    if (!localData) {
        return null;
    }

    console.log(selectedItem)

    type UserRole = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    const UserRoleMap: Record<UserRole, string> = {
        0: 'Администратор',
        1: 'Исследователь',
        2: 'Главный исследователь',
        3: 'Монитор',
        4: 'Дата менеджер',
        5: 'Аудитор контроля качества',
        6: 'Медицинский монитор',
        7: 'Специалист по фармаконадзору',
    };


    return (
        <div className='exact-journal-update'>
            <span>Информация об изменениях</span>
            {/*Обнов юзеров*/}
            {selectedMethod === 'update' && selectedType === 'Обновление пользователя' && (
                <div className='exact-journal-update-block'>
                    {selectedItem && selectedItem.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div className='exact-journal-update-left' key={index}>
                                    <span>ID пользователя</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item[0].Value} />
                                    <span>Роль</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Статус протокола'
                                           value={UserRoleMap[item[1].Value]}/>
                                    <span>ID центра</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[2].Value}/>
                                    <span>Email</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[3].Value}/>
                                    <span>Имя</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[4].Value}/>
                                    <span>Пароль</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[5].Value}/>
                                </div>
                            );
                        } else if (index === 1) {
                            return (
                                <React.Fragment key={index}>
                                    <img src='/next_arrow.png' alt='' />
                                    <div className='exact-journal-update-left'>
                                        <span>ID пользователя</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item[0].Value} />
                                        <span>Роль</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Статус протокола' value={UserRoleMap[item[3].Value]}/>
                                        <span>ID центра</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[4].Value}/>
                                        <span>Email</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[1].Value}/>
                                        <span>Имя</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[2].Value}/>
                                        <span>Пароль</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[5].Value}/>
                                    </div>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
            )}

            {/*обнов протоколов*/}
            {selectedMethod === 'update' && selectedType === 'Обновление протокола' && (
                <div className='exact-journal-update-block'>
                    {selectedItem && selectedItem.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div className='exact-journal-update-left' key={index}>
                                    <span>ID протокола</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item[0].Value} />
                                    <span>Статус</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Статус протокола'
                                           value={item[1].Value === 1 ? 'Активный' : 'Не активный'}/>
                                    <span>Название протокола</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[2].Value}/>
                                    <span>ID протокола</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[3].Value}/>
                                </div>
                            );
                        } else if (index === 1) {
                            return (
                                <React.Fragment key={index}>
                                    <img src='/next_arrow.png' alt='' />
                                    <div className='exact-journal-update-left'>
                                        <span>ID протокола</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item[0].Value} />
                                        <span>Статус</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Статус протокола'
                                               value={item[1].Value === 1 ? 'Активный' : 'Не активный'}/>
                                        <span>Название протокола</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[1].Value}/>
                                        <span>ID протокола</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Центр к которому прикреплен протокол' value={item[3].Value}/>
                                    </div>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
            )}

            {/*обнов центра*/}
            {selectedMethod === 'update' && selectedType === 'Обновление центра' && (
                <div className='exact-journal-update-block'>
                    {selectedItem && selectedItem.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div className='exact-journal-update-left' key={index}>
                                    <span>ID центра</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item[0].Value} />
                                    <span>Название</span>
                                    <input className='disabled' type='text' disabled={true} placeholder='Статус протокола'
                                           value={item[1].Value}/>
                                </div>
                            );
                        } else if (index === 1) {
                            return (
                                <React.Fragment key={index}>
                                    <img src='/next_arrow.png' alt='' />
                                    <div className='exact-journal-update-left'>
                                        <span>Название протокола</span>
                                        <input className='disabled' type='text' disabled={true} placeholder='Название протокола' value={item} />
                                    </div>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default ExactJournalUpdate;