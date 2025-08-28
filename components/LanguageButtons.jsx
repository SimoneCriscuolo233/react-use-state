
const LanguageButtons = ({ activeId, languages, setActiveId }) => {
  return (
    <div className="d-flex gap-2 mb-4">
      {languages.map((lang) => (
        <button
          key={lang.id}
          className={`btn ${activeId === lang.id ? "btn-warning" : "btn-primary"}`}
          onClick={() => setActiveId(lang.id)}
        >
          {lang.title}
        </button>
      ))
      }
    </div>)
}

export default LanguageButtons
