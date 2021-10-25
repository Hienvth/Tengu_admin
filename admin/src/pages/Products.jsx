import React, { useState } from 'react';
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const Products = () => {


    const [tableData, setTableData] = useState([
        { id: "001",name: "Picture1", price:"80000", discount:"4", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good good good good good good good good good good good good good good good good good good good good", createAt:"20/1/2021" },
        { id: "001",name: "Picture1", price:"80000", discount:"5", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good", createAt:"20/1/2021" },
        { id: "002",name: "Picture2", price:"80000", discount:"2", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good", createAt:"20/1/2021" },
        { id: "003",name: "Picture3", price:"80000", discount:"3", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good", createAt:"20/1/2021" },
        { id: "004",name: "Picture4", price:"80000", discount:"4", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good", createAt:"20/1/2021" },
        { id: "005",name: "Picture5", price:"80000", discount:"5", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good", createAt:"20/1/2021" },
        { id: "006",name: "Picture6", price:"80000", discount:"2", actualPrice:"82000", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good ", createAt:"02/01/2021" },

        
      ])
      const columns = [
            
            {title: "ID", field: "id",filtering: false,},
            {title: "Name", field:"name"},
            {title: "Price", field:"price",align: "left", type:"currency",currencySetting:{currencyCode:"VND", minimumFractionDigits: 0, locate:"vn" } },
            {title:"Discount", field:"discount",align: "left", type:"numeric",lookup:{1:"1%", 2:"2%", 3:"3%", 4:"4%"} },
            {title:"ActualPrice", field:"actualPrice",align: "left", type:"currency", currencySetting:{currencyCode:"VND", minimumFractionDigits: 0}, editing:false},
            {title:"Quanlity", field:"quanlity", type:"numeric", align:"center"},

            {title:"Photo",field:"photo", grouping: false, render: item => <img src={item.photo} alt="" border="3" height="80" width="60px"   />,filtering: false  },

            {title:"Description", field: "description", weight:"100"},
            {title: "CreateAt", field:"createAt", type:"date",filtering: false},
            
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
          pageSize: 5,
          paginationType: "stepped", 
          showFirstLastPageButtons: false, 
          paginationPosition: "both", exportButton: true,
          //exportAllData: true,
          exportFileName: "TableData", 
          addRowPosition: "first", actionsColumnIndex: -1, 
          
          selection: false,
          showSelectAllCheckbox: false, 
          showTextRowsSelected: false, 
          selectionProps: rowData => ({disabled: rowData.photo == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Product Information"
        icons={{ Add: () => <AddIcon /> }} />            
        
    )
}

export default Products