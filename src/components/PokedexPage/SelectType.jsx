import { useEffect} from "react"
import UseFetch from "../../hooks/UseFetch"
import '../styles/PokedexPage.css'


const SelectType = ({setTypeSelect}) => {

  

const [types, getTypes] = UseFetch()

useEffect( () => {
   const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
    getTypes(url)
},[])

const handleChange = e => {
    setTypeSelect(e.target.value)

}



  return (
    <select className="two_select" onChange={handleChange}> 
        <option value="allPokemons" className="recuadro">All pokemons</option>
       {
        types?.results.map(typeInfo => (
            <option className="two_option" key={typeInfo.url} value={typeInfo.url}>{typeInfo.name} </option>

        ) )

       }
    </select>
  )
}

export default SelectType