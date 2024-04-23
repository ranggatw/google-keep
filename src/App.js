// // import CssBaseline from "@mui/material/CssBaseline";
// import Home from "./component/home";
// import "./index.css";
// import { Route, Routes } from "react-router-dom";
// // import Register from "./component/register";
// import { Login } from "./component/login";
// import { RequireAuth } from "react-auth-kit";

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* <Route
//           path="/"
//           element={
//             <RequireAuth loginPath="/login">
//               <Home />
//             </RequireAuth>
//           }
//         ></Route> */}
//         <Route path="/login" element={<Login />}></Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/login";
// import { Register } from "./component/register";
import Home from "./component/home";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth loginPath="/login">
            <Home />
            // </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
