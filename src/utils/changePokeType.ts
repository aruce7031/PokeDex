export const changeJpPokeName= (type : string) => {
    const pokeTypes:{[name:string]:string} = {
        normal : "ノーマル",
        fire : "ほのお",
        water : "みず",
        electric : "でんき",
        grass : "くさ",
        ice : "こおり",
        fighting : "かくとう",
        poison: "どく",
        ground : "じめん",
        flying : "ひこう",
        psychic: "エスパー",
        bug : "むし",
        rock : "いわ",
        ghost : "ゴースト",
        dragon : "ドラゴン",
        dark : "あく",
        steel : "はがね",
        fairy : "フェアリー"
    }
    return pokeTypes[type];
}