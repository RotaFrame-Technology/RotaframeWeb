import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import LogoSlider from '../../components/logoSlider/logoSlider'
import Testimonials from '../../components/testimonials/testimonials';
import Services from '../../components/services/services';
import Portfolio from '../../components/portofolio/portofolio';

function Main() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <LogoSlider></LogoSlider>
    <Services></Services>
    <Portfolio></Portfolio> 
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default Main