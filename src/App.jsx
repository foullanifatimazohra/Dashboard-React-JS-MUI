import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// components
import TopBar from "./components/layouts/TopBar";
import SideBar from "./components/layouts/SideBar";
//pages
import { Dashboard } from "./pages/dashboard";
import Team from "./pages/team";
import Contact from "./pages/contacts";
import Invoices from "./pages/invoices";
import FormPage from "./pages/form";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
