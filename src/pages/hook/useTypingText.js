
import { useEffect, useState } from 'react';


export default function useTypingText() {
   const fullName= 'Italo Marcelo';
    const [text, setText] = useState('')
 
    useEffect(() => {
         let initialValue = 0;

         const interval = setInterval(() => {
           setText(fullName.slice(0, initialValue + 1))
           initialValue++;
           if(initialValue === fullName.length) clearInterval(interval)
         }, 100)
         return () => clearInterval(interval )
    }, []);


    return {
        text
    }

}

