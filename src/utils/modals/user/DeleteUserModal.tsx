import React from 'react';
import { axiosCardRequest, axiosRequest } from '../../request/NewAxiosRequest';

const DeleteUserModal = ({
  handleModalClose,
  inputIdUserDelete,
  setInputIdUserDelete,
}) => {
  const handleDeleteUser = async () => {
    await axiosCardRequest
      .delete('/user/delete', {
        data: {
          id: parseInt(inputIdUserDelete),
        },
      })
      .then(() => {
        console.log('success');
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={handleDeleteUser}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Удалить пользователя</span>
        <div className="modal-content">
          ID-пользователя
          <input
            type="text"
            placeholder="Введите ID"
            value={inputIdUserDelete}
            onChange={(e) => setInputIdUserDelete(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleDeleteUser}>
            Сохранить
          </button>
          <button className="modal-button" onClick={handleModalClose}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
