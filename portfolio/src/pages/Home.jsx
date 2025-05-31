import ClickButton from '../components/ClickButton';
import facebook_icon from '../assets/facebook_icon.png';
import ig_icon from '../assets/ig_icon.png';
import linkedin_icon from '../assets/linkedln_icon.png';
import github_icon from '../assets/GitHub_Invertocat_Dark.png';
import bg from '../assets/pamplin.JPG';
import vt_icon from '../assets/Virginia_Tech_seal.svg.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    return (    
    <>
      <div>
        <div className='flex justify-center items-center mt-10 mb-4 text-bold-3l text-5xl uppercase' >
          <h1>Jimmy Li</h1>
          
        </div>
        <img src={vt_icon} alt="Virginia Tech logo" className='absolute w-24 right-10 top-5'/>
        <div className='flex justify-center text-1xl'>
          <ul>
              <ClickButton
                title="Portfolio"
                onClick={() => console.log("Portfolio clicked")}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:cursor-pointer transition"
              />
              <a
              href="/resume Zhiming Li.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="">
                <ClickButton title="Resume" 
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:cursor-pointer transition" />
              </a>
              <ClickButton
                title="About Me"
                onClick={() => console.log("about me clicked")}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:cursor-pointer transition"
              />
              
          </ul>
        </div>

        <div className = 'bg-cover bg-center h-120'
        style={{ backgroundImage: `url(${bg})` }}>
          <nav className='flex justify-center items-center mt-10 mb-4 bg-indigo-50 h-24'> 
          <a href="https://www.facebook.com/jimmy.lee.518959" target="_blank" rel="noopener noreferrer">
            <img src={facebook_icon} alt="Facebook icon" className="w-10" />
          </a>
          <a href="https://www.instagram.com/jimmy.li_/" target="_blank" rel="noopener noreferrer">
            <img src={ig_icon} alt="Instagram icon" className="w-10" />
          </a>
          <a href="https://www.linkedin.com/in/zhiming-li-6b518b291" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt="LinkedIn icon" className="w-10" />
          </a>
          <a href="https://github.com/Jimmy-Li-6677" target="_blank" rel="noopener noreferrer">
            <img src={github_icon} alt="LinkedIn icon" className="w-7" />
          </a>
        </nav>
        </div>


        <div className='flex justify-center items-center mt-10 mb-4 text-bold-3l text-3xl uppercase'>
          <h1>Projects</h1>
        </div>
      </div>
    </>
  );
}
export default Home;