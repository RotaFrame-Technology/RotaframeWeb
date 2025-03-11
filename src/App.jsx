import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routers/routes/routers'
import AppColors from './utils/colors/appColors'

function App() {

  return (
    <div style={{backgroundColor:AppColors.BackgroundDark}}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
