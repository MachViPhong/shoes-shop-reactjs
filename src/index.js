import ReactDOM from "react-dom/client";
import ShoesStore from "./components/ShoesStore";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import HomeTemplates from "./templates/HomeTemplates";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          {/* Trang chủ mặc định là index <=> Outlet của HomeTemplate*/}
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          {/* <Route path='*' element={<Page404 />}></Route> */}
          {/* Nếu bấm đường dẫn không tồn tại thì chuyển thẳng về trang home */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
