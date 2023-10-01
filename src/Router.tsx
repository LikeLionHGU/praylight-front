import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './routes/Main';
import { useRecoilValue } from 'recoil';

import { IsLoginState } from './store/atom';
import Login from './routes/Login';
import styled from 'styled-components';
import Room from './routes/Room';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`;

const Center = styled.div`
  max-width: 100vw;
  min-width: 390px;
  height: 100vh;
  background-color: white;
`;

function Router() {
  const isUserLoggedIn = useRecoilValue(IsLoginState);

  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/login">
              <Login />
            </Route>
            {isUserLoggedIn ? (
              <>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/room/:roomId">
                  <Room />
                </Route>
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
