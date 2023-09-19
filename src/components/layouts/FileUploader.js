import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import {
  AiOutlineFile,
  AiOutlineFilePdf,
  AiOutlineFileImage,
} from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Alert } from "react-bootstrap";

const FileUploader = ({ setAttachmentFiles, type }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [removeFiles, setRemoveFiles] = useState(selectedFiles);
  const [isDragging, setIsDragging] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

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

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const allowedFileTypes = ["pdf", "jpg", "jpeg", "png"];

  const handleDrop = async (event) => {
    setLoading(true);
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    const data = new FormData();

    const invalidFiles = Array.from(files).filter((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      return !allowedFileTypes.includes(extension);
    });

    if (invalidFiles.length > 0) {
      console.error("Invalid file types: ", invalidFiles);
      setAlertMessage(
        <Alert variant='danger'>Upload .jpg, .jpeg, .png or .pdf files</Alert>
      );
      setLoading(false);
      return;
    } else {
      setAlertMessage(null);
    }

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    data.append("type", type);

    try {
      const response = await ApiService("upload-kyc", "POST", data, true);
      console.log("Files uploaded successfully");

      setSelectedFiles((prevSelectedFiles) => [
        ...prevSelectedFiles,
        response.data.path,
      ]);
    } catch (error) {
      console.error("Error uploading files: ", error);
    } finally {
      setLoading(false);
    }
  };

  function getFileTypeIcon(filePath) {
    const extension = filePath.split(".").pop().toLowerCase();
    if (extension === "pdf") {
      return <AiOutlineFilePdf size={40} />; // PDF icon
    } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {
      return <AiOutlineFileImage size={40} />; // Image icon
    } else {
      // Add more file type icons as needed for other file types
      return <AiOutlineFile size={40} />; // Default file icon
    }
  }

  // Helper function to get the file name
  function getFileName(filePath) {
    return filePath.split("/").pop();
  }

  function truncateFileName(fileName) {
    if (fileName.length > 10) {
      return fileName.substring(0, 10) + "...";
    }
    return fileName;
  }

  return (
    <div>
      <div
        className={`mb-3 text-center ${isDragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor='attachments' className='form-label'>
          Attachments
        </label>
        <input
          type='file'
          className='form-control visually-hidden'
          id='attachments'
          name='attachments'
          multiple
          // onChange={handleFileChange}
          style={{ border: "2px dashed #000", cursor: "pointer" }}
        />
        <div
          style={{
            border: "2px dashed #000",
            borderColor: "#007BFF",
            cursor: "pointer",
            height: "100px",
          }}
        >
          <label className='btn btn-link m-4' htmlFor='attachments'>
            Choose File
          </label>
        </div>
        {selectedFiles.length > 0 && (
          <div className='row'>
            {selectedFiles.map((filePath, index) => (
              <div className='col-md-3 mt-4 mb-3' key={index}>
                <div className='card text-center'>
                  <div className='card-body'>
                    <div className='mb-2'>
                      <h1 className='display-4'>{getFileTypeIcon(filePath)}</h1>
                    </div>
                    <p className='card-text small'>
                      {truncateFileName(getFileName(filePath))}
                    </p>
                    <button
                      type='button'
                      className='className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"'
                      onClick={() => handleCancelFile(index)}
                      style={{
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        fontSize: "10px",
                        border: "none",
                        backgroundColor: "transparent",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      <MdCancel size={20} color='red' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>{alertMessage && <div>{alertMessage}</div>}</div>
      {loading && (
        <div className='loader text-success fw-bold'>Uploading...</div>
      )}
    </div>
  );
};

export default FileUploader;
