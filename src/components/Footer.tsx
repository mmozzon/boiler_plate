import '../index.css'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">

                 {/* Navigation Links */}
                 <div className="text-center text-xs space-x-4 flex justify-center">
                  <Link to="/" className="hover:text-blue-400 transition">
                    Footer <link rel="stylesheet" href="style.css" />
                  </Link>
                </div>  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  