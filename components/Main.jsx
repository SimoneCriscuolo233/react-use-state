
const Main = ({ languages }) => {
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
                  className={"btn btn-primary"
                  }>
                  {lang.title}
                </button>
              ))}
            </div>

          </div>

          <div className="col-12" key={firstLang.id}>
            <div className="card">
              <div className="card-body">
                <div>
                  <h5 className="card-title">{firstLang.title}</h5>
                  <p className="card-text">{firstLang.description}</p>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </main>





  )
}

export default Main