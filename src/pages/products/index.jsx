import React, { useState, useEffect } from "react";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/ui/Header";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Products = () => {
  const theme = useTheme();
  const [productsData, setProductsData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => setProductsData(actualData.products))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("your product has been deleted");

        setProductsData(productsData.filter((row) => row.id !== id));
      });
  };

  const handleChange = (value) => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then((actualData) => setProductsData(actualData.products))
      .catch((err) => {
        console.log(err.message);
      });
  };

  const colors = tokens(theme.palette.mode);
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
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row: { price } }) => {
        return <Box>{price} $</Box>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      renderCell: ({ row: { stock } }) => {
        return (
          <Box
            backgroundColor={colors.greenAccent[600]}
            p="10px"
            borderRadius="20px"
            textAlign="center"
          >
            {stock}
          </Box>
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      renderCell: ({ row: { brand } }) => {
        return (
          <Box color="#04364A" fontWeight="600">
            {brand}
          </Box>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: ({ row: { category } }) => {
        return (
          <Box color="#1F4172" fontWeight="600">
            {category}
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
      <Header title="Products" subtitle="Managing your Products" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => navigate("add")}
        >
          Create New Product
        </Button>
      </Box>
      <Box display="flex" justifyContent="end">
        <Box
          display="flex"
          bgcolor={colors.primary[400]}
          width={300}
          borderRadius="3px"
          my={2}
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
            }}
            placeholder="Search"
            onChange={(e) => {
              handleChange(e.currentTarget.value);
              // console.log(e.currentTarget.value);
            }}
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <DataGrid
        rows={productsData}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 8 } },
        }}
      />
    </Box>
  );
};
