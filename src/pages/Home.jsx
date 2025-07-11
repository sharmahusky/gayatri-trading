import { Link } from "react-router-dom";
import { Layout, ProductCard, Button } from "../components";
import { products, companyInfo } from "../data";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url('${companyInfo.hero.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container-responsive py-24 md:py-36 text-center relative z-10">
          <div className="inline-block bg-white text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {companyInfo.hero.welcomeText}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {companyInfo.hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {companyInfo.hero.subtitle}
          </p>
          <Link to={"/about"}>
            <Button variant="secondary" size="large">
              Read More
            </Button>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive text-center">
          <h2 className="section-title">Our Key Products</h2>
          <p className="section-subtitle">
            Highlighting our flagship products trusted by industries worldwide.
          </p>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
          <div className="mt-12">
            <Link to="/products">
              <Button variant="primary" size="large">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">
              Three key differentiators that make us your ideal chemical
              distribution partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.differentiators.map((diff) => (
              <div key={diff.id} className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-primary-500 text-2xl">
                    {diff.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                  {diff.title}
                </h3>
                <ul className="text-secondary-600 text-sm space-y-2 text-left">
                  {diff.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
