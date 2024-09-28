import { Link, useNavigate, redirect } from "react-router-dom";

export default function RepoCard({ data }) {
    const { name, description } = data;
    const navigate = useNavigate();

    const formatDescription = (desc) => {
        if (!desc) {
            return 'Repo does not have a description...'
        }

        if (desc.length > 100) {
            return `${desc.substring(0, 100)}...`
        }

        return desc
    }
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-52">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">
          {formatDescription(description)}
        </p>
        <Link to={`/repo/${name}`} className="text-blue-500 hover:text-blue-700">
          Read More
        </Link>
      </div>
    </div>
  );
}
