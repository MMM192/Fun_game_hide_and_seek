import './App.css';
import { Modal } from 'antd';
import Horse from './view/Horse/index';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API calls
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountDisplay from './view/count/CountDisplay';

function App() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Function to get browser and user details
  const getUserInfo = () => {
    const browserInfo = `${navigator.userAgent}`;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;
    const pageAccessTime = new Date().toISOString();

    return { browserInfo, screenResolution, timezone, referrer, pageAccessTime };
  };

  // Function to send count update with user information
  const sendVisitCount = async () => {
    const userInfo = getUserInfo();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/count`, { count: 1, ...userInfo });
      console.log('Visit count and user data updated');
    } catch (error) {
      console.error('Failed to update visit count:', error);
    }
  };

  useEffect(() => {
    // Trigger POST request when the component loads
    sendVisitCount();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      window.location.reload();
    }, 0);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <Router>
      <Routes>
        <Route path="/" element={<Horse />} />
        <Route path="/kandaCount" element={<CountDisplay />} />
 
      </Routes>
    </Router>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{
          insetInlineEnd: 40,
        }}
        onClick={showModal}
      />

      <Modal
        title="Find Me"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>
          👋 Hi there! Welcome to this fun little web game! 🎉  
          <br />
          👉 <strong>Rules:</strong>  
          🔼 Press the <strong>arrow keys in key-board</strong> (⬆️⬇️⬅️➡️) to move the emoji in the corresponding direction.  
          🔄 Press the <strong>'S' key</strong> to switch between different emojis! 🎭  
        </p>
        <p>
          🕵️‍♂️ Keep exploring and see if you can find me on this page! Good luck! 🍀  
        </p>
      </Modal>
    </div>
  );
}

export default App;
