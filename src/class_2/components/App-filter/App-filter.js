import './App-filter.css'


const AppFilter = ({updateFilterHandler}) => {
  return (
    <div className="btn-group">
      {
        btnArr.map(btn => (
          <button key={btn.name} className="btn btn-dark" onClick={() => updateFilterHandler(btn.name)} type="button"> {btn.label}</button>
        ))
      }
        {/* <button className="btn btn-outline-dark" type="button"> Mashhur kinolar</button>
        <button className="btn btn-outline-dark" type="button"> Eng ko'p ko'rilgan kinolar</button> */}
    </div>
  )
}

const btnArr = [
  {name: "all", label: "Barcha kinolar"},
  {name: "popular", label: "Mashhur kinolar"},
  {name: "mostViewed", label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter
