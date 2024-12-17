import Orbit from "../../assets/orbit.png";
import Amoeba from "../../assets/amoeba.png";
import Melaka from "../../assets/melaka.png";
import Retaily from "../../assets/retaily.png";
import Dumbflix from "../../assets/dumbflix.png";
import Dumbsound from "../../assets/dumbsound.png";
import Crossbell from "../../assets/crossbell.png";
import Autovehicle from "../../assets/autovehicle.jpeg";

export const generateImage = (name: string) => {
  switch (name.toLocaleLowerCase()) {
    case "melaka":
      return Melaka;
    case "orbit":
      return Orbit;
    case "amoeba":
      return Amoeba;
    case "retaily":
      return Retaily;
    case "dumbsound":
      return Dumbsound;
    case "dumbflix":
      return Dumbflix;
    case "crossbell":
      return Crossbell;
    case "autovehicle":
      return Autovehicle;
    default:
      return "";
  }
};

export default generateImage;
