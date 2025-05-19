

import CardComp from "../components/cardsComp";
import data from "../components/data";
export default  function ProjectsSection() {
    return (
         <section className='p-3 md:p-7 lg:p-14 mb-20'>
              <h2 className='text-5xl font-semibold mb-20  text-center'>My projects</h2>
              <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-6 '>
              {
               data.map((item, k) => {
               return (<CardComp k={k} img={item.img}  alt={item.alt} 
                    imageTitle={item.imageTitle}  info={item.info} projeto={item.projeto} code={item.code} /> )
               } )
              }
              </div>
         </section>
    )
}