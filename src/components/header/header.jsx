import { useState } from "react";
import { Link, NavLink} from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";


function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  // const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // const handleSignInNavigation = () => {
  //   navigate('/SignIn');
  // };

  return (
    //header
    <div className="flex flex-row w-full h-20 bg-[#A3E7FF] px-[60px] items-center justify-between sticky top-0 z-50">
      {/* Icon and Header */}
      <div className="flex flex-row h-full items-center">
        <img src="/src/assets/images/JobHub.png" className="h-[31px] w-[129px] mr-[94px]" />
        {/* Navigations */}
        <div className="flex flex-row gap-5 font-semibold">
          <Link
            to="/home"
            className={`px-2 text-[18px] py-2 no-underline ${activeLink === 'Home' ? 'text-[#005F7E]' : 'text-gray-800'
              } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </Link>

          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${activeLink === 'Home' ? 'text-[#005F7E]' : 'text-gray-800'
              } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick('Home')}
          >
            Jobs
          </Link>


          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${activeLink === 'Home' ? 'text-[#005F7E]' : 'text-gray-800'
              } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick('Home')}
          >
            Contact Us
          </Link>

          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${activeLink === 'Home' ? 'text-[#005F7E]' : 'text-gray-800'
              } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick('Home')}
          >
            About Us
          </Link>
        </div>
      </div>

      {/* buttons */}
      <div className="flex flex-row gap-20 h-full items-center">
      {/* Drop down button */}
        <div className='relative'>
          <button className={`flex flex-row items-center gap-1 py-2 pl-2 '}`} onClick={() => toggleDropdown('CreateCV')}>
            <div className="text-[18px] font-semibold text-[#005F7E]">
            Create your CV
            </div>
            <RiArrowDropDownLine className='w-10 h-full text-[#005F7E]' />
          </button>
          {openDropdown === 'CreateCV' && (
            <div className='absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg w-[200px] flex flex-row'>
              <div className='flex flex-col w-full'>
                <NavLink to="#" className='block px-4 py-2 text-gray-800 no-underline hover:bg-[#002252] hover:text-white'>
                  Create new CV
                </NavLink>
                <NavLink to="#" className='block px-4 py-2 text-gray-800 no-underline hover:bg-[#002252] hover:text-white'>
                  Check your
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-5">
          <button className="px-6 border-[#005F7E] text-[#005F7E] text-[18px] font-bold border-2 py-[5px] rounded-full">Sign in</button>
          <button className="px-6 border-[#005F7E] text-white bg-[#005F7E] text-[18px] font-bold border-2 py-[5px] rounded-full">Post a job</button>
          {/* <button className="px-5 py-3 bg-amber-600">Post a job</button> */}
        </div>
      </div>
    </div>
  )
}

export default Header