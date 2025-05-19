import { useRef } from 'react';
import emailjs from '@emailjs/browser'



export default function useSubmit() {
     const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ur5789', 'template_8vjo89e', form.current, {
        publicKey: 'aKjMQUrLlUnHxUHQt',
      })
      .then(
        () => {
          alert(' EMAIL ENVIADO COM SUCESS0!');
        },
        (error) => {
          console.log(error.message);
        },
      );
      e.target.reset()
  };


  return {
    form,
    sendEmail
  }
}