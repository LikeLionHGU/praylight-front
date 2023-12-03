// eslint-disable-next-line no-unused-vars
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsLoginState, UserIdState } from "../store/atom";
import axios from "axios";
import axiosInstance from "../axios";

export default function GoogleButton() {
  // eslint-disable-next-line no-unused-vars
  const setLogin = useSetRecoilState(IsLoginState);
  // const setUserId = useSetRecoilState(UserIdState);
  // const userId = localStorage.getItem("UserIdState");
  const [suserId, setUserId] = useRecoilState(UserIdState);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);

    try {
      const response = await axiosInstance.post(`/signIn`, {
        email: decodedToken.email,
        name: decodedToken.name,
        uid: decodedToken.sub,
      });

      if (response.status === 200) {
        const uesrId = response.data; // memberId 받아오기

        console.log(uesrId);
        setUserId(uesrId);
        setLogin(true);

        console.log("login success");
        console.log(suserId);
        history.push("/home");
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    console.log(suserId);
  };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(error)}
        useOneTap
      />
    </>
  );
}
