/* Norwegian locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Norwegian: CustomLocale = {
  weekdays: {
    shorthand: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
    longhand: [
      "Søndag",
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lørdag",
    ],
  },

  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    longhand: [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
  },

  firstDayOfWeek: 1,
  rangeSeparator: " til ",
  weekAbbreviation: "Uke",
  scrollTitle: "Scroll for å endre",
  toggleTitle: "Klikk for å veksle",
  time_24hr: true,
  today: "I dag",
  clear: "Tøm",

  ordinal: () => {
    return ".";
  },
};

fp.l10ns.no = Norwegian;

export default fp.l10ns;
