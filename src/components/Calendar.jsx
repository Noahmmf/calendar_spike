import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridDay from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useDispatch, useSelector } from 'react-redux'



export default function Calendar(){

  const events = useSelector(store => store.event);


  return (
    <div>
      <h1>HeartSync Cal Demo</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridDay, listPlugin]}
        initialView='timeGridDay'
        weekends={true}
        
        events={events}
        eventContent={renderEventContent}
        
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}