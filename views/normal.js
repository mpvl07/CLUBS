async function updateEvents() {
  const now = new Date().getTime();

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    if (now >= new Date(event.time2).getTime()) {
      // Event is completed, move it to the completed events container
      document.getElementById("completed").innerHTML += `
        <div>
          <h3>${event.title}</h3>
          <p>Start time: ${new Date(event.time1).toISOString()}</p>
          <p>End time: ${new Date(event.time2).toISOString()}</p>
        </div>
      `;

      // Remove the event from the upcoming events container
      const eventElement = document.querySelector(`#upcoming div:nth-child(${i + 1})`);
      eventElement.parentNode.removeChild(eventElement);
    }
  }
}

// Call the updateEvents function every 10 seconds
setInterval(updateEvents, 10000);

