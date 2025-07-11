import { Link } from 'react-router-dom';
import { Layout, Button } from '../components';
import { companyInfo, aboutUs, industriesDetailed } from '../data';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white bg-secondary-800">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-800/80"></div>
        <div className="container-responsive py-24 md:py-32 text-center relative z-10">
          <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            ABOUT {companyInfo.name.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {aboutUs.tagline}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-secondary-200">
            {aboutUs.description}
          </p>
        </div>
      </section>

      {/* Our Chemical Legacy Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Chemical Legacy</h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {aboutUs.legacy.location}, {aboutUs.legacy.expertise}. Our {companyInfo.certification} {aboutUs.legacy.certification}.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                With {aboutUs.experience}, we have established ourselves as a trusted partner for businesses across various industries, serving {aboutUs.clientsServed}.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <span className="material-icons text-primary-500">verified</span>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">{companyInfo.certification}</h4>
                  <p className="text-secondary-600 text-sm">Quality Management System</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chemical laboratory"
                className="rounded-lg shadow-card w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-lg shadow-card-hover">
                <div className="text-2xl font-bold">{companyInfo.established}</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to You Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Commitment to You</h2>
            <p className="section-subtitle">
              We go beyond transactions to build lasting partnerships with our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutUs.commitments.map((commitment, index) => (
              <div key={index} className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-primary-500 text-2xl">{commitment.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">{commitment.title}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Specialized chemical solutions for diverse industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesDetailed.map((industry, index) => (
              <div key={index} className="card text-center hover:shadow-card-hover transition-shadow duration-300">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-primary-500 text-2xl">{industry.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">{industry.name}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Global Buyers Choose Us</h2>
            <p className="section-subtitle">
              Hear from our satisfied clients around the world
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">format_quote</span>
              </div>
              <blockquote className="text-lg text-secondary-700 mb-6 leading-relaxed italic">
                "{aboutUs.testimonial.quote}"
              </blockquote>
              <div className="border-t border-secondary-200 pt-6">
                <p className="font-semibold text-secondary-800">{aboutUs.testimonial.author}</p>
                <p className="text-secondary-600 text-sm">{aboutUs.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Temporarily Hidden */}
      {/*
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
            Join {aboutUs.clientsServed} who trust us for their chemical distribution needs.
            Let's discuss how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="large">
                Contact Us Today
            </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-500">
                View Our Products
            </Button>
            </Link>
          </div>
        </div>
      </section>
      */}
    </Layout>
  );
};

export default About;
