import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridDay from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useDispatch, useSelector } from 'react-redux'
import interactionPlugin from '@fullcalendar/interaction'



export default function Calendar(){
const dispatch= useDispatch();
  const events = useSelector(store => store.event);


  return (
    <div>
      <h1>HeartSync Cal Demo</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridDay, listPlugin, interactionPlugin]}
        initialView='timeGridDay'
        weekends={true}
        editable={true}
        selectable={true}
        height={450}
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'list,timeGridWeek,timeGridDay'
        }}
       

        
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