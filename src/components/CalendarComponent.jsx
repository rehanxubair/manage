import React, { useState, useEffect } from 'react';
import scheduleIcon from '../schedule.png'; // Adjust the path if necessary

const CalendarComponent = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [days, setDays] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const years = Array.from({ length: 35 }, (_, i) => 1990 + i);
    const months = [...Array(12).keys()].map(m => new Date(0, m).toLocaleString('default', { month: 'long' }));

    const generateDays = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        setDays([...Array(daysInMonth).keys()].map(d => d + 1));
    };

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value);
        setYear(newYear);
        generateDays(newYear, month);
    };

    const handleMonthChange = (e) => {
        const newMonth = parseInt(e.target.value);
        setMonth(newMonth);
        generateDays(year, newMonth);
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const handleCalendarToggle = (e) => {
        e.stopPropagation(); // Prevent click bubbling
        setShowCalendar(prev => !prev);
    };

    useEffect(() => {
        generateDays(year, month);
    }, [year, month]);

    return (
        <div style={styles.calendarContainer}>
            <div style={styles.calendarIcon} onClick={handleCalendarToggle}>
                <span style={styles.calendarText}>
                    <img src={scheduleIcon} alt="Schedule Icon" style={{ width: "20px", height: "20px" }} />
                </span>
            </div>

            {showCalendar && (
                <div style={styles.calendarPopup}>
                    <h2 style={styles.calendarTitle}>Calendar</h2>
                    <div style={styles.calendarSelectors}>
                        <select value={year} onChange={handleYearChange} style={styles.select}>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <select value={month} onChange={handleMonthChange} style={styles.select}>
                            {months.map((m, index) => <option key={index} value={index}>{m}</option>)}
                        </select>
                    </div>
                    <div style={styles.calendarDays}>
                        {days.map(day => (
                            <span 
                                key={day} 
                                style={day === selectedDay ? styles.selectedDay : styles.calendarDay}
                                onClick={() => handleDayClick(day)}
                            >
                                {day}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    calendarContainer: {
        marginTop: "-25px",
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
    },
    calendarIcon: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '8px',
        position: 'relative',
        zIndex: 10,
    },
    calendarText: {
        fontSize: '16px',
        color: '#333',
    },
    calendarPopup: {
        position: 'absolute',
        top: '30px',
        left: '0',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        width: '250px',
        zIndex: 200,
        display: 'block',
    },
    calendarTitle: {
        margin: '0 0 12px',
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
    },
    calendarSelectors: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '12px',
    },
    select: {
        padding: '6px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    calendarDays: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    calendarDay: {
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    selectedDay: {
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4px',
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }
};

export default CalendarComponent;
