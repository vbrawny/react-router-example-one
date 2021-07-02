import { Route, Switch, Redirect } from "react-router-dom";
import { MainHeader } from "./components/Mainheader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import "./styles.css";

export default function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        {/* Switch - Load only one component based on the route triggered */}
        <Switch>
          {/* Redirect Route */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* Exact - param/sub routes / ensure to load only one component based on the route triggered */}
          {/* param routes */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* param routes */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
