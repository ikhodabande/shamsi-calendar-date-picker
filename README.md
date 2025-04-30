# Shamsi Calendar Date Picker

A Persian (Shamsi/Jalali) date range picker built with React and shadcn/ui.

## ✨ Features

- From and To date selection
- Outputs in Jalali, Gregorian, or custom formats
- Built using beautiful `shadcn/ui` components
- Easy to use in any React project

## 📦 Installation

```bash
npm install shamsi-calendar-date-picker
```


## 🧱 Usage

```
import { DateRangePicker, usePersianDate } from "shamsi-calendar-date-picker"

const App = () => {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  })

  const fromFormatted = usePersianDate(range.from)
  const toFormatted = usePersianDate(range.to)

  return (
    <div>
      <DateRangePicker from={range.from} to={range.to} onChange={setRange} />
      <p>از تاریخ: {fromFormatted}</p>
      <p>تا تاریخ: {toFormatted}</p>
    </div>
  )
}
```

## 🛠 Format Helpers

You can use your own format string like:
```usePersianDate(date, "dddd D MMMM YYYY")```
