

export default function FormCamp() {
    return (
        <div>
            <h3>Contato</h3>
            <form action="marcelo.prado2024.mar.marcelo@gmail.com" method="POST">
             <label htmlFor='name'>
                  Name
                  <input type="text" name='Nome' id='name' placeholder="Nome" required />
             </label>
             <label htmlFor='email'>
                Email
                  <input type="email" name='Email' id='email'  placeholder="Email"  required />
             </label>
             <textarea cols='30' rows='30' name="Assunto" placeholder="Digite sua mensagem" />
             <button type="submit">Enviar</button>

             <input type="hidden" name='_subject' value='Novo Contato!' />
             <input type="text" name='_honey' style={{display: 'none'}} />
             <input type="hidden" name='_captcha' value='false'/>
        </form>
        </div>
    )
}