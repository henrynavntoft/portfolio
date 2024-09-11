"use client"

import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/sendEmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      setStatus('Error sending email');
    }
  };

  return (
   <>
   <form className="mb-4 flex flex-col gap-4" onSubmit={handleSubmit}>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        name="name" 
        label="Name" 
        value={formData.name} 
        onChange={handleChange}
      />
      <Input 
        type="email" 
        name="email" 
        label="Email" 
        value={formData.email} 
        onChange={handleChange}
      />
      </div>
      <Input
        type="textarea"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit" color="primary">Send</Button>
      {status && <p>{status}</p>}
    </form>
   </>
  );
}
