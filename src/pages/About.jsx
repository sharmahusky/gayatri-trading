import { Layout, Button } from '../components';
import { companyInfo, aboutUs, services, industries } from '../data';

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
            Leading Chemical Distributor Since {companyInfo.established}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-secondary-200">
            {aboutUs.experience} serving industries with quality chemicals and exceptional service
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {companyInfo.description} With {aboutUs.experience}, we have established ourselves as a trusted partner for businesses across various industries.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Our commitment to quality, safety, and customer satisfaction has enabled us to serve {aboutUs.clientsServed}, making us one of the most reliable chemical distributors in the region.
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

      {/* Mission & Vision Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="section-subtitle">
              Driving excellence in chemical distribution with a clear purpose and vision for the future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">flag</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed">
                {aboutUs.mission}
              </p>
            </div>
            
            {/* Vision */}
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-primary-500 text-2xl">visibility</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Vision</h3>
              <p className="text-secondary-600 leading-relaxed">
                {aboutUs.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aboutUs.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-secondary-800 text-sm">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive chemical distribution services tailored to meet your industrial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-primary-500 text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">{service.title}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Trusted by leading companies across diverse industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-secondary-50 hover:bg-primary-50 transition-colors duration-200 p-4 rounded-lg text-center">
                <p className="text-secondary-700 font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
            Join {aboutUs.clientsServed} who trust us for their chemical distribution needs. 
            Let's discuss how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="large">
              Contact Us Today
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-500">
              View Our Products
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
