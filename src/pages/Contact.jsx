import { useState } from 'react';
import { Layout, Button } from '../components';
import { companyInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data for Netlify submission
      const form = e.target;
      const formData = new FormData(form);

      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.email && formData.message;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white bg-secondary-800">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-800/80"></div>
        <div className="container-responsive py-24 md:py-32 text-center relative z-10">
          <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            CONTACT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-secondary-200">
            We're here to help with all your chemical distribution needs. Reach out to our expert team for personalized solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} method="POST" data-netlify="true" name="contact" netlify-honeypot="bot-field" className="space-y-6">
                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your requirements or ask any questions..."
                  />
                </div>
                <input type="hidden" name="form-name" value="contact" />

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <div className="flex items-center">
                      <span className="material-icons text-green-600 mr-2">check_circle</span>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <div className="flex items-center">
                      <span className="material-icons text-red-600 mr-2">error</span>
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={!isFormValid || isSubmitting}
                    className={`${!isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="material-icons animate-spin mr-2">refresh</span>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Get in Touch with Us</h2>
            <p className="section-subtitle">
              Multiple ways to reach our team for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Location */}
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">location_on</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">Visit Our Office</h3>
              <p className="text-secondary-600 leading-relaxed">
                {companyInfo.contact.address}
              </p>
            </div>

            {/* Phone */}
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">phone</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">Call Us</h3>
              <div className="space-y-2">
                {companyInfo.contact.phones.map((phone, index) => (
                  <p key={index} className="text-secondary-600">
                    <a href={`tel:${phone}`} className="hover:text-primary-500 transition-colors duration-200">
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">email</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">Email Us</h3>
              <p className="text-secondary-600">
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-primary-500 transition-colors duration-200"
                >
                  {companyInfo.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
