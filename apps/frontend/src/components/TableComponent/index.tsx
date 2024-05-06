const TableComponent = ({ cols, data }: any) => {
  return (
    <div className="relative w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-white">
          <tr>
            {cols?.map((col: any, colIndex: any) => {
              return (
                <th scope="col" className="px-6 py-3 bg-black" key={colIndex}>
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: any) => {
            return (
              <tr
                className="bg-white border-b odd:dark:bg-gray-800 odd:dark:border-gray-700 odd:bg-gray-200 even:bg-gray-400"
                key={`td-${index}`}
              >
                {cols.map((colItem: any, rowIndex: any) => {
                  return (
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      key={`row-${rowIndex}`}
                    >
                      {item[colItem]}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
