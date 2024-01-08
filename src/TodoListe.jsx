const TodoListe = ({yapilacaklar, isSil, isTamamla}) => {
  return (
  <>
     <h2 className="d-flex align-items-center gap-3">Yapılacak İşler 
        <span className="badge bg-secondary fs-6"> {yapilacaklar.filter(eleman => eleman.tamamlandi).length} / {yapilacaklar.length} </span>  
      </h2>

     <ul className="list-group">
         {yapilacaklar.map( (eleman)=>{
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={eleman.id} >

                <div className="form-check">
                  <input onChange={(olay) => isTamamla(olay, eleman.id)}
                    id={eleman.id}
                    className="form-check-input"
                    type="checkbox"
                    value="" />
                    <label
                      className={!eleman.tamamlandi ? "form-check-label" : "form-check-label ustu-cizili" }
                      for={eleman.id} >
                      {eleman.baslik}
                    </label>
                </div>
                  <a onClick={(olay) => isSil(olay, eleman.id)}
                    href="#"
                    className="btn btn-danger btn-sm" >
                    Sil
                  </a>
              </li>
            );
        } )} 
     </ul>
  </>
  )
}

export default TodoListe
