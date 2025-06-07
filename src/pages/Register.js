import { supabase } from './supabaseClient';
import { useState } from 'react';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [session, setSession] = useState(null);

  const sendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      phone,
    });

    if (error) {
      alert('Error sending OTP: ' + error.message);
    } else {
      alert('OTP sent!');
    }
  };

  const verifyOtp = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms',
    });

    if (error) {
      alert('Verification failed: ' + error.message);
    } else {
      alert('Phone verified!');
      setSession(data.session);
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <input
        type="tel"
        placeholder="Enter phone number (+91...)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
}
