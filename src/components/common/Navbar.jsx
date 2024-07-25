import "../../App.css";
import logo from "../../Assets/images/logo.jpg";

export default function Navbar() {

  return <>

  <div className="navbaronLaptop">
  <div className="logo">
        <img src={logo} alt="Clover Eyewear" />
      </div>
       
       <div className="login-button">
        <button>Login</button>
      </div>
  </div>

  <div className="navbaronMobile">
  <div className="logo">
        <img src={logo} alt="Clover Eyewear" />
      </div>
       
       <div className="login-button">
        <button>Login</button>
      </div>
  </div>
  
  </>;
}
