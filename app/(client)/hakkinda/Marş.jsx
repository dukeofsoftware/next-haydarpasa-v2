import Frame from "./Frame"

function Marş() {
  return (
    <section className=" p-3 lg:p-5 flex items-center   bg-white w-full flex-col lg:flex-row h-full my-12">
          
          <div className='gap-3 lg:pr-4  '>
            <h1 className="text-center text-3xl font-bold mb-5 text-primary">Okul Marşı</h1>
            <pre className="ml-3 leading-10 text-base	">
              Okulumuz, yurdumuzun en şerefli lisesi <br />
              İlm-i irfandan meş'ale taşır her bir köşesi <br />
              Çok yücesin, çok ulusun ey imanlı Türk gençliği <br />
              Amaç yaptın sen kendine, cesaret ve mertliği <br />
              Haydarpaşa Lisesi bu gençlere kucak açar, <br />
              Medeniyet dünyasına nurlu ışıklar saçar. <br />
              Üç kıtaya feyiz veren ataların ahfadı <br />
              Fazilet ve hakka tapan büyük neslin evladı <br />
              Tarihinin eşi yoktur, ey kahraman Türkoğlu
              <br />
              Ey cihanda devir açan, devrim yapan Türkoğlu <br />
              Haydarpaşa Lisesi bu gençlere kucak açar,
              <br />
              Medeniyet dünyasına nurlu ışıklar saçar.
              <br />
              <br />
              <span className=" text-base"> Beste ve güfte</span>: Niyazi
              ÇITAKOĞLU
            </pre>
            
          </div>
          <div className=" w-[92%]  overflow-hidden min-h-[150px] h-[90%]   ">
         <Frame height={"500px"}/>
          </div>

       
         
      
    </section>
  )
}

export default Marş