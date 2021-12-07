import React, { useState } from 'react';
import MaterialTable from 'material-table'

import FormDialog from '../components/register/register';

import DeleteR from '../components/register/delete';





const Products = () => {


    const [tableData, setTableData] = useState([
        {id:"", name: "Picture1", price:"80000", discount:"4",size:"120x240cm" , actualPrice:"", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good good good good good good good good good good good good good good good good good good good good", createAt:"20/1/2021" },
        
      ])
      const columns = [
            
            
            {title: "Name", field:"name"},
            {title: "Price", field:"price",align: "left", type:"currency",currencySetting:{currencyCode:"VND", minimumFractionDigits: 0, locate:"vn" } },
            {title:"Discount", field:"discount",align: "left", type:"numeric",lookup:{1:"1%", 2:"2%", 3:"3%", 4:"4%"} },
            {title: "Size", field:"size"},
            //{title:"ActualPrice", field:"actualPrice",align: "left", type:"currency", currencySetting:{currencyCode:"VND", minimumFractionDigits: 0}, editing:false},
            {title:"Quanlity", field:"quanlity", type:"numeric", align:"center"},

            {title:"Photo",field:"photo", grouping: false, render: item => <img src={item.photo} alt="" border="3" height="80" width="60px"   />,filtering: false  },

            {title:"Description", field: "description", weight:"100"},
            {title: "CreateAt", field:"createAt", type:"date",filtering: false},
            
    ]
    
    return (
     
      <div className="col-12">
          <div className="card">
              <div className="func" >
                <FormDialog />
              </div>
              <div className="card__body">
              <MaterialTable columns={columns} data={tableData}
                  // editable={{
                  //   // onRowAdd: (newRow) => new Promise((resolve, reject) => {
                  //   //   setTableData([...tableData, newRow])

                  //   //   setTimeout(() => resolve(), 500)
                  //   // }),
                    
                  //   //onRowUpdate: ({}),
                  //   //  (newRow, oldRow) => new Promise((resolve, reject) => {
                  //   //   const updatedData = [...tableData]
                  //   //   updatedData[oldRow.tableData.id] = newRow
                  //   //   setTableData(updatedData)
                  //   //   setTimeout(() => resolve(), 500)
                  //   // }),
                  //   onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                  //     const updatedData = [...tableData]
                  //     updatedData.splice(selectedRow.tableData.id, 1)
                  //     setTableData(updatedData)
                  //     setTimeout(() => resolve(), 1000)
                    
                  //   })

                    
                  // }}
                  actions={[
                    {
                      icon: () => <DeleteR/>,
                      
                     
                    } ,
                    {
                      icon:() => <DeleteR/>
                    }

                      // isFreeAction:true
                    
                 ]}
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
                    // rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                    rowStyle: {background:"#f5f5f5", height:"40px"},
                    headerStyle: { background: "#33B0FF ",color:"#fff"}
                  }}

                  title="Product"

                   />            
                  
                        </div>
                    </div>

      </div>
  
      
    )
}

export default Products