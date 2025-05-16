import {useState} from 'react'

export default function UseNav() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const hundleToggleMenu = () => {
        setToggleMenu(prevMenusState => !prevMenusState)
    }

    return {
      toggleMenu,
      hundleToggleMenu 
    }
}