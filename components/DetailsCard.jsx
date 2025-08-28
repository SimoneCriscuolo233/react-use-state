
const DetailsCard = ({ languages, activeLang }) => {
  const firstLang = languages[0]
  return (
    <div className="col-12" key={firstLang.id}>
      <div className="card">
        <div className="card-body">
          {activeLang ? (
            <>
              <h5 className="card-title">{activeLang.title}</h5>
              <p className="card-text">{activeLang.description}</p>
            </>
          ) : (
            <p className="card-text text-muted">Nessun linguaggio selezionato</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
