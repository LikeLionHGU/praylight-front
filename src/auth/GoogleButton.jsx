// eslint-disable-next-line no-unused-vars
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsLoginState } from "../store/atom";
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { IsLoginState, UserEmail } from '../store/atom';

export default function GoogleButton() {
  // eslint-disable-next-line no-unused-vars
  const setLogin = useSetRecoilState(IsLoginState);
  // const setUserEmail = useSetRecoilState(setUserEmail);

  let history = useHistory();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
    // setUserEmail(decodedToken.email);
    setLogin(true);
    history.push("/addInfo");
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
