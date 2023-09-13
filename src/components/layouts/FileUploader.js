import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

const FileUploader = ({ setAttachmentFiles, type }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [removeFiles, setRemoveFiles] = useState(selectedFiles);

  const handleFileChange = async (event) => {
    setLoading(true);
    const files = event.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    data.append("type", type);

    try {
      const response = await ApiService("upload-kyc", "POST", data, true);
      console.log("Files uploaded successfully: ", response.data.path);

      setSelectedFiles((prevSelectedFiles) => [
        ...prevSelectedFiles,
        response.data.path,
      ]);

      event.target.value = null;
    } catch (error) {
      console.error("Error uploading files: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Cancel file
  // const handleCancelFile = (indexRemove) => {
  //   const updateFiles = selectedFiles.filter(
  //     (_, index) => index !== indexRemove
  //   );
  //   setAttachmentFiles(updateFiles);
  // };

  const handleCancelFile = (index) => {
    setSelectedFiles((prevSelectedFiles) => {
      const updateFiles = [...prevSelectedFiles];
      updateFiles.splice(index, 1);
      return updateFiles;
    });
  };

  useEffect(() => {
    setAttachmentFiles(selectedFiles);
  }, [selectedFiles, setAttachmentFiles]);

  return (
    <div>
      <div className='mb-3'>
        <label htmlFor='attachments' className='form-label'>
          Attachments
        </label>
        <input
          type='file'
          className='form-control'
          id='attachments'
          name='attachments'
          multiple
          onChange={handleFileChange}
        />
        {selectedFiles.length > 0 && (
          <div>
            <h6 className='mt-4'>Selected Files: </h6>
            <ul>
              {selectedFiles.map((filePath, index) => (
                <li className='text-muted' key={index}>
                  {filePath}
                  <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    onClick={() => handleCancelFile(index)}
                  >
                    <i className='mdi mdi-cancel'></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {loading && (
        <div className='loader text-success fw-bold'>Uploading....</div>
      )}
    </div>
  );
};

export default FileUploader;
