
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const jalaliMonths = [
  "فروردین", "اردیبهشت", "خرداد",
  "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر",
  "دی", "بهمن", "اسفند",
];

const monthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

function toJalali(gYear: number, gMonth: number, gDay: number) {
  const gDate = new Date(gYear, gMonth, gDay);
  const gy = gDate.getFullYear() - 621;
  const gm = gDate.getMonth() + 1;
  const gd = gDate.getDate();

  const jYear = gy;
  const jMonth = (gm + 9) % 12;
  const jDay = gd;

  return { year: jYear, month: jMonth, day: jDay };
}

export function ShamsiDatePicker() {
  const now = new Date();
  const { year: currentYear, month: currentMonth, day: currentDay } = toJalali(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(currentDay);
  const [open, setOpen] = useState(false);

  const selectDate = (d: number) => {
    setDay(d);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-start text-right">
          {`${year}/${month + 1}/${day}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <Card className="p-2">
          <div className="flex justify-between mb-2">
            <select
              className="text-sm border rounded px-2 py-1"
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
            >
              {jalaliMonths.map((m, i) => (
                <option key={i} value={i}>{m}</option>
              ))}
            </select>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="w-20 text-sm border rounded px-2 py-1"
            />
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: monthDays[month] }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                className={`text-sm p-1 rounded hover:bg-gray-200 ${d === day ? "bg-blue-500 text-white" : ""}`}
                onClick={() => selectDate(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
