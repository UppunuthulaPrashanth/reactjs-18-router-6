import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
          <>

        <Router>
          <Layout>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
          </Layout>
      </Router>
      </>
    </div>
  );
}

export default App;
