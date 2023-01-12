import './App.css';
import BattleshipGame from './components/pages/Game/NewGame';
import { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from './components/pages/Menu/Menu';
import Profile from './components/pages/Profile/Profile';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login'
import Background from './components/Background/Background';
import { AuthProvider } from './components/utils/auth';
import NotLoggedIn from './components/pages/Login/NotLoggedIn';
import PrivateRoutes from './components/utils/PrivateRoutes';
import Logout from './components/pages/Logout/Logout';
import Register from './components/pages/Register/Register';
import ConfirmProfileDelete from './components/pages/Profile/ConfirmProfileDelete';
import ProfileDeleted from './components/pages/Profile/ProfileDeleted';
import { SoundProvider } from './components/utils/Sound';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      startInfoAnimation: false,
      startProfileAnimation: false,
      backgroundFadeDown: false,
    }

    this.toggleInfoVisibility = this.toggleInfoVisibility.bind(this);
    this.toggleProfileVisibility = this.toggleProfileVisibility.bind(this);

  }

  toggleInfoVisibility() {
    let visibility = this.state.startInfoAnimation === true ? false : true;
    this.setState((prevState) => ({
      startInfoAnimation: visibility
    }));
    console.log(this.state.startInfoAnimation)
  }

  toggleProfileVisibility() {
    let visibility = this.state.startProfileAnimation === true ? false : true;
    this.setState((prevState) => ({
      startProfileAnimation: visibility
    }));
  }

  toggleBackgroundFade() {
    let fade = this.state.backgroundFadeDown === true ? false : true;
    this.setState((prevState) => ({
      backgroundFadeDown: fade
    }));
  }

  render() {

    return (
      <SoundProvider>
        <AuthProvider>
          <div>
            <div className="container">

              <Background backgroundToggle={this.state.backgroundFadeDown} />

              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={
                    <Menu
                      type={"right"}
                      toggleLeft={this.toggleInfoVisibility}
                      toggleRight={this.toggleProfileVisibility}
                      childrenRight={<Profile />}
                      startAnimationLeft={this.state.startInfoAnimation}
                      startAnimationRight={this.state.startProfileAnimation} />}
                  />
                  <Route path="/game" element={<BattleshipGame />} />
                  <Route path="/settings" element={<Menu backgroundToggle={this.state.backgroundFadeDown} />} />
                </Route>

                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login backgroundToggle={this.toggleBackgroundFade} />} />
                <Route path="/notLoggedIn" element={
                  <NotLoggedIn
                    type={"left"}
                    toggleLeft={this.toggleInfoVisibility}
                    startAnimationLeft={this.state.startInfoAnimation} />} />
                <Route path="/confirmProfileDelete" element={<ConfirmProfileDelete />} />
                <Route path="/profileDeleted" element={<ProfileDeleted />} />
                <Route path="*" element={
                  <NotFound
                    type={"left"}
                    toggleLeft={this.toggleInfoVisibility}
                    startAnimationLeft={this.state.startInfoAnimation} />} />
              </Routes>

            </div>
          </div>
        </AuthProvider>
      </SoundProvider>
    );
  }
}
