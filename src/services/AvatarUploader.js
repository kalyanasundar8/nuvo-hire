import React, { useEffect, useState } from "react";
import ApiService from "./ApiService";
import { Button, Spinner } from "react-bootstrap";
import { FaUserEdit, FaUser } from "react-icons/fa";
import { fetchAvatar } from "./ProfilePageService";

const AvatarUploader = ({ onAvatarUpload }) => {

  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarSource, setAvatarSource] = useState("");

  const handleAvatarChange = async (event) => {
    setLoading(true);
    event.preventDefault();

    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setLoading(false);
      return;
    }

    // Check if the selected file is an image (you can add more image formats if needed)
    if (!selectedFile.type.startsWith("image/")) {
      console.error("Invalid file type. Please select an image.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("type", "avatar");

    try {
      const response = await ApiService("upload-kyc", "POST", data, true);
      console.log("Avatar uploaded successfully", response.data.path);
      setAvatar(selectedFile);
      onAvatarUpload(response.data.path); // Callback to handle the uploaded avatar path
    } catch (error) {
      console.error("Error uploading avatar: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Avatar image fetching
  const fetchAvatarImage = async () => {
    try {
      const response = await fetchAvatar();
      console.log(response);
      if (response.data.data && response.data.data.length > 0) {
        const { avatar, company_logo } = response.data.data[0];
        if (company_logo === "") {
          setAvatarSource(avatar); // Use the avatar path
        } else {
          setAvatarSource(company_logo); // Use the company_logo path
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAvatarImage();
  }, []);

  const buttonStyle = {
    backgroundColor: "#ccc", // Muted gray color
    // Add any other styles you want
  };

  return (
    <div className='avatar-uploader'>
      <label htmlFor='avatar-input'>
        <div
          className='avatar-icon-container'
          style={{
            border: "1px solid #ccc",
            borderRadius: "100px",
            width: "100px",
            height: "100px",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {avatarSource ? (
            <img
              src={avatarSource}
              alt='Avatar'
              className='avatarImage'
              width={400}
              style={{
                height: "90px",
                borderRadius: "100px"
              }}
            />
          ) : (
            <div className='edit-avatar'>
              <FaUserEdit size={40} />
            </div>
          )}
        </div>
      </label>
      <input
        id='avatar-input'
        type='file'
        accept='image/*'
        onChange={handleAvatarChange}
        disabled={loading}
        style={{ display: "none" }}
      />
      {loading ? (
        <Spinner animation='border' role='status' size='sm' />
      ) : (
        <p className='mt-3'>
          {avatar ? (
            <span className='text-success'>{`Uploaded: ${avatar.name}`}</span>
          ) : (
            ""
          )}
        </p>
      )}
    </div>
  );
};

export default AvatarUploader;
