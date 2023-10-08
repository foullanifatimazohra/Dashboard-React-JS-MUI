import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/ui/Header";
import TextField from "../../components/ui/TextField";

function FormPage() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };
  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a New User Profile" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Field
                  id="firsName"
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your name"
                  as={TextField}
                />
                <Field
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  as={TextField}
                />
                <Field
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  as={TextField}
                />
                <Field
                  id="contact"
                  name="contact"
                  label="Contact"
                  type="phone"
                  placeholder="Enter your phone number"
                  as={TextField}
                />
                <Field
                  id="address1"
                  name="address1"
                  label="Adresse 1"
                  type="phone"
                  placeholder="Enter you first adresse"
                  as={TextField}
                />
                <Field
                  id="address2"
                  name="address2"
                  label="Adresse 2"
                  type="phone"
                  placeholder="Enter you second adresse"
                  as={TextField}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default FormPage;
