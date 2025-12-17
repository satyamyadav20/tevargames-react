import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Promotion from "./pages/Promotion";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
    const isAuthenticated = false;
  return (
          <Routes>
              {/* 1. Public Auth Routes (No Layout) */}
              <Route path="/login" element={<Login />} />
              {/*<Route path="/signup" element={<Signup />} />*/}

              {/* 2. Protected App Routes (Wrapped in MainLayout) */}
              <Route
                  path="/*"
                  element={
                      isAuthenticated ? (
                          <MainLayout>
                              <Routes>
                                  <Route path="/" element={<Home />} />
                                  <Route path="/home" element={<Navigate to="/" replace />} />
                                  <Route path="/activity" element={<Activity />} />
                                  <Route path="/promotion" element={<Promotion />} />
                                  <Route path="/wallet" element={<Wallet />} />
                                  <Route path="/mian" element={<Account />} />
                                  <Route path="*" element={<NotFound />} />
                              </Routes>
                          </MainLayout>
                      ) : (
                          <Navigate to="/login" replace />
                      )
                  }
              />
          </Routes>

  );
}

export default App;

