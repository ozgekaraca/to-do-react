import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const EkleForm = ({yapilacaklarGuncelle}) => {
const [is, isGuncelle] = useState("")

  const formGonder = (olay) =>{
    olay.preventDefault() //sayfanın yeniden yüklenmesini engellemek için

    yapilacaklarGuncelle( eskiArray => {
      const yeniIs = { id:uuidv4(), baslik: is, tamamlandi: false}  //rastgele id üretmesi için uuid kullanıyoruz
      return [ ...eskiArray, yeniIs ] //eski array'imiz üzerine yeni veri ekliyoruz bu yüzden spread operatörü kullanıyoruz
    })
    isGuncelle("") //kaydedilen işten sonra inputu temizlemek için
  }

  return (
    <>
      <form className="row mb-5" onSubmit={formGonder}>
        <div className="input-group mb-3">
          <input
          value={is} onChange={olay=>isGuncelle(olay.target.value)} //controlled input--bir state ile form elemanını ilişkilendirmek, value'yu state'den alıyoruz onchange'de ise güncelliyoruz
            type="text"
            className="form-control"
            placeholder="İş adı girin. Ör: React çalış"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Ekle
          </button>
        </div>
      </form>
    </>
  )
}

export default EkleForm
 