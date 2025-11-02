import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feeds from "./components/Feeds";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Connections from "./components/Connections";
import Requests from "./components/Request";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import RefundPolicy from "./components/RefundPolicy";
import ContactUs from "./components/ContactUs";
import ShippingPolicy from "./components/AboutUs";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feeds />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/connections" element={<Connections />}></Route>
              <Route path="/requests" element={<Requests />}></Route>
              <Route path="/chat/:userId" element={ <Chat />}></Route>
            </Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/terms-of-service" element={<TermsOfService />}></Route>
            <Route path="/refund-policy" element={<RefundPolicy />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="/about-us" element={<ShippingPolicy />}></Route>
            <Route path="*" element={<h1>Not found</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
