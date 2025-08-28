
const Main = ({ languages, setActiveId, activeLang, activeId }) => {
  const firstLang = languages[0]
  return (
    <main>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex gap-2 mb-4">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  className={`btn ${activeId === lang.id ? "btn-warning" : "btn-primary"}`}
                  onClick={() => setActiveId(lang.id)}
                >
                  {lang.title}
                </button>
              ))}
            </div>

          </div>

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
        </div>


      </div>

    </main >





  )
}

export default Main