import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonThumbnails from './component/PokemonThumbnails/PokemonThumbnails'
import Details from "./component/PokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 検索バー */}
          <Route path="/" element = {<PokemonThumbnails></PokemonThumbnails>} ></Route>
          <Route path = "/Details/:id" element = {<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
