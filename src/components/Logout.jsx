import React from 'react';
import { supabase } from '../supabaseClient';

const Logout = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Logout
    </button>
  );
};

export default Logout;