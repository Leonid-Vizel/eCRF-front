import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';
import { Title } from 'shared/ui/Typography/Typography';
import { Upload } from 'shared/ui/Upload/Upload';
import { FC } from 'react';
import cls from './FileCard.module.scss';

interface FileCardProps {
  cardTitle: string
  uploadAction: string
  download?:boolean
  downloadAction?:string
  accept?:string
}

export const FileCard:FC<FileCardProps> = (props) => {
  const {
    cardTitle, uploadAction, download = false, downloadAction, accept = null,
  } = props;

  return (
    <Card className={cls.uploadCard}>
      <Title level={4}>
        {cardTitle}
      </Title>
      <div className={cls.buttons}>
        <Upload
          action={uploadAction}
          accept={accept}
        >
          <Button>Загрузить</Button>
        </Upload>
        {download && (
        <DownloadForm
          action={downloadAction}
          title="Скачать"
        />
        )}
      </div>
    </Card>
  );
};
