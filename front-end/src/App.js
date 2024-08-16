import './App.css';
import {Route, Routes} from "react-router-dom";
import Auth from "./user/Auth";
import Register from "./user/Register";
import AuthFail from "./user/AuthFail";
import Info from "./user/Info";
import Update from "./user/Update";
import Home from "./user/Home";
import Details from "./hotel/Details";
import Cart from "./cart/Cart";
import StartPage from "./home/StartPage";
import Header from "./home/component/Header";
import AddressForm from "./addHotel/AddressForm";
import CategoryForm from "./addHotel/CategoryForm";
import FacilityForm from "./addHotel/FacilityForm";
import HotelForm from "./addHotel/HotelForm";
import RoomForm from "./addHotel/RoomForm";
import AddHotelSuccess from "./addHotel/AddHotelSuccess";
import AddressForm2 from "./addHotel/AddressForm2";
import ModifyHotel from "./addHotel/ModifyHotel";

function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/user/register" element={<Register/>}/>
          <Route path="/user/update" element={<Update/>}/>
          <Route path="/user/info" element={<Info/>}/>
          <Route path="/user/authSuccess" element={<Home/>}/>
          <Route path="/user/authFail" element={<AuthFail/>}/>
          <Route path="/hotel/details/:id" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Auth" element={<Auth/>}/>

          {/*유정 컴포넌트 */}
          <Route path="/AddressForm" element={<AddressForm/>}/>
          <Route path="/AddressForm2" element={<AddressForm2/>}/>
          <Route path="/CategoryForm" element={<CategoryForm/>}/>
          <Route path="/FacilityForm" element={<FacilityForm/>}/>
          <Route path="/HotelForm" element={<HotelForm/>}/>
          <Route path="/RoomForm" element={<RoomForm/>}/>
          <Route path="/AddHotelSuccess" element={<AddHotelSuccess/>}/>
          <Route path="/ModifyHotel" element={<ModifyHotel/>}/>
        </Routes>
      </div>
  );
}

export default App;