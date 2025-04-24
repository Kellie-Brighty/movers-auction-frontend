import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Standard Move",
      description: "Smooth & cost-effective moving service for everyday needs",
      icon: "🏠",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      path: "/services/standard",
    },
    {
      id: 2,
      title: "Luxury Move",
      description: "Full-service premium moving experience with extra care",
      icon: "💎",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      path: "/services/luxury",
    },
    {
      id: 3,
      title: "Long-distance & Express",
      description: "Fast and reliable long-distance moving solutions",
      icon: "🚚",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      path: "/services/long-distance",
    },
    {
      id: 4,
      title: "Art & Antiques",
      description: "Specialized handling for your valuable and delicate items",
      icon: "🖼️",
      color: "bg-red-50",
      iconBg: "bg-red-100",
      path: "/services/special-items",
    },
    {
      id: 5,
      title: "Pet Transportation",
      description: "Safe and stress-free relocation for your furry friends",
      icon: "🐾",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      path: "/services/pet-transport",
    },
    {
      id: 6,
      title: "Corporate & Office",
      description: "Efficient business moving services with minimal disruption",
      icon: "🏢",
      color: "bg-gray-50",
      iconBg: "bg-gray-200",
      path: "/services/corporate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">What Can You Book With Us?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From standard moves to specialized services, we've got all your
            moving needs covered
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`card overflow-hidden hover:shadow-hover transition-all duration-300 group ${service.color}`}
              variants={itemVariants}
            >
              <div className="p-8">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <Link
                  to={service.path}
                  className="flex items-center font-medium text-primary group-hover:text-primary-700 transition-colors"
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/services" className="btn btn-primary">
            View all services
          </Link>
        </motion.div>

        {/* Features highlight */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-soft border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Always clear pricing with no hidden fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Verified Movers</h3>
              <p className="text-gray-600 text-sm">
                All moving companies are verified and rated
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                Get bids within minutes, not days
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
