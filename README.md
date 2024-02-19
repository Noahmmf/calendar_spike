# Calendar spike

Goal of this project is to face the hardest aspect of my solo project- HeartSync. The most challengeing aspect of the Calendar is syncing two schedules on the same page.

## Initial thoughts/ideass

1. Have the "household" SQL table share one calendar.
    - How do I make their data show up? 
    - How can I do that in this project? 
2. Find a working Calendar that I can impliment into my project
    - Daily view of time slots(side by side)
    -  *** How do I show both schedules at once?**
3. Is this something I can realistically do? 
    - time commitment-
    - Obsticles
4. How can I connect a DB to each "household"?
    - What is needed for everything to be saved in the DB?
        - start and stop time/ all day


## Fullcalendar
https://fullcalendar.io/

Fullcalendar is a calendar for react projects that is highly customizable. I plan to use the free version for my project. 

## Testing

* I have created this repository to test out Fullcalendar. Initially very overwhelming and hard to understand what is needed. I finally got a calendar to render on the screen after 2 hours. 

![](/public/First_calendar.png)

* I was able to render the time grid that allows view of the current day in hours. Also was able to figure how to use mock data to show up on calendar. 

```
const events = [
  { title: `Noah's lunch`, start: new Date() },
  { title: 'Pick up Honor @4', start: new Date() },
  { title: 'Meeting', start: new Date() }
]
```

![](/public/time_grid.png)

* set up basic redux for data with event objects above.

* set up form but cannot figure out how to correctly format date structure
    - using moment.js to format date correctly but cannot 

## Calendar Plugins
- To display calendar grid you must import   @fullcalendar/daygrid and set the initial view to 'dayGridMonth' other initial views/navigation can be implimented to alter view of calendar. 


## Styling: bootstrap 5
 link for css: 
 <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
 link for script: 
 <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> -->


## issues

- cannot set up redux to try send seed data to calendar. 
- issues with using only what I want to use (timeGridDay)
