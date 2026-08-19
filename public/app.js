const bookingButton = document.querySelector("#booking-button");
const eventLog = document.querySelector("#event-log");
const statusMessage = document.querySelector("#status");

function showLog(label, value) {
  eventLog.textContent = `${label}\n${JSON.stringify(value, null, 2)}`;
}

function createBookingEvent() {
  return {
    event: "booking_submitted",
    eventId: crypto.randomUUID(),
    occurredAt: new Date().toISOString(),
    context: {
      page: "lab-home",
      offeringId: "platform-intro",
    },
  };
}

async function sendBookingEvent() {
  const event = createBookingEvent();
  bookingButton.disabled = true;
  statusMessage.textContent = "Sending event...";
  showLog("Request body", event);

  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    const responseBody = await response.json();
    statusMessage.textContent = `Server response: ${response.status} ${response.statusText}`;
    showLog("Response body", responseBody);
  } catch (error) {
    statusMessage.textContent = "The browser did not receive a response.";
    showLog("Client error", { message: error.message });
  } finally {
    bookingButton.disabled = false;
  }
}

bookingButton.addEventListener("click", sendBookingEvent);
