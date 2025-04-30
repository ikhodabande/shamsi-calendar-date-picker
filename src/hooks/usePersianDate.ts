import dayjs from "dayjs"
import jalaliday from "jalaliday"

dayjs.extend(jalaliday)

export const usePersianDate = (date: Date | null, format = "YYYY/MM/DD") => {
  return date ? dayjs(date).calendar("jalali").locale("fa").format(format) : ""
}
