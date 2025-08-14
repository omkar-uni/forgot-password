import { useState } from "react";
import "./app.css";

export default function App() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [btnMove, setBtnMove] = useState(0); // 0=center, 1=left, 2=right

  const isValid = newPwd && confirmPwd && newPwd === confirmPwd;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    alert("Password reset submitted.");
  };

  const handleHover = () => {
    if (!isValid) {
      // Alternate button positions to "escape"
      setBtnMove((prev) => (prev === 1 ? 2 : 1));
    }
  };

  return (
    <div className="page">
      <div className="card">
        <img className="logo" src="../public/logo.jpg" alt="H4U" />
        <div className="brand">Hospital4U</div>
        <h1 className="title">Reset Your Password</h1>

        <form onSubmit={onSubmit} className="form">
          <div className="field">
            <input
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              className="input"
            />
            <button
              type="button"
              className="eye"
              onClick={() => setShowNew((v) => !v)}
              aria-label="Toggle password visibility"
            >
              {showNew ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              className="input"
            />
            <button
              type="button"
              className="eye"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label="Toggle password visibility"
            >
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>

          <div className={`cta-wrapper move-${btnMove}`} onMouseEnter={handleHover}>
            <button
              type="submit"
              className="cta"
              disabled={!isValid}
            >
              Reset Password
            </button>
          </div>
        </form>

        <div className="ribbon">Your Health, Your Secure Access</div>
      </div>
    </div>
  );
}
