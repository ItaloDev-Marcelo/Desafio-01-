import {Stack, Button, List, ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import UseNav from './hook/useNav';
import CodeIcon from '@mui/icons-material/Code';

export default function NavMobile() {

    const {toggleMenu, hundleToggleMenu} = UseNav();

    return (
         <nav className='flex lg:hidden items-center justify-between py-5 px-10'>
           <a href='index.html' className='font-bold'><CodeIcon fontSize="large"/></a>
           <button aria-description='botão de menu' onClick={hundleToggleMenu}><MenuIcon/></button>
           <Stack sx={{display: toggleMenu ? 'flex' : 'none' ,
           flexDirection: 'column',
           justifyContent: 'flex-start',
           alignItems: 'center',
            position: 'absolute', left: 0, top: '11%', padding: '2em 1em', width: '100%', height: '100%', background: '#192535'}}>
              <Button sx={{width: '40px', alignSelf: 'flex-end'}}  aria-description='botão para fechar menu' onClick={hundleToggleMenu}>
                <CloseIcon /></Button>
              <List sx={{color : '#fff'}}>
                 <ListItem className='font-medium'>Home</ListItem>
                 <ListItem className='font-medium'>About</ListItem>
                 <ListItem className='font-medium'>Skills</ListItem>
                 <ListItem className='font-medium'>Projects</ListItem>
              </List>
           </Stack>
         </nav>
    )
}