import renderRoutes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <Router>{renderRoutes()}</Router>
        </Provider>
    )
}

export default App
