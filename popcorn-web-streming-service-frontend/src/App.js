import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Filter from "./components/pages/Filter";
import MenuStates from "./context/States/MenuStates";
import MovieStates from "./context/States/MovieStates";
import WebSeriesStates from "./context/States/WebSeriesStates";
import Search from "./components/pages/Search";
import ModeStates from "./context/States/ModeStates";
import WatchMovie from "./components/pages/WatchMovie";
import SeriesDesc from "./components/pages/SeriesDesc";
import WatchWebSeries from "./components/pages/WatchWebSeries";
import MessageState from "./context/States/MessageState";
import Verify from "./components/pages/Verify";
import UserState from "./context/States/UserState";
import Logout from "./components/pages/Logout";
import Account from "./admin/admin-pages/Account";
import ChangePassword from "./admin/admin-pages/ChangePassword";
import FilterStates from "./context/States/FilterStates";
import Pricing from "./components/pages/Pricing";
function App() {
  return (
    <MenuStates>
      <MovieStates>
        <WebSeriesStates>
          <ModeStates>
            <MessageState>
              <UserState>
                <FilterStates>
                  <Router>
                    <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/filter/:genre" element={<Filter />} />
                      <Route exact path="/login" element={<Login />} />
                      <Route exact path="/signup" element={<Signup />} />
                      <Route
                        exact
                        path="/search/:searchquery"
                        element={<Search />}
                      />
                      <Route
                        exact
                        path="/movies/:movieslug"
                        element={<WatchMovie />}
                      />
                      <Route
                        exact
                        path="/tv-series/:seriesslug"
                        element={<SeriesDesc />}
                      />
                      <Route
                        exact
                        path="/tv-series/:seriesslug/:season"
                        element={<SeriesDesc />}
                      />
                      <Route
                        exact
                        path="/tv-series/:seriesslug/:season/:episodename"
                        element={<WatchWebSeries />}
                      />
                      <Route exact path="/verify/:key" element={<Verify />} />
                      <Route exact path="/logout" element={<Logout />} />
                      <Route exact path="/account" element={<Account />} />
                      <Route exact path="/pricing" element={<Pricing />} />
                      <Route
                        exact
                        path="/account/changepassword"
                        element={<ChangePassword />}
                      />
                    </Routes>
                  </Router>
                </FilterStates>
              </UserState>
            </MessageState>
          </ModeStates>
        </WebSeriesStates>
      </MovieStates>
    </MenuStates>
  );
}

export default App;
