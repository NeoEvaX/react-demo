"use client";

import { Button } from "@/components/ui/Button/Button";
import { CellClassParams, CellClickedEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState();

  const currencyFormatter = (params: any) => {
    return params.value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const [columnDefs] = useState([
    { checkboxSelection: true, width: 50 },
    { field: "DealId", filter: true },
    { field: "Description" },
    {
      headerName: "Price to Retailer",
      field: "ListPrice_PriceToRetailer",
      valueFormatter: currencyFormatter,
      type: "rightAligned",
    },
    {
      headerName: "Action",
      field: "price",
      cellRenderer: (params: CellClassParams) => (
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => btnClickMeAction(params)}
        >
          Click Me
        </Button>
      ),
    },
  ]);

  const defaultColDef = {
    sortable: true,
  };

  const btnClickMeAction = (params: CellClassParams) => {
    console.log(params.data);
  };

  const onCellClicked = (params: CellClickedEvent) => {
    if (!params.colDef.checkboxSelection && !params.colDef.cellRenderer) {
      console.log(params);
    }
  };

  useEffect(() => {
    fetch("/api/deals", {
      method: "POST",
    }).then(async (result) => {
      if (result.status === 200) {
        const data = await result.json();
        setRowData(data);
      }
    });
  }, []);

  const btnAllSelected = useCallback((e: any) => {
    console.log(gridRef!.current!.api.getSelectedRows());
  }, []);

  return (
    <div>
      <Button className={"ml-5"} onClick={btnAllSelected}>
        Push Me
      </Button>
      <div className="ag-theme-alpine max-w-screen m-5 h-[500px] w-[1000px]">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          pagination={true}
          onCellClicked={onCellClicked}
        ></AgGridReact>
      </div>
    </div>
  );
}
