import React, { useEffect, useLayoutEffect, useState } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar, theme } from 'antd';
dayjs.extend(dayLocaleData);


const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function Calender() {

const [currentWidth , setCurrentWidth] = useState(window.innerWidth);

    const { token } = theme.useToken();
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const wrapperStyle = {
    width: currentWidth <= 600 ? "100%" : 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const headerRender = () => null;

  const dayHeaderRender = (value) => {
    return (
      <div className="custom-header">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener('resize', ()=> setCurrentWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', ()=> setCurrentWidth(window.innerWidth));
    };
  }, []);
  

  return (
    <div style={wrapperStyle}>
      <Calendar
       mode="month"
        fullscreen={false}
        onPanelChange={onPanelChange}
        headerRender={() => dayHeaderRender()}
  
      />
    </div>
  );
}

export default Calender