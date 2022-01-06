import * as React from "react";
import { Routes, 
  Route, 
  Link, 
  BrowserRouter, 
  NavLink } from "react-router-dom";
// import { Component } from "react";
import { useState } from "react";
import Login from "./containers/Login";
import Admin from "./containers/Admin";
// import { Stack } from "react-bootstrap";
// import { Divider } from "@mui/material";
// import items from "./containers/items";

function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) return <Login />;
  
  return (
    <div>
      <header>
        <h1>Welcome to Pizza Shop</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Login" element={<Login />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="test" element={<test />} /> */}
     
      </Routes>
    </div>
  );
}

function Home() {

  return (
    <>
      <main>
        
        <h2>Welcome to Pizza shop</h2>
        <p>Worlds tastiest Pizza</p>

      </main>    

      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2> About </h2>
     
        {/* <Stack
  direction="row"
  divider={<Divider orientation="vertical" flexItem />}
  spacing={2}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}
        <p>
        Worlds tastiest Pizza
        Worlds tastiest Pizza
        Worlds tastiest Pizza
        Worlds tastiest Pizza
        Worlds tastiest Pizza
        Worlds tastiest Pizza
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Menu() {
    
  // const [items, setItems] = useState([
  //   { itemName: 'item 1', quantity: 1, isSelected: false },
  //   { itemName: 'item 2', quantity: 3, isSelected: true },
  //   { itemName: 'item 3', quantity: 2, isSelected: false },
  // ]);
  return (
    <>
      <main>
        <h2>Menu</h2>
        <Route path="./container/items" component={<items />} />
        <p></p>
      </main>
      <nav>
        <Link to="/Home">Home</Link>
      </nav>
    </>
  );
}

// function Login() {
//   return (
//     <>
//       <main>
//         <h2>Login</h2>
//         <p></p>
//       </main>
//       <nav>
//         <Link to="/Home">Home</Link>
//       </nav>
//     </>
//   );
// }

// function Admin() {
//   return (
//     <>
//       <main>
//         <h2>Admin</h2>
//         <p></p>
//       </main>
//       <nav>
//         <Link to="/Home">Home</Link>
//       </nav>
//     </>
//   );
// }





export default App;