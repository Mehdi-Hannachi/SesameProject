import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Loginsup from "./components/Loginsup";
import Profilesup from "./components/Profilesup";
import Profileadmin from "./components/Profileadmin";
import { supadminLogin, adminLogin } from "./JS/actions";
import Root from "./Root";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const superlog = window.localStorage.getItem("superAdminSesame");
    const adminlog = window.localStorage.getItem("adminSesame");
    dispatch(supadminLogin(JSON.parse(superlog)));
    dispatch(adminLogin(JSON.parse(adminlog)));
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/admin">
          <Adminlogin />
        </Route>
        <Route exact path="/superadmin">
          <Loginsup />
        </Route>
        <Route exact path="/superadmin/profile">
          <Profilesup />
        </Route>
        <Route exact path="/admin/profile">
          <Profileadmin />
        </Route>

        <Route exact path="/safa">
          <Root />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
