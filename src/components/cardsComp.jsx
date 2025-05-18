import {Card, CardActions,Button, Box} from '@mui/material'

export default function CardComp({img,alt,projeto,code, k, imageTitle}) {
    return (
         <Card key={k} sx={{padding: 2, height: 'auto'}} >
             <Box sx={{padding: 2}}>
                <img 
              height={150}
             src={img}
             alt={alt}
             title={imageTitle} />
             </Box>
             <Box sx={{alignSelf: 'center'}}>
               <div className='p'>
                    <CardActions >
                  <a href={projeto} target='_blank' className='md:pl-3'>
                    <Button variant="contained" sx={{backgroundColor:  '#fbbd36', color: '#fff'}} >Projets</Button>
                  </a>
                   <a href={code} target='_blank'>
                    <Button variant="contained" sx={{backgroundColor:  '#fbbd36', color: '#fff'}} >code</Button>
                  </a>
             </CardActions>
               </div>
             </Box>
         </Card>
    )
}