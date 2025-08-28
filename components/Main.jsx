import LanguageButtons from "./LanguageButtons"
import DetailsCard from "./DetailsCard"
const Main = ({ languages, setActiveId, activeLang, activeId }) => {

  return (
    <main>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <LanguageButtons activeId={activeId} languages={languages} setActiveId={setActiveId} />
          </div>
          <DetailsCard languages={languages} activeLang={activeLang} />
        </div>
      </div>
    </main >
  )
}

export default Main