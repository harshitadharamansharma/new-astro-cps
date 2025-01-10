import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; // Import the list plugin
// import yearPlugin from '@fullcalendar/year'; // Import the year view plugin

// Import timeZoneMapping and formatEventTime from utils.js
import { timeZoneMapping, formatEventTime } from '../../js/utils'; // Update the path as per your project structure

const Calendarr = ({ events }) => {
  // Map events to FullCalendar format
  const calendarEvents = events
    .map((event) => {
      const { eventDate, eventTime, eventTimeZone, eventName } = event.data;

      // Get the mapped timezone or default to 'Asia/Kolkata'
      const timeZone = timeZoneMapping[eventTimeZone] || 'Asia/Kolkata';

      // Use the formatEventTime utility to convert to ISO 8601 format
      const localTime = formatEventTime(eventDate, eventTime, timeZone);

      // Check if localTime is valid
      if (!localTime) {
        console.error(`Invalid local time for event: ${eventName}`);
        return null; // Skip this event if localTime is invalid
      }

      return {
        title: eventName,
        start: localTime,
      };
    })
    .filter((event) => event !== null); // Remove invalid events

  return (
    <>

     {/* <pre>{JSON.stringify(calendarEvents, null, 2)}</pre>  */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // Add list plugin to the list of plugins
        initialView="dayGridMonth" // Set the default view to Monthly
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listYear', //listWeek,listMonth, // Add more views to the toolbar
        }}
        events={calendarEvents}
         height="600px"
        //  width="500px"
      />
    </>
  );
};

export default Calendarr;

// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list'; // Import the list plugin

// // Import timeZoneMapping and formatEventTime from utils.js
// import { timeZoneMapping, formatEventTime } from '../../js/utils'; // Update the path as per your project structure

// const Calendarr = ({ events }) => {
//   // Map events to FullCalendar format
//   const calendarEvents = events
//     .map((event) => {
//       const { eventDate, eventTime, eventTimeZone, eventName } = event.data;

//       // Get the mapped timezone or default to 'Asia/Kolkata'
//       const timeZone = timeZoneMapping[eventTimeZone] || 'Asia/Kolkata';

//       // Use the formatEventTime utility to convert to ISO 8601 format
//       const localTime = formatEventTime(eventDate, eventTime, timeZone);

//       // Check if localTime is valid
//       if (!localTime) {
//         console.error(`Invalid local time for event: ${eventName}`);
//         return null; // Skip this event if localTime is invalid
//       }

//       return {
//         title: eventName,
//         start: localTime,
//       };
//     })
//     .filter((event) => event !== null); // Remove invalid events

//   return (
//     <>
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // Add list plugin to the list of plugins
//         initialView="dayGridMonth" // Set the default view to Monthly
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek', // Add more views to the toolbar
//         }}
//         events={calendarEvents}
//       />
//     </>
//   );
// };

// export default Calendarr;



// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list'; // Import the list plugin

// import { timeZoneMapping, formatEventTime } from '../../js/utils'; // Adjust the import path as needed

// const Calendarr = ({ events }) => {
//   // Map events to FullCalendar format
//   const calendarEvents = events
//     .map((event) => {
//       const { pubDate, eventTime, eventTimeZone } = event.data;

//       // Extract date in YYYY-MM-DD format
//       const eventDate = new Date(pubDate).toISOString().split('T')[0];

//       // Get the mapped timezone or default to 'Asia/Kolkata'
//       const timeZone = timeZoneMapping[eventTimeZone] || 'Asia/Kolkata';

//       // Use the formatEventTime utility to convert to local time
//       const localTime = formatEventTime(eventDate, eventTime, timeZone);

//       // Check if localTime is a valid date string
//       if (!localTime) {
//         console.error(`Invalid local time for event: ${event.data.eventName}`);
//         return null; // Skip this event if localTime is invalid
//       }

//       return {
//         title: event.data.eventName,
//         start: localTime, // Use the ISO string directly
//       };
//     })
//     .filter((event) => event !== null); // Remove invalid events

//   return (
//     <>
//       <pre>{JSON.stringify(calendarEvents, null, 2)}</pre>
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // Add list plugin to the list of plugins
//         initialView="dayGridMonth" // Set the default view to Monthly
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek', // Add more views to the toolbar
//         }}
//         events={calendarEvents}
//       />
//     </>
//   );
// };

// export default Calendarr;




// import React from 'react';
// // import { formatEventTime } from '../../js/utils';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list'; // Import the list plugin

// // import eventsData from './eventss.json'; // Update with the correct path to your JSON file

// // const calendarEvents = [
// //   {
// //     title: 'Hardcoded Event',
// //     start: '2024-10-01T09:00:00', // Adjust the date and time as needed
// //   },
// // ];

// const Calendarr = ({ events }) => {
//   // Map events to FullCalendar format
//   const calendarEvents = events
//     .map((event) => {
//       const { eventDate, eventTime, eventTimeZone } = event.data;

//       // Get the mapped timezone or default to 'Asia/Kolkata'
//       const timeZone = timeZoneMapping[eventTimeZone] || 'Asia/Kolkata';

//       // Use the formatEventTime utility to convert to local time
//       const localTime = formatEventTime(eventDate, eventTime, timeZone);

//       // Check if localTime is a valid date string
//       if (!localTime) {
//         console.error(`Invalid local time for event: ${event.data.eventName}`);
//         return null; // Skip this event if localTime is invalid
//       }

//       return {
//         title: event.data.eventName,
//         start: localTime, // Use the ISO string directly
//       };
//     })
//     .filter((event) => event !== null); // Remove invalid events

    
//   return (
//     <>
//     {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin, listPlugin]} // Add list plugin to the list of plugins
//       initialView="dayGridMonth" // Set the default view to Monthly
//       headerToolbar={{
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek', // Add more views to the toolbar
//       }}
//       events={calendarEvents}
//     />
//     </>
//   );
// };

// export default Calendarr;
