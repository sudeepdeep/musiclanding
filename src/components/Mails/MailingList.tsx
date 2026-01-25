import React, { useState } from "react";

function MailingList() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      id="mail"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}
      {/* <div className="absolute inset-0">
        <div
          className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)`,
          }}
        />
      </div> */}

      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-8xl font-black text-white mb-6">
          STAY
          <br />
          <span
            className="text-transparent"
            style={
              {
                WebkitTextStroke: "3px white",
              } as React.CSSProperties
            }
          >
            CONNECTED
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Be the first to know about new releases, exclusive content, and tour
          announcements
        </p>

        {/* Email Signup Form */}
        <div className="bg-white/5  p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20  text-white placeholder-gray-400 text-lg focus:outline-none focus:border-white/40 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
              >
                Join the Mailing List
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Welcome to the Family!
              </h3>
              <p className="text-gray-300">
                You'll receive updates about DJO's latest music and tours.
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              By subscribing, you agree to receive emails from DJO. You can
              unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              50K+
            </div>
            <div className="text-gray-400 uppercase tracking-wider">
              Subscribers
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              Weekly
            </div>
            <div className="text-gray-400 uppercase tracking-wider">
              Updates
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              Exclusive
            </div>
            <div className="text-gray-400 uppercase tracking-wider">
              Content
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default MailingList;
