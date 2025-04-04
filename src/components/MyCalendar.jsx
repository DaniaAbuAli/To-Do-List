import Calendar from "react-calendar";
export default function MyCalendar({value,setValue}) {
  return (
    <div className="mt-4">
      <Calendar
        onChange={setValue}
        value={value}
      />
    </div>
  );
}
