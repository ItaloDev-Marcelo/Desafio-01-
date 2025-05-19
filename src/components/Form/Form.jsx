import { TextField, Button} from "@mui/material";
import useSubmit from "./hook/useSubmit";

export default function FormCamp() {
  const { form, sendEmail } = useSubmit();

  return (
      <div className='w-full lg:max-w-[500px] from-left'>
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
            
            <Button type="submit" variant="contained" sx={{backgroundColor:  '#fbbd36', color: '#fff'}}>
              Enviar
            </Button>
           </div>
          </div>
        </form>
      </div>
  );
}
