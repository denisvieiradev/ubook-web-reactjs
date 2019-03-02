import LocalizedStrings from "react-localization";
import englishStrings from "./strings/en.json";
import portugueseStrings from "./strings/pt-br.json";

let Strings = new LocalizedStrings({
  en: englishStrings,
  pt: portugueseStrings
});

Strings.setLanguage("pt");

export default Strings;
