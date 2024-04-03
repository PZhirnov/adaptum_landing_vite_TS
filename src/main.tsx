import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

// import './index.css'
import './css/bootstrap.css'
import './css/font-awesome.min.css'
import './css/responsive.css'
import './css/style.css'
// import './css/style.scss'

import { NavBar } from './components/NavBar.tsx';
import Main from './pages/Main.tsx'
import { FooterContainer } from './components/FooterContainer.tsx';





ReactDOM.render(
  <Router>
    {/* <Navigation /> */}
    <NavBar />
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
    <FooterContainer />
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
