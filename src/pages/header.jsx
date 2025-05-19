import NavDesk from "../components/nav/navDesk";
import NavMobile from "../components/nav/navMobile";
import banner from '../assets/heroBanner.png';
import useTypingText from './hook/useTypingText';
import {Button} from  '@mui/material'

export default function Header() {

    const {text} = useTypingText()

    return (
       <header id='header-section'>
           <NavMobile/>
           <NavDesk/>
           <div className='flex flex-col lg:flex-row  items-center lg:justify-evenly p-4 lg:p-2'>
               <div className='w-full md:max-w-md lg:max-w-lg  from-left'>
                  <img src={banner} alt='banner-hero' />
               </div>
               <section className='lg:max-w-md justify-center from-right  '>
                   <h1 className="text-2xl md:text-3xl my-2 mb-5  text-center lg:text-left font-bold">Olá,
                     eu sou <br className='hidden lg:flex' /> <span  className='text-yellow-400 lg:text-6xl my-name'> {text} </span>  </h1>
                   <p className="text-center lg:text-left font-serif font-medium md:px-40 lg:p-0">Desenvolvedor Frontend desde 2023. Sou apaixonado por programação e meu maior ponto forte é a persistência: nunca desisto e estou sempre superando meus limites para evoluir constantemente.</p>
                   <div  className='flex justify-center lg:justify-start mt-5 '>
                      <Button variant="contained" href="https://drive.google.com/file/d/19dD7SGTAQm4D4LdtHphp_F0GlHcW0BvZ/view?usp=sharing" target='_blank' sx={{backgroundColor:  '#fbbd36', color: '#fff'}}>CV</Button>
                   </div>
               </section>
            
           </div>
       </header>
    )
}