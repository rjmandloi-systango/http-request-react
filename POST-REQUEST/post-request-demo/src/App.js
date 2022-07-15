import { useRef } from "react";
import "./App.css";

function App() {
  const inputEmail = useRef("");
  const inputPassword = useRef("");

  const addDataHandler = (event) => {
    event.preventDefault();
    const userData = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    console.log(userData);
    storeUserData(userData)    
  };

  const storeUserData=async (userData)=>{
    const response = await fetch('https://react-demo-app-post-request-default-rtdb.firebaseio.com//USER_CREDENTIALS.json', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }
  

  return (
    <form onSubmit={addDataHandler} className="w-25 container mt-5">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          ref={inputEmail}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          ref={inputPassword}
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default App;
