import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

function FileUploadMultiple() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        style={{ display: "none" }}
        multiple
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload">
        <IconButton component="span">
          <AddPhotoAlternate />
        </IconButton>
      </label>
      <Box display="flex" flexDirection="row">
        {selectedImages.map((image, index) => (
          <Card key={index} style={{ maxWidth: 200, margin: 8 }}>
            <CardMedia
              component="img"
              alt={`Image ${index + 1}`}
              height="200"
              image={image}
            />
            <CardContent>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeImage(index)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
        {selectedImages.length === 0 && (
          <Typography variant="body2" color="textSecondary" component="p">
            No images selected
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default FileUploadMultiple;
