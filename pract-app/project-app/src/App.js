import Button from "./components/button";

import {Route, Routes} from 'react-router-dom';
  // element         // path
import NavBar from "./components/navBar";
import MyPage from "./pages/myfirstreactpage";
export function App() {
  return (
    <div className="App">
      <NavBar />

<h1>hi I am practising in React</h1>

<Routes>

<Route path='/button' element={<Button/>}/>
<Route path= '/myfirstreactpage' element={<MyPage/>}/>
</Routes>

      </div>
  )
}

export default App;
