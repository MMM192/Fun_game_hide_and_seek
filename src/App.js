import logo from './logo.svg';
import './App.css';
import { Button, Modal } from 'antd';
import Horse from './view/Horse/index';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React, { useState,useEffect } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
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
      {/* <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1> */}
      <Horse />
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
