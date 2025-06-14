/* Sinhala locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Sinhala: CustomLocale = {
  weekdays: {
    shorthand: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
    longhand: [
      "ඉරිදා",
      "සඳුදා",
      "අඟහරුවාදා",
      "බදාදා",
      "බ්‍රහස්පතින්දා",
      "සිකුරාදා",
      "සෙනසුරාදා",
    ],
  },

  months: {
    shorthand: [
      "ජන",
      "පෙබ",
      "මාර්",
      "අප්‍රේ",
      "මැයි",
      "ජුනි",
      "ජූලි",
      "අගෝ",
      "සැප්",
      "ඔක්",
      "නොවැ",
      "දෙසැ",
    ],
    longhand: [
      "ජනවාරි",
      "පෙබරවාරි",
      "මාර්තු",
      "අප්‍රේල්",
      "මැයි",
      "ජුනි",
      "ජූලි",
      "අගෝස්තු",
      "සැප්තැම්බර්",
      "ඔක්තෝබර්",
      "නොවැම්බර්",
      "දෙසැම්බර්",
    ],
  },
  time_24hr: true,
  today: "අද",
  clear: "මකන්න",
};

fp.l10ns.si = Sinhala;

export default fp.l10ns;
