import BugIcon from "../../public/icon_type_bug.svg";
import RockIcon from "../../public/icon_type_rock.svg";
import IceIcon from "../../public/icon_type_ice.svg";
import DarkIcon from "../../public/icon_type_dark.svg";
import DragonIcon from "../../public/icon_type_dragon.svg";
import ElectricIcon from "../../public/icon_type_electric.svg";
import FairyIcon from "../../public/icon_type_fairy.svg";
import FightingIcon from "../../public/icon_type_fighting.svg";
import FireIcon from "../../public/icon_type_fire.svg";
import FlyingIcon from "../../public/icon_type_flying.svg";
import GhostIcon from "../../public/icon_type_ghost.svg";
import GrassIcon from "../../public/icon_type_grass.svg";
import GroundIcon from "../../public/icon_type_ground.svg";
import NormalIcon from "../../public/icon_type_normal.svg";
import PoisonIcon from "../../public/icon_type_poison.svg";
import PsychicIcon from "../../public/icon_type_psychic.svg";
import SteelIcon from "../../public/icon_type_steel.svg";
import WaterIcon from "../../public/icon_type_water.svg";


export const typeImage = (type : string ) => {
    switch (type) {
        case "bug" :
            return BugIcon;
        case "ice" :
            return IceIcon;
        case "rock" :
            return RockIcon;
        case "dark" :
            return DarkIcon;
        case "dragon" :
            return DragonIcon
        case "electric" :
            return ElectricIcon;
        case "fairy" :
            return FairyIcon;
        case "fighting" :
            return FightingIcon;
        case "fire" :
            return FireIcon;
        case "flying" :
            return FlyingIcon;
        case "ghost" :
            return GhostIcon;
        case "grass" :
            console.log("動作");
            return GrassIcon;
        case "ground" :
            return GroundIcon;
        case "normal" :
            return NormalIcon;
        case "poison" :
            return PoisonIcon;
        case "psychic" :
            return PsychicIcon;
        case "steel" :
            return SteelIcon;
        case "water" :
            return WaterIcon;
    }
}