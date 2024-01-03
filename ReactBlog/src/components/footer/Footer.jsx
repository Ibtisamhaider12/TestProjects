import React from 'react'
import "./styles.css"


function Footer() {
  return (
    <>
    <div className="insta">
        <div className="container text-center">
            <ul className="icons">
                <link className="icons fa-brands fa-instagram text-skin"></link>
                <link className="icons fa-brands fa-facebook-f text-skin"></link>
                <link className="icons fa-brands far fa-envelope text-skin "></link>
            </ul>
            <div className="getintouch">
                <button className="btn_two text-skin">
                    <a href="#">FOLLOW US</a>
                </button>
            </div>
        </div>
    </div>
    <div className="container">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a href="#"className="nav-link text-dark">IMPRESSUM</a>
            </li>
            <li className="nav-item">
                <a href="#"className="nav-link text-dark">AGB</a>
            </li>
            <li className="nav-item">
                <a href="#"className="nav-link text-dark">DATENSCHUTZ</a>
            </li>
            <li className="nav-item">
                <a href="#"className="nav-link text-dark">KONTAKT</a>
            </li>
        </ul>
    </div>
    <div className="container d-flex justify-content-center my-3">
    </div>
    <div className="copyright float-right">
        © 2023, 
        <a href="#">GWC SHOP</a>
    </div>
</>
  )
}

export default Footer
