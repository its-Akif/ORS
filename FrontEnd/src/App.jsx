import { Switch, Route, withRouter } from "react-router-dom";

import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import LandingPage from "./pages/landing_page/landing_page";
import AdDetail from "./pages/adDetail/adDetail";

function App(props) {
  return (
    <div>
      <Switch location={props.location}>
        <Route path="/detail/:id" component={AdDetail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/" component={LandingPage}></Route>
      </Switch>
    </div>
  );
}
export default withRouter(App);
