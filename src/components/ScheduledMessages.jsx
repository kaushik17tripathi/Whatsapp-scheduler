// import React from 'react';
// import styled from 'styled-components';

// const MessagesContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const MessageItem = styled.li`
//   list-style: none;
//   padding: 10px;
//   border-bottom: 1px solid #ccc;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const ScheduledMessages = ({ scheduledMessages }) => {
//   return (
//     <MessagesContainer>
//       <Title>Scheduled Messages</Title>
//       <ul>
//         {scheduledMessages.map((msg, index) => (
//           <MessageItem key={index}>
//             <strong>Trigger:</strong> {msg.triggerType} <br />
//             <strong>Event:</strong> {msg.event} <br />
//             <strong>Timing:</strong> {msg.timing} <br />
//             <strong>Message:</strong> {msg.message}
//           </MessageItem>
//         ))}
//       </ul>
//     </MessagesContainer>
//   );
// };

// export default ScheduledMessages;

// import React from 'react';
// import styled from 'styled-components';

// const MessagesContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const MessageItem = styled.li`
//   list-style: none;
//   padding: 10px;
//   border-bottom: 1px solid #ccc;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const ScheduledMessages = ({ scheduledMessages }) => {
//   return (
//     <MessagesContainer>
//       <Title>Scheduled Messages</Title>
//       <ul>
//         {scheduledMessages.map((msg, index) => (
//           <MessageItem key={index}>
//             <strong>Trigger:</strong> {msg.triggerType} <br />
//             <strong>Event:</strong> {msg.event} <br />
//             <strong>Timing:</strong> {msg.timing.toLocaleString()} <br />
//             <strong>Message:</strong> {msg.message}
//           </MessageItem>
//         ))}
//       </ul>
//     </MessagesContainer>
//   );
// };

// export default ScheduledMessages;

// import React from 'react';
// import styled from 'styled-components';
// import { FaTimes } from 'react-icons/fa';

// const MessagesContainer = styled.div`
//   background: #cadcfc;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
// `;

// const MessageItem = styled.div`
//   position: relative;
//   background: ${({ interaction }) =>
//     interaction.converted
//       ? '#d4edda'
//       : interaction.responded
//       ? '#f8d7da'
//       : '#d1ecf1'};
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 10px;
// `;

// const DeleteIcon = styled(FaTimes)`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
//   color: #333;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin: 10px 5px 0 0;
//   background-color: ${({ type }) =>
//     type === 'close' ? '#d3513d' : type === 'convert' ? '#0fc038' : '#d1ecf1'};
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${({ type }) =>
//       type === 'close'
//         ? '#511209'
//         : type === 'convert'
//         ? '#0b6520'
//         : '#d1ecf1'};
//   }
// `;

// const ScheduledMessages = ({
//   scheduledMessages,
//   onDeleteMessage,
//   onUpdateInteraction,
// }) => {
//   console.log(scheduledMessages);

//   return (
//     <MessagesContainer>
//       <Title>Messages as of {new Date().toLocaleDateString('en-GB')}</Title>
//       {scheduledMessages.map((msg, index) => (
//         <MessageItem key={index} interaction={msg.interactions}>
//           <DeleteIcon onClick={() => onDeleteMessage(index)} />
//           <p>
//             <strong>Trigger:</strong> {msg.triggerType}
//           </p>
//           <p>
//             <strong>Event:</strong> {msg.event}
//           </p>
//           <p>
//             <strong>Timing:</strong> {msg.timing.toLocaleString()}
//           </p>
//           <p>
//             <strong>Message:</strong> {msg.message}
//           </p>
//           <div>
//             <Button
//               type="close"
//               // disabled={msg.interactions === 'closed' || 'converted'}
//               onClick={() => onUpdateInteraction(index, 'closed')}
//             >
//               Close
//             </Button>
//             <Button
//               type="convert"
//               // disabled={msg.interactions === 'closed' || 'converted'}
//               onClick={() => onUpdateInteraction(index, 'converted')}
//             >
//               Convert
//             </Button>
//           </div>
//         </MessageItem>
//       ))}
//     </MessagesContainer>
//   );
// };

// export default ScheduledMessages;

import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const MessagesContainer = styled.div`
  background: #cadcfc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const MessageItem = styled.div`
  position: relative;
  background: ${({ interaction }) =>
    interaction.converted
      ? '#d4edda'
      : interaction.responded
      ? '#f8d7da'
      : '#d1ecf1'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const DeleteIcon = styled(MdCancel)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #333;
  height: 32px;
  width: 32px;
  color: #00246b;
`;


const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 5px 0 0;
  background-color: ${({ type }) =>
    type === 'close' ? '#d3513d' : type === 'convert' ? '#0fc038' : '#d1ecf1'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ type }) =>
      type === 'close'
        ? '#511209'
        : type === 'convert'
        ? '#0b6520'
        : '#d1ecf1'};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #00246b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ScheduledMessages = ({
  scheduledMessages,
  onDeleteMessage,
  onUpdateInteraction,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 4;

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = scheduledMessages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(scheduledMessages.length / messagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <MessagesContainer>
      <Title>
        Messages as of {new Date().toLocaleDateString('en-GB')}
      </Title>
      {currentMessages.map((msg, index) => (
        <MessageItem key={index} interaction={msg.interactions}>
          <DeleteIcon onClick={() => onDeleteMessage(index)} />
          <p>
            <strong>Trigger:</strong> {msg.triggerType}
          </p>
          <p>
            <strong>Event:</strong> {msg.event}
          </p>
          <p>
            <strong>Timing:</strong> {msg.timing.toLocaleString()}
          </p>
          <p>
            <strong>Message:</strong> {msg.message}
          </p>
          <div>
            <Button
              type="close"
              onClick={() => onUpdateInteraction(index, 'closed')}
            >
              Close
            </Button>
            <Button
              type="convert"
              onClick={() => onUpdateInteraction(index, 'converted')}
            >
              Convert
            </Button>
          </div>
        </MessageItem>
      ))}
      {scheduledMessages.length > 0 && (
        <PaginationContainer>
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(scheduledMessages.length / messagesPerPage)
            }
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      )}
    </MessagesContainer>
  );
};

export default ScheduledMessages;
