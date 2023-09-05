import React, { useEffect, useState } from 'react';
import { axiosRequest } from '../../request/NewAxiosRequest';

const CenterList = ({ handleModalClose }) => {
  const [data, setData] = useState<any>('');

  useEffect(() => {
    const getAllCenters: any = async () => {
      await axiosRequest('/center/all').then(({ data }) => {
        setData(data);
      });
    };

    getAllCenters();
  }, []);

  console.log(data);

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Список центров</span>
        <div className="modal-list-content">
          {data
            && data.map((item) => (
              <span key={item.center_id}>{item.center_name}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CenterList;
