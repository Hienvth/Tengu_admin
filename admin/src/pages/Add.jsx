import React, { useState } from 'react';
import MaterialTable from 'material-table'
//import DeleteIcon from '@material-ui/icons/Delete';
//import AddIcon from '@material-ui/icons/Add';


const Customers = () => {


    const [tableData, setTableData] = useState([
        {name: "khach1", email:"abcd@gmail.com", phone:"0921213124", totalOrder:"211", totalSpend:"1000000", location:"long an"},
        {name: "khach2", email:"abcd@gmail.com", phone:"0921213123", totalOrder:"1111", totalSpend:"1000000", location:"long an"},
        {name: "khach3", email:"abcd@gmail.com", phone:"0921213122", totalOrder:"111", totalSpend:"1000000", location:"long an"},
        {name: "khach4", email:"abcd@gmail.com", phone:"0921213119", totalOrder:"11", totalSpend:"1000000", location:"Long an"}
        
      ])
      const columns = [
          
         {title:"Name", field:"name"},
         {title:"Email", field:"email", sorting:false},
         {title:"Phone numbers", field:"phone", sorting:false},
         {title:"Total Orders", field:"totalOrder", type:"numeric", align:"left", filtering: false},
         {title:"Total Spend", field:"totalSpend",align: "left", filtering:false,type:"currency", currencySetting:{currencyCode:"VND", minimumFractionDigits: 0}, editing:false},
         {title:"Location", field:"location"}   
            
    ]
    
    return (
        <MaterialTable columns={columns} data={tableData}
        // editable={{
        //   onRowAdd: (newRow) => new Promise((resolve, reject) => {
        //     setTableData([...tableData, newRow])

        //     setTimeout(() => resolve(), 500)
        //   }),
        //   onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
        //     const updatedData = [...tableData]
        //     updatedData[oldRow.tableData.id] = newRow
        //     setTableData(updatedData)
        //     setTimeout(() => resolve(), 500)
        //   }),
        //   onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
        //     const updatedData = [...tableData]
        //     updatedData.splice(selectedRow.tableData.id, 1)
        //     setTableData(updatedData)
        //     setTimeout(() => resolve(), 1000)

        //   })
        // }}
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
          selectionProps: rowData => ({disabled: rowData.name == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          // rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          // headerStyle: { background: "#f44336",color:"#fff"}
          rowStyle: {background:"#f5f5f5", height:"40px"},
          headerStyle: { background: "#33B0FF ",color:"#fff"}
        }}
        title="Top Customers Information"
         />            
        
    )
}

export default Customers
