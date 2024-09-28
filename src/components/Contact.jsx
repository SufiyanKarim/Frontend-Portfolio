import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State for the notification
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set up your EmailJS template parameters
    const templateParams = {
      user_name: username,
      user_email: email,
      user_message: message,
    };

    // Use EmailJS to send the email
    emailjs.send('service_3jl8uii', 'template_5wtx6oj', templateParams, 'CO-1vPRnI7rMGjisz')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        
        // Show success notification
        setNotification({ message: 'Message sent successfully!', type: 'success', visible: true });

        // Hide notification after 5 seconds
        setTimeout(() => {
          setNotification({ message: '', type: '', visible: false });
        }, 5000);

        // Reset the form fields
        setUsername('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('There was an error sending the email:', err);

        // Show failure notification
        setNotification({ message: 'Failed to send message. Try again!', type: 'error', visible: true });

        // Hide notification after 5 seconds
        setTimeout(() => {
          setNotification({ message: '', type: '', visible: false });
        }, 5000);
      });
  };

  return (
    <section className="flex flex-col justify-between" id="contact">
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">Let's Design Together</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-8" data-aos="fade-up" data-aos-delay="300">
            Do contact me if you need my opinion about web development. I’ll be happy to help! Just type your name, provide your email and some description, and send it now.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              name='user_name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-grow px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              data-aos="fade-up" // AOS effect for input
              data-aos-delay="400" // Delay for staggered animation
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              data-aos="fade-up" // AOS effect for input
              data-aos-delay="500" // Delay for staggered animation
            />
            <textarea
              placeholder="Enter Your Message"
              value={message}
              name="user_message"
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
              data-aos="fade-up" // AOS effect for textarea
              data-aos-delay="600" // Delay for staggered animation
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
              data-aos="fade-up" // AOS effect for button
              data-aos-delay="700" // Delay for staggered animation
            >
              Contact Me
            </button>
          </form>
        </div>
      </main>

      {/* Notification Popup */}
      {notification.visible && (
        <div
          className={`fixed top-20 right-0 p-2 rounded-md shadow-lg transition-all duration-300 ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          <p>{notification.message}</p>
          <div
            className={`h-1 mt-2 ${
              notification.type === 'success' ? 'bg-green-300' : 'bg-red-300'
            }`}
            style={{ transition: 'width 5s', width: '100%' }}
          />
        </div>
      )}
    </section>
  );
};

export default Contact;
