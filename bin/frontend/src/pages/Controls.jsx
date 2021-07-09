import React from "react";
import EnhancedTable from "../components/EnhanceTable/Index";
import makeData from "../js/makeData";

export default function Controls() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Référence",
        accessor: "ref",
      },
      {
        Header: "Datecode",
        accessor: "datecode",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Conformité",
        accessor: "conformite",
      },
      {
        Header: "Progression",
        accessor: "progression",
      },
    ],
    []
  );

  const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div>
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}
