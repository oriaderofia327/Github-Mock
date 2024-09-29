import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

import { getAllRepos } from "../api";
import { RepoCard } from "../component";

function home() {
  const [repoList, setRepoList] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching repoList from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 5;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = repoList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repoList.length / 5);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % repoList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
        <div>
          <input type="search" name="search" id="search" className="px-5 mb-10 shadow-md h-10 border w-full " placeholder="Search by repo name" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems && currentItems.map((repo, index) => <RepoCard data={repo} key={`${repo.name}-${index}`} />)}
          
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="flex justify-between my-5 font-bold"
          />
      </main>
    </>
  );
}

export default home;
