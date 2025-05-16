
import CodeIcon from '@mui/icons-material/Code';
export default function NavDesk() {

    return (
          <nav className='hidden lg:flex justify-between h-10 items-center py-12 px-20 '>
           <a  href='index.html' className='font-bold'>
             <CodeIcon fontSize="large"/>
           </a>

           <ul className='flex gap-x-7'>
              <li className='font-medium'>Home</li>
              <li className='font-medium'>About</li>
              <li className='font-medium'>Skills</li>
              <li className='font-medium'>Projects</li>
           </ul>
         </nav>
    )
}