import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/ui/Header";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export const Categories = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //?Todo get all categories and set it to the category data state
    setCategoryData([]);
  }, []);

  const handleDelete = (id) => {
    //?Todo : handle delete category based on the Id
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      renderCell: ({ row: { thumbnail, title } }) => {
        return (
          <img
            src={thumbnail}
            width="100%"
            height="auto"
            alt={title}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },

    {
      field: "parent",
      headerName: "Parent",
      flex: 1,
      renderCell: ({ row: { thumbnail } }) => {
        return (
          <Box
            backgroundColor={colors.greenAccent[600]}
            p="10px"
            borderRadius="20px"
            textAlign="center"
          >
            {thumbnail ? "Yes" : null}
          </Box>
        );
      },
    },
    {
      name: "Actions",
      headerName: "Actions",
      type: "button",
      align: "end",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => {
                navigate(`${params.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(params.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="Categories" subtitle="Managing your Categories" />
      <Box display="flex" justifyContent="end" my="20px">
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => navigate("add")}
        >
          Create New Category
        </Button>
      </Box>
      <DataGrid rows={categoryData} columns={columns} />
    </Box>
  );
};
