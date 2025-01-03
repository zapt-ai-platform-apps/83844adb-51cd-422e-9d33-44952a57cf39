import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/getServiceRequests');
        if (!response.ok) {
          throw new Error('Failed to fetch service requests');
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl mb-4">Service Requests</h2>
      {requests.map((request) => (
        <div className="border p-4 mb-4" key={request.id}>
          <p>{request.description}</p>
          <Link
            to={`/request/${request.id}`}
            className="text-blue-500 underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceRequestsList;