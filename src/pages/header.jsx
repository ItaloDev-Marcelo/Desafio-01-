import NavDesk from "../components/nav/navDesk";
import NavMobile from "../components/nav/navMobile";
import banner from '../assets/heroBanner.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Header() {
    return (
       <header>
           <NavMobile/>
           <NavDesk/>
           <div className='flex flex-col lg:flex-row  items-center lg:justify-evenly p-4 lg:p-2'>
               <div className='w-full md:max-w-md lg:max-w-lg '>
                  <img src={banner} alt='banner-hero' />
               </div>
               <section className='lg:max-w-md justify-center  '>
                   <h1 className="text-2xl md:text-3xl my-2 mb-5 font-mono text-center lg:text-left font-bold">Olá,
                     eu sou <br className='hidden lg:flex' /> <span  className='text-yellow-400 lg:text-6xl'>Italo Marcelo</span>  </h1>
                   <p className="text-center lg:text-left font-serif font-medium md:px-40 lg:p-0"> Desenvolvedor Frontend desde 2023, Apaixonado por programação,
                     meu ponto forte e nunca desistir sempre superando meus limites,
                     aprendendo cada vez mais para melhorar.</p>
                   <div  className='flex justify-center lg:justify-start mt-5 '>
                      <button className="bg-yellow-400 font-mono text-white font-semibold w-24  h-10 rounded-md mr-7">More</button>
                      <button className="bg-yellow-400 font-mono text-white font-semibold w-24 h-10 rounded-md">CV</button>
                   </div>
               </section>
            
           </div>
       </header>
    )
}