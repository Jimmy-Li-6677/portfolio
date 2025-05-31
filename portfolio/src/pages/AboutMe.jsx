import ClickButton from '../components/ClickButton';
import facebook_icon from '../assets/facebook_icon.png';
import ig_icon from '../assets/ig_icon.png';
import linkedin_icon from '../assets/linkedln_icon.png';
import snowclub from '../assets/snowclub.jpeg';
import graduation from '../assets/graduation.jpeg';
import selfy from '../assets/selfy.jpeg';
import YouTubeHoverCard from '../components/YouTubeHoverCard';
import github_icon from '../assets/GitHub_Invertocat_Dark.png';
import vt_icon from '../assets/Virginia_Tech_seal.svg.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    return (    
    <>
      <div>
        <div className='flex justify-center items-center mt-10 mb-4 text-bold-3l text-5xl uppercase'>
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
      <div className='flex'>
        <div className='w-1/2 p-8'>
          <h1 className='text-3xl font-bold uppercase mb-4 text-center'>Introduction</h1>
          <p className='text-left leading-relaxed indent-8 inline-block align-middle'>
            Hi, I’m Zhiming Li — a passionate and driven computer science graduate from <b>Virginia Tech</b>, where I earned my degree with a <b>3.53 GPA</b>. I specialize in <b>full-stack web development</b>, with hands-on experience building dynamic and user-focused applications using modern technologies such as <b>React, Next.js, Node.js, and Firebase</b>. My technical strengths lie in crafting clean, scalable code and seamlessly integrating frontend interfaces with robust backend systems. I’ve developed and deployed a variety of full-featured apps, from a real-time Supreme Court case tracker to a responsive vacation rental platform and even a custom Android app for dream logging — each project showcasing my attention to user experience, performance optimization, and secure authentication.
            Beyond the keyboard, I live an active and creative lifestyle. 
          </p>
          <p className='text-left leading-relaxed indent-8 inline-block align-middle'>
              I’m a regular at the gym and enjoy challenging myself both physically and mentally. During the winter, you'll often find me carving through snow-covered slopes on a <b>snowboard</b> — it's my favorite way to reset and find inspiration. When I’m not coding or outdoors, I dive into the artistic world of Warhammer miniature painting. It’s a hobby that has taught me patience, precision, and the value of details — traits I carry into my development work.
              I'm currently seeking full-time software engineering opportunities where I can contribute to innovative projects, grow alongside a collaborative team, and continue building tools that make an impact. If you're looking for someone who brings both technical expertise and creative energy to the table, let's connect!
          </p>
          <p className='text-left leading-relaxed indent-8 inline-block align-middle'>
            I'm currently seeking <b>full-time software engineering opportunities</b> where I can contribute to innovative projects, grow alongside a collaborative team, and continue building tools that make an impact. If you're looking for someone who brings both technical expertise and creative energy to the table, let's connect!
          </p>
        </div>
          {/* Right side */}
        <div className='w-1/2 p-8 grid grid-cols-2 gap-2 group'>
          <img src={snowclub} alt="Snow Club" className='w-full h-64 object-cover rounded group-hover:scale-95 hover:scale-110' />
          <img src={graduation} alt="Graduation" className='w-full h-64 object-cover rounded group-hover:scale-95 hover:scale-110' />
          <img src={selfy} alt="selfy" className='w-full h-64 object-cover rounded group-hover:scale-95 hover:scale-110' />
          <YouTubeHoverCard videoId="Pc2pq-Xzyrs"/>
        </div>
      </div>
    </>
  );
}
export default Home;