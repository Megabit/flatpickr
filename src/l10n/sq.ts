/* Albanian locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Albanian: CustomLocale = {
  weekdays: {
    shorthand: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
    longhand: [
      "E Diel",
      "E Hënë",
      "E Martë",
      "E Mërkurë",
      "E Enjte",
      "E Premte",
      "E Shtunë",
    ],
  },

  months: {
    shorthand: [
      "Jan",
      "Shk",
      "Mar",
      "Pri",
      "Maj",
      "Qer",
      "Kor",
      "Gus",
      "Sht",
      "Tet",
      "Nën",
      "Dhj",
    ],
    longhand: [
      "Janar",
      "Shkurt",
      "Mars",
      "Prill",
      "Maj",
      "Qershor",
      "Korrik",
      "Gusht",
      "Shtator",
      "Tetor",
      "Nëntor",
      "Dhjetor",
    ],
  },
  firstDayOfWeek: 1,
  rangeSeparator: " deri ",
  weekAbbreviation: "Java",
  yearAriaLabel: "Viti",
  monthAriaLabel: "Muaji",
  hourAriaLabel: "Ora",
  minuteAriaLabel: "Minuta",
  time_24hr: true,
  today: "Sot",
  clear: "Pastro",
};

fp.l10ns.sq = Albanian;

export default fp.l10ns;
