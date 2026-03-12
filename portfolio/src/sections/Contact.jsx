import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Same endpoint admin panel reads from, so messages show in admin
      const API_URL = import.meta.env.VITE_API_URL || 'https://myportfolio-rtxa.onrender.com/api/messages';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Success
      setSuccess(data.message || 'Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess('');
      }, 5000);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-white dark:bg-[#1a1a2e] transition-colors duration-300 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-12 md:mb-8 text-gray-800 dark:text-white relative inline-block w-full after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-md">
          Get In Touch
        </h2>
        <div className="grid grid-cols-2 gap-16 mt-12 md:grid-cols-1 md:gap-12 md:mt-8">
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col gap-4">
              <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-[#667eea] block mb-2">Email:</strong> john.doe@example.com
              </div>
              <div className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-[#667eea] block mb-2">Location:</strong> San Francisco, CA
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-gray-800 dark:text-white text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border-2 border-gray-200 dark:border-[#2d3748] rounded-md text-base font-inherit transition-all duration-300 bg-white dark:bg-[#16213e] text-gray-800 dark:text-white focus:outline-none focus:border-[#667eea]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-gray-800 dark:text-white text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border-2 border-gray-200 dark:border-[#2d3748] rounded-md text-base font-inherit transition-all duration-300 bg-white dark:bg-[#16213e] text-gray-800 dark:text-white focus:outline-none focus:border-[#667eea]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-gray-800 dark:text-white text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border-2 border-gray-200 dark:border-[#2d3748] rounded-md text-base font-inherit transition-all duration-300 bg-white dark:bg-[#16213e] text-gray-800 dark:text-white focus:outline-none focus:border-[#667eea] resize-y min-h-[120px]"
              ></textarea>
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-600 rounded-md text-red-700 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-md text-green-700 dark:text-green-400 text-sm">
                {success}
              </div>
            )}

            <Button 
              text={loading ? 'Sending...' : 'Send Message'} 
              variant="primary" 
              type="submit"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
