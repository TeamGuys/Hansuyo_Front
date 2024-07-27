import React, {useState} from "react"

const Upload = () =>{

  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));
  };

  const handleUpload = () => {
    if (!file) {
      alert("파일을 선택하세요.");
      return;
    }
    console.log(file)
    alert("파일이 성공적으로 업로드되었습니다.");
  };

  return(
    <>
     <h1 className="text-3xl font-bold underline mb-4">
        동영상 업로드
      </h1>
      <input 
        type="file" 
        accept="video/*" 
        onChange={handleFileChange} 
        className="block w-full text-lg text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
      />
      <button 
        onClick={handleUpload} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        업로드
      </button>
      {fileURL && (
        <div>
          <h3 className="text-xl font-semibold mb-2">업로드된 동영상 미리보기:</h3>
          <video width="400" controls className="mb-4">
            <source src={fileURL} type="video/mp4" />
            브라우저가 동영상을 지원하지 않습니다.
          </video>
          <p>동영상 URL: {fileURL}</p>
        </div>
      )}
    </>
  )
}

export default Upload