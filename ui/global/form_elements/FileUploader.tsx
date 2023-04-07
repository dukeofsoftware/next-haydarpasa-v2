'use client';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
const FileUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
    } catch (error) {}

    setUploading(false);
  };
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6 p-8">
        <label
          htmlFor="
            "
        >
          <input type="file" />
          <div
            className="flex aspect-video w-40 cursor-pointer items-center justify-center rounded border-2 border-dashed"
            onChange={({ target }) => {
              // @ts-ignore
              if (target.files) {
                // @ts-ignore
                const file = target.files[0];
                setSelectedFile(file);
                setSelectedImage(URL.createObjectURL(file));
              }
            }}
          >
            {selectedImage ? (
              <Image src={selectedImage} alt="Seçilmiş Dosya" fill />
            ) : (
              <span>Resim seç</span>
            )}
          </div>
        </label>
        <button
          disabled={uploading}
          onClick={handleUpload}
          className={`${
            uploading ? 'opacity-50' : 'opacity-100'
          } in-ease-out w-32 rounded bg-red-600 p-3 text-center text-white transition-opacity duration-300`}
        >
          {uploading ? 'Yükleniyor...' : 'Yükle'}
        </button>
      </div>
    </>
  );
};

export default FileUploader;
