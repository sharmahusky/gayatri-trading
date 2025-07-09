import { useState, useMemo } from 'react';
import { Layout, ProductCard, Button } from '../components';
import { products, productCategories } from '../data';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing category
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <Layout>
      {/* Hero Section with Search */}
      <section className="relative text-white bg-secondary-800">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-800/80"></div>
        <div className="container-responsive py-24 md:py-32 text-center relative z-10">
          <div className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            OUR PRODUCTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Chemicals for Every Industry
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-secondary-200">
            Explore our comprehensive range of industrial chemicals, acids, solvents, and pigments
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons text-secondary-400">search</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products by name, description, or category..."
                className="w-full pl-12 pr-12 py-4 text-secondary-800 bg-white rounded-lg shadow-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-secondary-400 hover:text-secondary-600 transition-colors duration-200"
                >
                  <span className="material-icons">clear</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-responsive">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary-800 mb-4">Browse by Category</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Filter products by category to find exactly what you need for your industry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white shadow-card-hover'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-500 shadow-card'
              }`}
            >
              All Products ({products.length})
            </button>
            {productCategories.map((category) => {
              const categoryCount = products.filter(p => p.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white shadow-card-hover'
                      : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-500 shadow-card'
                  }`}
                >
                  {category.name} ({categoryCount})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          {/* Search Results Header */}
          <div className="mb-8">
            {searchQuery || selectedCategory !== 'all' ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-secondary-800">
                    {searchQuery ? 'Search Results' : `${productCategories.find(c => c.id === selectedCategory)?.name || 'Products'}`}
                  </h2>
                  <p className="text-secondary-600">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="medium"
                  onClick={clearSearch}
                  className="self-start sm:self-auto"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="section-title">All Products</h2>
                <p className="section-subtitle">
                  Discover our complete range of high-quality industrial chemicals and solutions
                </p>
              </div>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  learnMoreLink={`/products/${product.category}/${product.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-secondary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-secondary-400 text-4xl">search_off</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">No Products Found</h3>
              <p className="text-secondary-600 mb-6 max-w-md mx-auto">
                {searchQuery
                  ? `No products match your search for "${searchQuery}". Try different keywords or browse all products.`
                  : 'No products found in this category.'}
              </p>
              <Button variant="primary" onClick={clearSearch}>
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
            Can't find exactly what you're looking for? Our team can help you find the right chemical solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="large">
              Contact Our Experts
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-500">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
