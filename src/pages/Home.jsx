import { useEffect } from "react";
import { useState } from "react";
import { getAllRepos } from "../api";
import { RepoCard } from "../component";

function home() {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllRepos();
      setRepoList(data);
    }

    fetchData();
  }, [repoList.length]);

  return (
    <>
      <main className="container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repoList && repoList.map((repo, index) => <RepoCard data={repo} key={`${repo.name}-${index}`} />)}
        </div>
      </main>
    </>
  );
}

export default home;
