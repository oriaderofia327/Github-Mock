import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificRepo } from "../api";

export default function repoSpecific() {
  const [repo, setRepo] = useState();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
        const data = await getSpecificRepo({ repoName: params.name, owner: 'sulenchy' });
        setRepo(data);
      }
  
      fetchData();
  }, []);

return (
    <div className="min-h-screen w--full">
      {repo &&
      <header className="bg-white py-3 mt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">{repo.name}</h1>
          <p className="text-gray-600">{repo.description ? repo.description : 'This repository has no description.'}</p>
          <div className="mt-4 flex space-x-4">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927C9.394 2.094 10.606 2.094 10.951 2.927l.923 2.348a1 1 0 00.95.69h2.465c.958 0 1.354 1.23.588 1.81l-1.973 1.498a1 1 0 00-.364 1.118l.923 2.348c.345.833-.718 1.52-1.45 1.026l-1.973-1.498a1 1 0 00-1.176 0l-1.973 1.498c-.732.494-1.795-.193-1.45-1.026l.923-2.348a1 1 0 00-.364-1.118L4.033 7.775c-.766-.58-.37-1.81.588-1.81h2.465a1 1 0 00.95-.69l.923-2.348z"/>
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V10h2.586L10 14.586 6.414 11H9V6.586z" clipRule="evenodd"/>
              </svg>
              <span>{repo.forks}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V10h2.586L10 14.586 6.414 11H9V6.586z" clipRule="evenodd"/>
              </svg>
              <span>Issues: {repo.open_issues}</span>
            </div>
          </div>
        </div>
      </header>
      }
    </div>
)
}
