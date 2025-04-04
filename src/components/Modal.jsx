import MyCalendar from "./MyCalendar";

export default function Modal({ value, setValue }) {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="true"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body d-flex justify-content-center align-items-center">
            <MyCalendar setValue={setValue} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}
