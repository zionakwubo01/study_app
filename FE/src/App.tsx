
import { RouterProvider } from "react-router-dom";
import { mainrouter } from "./Router/mainrouter";


function App() {
  return (
    <div>
      <RouterProvider router={mainrouter} />
    </div>
  );
}

export default App;
