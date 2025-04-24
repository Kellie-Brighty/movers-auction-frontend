import { motion } from "framer-motion";
import Spinner from "./Spinner";

interface LoaderProps {
  fullPage?: boolean;
  message?: string;
}

const Loader = ({ fullPage = true, message = "Loading..." }: LoaderProps) => {
  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center p-6 rounded-xl bg-white shadow-soft border border-gray-100"
        >
          <div className="mb-4">
            <img src="/logo.svg" alt="Movers Auction" className="h-12" />
          </div>
          <Spinner size="lg" color="text-primary" />
          <p className="mt-4 text-gray-600 font-medium">{message}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <Spinner size="md" color="text-primary" />
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default Loader;
