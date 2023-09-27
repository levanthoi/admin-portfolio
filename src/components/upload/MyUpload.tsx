import React from 'react';
import { IImage } from '@/types/upload.type';
import { App, Upload, UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import baseUrl from '@/utils/baseUrl';
import { getItem } from '@/utils/cookie';
import { deleteFile } from '@/services/upload';
import { useDispatch } from 'react-redux';
import { setImages } from '@/store/module/upload';

interface Props {
  name: string;
  images: IImage[] | any;
}

const MyUpload: React.FC<Props> = ({ name, images }) => {
  const { message } = App.useApp();
  const dispatch = useDispatch();
  //   const [images, setImages] = useState<IImage[]>([]);

  const handleChangeUpload: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    console.log(newFileList);
    const a: IImage[] = newFileList?.map((file) => {
      const { response } = file;
      return {
        url: response?.images[0]?.secure_url || '',
        uid: response?.images[0]?.public_id || '',
        name: response?.images[0]?.name || '',
      };
    });
    // setImages(a);
    dispatch(setImages(a));
  };

  const handleRemove: UploadProps['onRemove'] = async (file) => {
    // console.log('remove', file);
    const uid = file.response.images[0].public_id;
    const res = await deleteFile(uid);
    if (res.success) message.success(res.message);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  console.log(images);

  return (
    <Upload
      multiple
      fileList={images ? [...images] : []}
      action={`${baseUrl}/v1/upload`}
      headers={{
        authorization: `Bearer ${getItem('accessToken')}`,
      }}
      name={name}
      listType="picture-card"
      onChange={handleChangeUpload}
      onRemove={handleRemove}
    >
      {uploadButton}
    </Upload>
  );
};

export default MyUpload;
