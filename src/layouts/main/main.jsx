import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Main() {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
