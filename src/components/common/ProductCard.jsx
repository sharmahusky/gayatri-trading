const ProductCard = ({
  image,
  title,
  description,
  learnMoreLink = "#",
  className = ""
}) => {
  return (
    <div className={`card ${className}`}>
      <img
        alt={title}
        className="h-32 w-full object-cover rounded-md mb-4"
        src={image}
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-secondary-800 mb-2">
        {title}
      </h3>
      <p className="text-secondary-600 mb-4">
        {description}
      </p>
      <a
        className="link-primary"
        href={learnMoreLink}
      >
        Learn More
      </a>
    </div>
  );
};

export default ProductCard;
