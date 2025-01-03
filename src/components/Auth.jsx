import React from 'react';
import { supabase } from '../supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const AuthComponent = () => {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google', 'facebook', 'apple']}
      localization={{
        variables: {
          sign_in: {
            email_label: 'Email',
            password_label: 'Password',
            button_label: 'Sign in',
            loading_button_label: 'Signing in...',
          },
        },
      }}
    />
  );
};

export default AuthComponent;