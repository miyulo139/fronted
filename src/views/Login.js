import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GoogleButton from 'react-google-button'
import "/src/assets/css/mystyles/Login.css";
import $ from 'jquery';

import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/css/animate.min.css";
import "/src/assets/scss/light-bootstrap-dashboard-react.scss";
import "/src/assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const responseGoogle = (response) => {
  console.log(response);
};


function Loginf() {
  console.log("LOGIN USER");
  var username = $('#username').val();
  var password = $('#password').val();
  // console.log("DATA: ", username, password);
  // history.push("localhost:8080/api/users");
  window.location.href = "https://api.cs.mrg.com.pe/api-sec02-group05/users";
}

const Login = () => {
  return (
    <div className="App">
      <body>
        <div class="wrapperl">
          <div class="login">
            <p class="title">PROYECCIÓN ACADÉMICA</p>
            <GoogleButton onClick={Loginf} />
          </div>
        </div>
      </body>
    </div>
  );
};


// class Loginn extends React.Component {
//   render() {
//     return (
//         <div className="App">
//         <body>
//           <div class="wrapper">
//             <div class="login">
//               <p class="title">PROYECCIÓN ACADÉMICA</p>
//               <GoogleButton onClick={Loginf} />
//             </div>
//           </div>
//         </body>
//       </div>
//     );
//   }
// }

export default Login;