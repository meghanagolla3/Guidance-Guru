import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    otp: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate and send OTP
  const sendOtp = () => {
    if (!formData.phone.match(/^\d{10}$/)) {
      setErrors({ phone: "Enter a valid 10-digit phone number" });
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    setGeneratedOtp(otp.toString());
    setOtpSent(true);
    console.log("Generated OTP:", otp); // In real app, send OTP via SMS API
    alert("OTP sent to your phone number!");
  };

  // Validate OTP
  const verifyOtp = () => {
    if (formData.otp !== generatedOtp) {
      setErrors({ otp: "Invalid OTP. Try again!" });
      return false;
    }
    return true;
  };

  // Form validation
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!otpSent || !verifyOtp()) newErrors.otp = "OTP verification required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Select a gender";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.country) newErrors.country = "Select a country";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
      console.log("User Data:", formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        otp: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        country: "",
      });
      setOtpSent(false);
      setGeneratedOtp("");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block font-semibold">Phone Number</label>
          <div className="flex">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your phone number"
              disabled={otpSent}
            />
            <button
              type="button"
              onClick={sendOtp}
              className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              disabled={otpSent}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* OTP */}
        {otpSent && (
          <div className="mb-4">
            <label className="block font-semibold">Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter the OTP"
            />
            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
          </div>
        )}

        {/* Password */}
        <div className="mb-4">
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter a password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
