import Layout from "./layout/Layout";
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
