import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const HomePage = () => {
//   return <>HomePage</>
// }

// const AboutPage = () => {
//   return <>AboutPage</>
// }

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>HomePage</>
      // loader: rootLoader,
    },
    {
      path: 'about',
      element: <div>About</div>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routing
