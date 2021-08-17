import React from "react";
import "./event.css";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import Select from "react-select";

export class Event extends React.Component {
  render() {
    const dateValue = new Date();
    const options = [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
      { value: "saturday", label: "Saturday" },
      { value: "sunday", label: "Sunday" },
    ];
    return (
      <div>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="text" placeholder="Description"></input>
        </div>
        <div>
          <DateTimePickerComponent
            id="datetimepicker"
            placeholder="Start Time"
            value={dateValue}
          />
          <DateTimePickerComponent
            id="datetimepicker"
            placeholder="End Time"
            min={dateValue}
          />
        </div>
        <div>
          <Select options={options} isMulti />
        </div>
      </div>
    );
  }
}
