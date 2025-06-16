import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./Body";
import Login from "./login";
import Signup from "./Signup";
import Profile from "./Profile";
import Logout from "./Logout";
import EditProfile from "./EditProfile";
import Feed from "./Feed";
import RequestsPage from "./RequestsPage";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path = "/" element={<Body/>}>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/requests" element={<RequestsPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;