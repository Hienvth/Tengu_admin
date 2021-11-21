import React, { useState } from 'react';
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const Customers = () => {


    const [tableData, setTableData] = useState([
        {name: "khach1", birthday:"23/10/2222", email:"abcd@gmail.com", phone:"0921213124", address: "33, binh tan, Ho Chi Minh", account:"user1", password:"12345" },
        {name: "khach2", birthday:"23/10/2222" ,email:"abcd@gmail.com", phone:"0921213124", address: "33, binh tan, Ho Chi Minh", account:"user1", password:"12345" },
        {name: "khach11", birthday:"23/10/2222" ,email:"abcd@gmail.com", phone:"0921213124", address: "33, binh tan, Ho Chi Minh", account:"user1", password:"12345" },
        {name: "khach31", birthday:"23/10/2222" ,email:"abcd@gmail.com", phone:"0921213124", address: "33, binh tan, Ho Chi Minh", account:"user1", password:"12345" },
      ])
      const columns = [
        {title: "Name", field:"name"},
        {title: "Birthday", field:"birthday"},
        {title: "Email", field:"email", },
        {title:"Phone", field:"phone"},
        {title : "Address", field:"address"},
        {title: "Account", field:"account"},
        {title:"Password", field:"password"},    
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
          selectionProps: rowData => ({disabled: rowData.name == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Customers Information"
        icons={{ Add: () => <AddIcon /> }} />            
        
    )
}

export default Customers
