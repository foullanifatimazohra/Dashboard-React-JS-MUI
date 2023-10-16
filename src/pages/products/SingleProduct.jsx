import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/ui/Header";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";

export const SingleProduct = () => {
  const params = useParams();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  return (
    <Box m="20px">
      <Header
        title={params.id ? "Update Product " : "Add a New Product"}
        subtitle="Manage your products "
      />
    </Box>
  );
};
