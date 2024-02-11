import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Tabs } from 'antd';
import Dropzone from 'react-dropzone';
import AuthenticationForm from './AuthenticationForm';
import SignupForm from './SingupForm'



const { Option } = Select;
const { TabPane } = Tabs;

const UserForm = () => {
  const [form] = Form.useForm();
  const [mediaFiles, setMediaFiles] = useState([]);
  const [activeTab, setActiveTab] = useState('1');

  const handleMediaDrop = (acceptedFiles) => {
    // Add the dropped files to the state
    setMediaFiles([...mediaFiles, ...acceptedFiles]);
  };

  const handleSubmit = (values) => {
    // Include mediaFiles in the form data before submitting the request
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('country', values.country);
    formData.append('subscription', values.subscription);
    mediaFiles.forEach((file, index) => {
      formData.append(`media${index}`, file);
    });

    // Perform form submission logic here, e.g., sending data to backend
    // Make sure to include formData in your request
    console.log('Form values with media:', formData);
  };

  const handleAuthenticationSubmit = (values) => {
    // Authentication submission logic
    console.log('Authentication form values:', values);
  };

  const handleSignupSubmit = (values) => {
    //signup submission logic 
    console.log('Signup form values:', values);
  };

  return (
    <div className='bg-slate-400 p-16 h-full'>
      <h1 className='text-center font-bold text-xl'>The Company Form</h1>
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Form" key="1">
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="country" label="Country" rules={[{ required: true, message: 'Please select your country' }]}>
              <Select placeholder="Select your country">
                <Option value="usa">USA</Option>
                <Option value="uk">UK</Option>
                <Option value="canada">Canada</Option>
              </Select>
            </Form.Item>
            <Form.Item name="subscription" valuePropName="checked">
              <Checkbox>Subscribe to newsletter</Checkbox>
            </Form.Item>
            <Form.Item label="Upload Media">
              <Dropzone onDrop={handleMediaDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px', marginTop: '10px', width:'25%' }} className='drag hover:bg-gray-500 hover:text-white cursor-pointer'>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop</p>
                  </div>
                )}
              </Dropzone>
            </Form.Item>
            {/* Display dropped images */}
            <div style={{ marginBottom: '20px' }}>
              <h3>Dropped Images</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {mediaFiles.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Dropped file ${index}`}
                    style={{ width: '100px', height: '100px', margin: '5px' }}
                  />
                ))}
              </div>
            </div>
            <Form.Item style={{ marginTop: '20px' }}>
              <Button className='bg-blue-500' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Login" key="2">
          <AuthenticationForm onFinish={handleAuthenticationSubmit} />
        </TabPane>
        <TabPane tab="Signup" key="3">
          <SignupForm onFinish={handleSignupSubmit} />
        </TabPane>
      </Tabs>
    </div>
    </div>
  );
};

export default UserForm;
