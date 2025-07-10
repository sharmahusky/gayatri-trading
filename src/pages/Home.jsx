import { Link } from 'react-router-dom';
import { Layout, ProductCard, Button } from '../components';
import { products, companyInfo } from '../data';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url('${companyInfo.hero.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
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
            <Button variant="primary" size="large">
              Explore All Products
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
