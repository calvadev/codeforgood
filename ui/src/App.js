import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "./components/customNavBar";
import Articles from "./pages/Articles";
import CreditCards from "./pages/CreditCards";
import Piggy from "./pages/Piggy";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = (props) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      if (token.length > 0) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  return (
    <>
      {isAuthenticated ? (
        
        <>
        <Router>
          <CustomNavbar />
          <Route
            path="/MyPiggy"
            exact
            render={() => {
              return (
                <>
                  <Piggy title={"MyPiggy"} />
                </>
              );
            }}
          />
          <Route
            path="/Articles"
            exact
            render={() => {
              return (
                <>
                  <Articles title={"Financial Articles"} />
                </>
              );
            }}
          />
          <Route
            path="/CreditCards"
            exact
            render={() => {
              return (
                <>
                  <CreditCards title={"Credit Cards"} />
                </>
              );
            }}
          />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <>
                  <Home title={"Home"} />
                </>
              );
            }}
          />
        </Router>
        <Footer />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default App;
