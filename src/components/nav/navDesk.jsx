
import CodeIcon from '@mui/icons-material/Code';
export default function NavDesk() {

    return (
          <nav className='hidden lg:flex justify-between h-10 items-center py-12 px-20 '>
           <a  href='index.html' className='font-bold'>
             <CodeIcon fontSize="large"/>
           </a>

           <ul className='flex gap-x-7'>
              <li className='font-medium'><a href='#header-section'>Home</a> </li>
              <li className='font-medium'><a href='#skill-section'>Skills</a></li>
              <li className='font-medium'><a href='#project-section'>Projects</a></li>
              <li className='font-medium'><a href='#contact-section'>Contact</a></li>
           </ul>
         </nav>
    )
}