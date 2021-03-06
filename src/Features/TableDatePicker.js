import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker(itemPrefill) {
    
    const [date, setDate] = useState(null);
    let placeholder = "";
    
    if(itemPrefill["selected"] !== "") {
        placeholder = itemPrefill["selected"];
    }

    return (
        <DatePicker selected={date} placeholderText={placeholder} onChange={date => setDate(date)} />
    );
}