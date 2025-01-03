import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Sign in with ZAPT</h1>
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 block"
          >
            ZAPT
          </a>
          <Auth />
          <p className="mt-4">
            <a href="/" className="text-blue-500 underline">
              Made on ZAPT
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen h-full">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}