import Content from '@/pages/content'
import Home from '@/pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'content',
    element: <Content />,
  },

])
