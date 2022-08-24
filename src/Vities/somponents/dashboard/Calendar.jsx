import React, {useState} from 'react'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styled from 'styled-components';

const DateContainer = styled.div`
width: 100%;
align-items: center;
display: flex;
.date{
  width: 100%;
  background-color: orange;
  border-radius: 10px;
}
@media (max-width: 25rem){
  .rdrCalendarWrapper{
    font-size: 0.5rem;
  }
}
.rdrMonths{
  align-items: center;
}
`

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <DateContainer>
      <DateRange editableDateInpuys={true} onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        range={state} className='date'
      />
    </DateContainer>

  )
}

export default Calendar