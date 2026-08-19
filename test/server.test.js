const { test } = require("node:test");
const assert = require("node:assert/strict");
const { createServer, validateEventPayload } = require("../server");

test("accepts a valid event payload", () => {
  const errors = validateEventPayload({
    event: "booking_submitted",
    eventId: "event-123",
    occurredAt: "2026-09-15T09:00:00.000Z",
  });

  assert.deepEqual(errors, []);
});

test("reports missing and invalid event fields", () => {
  const errors = validateEventPayload({
    event: "",
    eventId: null,
    occurredAt: "not-a-date",
  });

  assert.deepEqual(errors, [
    "event must be a non-empty string.",
    "eventId must be a non-empty string.",
    "occurredAt must be a valid date-time string.",
  ]);
});

test("serves the application and accepts an event", async (context) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  context.after(() => new Promise((resolve) => server.close(resolve)));

  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  const pageResponse = await fetch(baseUrl);
  assert.equal(pageResponse.status, 200);
  assert.match(await pageResponse.text(), /Trace one action through the platform/);

  const eventResponse = await fetch(`${baseUrl}/api/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: "booking_submitted",
      eventId: "event-456",
      occurredAt: "2026-09-15T09:10:00.000Z",
    }),
  });

  assert.equal(eventResponse.status, 202);
  const receipt = await eventResponse.json();
  assert.equal(receipt.accepted, true);
  assert.equal(receipt.eventId, "event-456");
  assert.equal(typeof receipt.receiptId, "string");
});
