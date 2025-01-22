const initialState = {
  specialties: ['Divorce Lawyer', 'Criminal Lawyer', 'Property Dispute Lawyer'],
  lawyers: [
    {
      id: 1,
      name: 'Priya Sharma',
      specialty: 'Divorce Lawyer',
      appointments: [
        { id: 101, time: '09:00 AM - 09:30 AM', isSlotAvailable: true },
        { id: 102, time: '10:00 AM - 10:30 AM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 1000
    },
    {
      id: 2,
      name: 'Rajiv Patel',
      specialty: 'Criminal Lawyer',
      appointments: [
        { id: 201, time: '05:00 PM - 05:30 PM', isSlotAvailable: true },
        { id: 202, time: '06:00 PM -  06:30 PM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 2000
    },
    {
      id: 3,
      name: 'Deepak Khanna',
      specialty: 'Property Dispute Lawyer',
      appointments: [
        { id: 301, time: '01:00 PM - 01:30 PM', isSlotAvailable: true },
        { id: 302, time: '03:00 PM - 03:30 PM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 1500
    },
     {
      id: 4,
      name: 'Aishwarya Desai',
      specialty: 'Divorce Lawyer',
      appointments: [
        { id: 401, time: '10:00 AM - 10:30 AM', isSlotAvailable: true },
        { id: 402, time: '11:00 AM - 11:30 AM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 1700
    },
    {
      id: 5,
      name: 'Arjun Mehta',
      specialty: 'Criminal Lawyer',
      appointments: [
        { id: 501, time: '02:00 PM - 02:30 PM', isSlotAvailable: true },
        { id: 502, time: '04:30 PM - 05:00 PM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 2200
    },
    {
      id: 6,
      name: 'Sneha Choudhary',
      specialty: 'Property Dispute Lawyer',
      appointments: [
        { id: 601, time: '11:00 AM - 11:30 AM', isSlotAvailable: true },
        { id: 602, time: '01:00 PM - 01:30 PM', isSlotAvailable: true },
      ],
      bookedAppointments: [],
      costPerAppoinment: 2000
    },
  ],
  selectedSpecialty: '',
  selectedLawyer: '',
  selectedTimeSlot: '',
  currentLawyer: null,
  error: null
};


const LawyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SPECIALTY':
      return { ...state, selectedSpecialty: action.payload, selectedLawyer: '', selectedTimeSlot: '' };

    case 'SELECT_LAWYER':
      return { ...state, selectedLawyer: parseInt(action.payload), selectedTimeSlot: '' };

    case 'SELECT_TIME_SLOT':
      return { ...state, selectedTimeSlot: action.payload };

    case 'FIND_LAWYER':

      const lawyerFound = state.lawyers.find(lawyer => {
        return lawyer.id === parseInt(action.payload)
      });
      console.log(lawyerFound);
      return { ...state, currentLawyer: lawyerFound }
    
    case 'RESET_SELECTIONS':
      return {
        ...state,
        selectedSpecialty: '',
        selectedLawyer: '',
        selectedTimeSlot: '',
        currentLawyer: null,
        error: null
      };


    case 'BOOK_APPOINTMENT':

      const { selectedLawyer, selectedTimeSlot } = state;
      const lawyerIndex = parseInt(state.lawyers.findIndex(lawyer => {
         return lawyer.id === selectedLawyer
      }));

      const isSlotAvailable = state.lawyers[lawyerIndex].appointments.some(
        (appointment) =>
          appointment.time === selectedTimeSlot && appointment.isSlotAvailable
      );
      
      if (isSlotAvailable) {
        const newAppointment = {
          appointmentId: new Date().valueOf(),
          appointmentTime: selectedTimeSlot,
        };

        const updatedLawyers = [...state.lawyers];
        const bookedAppointmentIndex = updatedLawyers[lawyerIndex].appointments.findIndex(
          (appointment) => appointment.time === selectedTimeSlot
        );
        updatedLawyers[lawyerIndex].appointments[bookedAppointmentIndex].isSlotAvailable = false;
    
        updatedLawyers[lawyerIndex].bookedAppointments.push(newAppointment);

        return {
          ...state,
          selectedLawyer: '', selectedTimeSlot: '', selectedSpecialty: '',
          lawyers: updatedLawyers,
        };
      } else {
        return { ...state, error: 'Appointment not available' };
      }

    default:
      return state;
  }
};


export default LawyerReducer