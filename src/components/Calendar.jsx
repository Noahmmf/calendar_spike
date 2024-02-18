import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridDay from '@fullcalendar/timegrid'

const events = [
  { title: `Noah's lunch`, start: new Date() },
  { title: 'Pick up Honor @4', start: new Date() },
  { title: 'Meeting', start: new Date() }
]



export default function Calendar(){

  return (
    <div>
      <h1>HeartSync Demo</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridDay]}
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