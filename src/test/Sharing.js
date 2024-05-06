import React, { useState } from "react";
import styled from "styled-components";

export default function Sharing() {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
  
    const handleImageUpload = (e) => {
      // Handle image upload and set it to state
    };
  
    const handleCaptionChange = (e) => {
      // Handle caption change and set it to state
    };
  
    const handleShare = () => {
        if (!image) {
          alert('Please upload an image.');
          return;
        }
      
        // Create a data URL for the image
        const dataUrl = image.split(',')[1]; // Remove the data URL scheme (e.g., "data:image/png;base64,")
        const blob = new Blob([atob(dataUrl)], { type: 'image/jpeg' });
        const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      
        // Create a temporary anchor element to trigger download
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(file);
        anchor.download = 'image.jpg';
        anchor.click();
      
        // Provide caption for manual sharing
        const shareCaption = `Check out my post on Instagram: ${caption}`;
      
        // Alert user to share manually
        alert(`Please share the prepared image with the following caption:\n\n${shareCaption}`);
      };

  return (
    <SharingWrapper>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      <textarea
        value={caption}
        onChange={handleCaptionChange}
        placeholder="Add a caption..."
      />

      <h1 onClick={handleShare}>Sharing</h1>
    </SharingWrapper>
  );
}

const SharingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
