import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsLoginState, UserIdState } from "../store/atom";
import axiosInstance from "../axios";

export default function GoogleButton() {
  const setLogin = useSetRecoilState(IsLoginState);
  const setUserId = useSetRecoilState(UserIdState);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

    try {
      const response = await axiosInstance.post(`/signIn`, {
        email: decodedToken.email,
        name: decodedToken.name,
        uid: decodedToken.sub,
      });

      if (response.status === 200) {
        const uesrId = response.data; // memberId 받아오기

        setUserId(uesrId);
        setLogin(true);

        history.push("/home");
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
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
