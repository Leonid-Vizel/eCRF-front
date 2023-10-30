import { Upload } from 'antd';
import { FC, useEffect, useState } from 'react';
import { externalSystemCall } from 'shared/api';
import { Button } from '../Button';

interface UploadDownloadListProps {
  listAction: string;
  uploadAction: string;
  deleteAction: string;
  accept?:string
}

export const UploadDownloadList: FC<UploadDownloadListProps> = ({
  listAction, uploadAction, deleteAction, accept = '.pdf',
}) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    externalSystemCall({ url: '', method: 'GET', endpoint: listAction }).then((response) => {
      const files = response.data.map((file) => ({ uid: file.id, name: file.name, url: file.linkFile }));
      setFileList(files);
    });
  }, [listAction]);

  return (
    <Upload
      accept={accept}
      action={uploadAction}
      onRemove={(file) => {
        externalSystemCall({ url: '', method: 'POST', endpoint: deleteAction.replace('{index}', file.uid) });
      }}
      onChange={(info) => {
        if (info.file.status === 'done') {
          externalSystemCall({ url: '', method: 'GET', endpoint: listAction }).then((response) => {
            const files = response.data.map((file) => ({ uid: file.id, name: file.name, url: file.linkFile }));
            setFileList(files);
          });
        } else {
          setFileList(info.fileList);
        }
      }}
      fileList={fileList}
    >
      <Button>Загрузить</Button>
    </Upload>
  );
};
