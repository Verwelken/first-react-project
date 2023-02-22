import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Header from "./components/Header/Header"
import ProductContextProvider from "./contexts/ProductContext"
import CategoryPage from "./pages/CategoryPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import RegisterPage from "./pages/RegisterPage"


const MainRoutes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/category/">
                        <CategoryPage />
                    </Route>
                    <Route exact path="/category/:id">
                        <ProductDetails />
                    </Route>
                    <Route exact path="/register" >
                        <RegisterPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    )
}
export default MainRoutes