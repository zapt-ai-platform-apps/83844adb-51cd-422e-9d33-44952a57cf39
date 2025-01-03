import React, { useState } from 'react';

const ServiceRequestForm = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) return;
    setLoading(true);
    try {
      const response = await fetch('/api/createServiceRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });
      if (!response.ok) {
        throw new Error('Failed to create service request');
      }
      setDescription('');
    } catch (error) {
      console.error('Error creating service request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-xl mb-4">Create a Service Request</h2>
      <textarea
        className="w-full border p-2 mb-4 box-border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the service you need..."
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default ServiceRequestForm;