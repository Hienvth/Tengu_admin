import React, { useState } from 'react';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';



const Products = () => {
    const [tableData, setTableData] = useState([
        { id: "001",name: "Picture1", price:"80000", discount:"4", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "001",name: "Picture1", price:"80000", discount:"5", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "002",name: "Picture2", price:"80000", discount:"2", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "003",name: "Picture3", price:"80000", discount:"3", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "004",name: "Picture4", price:"80000", discount:"4", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "005",name: "Picture5", price:"80000", discount:"5", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"20/1/2021" },
        { id: "006",name: "Picture6", price:"80000", discount:"2", actualPrice:"82000", quanlity:"2",photo:"http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",description:" good", createAt:"02/01/2021" },

        
      ])
      const columns = [
            
            {title: "ID", field: "id"},
            {title: "Name", field:"name"},
            {title: "Price", field:"price"},
            {title:"Discount", field:"discount"},
            {title:"ActualPrice", field:"actualPrice"},
            {title:"Quanlity", field:"quanlity"},
            {title:"Photo", field:"photo"},
            {title:"Description", field: "description"},
            {title: "CreateAt", field:"createAt"},
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
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Products"
        icons={{ Add: () => <AddIcon /> }} />            
        
    )
}

export default Products
