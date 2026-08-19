# Lab 01: Data flow

## Purpose

Follow one user action from the browser to the server and back. The task is to identify what can be observed, what can be inferred, and what remains unknown.

## Before you start

1. Open the application in Chrome or Edge.
2. Open the browser developer tools.
3. Select the **Network** panel.
4. Clear the current network log.

## Task

1. Reload the page and note which files the browser requests.
2. Select **Send booking event**.
3. Find the request to "/api/events" in the Network panel.
4. Inspect the request method, request body, status code, and response body.
5. Compare the request and response with the event log shown on the page.

## Discuss

- Which action started the flow?
- Which parts ran in the browser?
- What was sent to the server?
- What did the server confirm?
- Does the response prove that a booking was stored permanently?
- Which conclusions are observations, and which are interpretations?

## Expected result

The browser sends a POST request to "/api/events". The server returns status 202 and a JSON receipt containing the original event ID, a new receipt ID, and the time of receipt.
