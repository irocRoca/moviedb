import Nav from "./components/Nav";
import "./index.css";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import List from "./pages/List";
import ListProvider from "./context/list";
import SearchList from "./pages/SearchList";
function App() {
  return (
    <>
      <ListProvider>
        <Nav />
        <Switch>
          <Route exact path="/search/:title" component={SearchList} />
          <Route exact path="/discover" component={List} />
          <Route exact path="/:type/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ListProvider>
      <Footer />
    </>
  );
}

export default App;
