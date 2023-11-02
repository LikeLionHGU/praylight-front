import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./routes/Main";
import { useRecoilValue } from "recoil";

import { IsLoginState } from "./store/atom";
import Login from "./routes/Login";
import styled from "styled-components";
import Room from "./routes/Room";
import Start from "./routes/Start";
import DayPray from "./routes/DayPray";
import MyPage from "./routes/MyPage";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: gray;
`;

const Center = styled.div`
  max-width: 20vw;
  min-width: 390px;
  background-color: black;
  height: calc(var(--vh, 1vh) * 100);
  min-height: auto;
`;

function Router() {
  const isUserLoggedIn = useRecoilValue(IsLoginState);

  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {isUserLoggedIn ? (
              <>
                <Route exact path="/home">
                  <Main />
                </Route>
                <Route exact path="/room/:roomId">
                  <Room />
                </Route>
                <Route exact path="/room/:roomId/:date">
                  <DayPray />
                </Route>
                <Route exact path="/mypage">
                  <MyPage />
                </Route>
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
