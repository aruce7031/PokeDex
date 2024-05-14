import { useState,useEffect, RefObject, useCallback} from "react";
import { resJson } from "../../utils/resJson";


interface Pokemon {
  name: string,
  url: string
}

export const useGetPokemon= (ref: RefObject<HTMLElement |null>) => {
  const url : string = "https://pokeapi.co/api/v2/pokemon";
  const [pokemons, setPokemons] = useState<Array<object>>([]);
  const [nextUrl, setNextUrl] = useState<string>(url);

  const scrollObserver = useCallback(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            getPokemons(nextUrl).then((data) => {
                setPokemons((oldValue) => [...oldValue, ...data]);
            })
          }
        });
      }),
    [nextUrl]
  );

  useEffect(() => {
    const target = ref.current;
    if (target) {
      const observer = scrollObserver();
      observer.observe(target);
      return () => {
        observer.unobserve(target);
      };
    }
  }, [scrollObserver, ref]);


  const getPokemons = async (pokeUrl: string) => {

      const res = await resJson(pokeUrl);
      setNextUrl(res.next);
      const result = res.results;

      const objArray = await Promise.all(
        result.map( async (pokemon : Pokemon) => {
          const state = await resJson(pokemon.url);
          const speciesState = await resJson(state.species.url);

          const obj ={
              name : speciesState.names[0].name,
              image : state.sprites.other["official-artwork"].front_default,
              id : state.id,
          }

          return obj;
        })
    );
      return objArray;
  }

    return pokemons;
};
