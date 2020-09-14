import React, {useState} from 'react';
import {formatDate} from "../services/service";

export default function FiltersDiv() {
    const [dateFrom, setDateFrom] = useState(formatDate(new Date(1970, 0, 1)));
    const [dateTo, setDateTo] = useState(formatDate(new Date()));

    const handleDateFrom = (event) => {
        setDateFrom(event.currentTarget.value)
    }

    const handleDateTo = (event) => {
        setDateTo(event.currentTarget.value)
    } 

    return (
            <div className="Jogs-content">
                    <div className="Jogs-date-block">
                        <div className="date-block">
                            <span>Date from</span>
                            <input type="date" value={dateFrom} onChange={handleDateFrom}></input>
                        </div>
                        <div className="date-block">
                            <span>Date to</span>
                            <input type="date"value={dateTo} onChange={handleDateTo}></input>
                        </div>
                    </div>
            </div>
    )
}