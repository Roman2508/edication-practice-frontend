import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"

dayjs.extend(updateLocale)

export default dayjs.updateLocale("en", {
  months: [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ],
  days: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"],
  weekStart: 1,
  //   weekdaysShort: "Нд_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
  weekdaysMin: "Н_П_В_С_Ч_П_С".split("_"),
})
