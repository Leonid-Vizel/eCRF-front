import React, { useEffect, useState } from 'react';
import './exactJournalOther.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/redux-hook';
import { journalSelector } from '../../../store/journalSlice/journalSelector';

const ExactJournalOther = () => {
  const { selectedItem, selectedMethod, selectedType } = useAppSelector(journalSelector);
  const navigate = useNavigate();
  const [localData, setLocalData] = useState(selectedItem);

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

    console.log(selectedItem);

    return (
      <div className="exact-journal-other">
        {/* Созданию юзера */}
        {
                selectedMethod === 'create' && selectedType === 'Регистрация пользователя' && (
                <>
                  <span>Создание Пользователя</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>ID пользователя</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                        <span>Email</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Статус протокола"
                          value={item[1].Value}
                        />
                        <span>Имя</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={item[2].Value}
                        />
                        <span>Роль</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={UserRoleMap[item[3].Value]}
                        />
                        <span>Номер центра</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={item[4].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Удаление юзера */}
        {
                selectedMethod === 'delete' && selectedType === 'Удаление пользователя' && (
                <>
                  <span>Удаление пользователя</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>ID пользователя</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                        <span>Email</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Статус протокола"
                          value={item[1].Value}
                        />
                        <span>Имя</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={item[2].Value}
                        />
                        <span>Роль</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={UserRoleMap[item[3].Value]}
                        />
                        <span>Номер центра</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Центр к которому прикреплен протокол"
                          value={item[4].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Добавление центра */}
        {
                selectedMethod === 'create' && selectedType === 'Добавление центра' && (
                <>
                  <span>Добавление центра</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>Название центра</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Удаление центра */}
        {
                selectedMethod === 'delete' && selectedType === 'Удаление центра' && (
                <>
                  <span>Удаление центра</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>id Центра</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Добавление протокола */}
        {
                selectedMethod === 'create' && selectedType === 'Добавление протокола' && (
                <>
                  <span>Добавление протокола</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>Название протокола</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                        <span>Статус протокола</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[1].Value === 1 ? 'Активный' : 'Не активный'}
                        />
                        <span>ID протокола</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[2].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Удаление протокола */}
        {
                selectedMethod === 'delete' && selectedType === 'Удаление протокола' && (
                <>
                  <span>Удаление протокола</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>id Протокола</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }

        {/* Добавление субьекта */}
        {
                selectedMethod === 'create' && selectedType === 'Добавление субьекта' && (
                <>
                  <span>Добавление субьекта</span>
                  <div className="exact-journal-other-block">
                    { selectedItem && selectedItem.map((item) => (

                      <div className="exact-journal-update-left">
                        <span>Число</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[0].Value}
                        />
                        <span>Инициалы</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[1].Value}
                        />
                        <span>id центра</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[2].Value}
                        />
                        <span>id Протокола</span>
                        <input
                          className="disabled"
                          type="text"
                          disabled
                          placeholder="Название протокола"
                          value={item[3].Value}
                        />
                      </div>
                    ))}
                  </div>
                </>
                )
            }
      </div>
    );
};

export default ExactJournalOther;
