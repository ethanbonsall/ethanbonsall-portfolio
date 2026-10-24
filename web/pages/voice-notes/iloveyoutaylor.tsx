"use client";

import Head from "next/head";
import { useState } from "react";

export default function MessagePage() {
  const [date, setDate] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    // Client-side gate only; this is not secure password protection.
    if (date === "2024-04-05") {
      setUnlocked(true);
      setError("");
    } else {
      setError("That date is not correct. Please try again.");
    }
  }

  return (
    <>
      <Head>
        <title>A Message</title>
      </Head>

      <main>
        <section className="card">
          {!unlocked ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="anniversary">
                Please enter our anniversary date
              </label>

              <input
                id="anniversary"
                type="date"
                required
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setError("");
                }}
                aria-describedby="date-error"
                aria-invalid={Boolean(error)}
              />

              <button type="submit">Continue</button>

              <p id="date-error" className="error" aria-live="polite">
                {error}
              </p>
            </form>
          ) : (
            <div className="message">
              <p>
                Hey, I get the sense that you don’t want to stay in contact, and
                I’ll respect that. I was hoping we could talk one more time, but
                I understand if that’s not what you want. I’m sorry for how
                things ended and for what I did. I wish you well, and I hope
                you’re happy and your new boyfriend is perfect for you. If you
                ever want to talk, you can reach out. There’s no pressure to
                respond.
              </p>
              <p className="signature">-Ethan</p>
            </div>
          )}
        </section>
      </main>

      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;
          background: #f5f1ed;
          color: #2f2a27;
          font-family: Georgia, "Times New Roman", serif;
        }

        .card {
          width: 100%;
          max-width: 620px;
          padding: 32px;
          box-sizing: border-box;
          border-radius: 14px;
          background: white;
          box-shadow: 0 10px 30px rgba(60, 45, 35, 0.1);
        }

        form {
          text-align: center;
        }

        label {
          display: block;
          margin-bottom: 24px;
          font-size: 26px;
          line-height: 1.4;
        }

        input {
          width: 100%;
          max-width: 280px;
          box-sizing: border-box;
          padding: 12px;
          border: 1px solid #c9beb6;
          border-radius: 7px;
          background: white;
          color: #2f2a27;
          font: inherit;
          font-size: 16px;
        }

        button {
          display: block;
          margin: 18px auto 0;
          padding: 12px 24px;
          border: none;
          border-radius: 7px;
          background: #76594b;
          color: white;
          font: inherit;
          cursor: pointer;
        }

        button:hover {
          background: #60473b;
        }

        .error {
          min-height: 22px;
          margin-bottom: 0;
          color: #a33d3d;
          font-size: 15px;
        }

        .message {
          font-size: 19px;
          line-height: 1.8;
          overflow-wrap: break-word;
        }

        .message p {
          margin: 0;
        }

        .message .signature {
          margin-top: 24px;
          text-align: right;
        }
      `}</style>
    </>
  );
}
