import "./App.css";
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Promotion from "./pages/Promotion";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/mian" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
  );
}

export default App;

