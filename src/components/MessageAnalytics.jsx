// import React from 'react';
// import styled from 'styled-components';

// const AnalyticsContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const AnalyticsItem = styled.p`
//   margin: 10px 0;
//   font-size: 16px;
// `;

// const MessageAnalytics = () => {
//   const analyticsData = {
//     openRates: 75,
//     responseRates: 40,
//     conversionRates: 25,
//   };

//   return (
//     <AnalyticsContainer>
//       <Title>Message Performance Analytics</Title>
//       <AnalyticsItem>
//         <strong>Open Rates:</strong> {analyticsData.openRates}%
//       </AnalyticsItem>
//       <AnalyticsItem>
//         <strong>Response Rates:</strong> {analyticsData.responseRates}%
//       </AnalyticsItem>
//       <AnalyticsItem>
//         <strong>Conversion Rates:</strong> {analyticsData.conversionRates}%
//       </AnalyticsItem>
//     </AnalyticsContainer>
//   );
// };

// export default MessageAnalytics;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const AnalyticsContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
//   color: #333;
// `;

// const AnalyticsItem = styled.p`
//   margin: 10px 0;
//   font-size: 16px;
// `;

// const MessageAnalytics = ({ scheduledMessages }) => {
//   const [analyticsData, setAnalyticsData] = useState({
//     openRates: 0,
//     responseRates: 0,
//     conversionRates: 0,
//   });
//   console.log(scheduledMessages)

//   useEffect(() => {
//     if (scheduledMessages.length > 0) {
//       const totalMessages = scheduledMessages.length;
//       const openedMessages = scheduledMessages.filter(msg => msg.interactions.opened).length;
//       const respondedMessages = scheduledMessages.filter(msg => msg.interactions.responded).length;
//       const convertedMessages = scheduledMessages.filter(msg => msg.interactions.converted).length;

//       const openRates = (openedMessages / totalMessages) * 100;
//       const responseRates = (respondedMessages / openedMessages) * 100;
//       const conversionRates = (convertedMessages / respondedMessages) * 100;

//       setAnalyticsData({
//         openRates: isNaN(openRates) ? 0 : openRates,
//         responseRates: isNaN(responseRates) ? 0 : responseRates,
//         conversionRates: isNaN(conversionRates) ? 0 : conversionRates,
//       });
//     } else {
//       setAnalyticsData({
//         openRates: 0,
//         responseRates: 0,
//         conversionRates: 0,
//       });
//     }
//   }, [scheduledMessages]);

//   return (
//     <AnalyticsContainer>
//       <Title>Message Performance Analytics</Title>
//       <AnalyticsItem><strong>Open Rates:</strong> {analyticsData.openRates.toFixed(2)}%</AnalyticsItem>
//       <AnalyticsItem><strong>Response Rates:</strong> {analyticsData.responseRates.toFixed(2)}%</AnalyticsItem>
//       <AnalyticsItem><strong>Conversion Rates:</strong> {analyticsData.conversionRates.toFixed(2)}%</AnalyticsItem>
//     </AnalyticsContainer>
//   );
// };

// export default MessageAnalytics;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const AnalyticsContainer = styled.div`
  background: #cadcfc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const AnalyticsItem = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700px;
`;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MessageAnalytics = ({ scheduledMessages }) => {
  const [analyticsData, setAnalyticsData] = useState({
    openRates: 0,
    responseRates: 0,
    conversionRates: 0,
  });
  const [chartData, setChartData] = useState([]);



  useEffect(() => {
    if (scheduledMessages.length > 0) {
      const totalMessages = scheduledMessages.length;
      const openedMessages = scheduledMessages.filter(msg => msg.interactions.opened).length;
      const respondedMessages = scheduledMessages.filter(msg => msg.interactions.responded).length;
      const convertedMessages = scheduledMessages.filter(msg => msg.interactions.converted).length;

      const openRates = (openedMessages / totalMessages) * 100;
      const responseRates =(respondedMessages / openedMessages) * 100;
      const conversionRates =(convertedMessages / respondedMessages) * 100;

      setAnalyticsData({
        openRates: isNaN(openRates) ? 0 : openRates,
        responseRates: isNaN(responseRates) ? 0 : responseRates,
        conversionRates: isNaN(conversionRates) ? 0 : conversionRates,
      });

      setChartData([
        { name: 'Opened', value: openedMessages },
        { name: 'Closed', value: totalMessages - openedMessages - convertedMessages },
        { name: 'Converted', value: convertedMessages },
      ]);

         console.log(scheduledMessages);
         console.log(
           totalMessages,
           openedMessages,
           respondedMessages,
           convertedMessages
         );
    } else {
      setAnalyticsData({
        openRates: 0,
        responseRates: 0,
        conversionRates: 0,
      });

      setChartData([]);
    }

   
  }, [scheduledMessages]);

  return (
    <AnalyticsContainer>
      <Title>Message Performance Analytics</Title>
      <AnalyticsItem>Open Rates: {analyticsData.openRates.toFixed(2)}%</AnalyticsItem>
      <AnalyticsItem>Response Rates: {analyticsData.responseRates.toFixed(2)}%</AnalyticsItem>
      <AnalyticsItem>Conversion Rates: {analyticsData.conversionRates.toFixed(2)}%</AnalyticsItem>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          innerRadius={0}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </AnalyticsContainer>
  );
};

export default MessageAnalytics;


