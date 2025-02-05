import { useEffect, useState } from 'react';
import '../styles/App.scss';
import api from './services/api';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import CharacterList from './characters/CharacterList'
import Filters from './filters/Filters';
import CharacterDetail from './characters/CharacterDetail';
import NotFound from './NotFound';

function App() {

  const [characters, setCharacters] = useState([]);
  //filterbyname
  const [filterName, setFilterName] = useState("")
  //filtro byhouse
  const [filterHouse, setFilterHouse] = useState ("Gryffindor")

//traemos la info de la API a App
  useEffect(()=>{
    api().then((data)=> {setCharacters(data)})
  }, []);


//FILTROS
  //filtro para buscar por personaje, añadiremos todos los filtro que useremos en una variable y es la que usaremos para llamarla cuando cargue la pagina. 
  const filtersCharacters = characters
  .filter((character)=> character.name.toLowerCase().includes(filterName))
  .filter((character)=> filterHouse ? character.house === filterHouse : true)//ojo, cambiar para que empiece por griffindor




  /* DETAIL
  1.verificar si estoy en /character/:idcharacter
  2. sacar el id de la ruta: idcharacter
  3. buscar el personaje dentro del array characters con el id (find)
  */


  //1.con este destructuring sacamos la url para el detail, pathname lo hemos  visualizado en la consola, primero pusimos en la const info, para que nos saliera todo el objeto.
  const { pathname } = useLocation()
  //console.log(pathname)
  
  //funcion matchpath de react, necesita 2 parametros, ruta que quiero buscar y la ruta real, se importa arriba

  const characterRoute = matchPath('/character/:idCharacter', pathname)
  //console.log(characterRoute)

  //2.op.ternario
  const characterIdrUrl = characterRoute ? characterRoute.params.idCharacter : null;

  //3.buscar el personaje con find
const characterDetails = characters.find(character => character.id === characterIdrUrl) || null;











  return (
   <>
    <Routes>

      <Route path='/' element={
        <>

          <Filters 
          setFilterName={setFilterName}
          filterName={filterName}
          setFilterHouse={setFilterHouse}
          />

          <br />
          <br />
          
          
          <CharacterList  
          characters={filtersCharacters}
         
          />

        
        </>
      }/>

      <Route path='/character/:idCharacter' element={<CharacterDetail  characterDetails={characterDetails} />}/>

      <Route path='*' element={<NotFound/>}/>


    </Routes>
   </>
  );
}

export default App;