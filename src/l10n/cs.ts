/* Czech locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Czech: CustomLocale = {
  weekdays: {
    shorthand: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
    longhand: [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota",
    ],
  },
  months: {
    shorthand: [
      "Led",
      "Ún",
      "Bře",
      "Dub",
      "Kvě",
      "Čer",
      "Čvc",
      "Srp",
      "Zář",
      "Říj",
      "Lis",
      "Pro",
    ],
    longhand: [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec",
    ],
  },
  firstDayOfWeek: 1,
  ordinal: function () {
    return ".";
  },
  rangeSeparator: " do ",
  weekAbbreviation: "Týd.",
  scrollTitle: "Rolujte pro změnu",
  toggleTitle: "Přepnout dopoledne/odpoledne",
  amPM: ["dop.", "odp."],
  yearAriaLabel: "Rok",
  time_24hr: true,
  today: "Dnes",
  clear: "Vymazat",
};

fp.l10ns.cs = Czech;

export default fp.l10ns;
