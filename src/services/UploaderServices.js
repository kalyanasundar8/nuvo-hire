import React, { useState } from "react";
import ApiService from "./ApiService";
import { Button, Spinner } from "react-bootstrap";

const UploaderServices = ({ onFileUpload, Filetype }) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);

  const handleFileChange = async (selectedFile) => {
    setLoading(true);

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

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // Visual feedback to indicate that the file can be dropped
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    handleFileChange(selectedFile);
  };

  const handleFileInput = (event) => {
    event.preventDefault(); // Prevent the default behavior of the input element
    const selectedFile = event.target.files[0];
    handleFileChange(selectedFile);
  };

  const buttonStyle = {
    backgroundColor: "#ccc", // Muted gray color
    // Add any other styles you want
  };

  return (
    <div
      className={`${Filetype}-uploader`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label htmlFor={`${Filetype}-input`}>
        <Button as="span" style={buttonStyle}>
          Drag and drop (or) Choose File
        </Button>
      </label>
      <input
        id={`${Filetype}-input`}
        type="file" // Define accepted file types
        onChange={handleFileInput}
        disabled={loading}
        style={{ display: "none" }} // Hide the input element
      />
      {loading ? (
        <Spinner animation="border" role="status" size="sm" />
      ) : (
        <p className="mt-3">
          {files ? (
            <span className="text-success">{`Uploaded: ${files.name}`}</span>
          ) : (
            <span className="text-danger">No file selected</span>
          )}
        </p>
      )}
    </div>
  );
};

export default UploaderServices;
