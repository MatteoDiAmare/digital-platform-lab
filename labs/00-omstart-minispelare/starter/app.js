const playButton = document.querySelector("#play-button");
const statusMessage = document.querySelector("#status");
const eventOutput = document.querySelector("#event-output");

let playCount = 0;

function handlePlayClick() {
  playCount += 1;

  statusMessage.textContent = `Nu spelar låten. Klick nummer ${playCount}.`;

  const trackingEvent = {
    event: "play_clicked",
    track: "It Works on My Machine",
    playCount: playCount,
    occurredAt: new Date().toISOString(),
  };

  eventOutput.textContent = JSON.stringify(trackingEvent, null, 2);
  console.log("Tracking-event skapat", trackingEvent);
}

playButton.addEventListener("click", handlePlayClick);
