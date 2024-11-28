import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import homeLoader from './loaders/HomeLoader'
import ItemPage from './pages/LoginPage'
import ItemLoader from './loaders/itemLoader'

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} loader={homeLoader} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/login' element={<ItemPage/>}/>
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={routes} />
    )
}