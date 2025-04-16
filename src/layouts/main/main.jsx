import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import LogoSlider from '../../components/logoSlider/logoSlider'
import Testimonials from '../../components/testimonials/testimonials';
import Services from '../../components/services/services';
import Portfolio from '../../components/portofolio/portofolio';

function Main() {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <Header />
      <Outlet />
      <LogoSlider />
      <Services />
      <Portfolio /> 
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Main