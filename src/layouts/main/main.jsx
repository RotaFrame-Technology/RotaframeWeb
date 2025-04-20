import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import LogoSlider from '../../components/logoSlider/logoSlider'
import Testimonials from '../../components/testimonials/testimonials';
import Portfolio from '../../components/portofolio/portofolio';
import OurServices from '../../components/our_services/our_services';
import Banner from '../../components/banner/banner';

function Main() {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <Header />
      <Outlet />
      <LogoSlider />
      <OurServices />
      <Portfolio /> 
      <Banner/>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Main