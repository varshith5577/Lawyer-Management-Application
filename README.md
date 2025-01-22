# Lawyer Appointment Management Application

This project is a **Lawyer Appointment Management Application** designed for small law firms with 10 or fewer lawyers. The application allows users to book appointments with lawyers based on their specialties, availability, and charges.

## Features

### 1. Appointment Booking
- Users can book a 30-minute appointment with a lawyer.
- Availability is dynamically checked.
- Displays a message when appointments exceed availability: `"Appointment not available"`.

### 2. Appointment History
- View the complete appointment history for each lawyer.

### 3. Lawyer Management
- Lawyers have multiple specialties, e.g., divorce, criminal, property disputes.
- Lawyers can define availability and charges for appointments.

---

## Tech Stack

### Frontend
- **React.js**: Core framework for building the user interface.
- **Redux**: For state management.
- **UI Library**: Material-UI (MUI) or Ant Design for components.
- **Redux Middleware**: (Optional) Redux Thunk or Saga.

### Backend
- **Mock Data**: Used for development.
- (Optional) JSON Server for a mock API.

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/varshith5577/Lawyer-Management-Application.git>
   cd lawyer-appointment-management-application
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Run JSON Server** (if used):
   ```bash
   npx json-server --watch db.json --port 5000
   ```

---

## Usage

1. **Seed Data**:
   - Add mock data for:
     - Lawyers
     - Specialties
     - Availability
     - Charges per appointment

2. **Book Appointment**:
   - Select a lawyer and a time slot to book an appointment.

3. **View History**:
   - Navigate to view appointment and select the lawyer to see booking slot of the particular lawyer.

---

## Demo

Add screenshots or GIFs showing:
- Appointment booking
- Error when availability exceeds
- Viewing appointment history

---

## Improvements
- Add a backend API for persistent storage.
- Implement user authentication.
- Enhance the UI/UX with animations and responsiveness.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Material-UI](https://mui.com/)
