import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";

function FileUploadCard({ name, setFieldValue }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFieldValue(name, imageUrl);
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        id={name}
        name={name}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor={name}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<AddPhotoAlternate />}
        >
          Upload Image
        </Button>
      </label>
      <CardContent>
        {selectedImage ? (
          <Card style={{ maxWidth: 200, margin: 8 }}>
            <CardMedia
              component="img"
              alt={`Image`}
              height="200"
              image={selectedImage}
            />
            <CardContent>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setSelectedImage(null)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            No image selected
          </Typography>
        )}
      </CardContent>
    </Box>
  );
}

export default FileUploadCard;
