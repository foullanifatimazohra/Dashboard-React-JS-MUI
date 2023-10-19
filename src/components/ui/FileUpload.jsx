import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

function FileUploadCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Card>
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload">
        <IconButton component="span">
          <AddPhotoAlternate />
        </IconButton>
      </label>
      <CardContent>
        {selectedImage ? (
          <CardMedia
            component="img"
            alt="Selected Image"
            sx={{
              width: "200px !important",
            }}
            height="200"
            image={selectedImage}
          />
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            No image selected
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default FileUploadCard;
