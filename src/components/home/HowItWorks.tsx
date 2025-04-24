import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Post your move",
      description:
        "Describe what you need help with - home move, transport or special job.",
      icon: (
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Get real-time bids",
      description:
        "Receive competing offers from verified and rated moving companies.",
      icon: (
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
      ),
    },
    {
      id: 3,
      title: "Choose the best deal",
      description: "Compare price and reviews – only the best bid matters.",
      icon: (
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="how-it-works" className="section-alt shadow-sm relative z-10">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">How Movers Auction Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform makes moving simpler, more transparent, and more
            affordable
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="card p-8 text-center hover:shadow-hover transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary mx-auto mb-6">
                  {step.icon}
                </div>

                <div className="absolute top-0 right-0 -mr-3 -mt-3 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>

              {step.id === 1 && (
                <div className="h-1 w-20 bg-primary mx-auto"></div>
              )}
              {step.id === 2 && (
                <div className="h-1 w-20 bg-secondary mx-auto"></div>
              )}
              {step.id === 3 && (
                <div className="h-1 w-20 bg-green-500 mx-auto"></div>
              )}
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
          <Link to="/get-started" className="btn btn-primary">
            Get started for free
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-20 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden mx-auto md:mx-0">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <svg
                className="h-8 w-8 text-primary mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg italic text-gray-600 mb-4">
                Movers Auction saved us both time and money on our move from
                Stockholm to Gothenburg. We received five competitive bids
                within hours and chose a great mover with excellent reviews.
              </p>
              <p className="font-bold">Erik Johansson</p>
              <p className="text-sm text-gray-500">Stockholm, Sweden</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
