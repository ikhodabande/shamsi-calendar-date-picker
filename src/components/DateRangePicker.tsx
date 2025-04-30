import React from "react"
import { Calendar } from "@/components/ui/calendar"
import dayjs from "dayjs"
import jalaliday from "jalaliday"

dayjs.extend(jalaliday)

export const DateRangePicker = ({
  from,
  to,
  onChange,
}: {
  from: Date | null
  to: Date | null
  onChange: (range: { from: Date | null; to: Date | null }) => void
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-sm font-medium">از تاریخ:</span>
        <Calendar
          mode="single"
          selected={from ?? undefined}
          onSelect={(date) => onChange({ from: date, to })}
          className="rounded-md border"
        />
      </div>
      <div>
        <span className="text-sm font-medium">تا تاریخ:</span>
        <Calendar
          mode="single"
          selected={to ?? undefined}
          onSelect={(date) => onChange({ from, to: date })}
          className="rounded-md border"
        />
      </div>
    </div>
  )
}
