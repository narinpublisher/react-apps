import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import La from "./pages/layout";
import Br from  "./pages/branch";
import Ho from  "./pages/hope";
import En from  "./pages/engraving";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path='/'    element={<La />}>
					<Route index     element={<Br />} />	
					<Route path='h' element={<Ho />} />
					<Route path='e' element={<En />} />
				</Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));