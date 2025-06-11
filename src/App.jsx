import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./Body";
import Login from "./login";
import Signup from "./Signup";
import Profile from "./Profile";


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path = "/" element={<Body/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;