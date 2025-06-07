import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const PhoneAuth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ phone });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('OTP sent successfully!');
      setStep('otp');
    }
    setLoading(false);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms',
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Logged in successfully!');
      // redirect to dashboard or home page
      window.location.href = "/";
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login with Phone</h2>
      {step === 'phone' ? (
        <form onSubmit={handleSendOTP}>
          <input
            type="tel"
            placeholder="Enter phone (+91...)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}
      {message && <p className="mt-4 text-sm text-center text-red-600">{message}</p>}
    </div>
  );
};

export default PhoneAuth;
