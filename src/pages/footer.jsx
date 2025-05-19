

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from '@mui/icons-material/Code';

export default function Footer() {
    return (
         <footer className='flex flex-col justify-center lg:flex-row lg:justify-between items-center py-12 px-20 mt-40'>
             <a  href='index.html' className='font-bold'>
                         <CodeIcon fontSize="large"/>
                       </a>
              <p className='font-semibold text-2xl  text-center lg:text-left text-white'><small>© Todos os direitos reservados Italo Marcelo</small></p>
              <div className="flex gap-5 py-4">
                         <div>
                           <a href="https://github.com/ItaloDev-Marcelo" target="_blank">
                             <button>
                               <GitHubIcon fontSize="large" />
                             </button>
                           </a>
                         </div>
                         <div>
                           <a href="https://github.com/MarceloDevd3" target="_blank">
                             <button>
                               <GitHubIcon fontSize="large" />
                             </button>
                           </a>
                         </div>
                         <div>
                         <a
                           href="https://www.linkedin.com/in/italo-marcelo-06b130241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                           target="_blank"
                         >
                           <button>
                             <LinkedInIcon fontSize="large" />
                           </button>
                         </a>
                       </div>
              </div>
         </footer>
    )
}