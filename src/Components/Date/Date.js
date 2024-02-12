import React, { useEffect, useState } from 'react';

const TimeRangePicker = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };


  return (
    <div>
      <label>Start Time:</label>
      <input type="time" value={startTime} onChange={handleStartTimeChange} />

      <label>End Time:</label>
      <input type="time" value={endTime} onChange={handleEndTimeChange} />
    </div>
  );
};

export default TimeRangePicker;
