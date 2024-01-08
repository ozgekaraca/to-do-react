import { useState } from "react";
import EkleForm from "./EkleForm";
import TodoListe from "./TodoListe";

function App() {
  const [yapilacaklar, yapilacaklarGuncelle] = useState([])

  const isSil = (olay, id)=>{
    olay.preventDefault()

    const filtrelenmisListe = yapilacaklar.filter( eleman=> eleman.id !== id)
    yapilacaklarGuncelle(filtrelenmisListe)
  }

const isTamamla = (olay, id)=> {
  const yeniYapilacaklar = yapilacaklar.map((eleman)=>{
     return id === eleman.id ? {...eleman, tamamlandi:!eleman.tamamlandi} : eleman //gelen aynı elemanının id'sine eşitse spread edilecek, aksi halde elemanı olduğu gibi return edilecek
  })
  yapilacaklarGuncelle(yeniYapilacaklar)
}  

return (
    <>
      <section className="container uygulama py-3 py-sm-5">
        <h1>Yapılacaklar Uygulaması</h1>
        <EkleForm yapilacaklarGuncelle={yapilacaklarGuncelle} />
        <TodoListe yapilacaklar={yapilacaklar} isSil={isSil} isTamamla={isTamamla} />
      </section>
    </>
  );
}

export default App
