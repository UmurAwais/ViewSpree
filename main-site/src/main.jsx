import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import SinglePost from './components/SinglePost'
import Category from './pages/Category'
import About from './pages/About'
import SearchPage from './pages/Search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <SinglePost />,
      },
      {
        path: "category/:slug",
        element: <Category />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
      router={router} 
      future={{
        v7_startTransition: true,
      }}
    />
  </StrictMode>,
)
