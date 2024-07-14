// import React from 'react';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import styled from 'styled-components';
import CreateSchedule from './components/CreateSchedule'
import ScheduledMessages from './components/ScheduledMessages';
import MessageAnalytics from './components/MessageAnalytics';
import { AppContainer } from './style';


const LeftSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #00246b;
  color: #00246b;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #cadcfc;
  padding: 32px 0;
  margin: 0 auto;
`;

const App = () => {
  const [scheduledMessages, setScheduledMessages] = useState([]);

  const handleSaveSchedule = (newSchedule) => {
    setScheduledMessages([...scheduledMessages, newSchedule]);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = scheduledMessages.filter((_, i) => i !== index);
    setScheduledMessages(updatedMessages);
  };

  const handleUpdateInteraction = (index, status) => {
    const updatedMessages = scheduledMessages.map((msg, i) => {
      if (i === index) {
        return {
          ...msg,
          interactions: {
            opened: status === 'open',
            responded: status === 'closed',
            converted: status === 'converted',
          },
        };
      }
      return msg;
    });
    setScheduledMessages(updatedMessages);
  };

  return (
    <Container>
      <Title>WhatsApp Message Scheduler</Title>
      <AppContainer>
        <LeftSection>
          <ScheduledMessages
            scheduledMessages={scheduledMessages}
            onDeleteMessage={handleDeleteMessage}
            onUpdateInteraction={handleUpdateInteraction}
          />
        </LeftSection>
        <RightSection>
          <CreateSchedule onSaveSchedule={handleSaveSchedule} />
          <MessageAnalytics scheduledMessages={scheduledMessages} />
        </RightSection>
      </AppContainer>
    </Container>
  );
};

export default App;
