import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// components
import SideBar from "./components/layouts/SideBar";
//pages
import { Dashboard } from "./pages/dashboard";
import { Categories } from "./pages/categories";
import { Products } from "./pages/products";
import { SingleProduct } from "./pages/products/SingleProduct";
import SingleCategory from "./pages/categories/SingleCategory";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            {/* <TopBar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/products/add" element={<SingleProduct />} />
              <Route path="/categories/:id" element={<SingleCategory />} />
              <Route path="/categories/add" element={<SingleCategory />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
