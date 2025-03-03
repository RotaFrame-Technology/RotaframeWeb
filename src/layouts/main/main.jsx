import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Main