// import React, { useState } from 'react';
// import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const FormContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const FormTitle = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-weight: bold;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
// `;

// const Checkbox = styled.input`
//   margin-right: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const CreateSchedule = ({ onSaveSchedule }) => {
//   const [triggerType, setTriggerType] = useState('');
//   const [event, setEvent] = useState('');
//   const [timing, setTiming] = useState(new Date());
//   const [message, setMessage] = useState('');
//   const [personalization, setPersonalization] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate interaction data
//     const mockInteractions = {
//       opened: Math.random() < 0.8, // 80% chance of being opened
//       responded: Math.random() < 0.5, // 50% chance of response if opened
//       converted: Math.random() < 0.3, // 30% chance of conversion if responded
//     };

//     const newSchedule = {
//       triggerType,
//       event,
//       timing,
//       message,
//       personalization,
//       interactions: mockInteractions,
//     };
//     onSaveSchedule(newSchedule);
//     setTriggerType('');
//     setEvent('');
//     setTiming(new Date());
//     setMessage('');
//     setPersonalization(false);
//   };

//   return (
//     <FormContainer>
//       <FormTitle>Create New Schedule</FormTitle>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>Trigger Type:</Label>
//           <Select
//             value={triggerType}
//             onChange={(e) => setTriggerType(e.target.value)}
//           >
//             <option value="">Select</option>
//             <option value="event-based">Event-Based</option>
//             <option value="time-based">Time-Based</option>
//           </Select>
//         </FormGroup>

//         <FormGroup>
//           <Label>Select Event:</Label>
//           <Select value={event} onChange={(e) => setEvent(e.target.value)}>
//             <option value="">Select</option>
//             <option value="order-placement">Order Placement</option>
//             <option value="post-purchase">Post-Purchase</option>
//             <option value="inactivity-follow-up">Inactivity Follow-Up</option>
//             <option value="periodic-reminder">Periodic Reminder</option>
//             <option value="win-back-campaign">Win-back Campaign</option>
//             <option value="special-offer">Special Offer</option>
//             <option value="new-product-launch">New Product Launch</option>
//             <option value="seasonal-greeting">Seasonal Greeting</option>
//           </Select>
//         </FormGroup>

//         <FormGroup>
//           <Label>Schedule Timing:</Label>
//           <DatePicker
//             selected={timing}
//             onChange={(date) => setTiming(date)}
//             showTimeSelect
//             dateFormat="Pp"
//             className="form-control"
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Message Template:</Label>
//           <Textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter your message here"
//           ></Textarea>
//         </FormGroup>

//         <CheckboxContainer>
//           <Checkbox
//             type="checkbox"
//             checked={personalization}
//             onChange={() => setPersonalization(!personalization)}
//           />
//           <Label>Use customer data (e.g., name, order details)</Label>
//         </CheckboxContainer>

//         <Button type="submit">Save</Button>
//       </form>
//     </FormContainer>
//   );
// };

// export default CreateSchedule;


import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const FormContainer = styled.div`
  background: #cadcfc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 700px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: -1px;
  outline-color: #00246b;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  outline: -1px;
  outline-color: #00246b;
  margin-right: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

`;

const Checkbox = styled.input`
  margin-right: 10px;
  height: 16px;
  width: 16px;
  margin-bottom:10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #00246b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #578bc2;
  }
`;

const CreateSchedule = ({ onSaveSchedule }) => {
  const [triggerType, setTriggerType] = useState('');
  const [event, setEvent] = useState('');
  const [timing, setTiming] = useState(new Date());
  const [message, setMessage] = useState('');
  const [personalization, setPersonalization] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      triggerType,
      event,
      timing,
      message,
      personalization,
      interactions: {
        opened: true,
        responded: false,
        converted: false,
      },
    };

    onSaveSchedule(newSchedule);
    setTriggerType('');
    setEvent('');
    setTiming(new Date());
    setMessage('');
    setPersonalization(false);
  };

  return (
    <FormContainer>
      <FormTitle>Create New Schedule</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Trigger Type:</Label>
          <Select
            value={triggerType}
            onChange={(e) => setTriggerType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="event-based">Event-Based</option>
            <option value="time-based">Time-Based</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Select Event:</Label>
          <Select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="">Select</option>
            <option value="order-placement">Order Placement</option>
            <option value="post-purchase">Post-Purchase</option>
            <option value="inactivity-follow-up">Inactivity Follow-Up</option>
            <option value="periodic-reminder">Periodic Reminder</option>
            <option value="win-back-campaign">Win-back Campaign</option>
            <option value="special-offer">Special Offer</option>
            <option value="new-product-launch">New Product Launch</option>
            <option value="seasonal-greeting">Seasonal Greeting</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Schedule Timing:</Label>
          <DatePicker
            selected={timing}
            onChange={(date) => setTiming(date)}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label>Message Template:</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
          ></Textarea>
        </FormGroup>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={personalization}
            onChange={() => setPersonalization(!personalization)}
          />
          <Label>Use customer data (e.g., name, order details)</Label>
        </CheckboxContainer>

        <Button type="submit">Save</Button>
      </form>
    </FormContainer>
  );
};

export default CreateSchedule;
