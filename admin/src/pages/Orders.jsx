import React, { useState } from 'react';
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const Customers = () => {


    const [tableData, setTableData] = useState([
        {orderId:"#0001", customerName:"khach1",totalPrice:1000000, date:"20/08/2021", status:"delivered" },
        {orderId:"#0002", customerName:"khach2",totalPrice:1000000, date:"20/02/2021", status:"delivered" },
        {orderId:"#0004", customerName:"khach3",totalPrice:1000000, date:"20/09/2021", status:"shipping" },
        {orderId:"#0003", customerName:"khach2",totalPrice:1000000, date:"22/08/2021", status:"shipping" },
        {orderId:"#0006", customerName:"khach6",totalPrice:1000000, date:"21/08/2021", status:"" },

      ])
      const columns = [
        {title:"Order ID", field:"orderId"},
        {title:"Customer Name", field:"customerName",sorting: false},
        {title:"Total Price", field:"totalPrice",align: "left", type:"currency", currencySetting:{currencyCode:"VND", minimumFractionDigits: 0}, editing:false, 
       },
        {title:"Date", field:"date", type:"date",filtering: false,sorting: false},
        {title:"Status", field:"status", render: (rowData) => <div style={{ background: rowData.status = "delivered" ? "#008000aa" : "#f90000aa",width:"100px", height:"30px", fontWeight:"bold", color:"#fff",textAlign:"center",borderRadius:"4px",padding: 5  }}>{rowData.status == "delivered" ? "Delivered" : "Shipping"}</div>,
        searchable: false, export: false}
    ]
    
    return (
        <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        // actions={[
        //   {
        //     icon: () => <DeleteIcon />,
        //     tooltip: "Delete",
        //     onClick: (e, data) => new Promise((resolve, reject) => {
                 
        //     })
        //   } ,

            // isFreeAction:true
          
//        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, 
          search: true,
          searchFieldAlignment: "right", 
          searchAutoFocus: true, 
          searchFieldVariant: "standard",
          filtering: true, 
          paging: true, 
          
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], 
          pageSize: 10,
          paginationType: "stepped", 
          showFirstLastPageButtons: false, 
          paginationPosition: "both", exportButton: true,
          //exportAllData: true,
          exportFileName: "TableData", 
          addRowPosition: "first", actionsColumnIndex: -1, 
          
          selection: false,
          showSelectAllCheckbox: false, 
          showTextRowsSelected: false, 
          selectionProps: rowData => ({disabled: rowData.status == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        
        title="Orders"
        icons={{ Add: () => <AddIcon /> }} />            
        
    )
}

export default Customers
