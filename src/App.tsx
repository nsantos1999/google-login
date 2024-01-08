import "./App.css";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const responseMessage = async (response: CredentialResponse) => {
    try {
      if (!response.credential) {
        throw new Error("Credentials is not valid");
      }
      console.log(jwtDecode(response.credential));
    } catch (err) {
      console.log(err);
    }
  };
  const errorMessage = () => {
    console.log("error");
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
