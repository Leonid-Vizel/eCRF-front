import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd';

interface UploadProps extends AntUploadProps {}

export const Upload = (props:UploadProps) => <AntUpload {...props} />;
