import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Form from './../components/Form/Form'
export default function FormCamp() {

  return (
    <div id='contact-section' className="flex flex-col lg:flex-row justify-center lg:justify-around p-2 mt-10 ">
      <div className='w-full lg:max-w-[500px] form-header from-right'>
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
       <Form/>
    </div>
  );
}
