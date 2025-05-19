import { TextField } from "@mui/material";
import useSubmit from "./hook/useSubmit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FormCamp() {
  const { form, sendEmail } = useSubmit();

  return (
    <div className="flex flex-col lg:flex-row  justify-center lg:justify-around p-2 mt-10">

      <div className='w-full lg:max-w-[500px] form-header'>
        <h3 className="text-3xl lg:text-6xl my-2 p-3">Contato</h3>
        <p className="p-3">
          Estou procurando novas oportunidades. Minha caixa de entrada está
          sempre aberta. Se você tiver alguma dúvida ou apenas quiser dizer oi,
          farei o possível para responder! Obrigado pelo seu tempo e tenha um
          bom dia.
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
          
        </p>
      </div>

      <div className='w-full lg:max-w-[500px]'>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mt-2 gap-10 ">
           <div className="p-2 lg:p-4">
             <TextField
              id="outlined-multiline-flexible"
              name="user_name"
              label="Name"
              multiline
              sx={{ width: '100%', borderColor: 'pink'}}
            />
           </div>

           <div  className="p-2 lg:p-4">
             <TextField
              id="outlined-multiline-flexible"
              name="user_email"
              label="Email"
              multiline
              sx={{ width: '100%' }}
            />
           </div>

          <div  className="p-2 lg:p-4">
              <TextField
              id="outlined-multiline-static"
              label="Message"
              name="message"
              multiline
              sx={{ width: '100%' }}
            />
          </div>

           <div  className="p-2 lg:p-4">
               <button
              className="bg-blue-500 font-mono text-white font-semibold w-24  h-10 rounded-md"
              type="submit"
            >
              Enviar
            </button>
           </div>
          </div>
        </form>
      </div>

    </div>
  );
}
