"use client";

import "../../app/globals.css";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import Swal from "sweetalert2";
import { devURL } from "@/constants/endPoints";
import { useSearchParams } from "next/navigation";

const EmailVerificationContent = () => {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState("");
  const [token, setToken] = useState(null);
  const [isApiCalling, setIsApiCalling] = useState(false);

  let tokenQueried = searchParams.get("token");

  useEffect(() => {
    if (tokenQueried) {
      setToken(tokenQueried);
    }
  }, [tokenQueried]);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserData(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token]);

  const verifyEmail = async () => {
    try {
      setIsApiCalling(true);
      const response = await axios.get(`${devURL}/member/auth/verify-email?token=${token}`);
      setMessage(response.data.message);
      Swal.fire({ title: "Email Verified!", text: response.data.message, icon: "success", confirmButtonText: "OK" });
    } catch (error) {
      const errorMessage = error.response?.data.message || "Verification failed. Please try again.";
      setMessage(errorMessage);
      Swal.fire({ title: "Verification Failed", text: errorMessage, icon: "error", confirmButtonText: "Try Again" });
    } finally {
      setIsApiCalling(false);
    }
  };

  return (
    <div className="email-verification-container">
      <div className="email-verification-card">
        <div className="email-verification-header">
          <h1>DigiCare4u</h1>
          <p>Track and manage your devices effortlessly and securely</p>
        </div>

        <div className="email-verification-content">
          <h2>Welcome, {userData?.memberName || "User"}!</h2>
          <h3>You have been added by {userData?.parentUserName || "DigiCare4u"}.</h3>
          <p>
            {userData?.parentUserName} added you for {userData?.reason || "tracking and security purposes"}.
            Click below to verify your email and access your account.
          </p>
          <div className="center">
            <button className="email-verification-button" onClick={verifyEmail}>
              {isApiCalling ? "Submitting ....." : "Verify Your Email"}
            </button>
          </div>

          <p>Didn’t receive the email? <Link href="#">Resend verification email</Link></p>
        </div>

        <div className="email-verification-footer">
          <h3>Visit Our Website</h3>
          <img src="/images/webQR.png" alt="QR Code" className="qr-code" />
          <p>Scan this QR code or visit <Link href="https://www.digicare4u.com/">our website</Link></p>

          <div className="social-links">
            <Link href="https://www.facebook.com/DigiCare4u/"><img src="/images/facebook.png" alt="Facebook" /></Link>
            <Link href="https://www.instagram.com/digicare4u.pgt/"><img src="/images/insata.png" alt="Instagram" /></Link>
            <Link href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></Link>
            <Link href="https://x.com/digicare4uPGT"><img src="/images/twitterx.png" alt="Twitter" /></Link>
          </div>

          <p>&copy; 2025 DigiCare4u. All rights reserved.</p>
          <div className="app-links">
            <Link href="#"><img src="/images/Google_play_Store.png" alt="Google Play" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap in Suspense
const EmailVerification = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <EmailVerificationContent />
  </Suspense>
);

export default EmailVerification;
