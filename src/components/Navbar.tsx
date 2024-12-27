import '../index.css'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
<nav className="bg-green-500 text-white font-bold p-4 flex items-center">
    <div className="container mx-auto flex  flex-wrap items-center justify-between gap-5">

        <div className="flex justify-center gap-6 px-2 whitespace-nowrap">
          <div className="flex flex-wrap items-center justify-start gap-6 text whitespace-nowrap">
            <Link to="/" className="hover:text-blue-300 hover:italic hover:underline">
              Accueil
            </Link>
          </div>
        </div>   
    </div>
</nav>

  );
};

export default Navbar;

