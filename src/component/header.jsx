import { Link } from "react-router-dom";

export default function header(){
    return (
        <header className="bg-white shadow-md w-full">
            <div className="container mx-auto flex justify-between items-center p-5">
            <div className="logo">
                <Link to={'/'} className="text-3xl text-blue">3 M T T</Link>
            </div>
            <nav className="nav">
                <ul className="flex space-x-6 text-gray-700">
                <li><Link to={'/'} className="hover:text-gray-900">Home</Link></li>
                <li><Link to={'/about'} className="hover:text-gray-900">About</Link></li>
                <li><Link to={'/error-boundary'} className="hover:text-gray-900">Test Error Boundary</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}
