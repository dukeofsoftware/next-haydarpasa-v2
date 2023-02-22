"use client"
import { useState } from 'react'
import Image from 'next/image'
import axios from "axios"
const FileUploader = () => {
    const [uploading, setUploading] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedFile, setSelectedFile] = useState<File>()

    const handleUpload = async ()=>{
        console.log(selectedFile,selectedImage);
        
        setUploading(true)
        try {
            if(!selectedFile) return;
            const formData = new FormData()
            formData.append("myImage",selectedFile)
            const { data } = await axios.post("/api/image", formData);
            console.log(data);
            console.log(data)
        } catch (error) {
            console.log(error);
            
        }
    
        setUploading(false)
    }
    return (
        <>
            <div className='max-w-4xl mx-auto p-8 space-y-6'>
                <label htmlFor="
            ">
                    <input type="file"  />
                    <div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'
                        onChange={({ target }) => {
                            // @ts-ignore
                            if (target.files) {
                                // @ts-ignore
                                const file = target.files[0]
                                setSelectedFile(file)
                                setSelectedImage(URL.createObjectURL(file));
                                console.log(selectedFile,selectedImage);
                                
                            }
                        }}
                    >
                        {
                            selectedImage ? (
                                <Image src={selectedImage} alt="Seçilmiş Dosya" fill />)
                                : <span>Resim seç</span>
                        }
                    </div>
                </label>
                <button
                    disabled={uploading}
                    onClick={handleUpload}
                    className={`${uploading ? "opacity-50" : "opacity-100"} duration-300 in-ease-out transition-opacity bg-red-600 p-3 w-32 text-center rounded text-white`}>
                    {uploading ? "Yükleniyor..." : "Yükle"}
                </button>

            </div>
        </>

    )
}

export default FileUploader