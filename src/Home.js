import React, { useState } from "react";
import "./Home.css";
import { auth, providerGG, providerFB} from "./firebase";

function Home() {
    const [email, setEmail] = useState('');
    const forgot = (event) => {
        event.preventDefault();
        auth.sendPasswordResetEmail(email)
        .then((res) => {
            console.log("successfully", res);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="home">
      <h1>Đây là trang Google - FaceBook</h1>
      <input 
      onChange={(e) => setEmail(e.target.value)}
      type="email" 
      required="required" 
      className="forgot-email" />
      <button type="submit" 
        onClick={forgot}
      className="btn-sub">
        Send
      </button>
    </div>
  );
}

export default Home;
