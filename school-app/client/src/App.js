import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer/Footer"

const SignUp = lazy(() => import("./pages/signup/index"));
const Login = lazy(() => import("./pages/login/Login"));
const Dashboard = lazy(()=> import("./pages/dashboard/Dashboard"))
const LandingPage = lazy(()=> import("./pages/landingPage/LandingPage"))
function App() {
  return (
    <>
    <Router>
      <Header />
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
          <Route
            exact
            path="/dashboard"
            render={() => {
              return <Dashboard />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return <LandingPage />;
            }}
          />
        </Suspense>
      </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
