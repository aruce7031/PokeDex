import { BrowserRouter,  Router, Route, Link, Routes } from "react-router-dom";
import PokemonThumbnails from './component/PokemonThumbnails/PokemonThumbnails'
import Details from "./component/PokemonDetails/PokemonDetails";

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 検索バー */}
          <Route path="/" element = {<PokemonThumbnails></PokemonThumbnails>} ></Route> {/* ポケモンリスト*/}
          <Route path = "/Details/:id" element = {<Details></Details>}></Route>
          {/* <Route path = "/*" element = {}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
