import renderRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <Router>
            {renderRoutes()}
        </Router>
    );
}

export default App;
