import { Upload } from 'antd';
import { FC, useEffect, useState } from 'react';
import { externalSystemCall } from 'shared/api';

interface UploadDownloadListProps {
  listAction: string;
  uploadAction: string;
  deleteAction: string;
}

export const UploadDownloadList: FC<UploadDownloadListProps> = ({ listAction, uploadAction, deleteAction }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    externalSystemCall({ method: 'GET', endpoint: listAction }).then((response) => setFileList(response.data));
  }, [listAction]);

  return (
    <Upload
      action={uploadAction}
      onRemove={(file) => {
        console.log(file.uid, deleteAction);
        externalSystemCall({ method: 'DELETE', endpoint: deleteAction.replace('{index}', file.uid) });
      }}
      onChange={(info) => console.log(info)}
      defaultFileList={fileList}
    />
  );
};
