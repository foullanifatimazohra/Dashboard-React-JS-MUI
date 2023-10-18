import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/ui/Header";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import TextField from "../../components/ui/TextField";
import { TextArea } from "../../components/ui/TextArea";

export const SingleProduct = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    // thumbnail: "",
    // images: [],
  });

  useEffect(() => {
    // fetch the single product data
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((actualData) => setInitialValues(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const validationSchema = yup.object().shape({
    title: yup.string().required("this field is required"),
    description: yup.string().required("this field is required"),
    price: yup.number().min(0).required("this field is required"),
    discountPercentage: yup.number().min(0).required("this field is required"),
    rating: yup.number().min(0).required("this field is required"),
    stock: yup.number().min(0).required("this field is required"),
    brand: yup.string().required("this field is required"),
    category: yup.string().required("this field is required"),
  });
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };
  return (
    <Box m="20px" pb={5}>
      <Header
        title={id ? "Update Product " : "Add a New Product"}
        subtitle="Manage your products "
      />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <Box display="flex" flexDirection="column" gap={4}>
                <Field
                  id="title"
                  name="title"
                  label="Product Title"
                  as={TextField}
                />
                <Field
                  id="description"
                  name="description"
                  label="Product Description"
                  as={TextArea}
                />
                <Field
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  as={TextField}
                />
                <Field
                  id="discountPercentage"
                  name="discountPercentage"
                  label="Discount Percentage"
                  type="number"
                  as={TextField}
                />
                <Field
                  id="rating"
                  name="rating"
                  label="Rating"
                  type="number"
                  as={TextField}
                />
                <Field
                  id="stock"
                  name="stock"
                  label="Stock"
                  type="number"
                  as={TextField}
                />
                <Field id="brand" name="brand" label="Brand" as={TextField} />
                <Field
                  id="category"
                  name="category"
                  label="category"
                  as={TextField}
                />
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    size="large"
                  >
                    {id ? "Update Product" : "Add Product"}
                  </Button>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
