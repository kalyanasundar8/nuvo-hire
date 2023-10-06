import React, { useState } from "react";
import ApiService from "./ApiService";
import { Button, Spinner } from "react-bootstrap";

const UploaderServices = ({ onFileUpload, Filetype }) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);

  const handleFileChange = async (event) => {
    setLoading(true);
    event.preventDefault();

    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("type", Filetype);

    try {
      const response = await ApiService("resume-upload", "POST", data, true);
      console.log("File uploaded successfully", response.data.path);
      setFiles(selectedFile);
      onFileUpload(response.data.path); // Callback to handle the uploaded file path
    } catch (error) {
      console.error("Error uploading file: ", error);
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    backgroundColor: "#ccc", // Muted gray color
    // Add any other styles you want
  };

  return (
    <div className={`${Filetype}-uploader`}>
      <label htmlFor={`${Filetype}-input`}>
        <Button as='span' style={buttonStyle}>
          Choose File
        </Button>
      </label>
      <input
        id={`${Filetype}-input`}
        type='file' // Define accepted file types
        onChange={handleFileChange}
        disabled={loading}
        style={{ display: "none" }} // Hide the input element
      />
      {loading ? (
        <Spinner animation='border' role='status' size='sm' />
      ) : (
        <p class='mt-3'>
          {files ? (
            <span class='text-success'>{`Uploaded: ${files.name}`}</span>
          ) : (
            <span class='text-danger'>No file selected</span>
          )}
        </p>
      )}
    </div>
  );
};

export default UploaderServices;
