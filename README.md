# Scheduled WhatsApp Messages Dashboard

This project is a React-based dashboard that allows sellers to schedule WhatsApp messages. The dashboard provides functionalities to create, view, and manage scheduled messages, with interactivity to update the message status and view analytics. It includes pagination and a pie chart to visualize message performance rates.

## Features

- **Schedule Messages:** Sellers can create scheduled messages with a specific trigger, event, timing, and custom message.
- **Manage Messages:** View a list of scheduled messages with options to mark them as "Closed" or "Converted".
- **Delete Messages:** Remove scheduled messages with a delete icon.
- **Message Analytics:** View message performance analytics, including open rates, response rates, and conversion rates.
- **Pie Chart Visualization:** Represent message status (Opened, Closed, Converted) in a pie chart.
- **Pagination:** Display a limited number of messages per page with navigation buttons.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/scheduled-whatsapp-messages-dashboard.git
cd scheduled-whatsapp-messages-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Usage

### Create Schedule Form

On the top right of the dashboard, you will find the "Create Schedule Form". Fill in the necessary details to schedule a message:

- **Trigger Type:** The event that triggers the message.
- **Event:** Description of the event.
- **Timing:** Date and time when the message should be sent.
- **Message:** The content of the WhatsApp message.

### Scheduled Messages

On the left side of the dashboard, you can view a list of scheduled messages. Each message card displays the details of the scheduled message and has options to:

- **Close:** Mark the message as "Closed".
- **Convert:** Mark the message as "Converted".
- **Delete:** Remove the message from the schedule.

Messages have different background colors based on their status:
- **Blue:** Opened
- **Grey:** Closed
- **Green:** Converted

Pagination controls are available at the bottom to navigate through the messages.

### Message Analytics

At the bottom right of the dashboard, you will find the "Message Performance Analytics" section, which includes:

- **Open Rates**
- **Response Rates**
- **Conversion Rates**

A pie chart visualizes the distribution of message statuses (Opened, Closed, Converted).

## File Structure

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── CreateScheduleForm.js
│   │   ├── MessageAnalytics.js
│   │   ├── ScheduledMessages.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Dependencies

- React
- Styled-Components
- React-Datepicker
- Recharts
- React-Icons

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by various UI/UX designs for scheduling and managing messages.
- Uses the `recharts` library for chart visualizations.
- Uses `styled-components` for styling.

---

Feel free to contribute, report issues, or suggest improvements. Happy coding!
