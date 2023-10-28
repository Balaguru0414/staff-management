const Pagination = () => {
  return (
    <ul className="flex mt-3">
      <li className="border m-1 p-2 text-white rounded-md bg-[#12b5e7] ">
        <a className="page-link" href="#">
          Previous
        </a>
      </li>
      <li className="border bg-slate-300 m-1 p-2 rounded-md">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="border bg-slate-300 m-1 p-2 rounded-md">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="border bg-slate-300 m-1 p-2 rounded-md">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="border m-1 p-2 text-white rounded-md bg-[#12b5e7]">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
