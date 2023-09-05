import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosRequest } from '../../utils/request/NewAxiosRequest';
import { cookiesData } from '../../utils/cookies/getCookies';

const Circle = ({
  status, element, refProps, fieldName, index, isThird,
}) => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [firstSelectedOption, setFirstSelectedOption] = useState<any>('');

  // модалка для комментариев
  // №1
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [declineReasonValue, setDeclineReasonValue] = useState('');
  const [commentValue, setCommentValue] = useState('');

  const handleAddProtocol = () => {
    setShowAddModal(true);
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setDeclineReasonValue('');
    setCommentValue('');
  };

  const handleSaveReasons = async () => {
    if (isThird) {
      await axiosRequest.patch('/subject/action/updatecolorwithcomment', {
        comment: commentValue,
        field_name: fieldName,
        protocol_id: +params.protocolId,
        reason: declineReasonValue,
        sender: cookiesData.cookieName.toString(),
        sendersrole: cookiesData.cookieRole.toString(),
        subject_number: (index).toString(),
        value: 5,
      });
    } else {
      await axiosRequest.patch('/subject/action/updatecolorwithcomment', {
        comment: commentValue,
        field_name: fieldName,
        protocol_id: +params.protocolId,
        reason: declineReasonValue,
        sender: cookiesData.cookieName.toString(),
        sendersrole: cookiesData.cookieRole.toString(),
        subject_number: (index).toString(),
        value: 3,
      });
    }
    setShowAddModal(false);
    window.location.reload();
  };

  // console.log(refProps)

  // №2
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [newValue, setNewValue] = useState('');

  const handleEditProtocol = () => {
    setShowEditModal(true);
  };

  const handleModalEditClose = () => {
    setShowEditModal(false);
    setNewValue('');
  };

  const handleSaveEditReasons = async () => {
    if (isThird) {
      await axiosRequest.patch('/subject/action/updatefield', {
        color: 2,
        field_name: fieldName,
        protocol_id: +params.protocolId,
        subject_number: (index).toString(),
        value: refProps.current.value,
      });
    } else {
      await axiosRequest.patch('/subject/action/updatefield', {
        color: 1,
        field_name: fieldName,
        protocol_id: +params.protocolId,
        subject_number: (index).toString(),
        value: refProps.current.value,
      });
    }
    setShowEditModal(false);
    window.location.reload();
  };
  // конец модалок

  const toggleDropdown = () => {
    setIsFirstOpen(!isFirstOpen);
  };

  // const handleFirstOptionClick = (option) => {
  //     setFirstSelectedOption(option);
  //     setIsFirstOpen(false);
  // };

  const isDisabled = firstSelectedOption === 'yes';
  const circleColor = firstSelectedOption === 'yes' ? '#19ec19' : status === 'error' ? 'red' : '';

  const params = useParams();

  const handleSecondCircleAccept = async (option) => {
    if (isThird) {
      await axiosRequest.patch('/subject/action/updatecolor', {
        field_name: fieldName.toString(),
        protocol_id: parseInt(params.protocolId),
        subject_number: (index).toString(),
        value: 4,
      });
    } else {
      await axiosRequest.patch('/subject/action/updatecolor', {
        field_name: fieldName.toString(),
        protocol_id: parseInt(params.protocolId),
        subject_number: (index).toString(),
        value: 2,
      });
    }
    setFirstSelectedOption(option);
    setIsFirstOpen(false);
    window.location.reload();
  };

  return (
    <div className={`button-dropdown ${isFirstOpen ? 'open' : ''}`}>
      <button className={`button-dropdown-toggle ${firstSelectedOption}`} onClick={toggleDropdown} disabled={isDisabled}>
        <div className="button-dropdown-circle" style={{ background: circleColor }} />
        {isDisabled ? '' : <div className="button-dropdown-arrow" />}
      </button>

      {(status === 'pending') && isFirstOpen ? (
        <ul className="button-dropdown-options">
          <li className="option" onClick={() => handleSecondCircleAccept('yes')}>
            <span className="option-label">Принять</span>
          </li>
          <li className="option" onClick={() => handleAddProtocol()}>
            <span className="option-label">Отклонить</span>
          </li>
        </ul>
      ) : (
        isFirstOpen && status === 'error' && (
        <ul className="button-dropdown-options">
          <li className="option" onClick={() => handleEditProtocol()}>
            <span className="option-label">Изменить</span>
          </li>
        </ul>
        )
      )}

      {showAddModal && (
      <div className="modal-overlay" onClick={handleModalClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={handleModalClose}>
            ×
          </button>
          <span>Причина отклонения</span>
          <div className="modal-content">
            Пожалуйста, укажите причину отказа в верификации:
            <input
              type="text"
              placeholder="Введите название"
              value={declineReasonValue}
              onChange={(e) => setDeclineReasonValue(e.target.value)}
            />
            Комментарий:
            <input
              type="text"
              placeholder="Введите название"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
          </div>
          <div className="modal-actions">
            <button className="modal-button" onClick={handleSaveReasons}>
              Сохранить
            </button>
            <button className="modal-button" onClick={handleModalClose}>
              Отменить
            </button>
          </div>
        </div>
      </div>
      )}

      {showEditModal && (
      <div className="modal-overlay" onClick={handleModalEditClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={handleModalEditClose}>
            ×
          </button>
          <span>Изменение значения</span>
          <div className="modal-content">
            Новое значение:
            {element}
          </div>
          <div className="modal-actions">
            <button className="modal-button" onClick={handleSaveEditReasons}>
              Сохранить
            </button>
            <button className="modal-button" onClick={handleModalEditClose}>
              Отменить
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Circle;
