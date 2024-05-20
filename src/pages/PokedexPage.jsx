import { useSelector } from "react-redux"
import UseFetch from "../hooks/UseFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/styles/PokedexPage.css'
import HeaderPages from "../components/HeaderPages"


const PokedexPage = () => {

const trainer = useSelector(state => state.trainer)
const [searchedName, setSearchedName] = useState('')
const [typeSelect, setTypeSelect] = useState('allPokemons')

const [pokemons, getPokemons, getTypePokemon] = UseFetch()


useEffect(() => {
if(typeSelect === 'allPokemons') {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    getPokemons(url)
  } else {
    getTypePokemon(typeSelect)
  }

},[typeSelect])



const inputName = useRef()

const handleSearch = e => {
  e.preventDefault()
  setSearchedName(inputName.current.value.trim().toLowerCase())
}

const callbackFilter = poke => {
  const filterName = poke.name.includes(searchedName)
  return filterName
}


  return (
    
    <div className="two_container">
      
      <HeaderPages />
        <body className="two_body">
          
        <p className="two_welcome"><span className="two_welcom">Welcome {trainer}</span>, <span className="two_welcom_p">here you will find your favorite pokemon</span></p>
        <div className="two_form_container">
              <form className="two_form" onSubmit={handleSearch} action="">
                <input className="two_input" ref={inputName} type="text" placeholder="Look for a pokemón" />
                <button className="two_btn">Search</button>
              </form>
              <form className="two_form_select" action="">
                <SelectType
                setTypeSelect = {setTypeSelect}
                />
              </form>
        </div>

        <div className="two_container_card">
            {
              pokemons && pokemons.results.filter(callbackFilter).length === 0
              ? <h2 className="two_title_error">There are no pokemon that meet the filters </h2>
              :
              ( pokemons?.results.filter(callbackFilter).map(poke =>(
                <PokeCard 
                key={poke.url}
                poke = {poke}
                />
              )
            ) )
          }
        </div>
      </body>

    </div>
  )
}

export default PokedexPage