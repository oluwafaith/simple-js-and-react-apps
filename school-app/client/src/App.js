import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const SignUp = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback="......Loading">
          <Route
            exact
            path="/signup"
            render={() => {
              return <SignUp />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <Login />;
            }}
          />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
