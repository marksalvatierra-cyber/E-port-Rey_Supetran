// App.tsx is kept for compatibility. The real entry point is src/main.tsx,
// which uses RouterProvider with the router defined in src/router.tsx.
import router from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => <RouterProvider router={router} />;

export default App;
