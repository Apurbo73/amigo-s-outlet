import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Register from "./pages/Auth/Register";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./user/Dashboard";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import UsersList from "./pages/Admin/UsersList";
import Orders from "./user/Orders";
import Profile from "./user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './Search';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import AdminOrders from './pages/Admin/AdminOrders';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/product/:slug" element={<ProductDetails></ProductDetails>} />
        <Route path="/categories" element ={<Categories></Categories>}>  </Route>
        <Route path="/category/:slug" element ={<CategoryProducts></CategoryProducts>}>  </Route>
        <Route path="/cart" element={<CartPage></CartPage>} />


        <Route path="/search" element={<Search></Search>}/>

        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/forgot-password"element={<ForgotPassword></ForgotPassword>}></Route>

        {/* Routes for General Users */}
        <Route path="/dashboard" element={<PrivateRoutes></PrivateRoutes>}>
              <Route path="user" element={<Dashboard></Dashboard>}></Route>
              <Route path="user/profile" element={<Profile></Profile>}></Route>
              <Route path="user/orders" element={<Orders></Orders>}></Route>
        </Route>

        {/* Routes for Admins */}

        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
              <Route path="admin" element={<AdminDashboard> </AdminDashboard>}></Route>
              <Route path="admin/create-category" element={<CreateCategory></CreateCategory>} ></Route>
              <Route path="admin/createproduct" element={<CreateProduct></CreateProduct>} ></Route>
              <Route path="admin/product/:slug" element={<UpdateProduct></UpdateProduct>} ></Route>

              <Route path="admin/products" element={<Products></Products>}></Route>
              <Route path="admin/users" element={<UsersList></UsersList>}></Route>
              <Route path="admin/orders" element={<AdminOrders></AdminOrders>}></Route>

        </Route>


      </Routes>
    </>
  );
}

export default App;
