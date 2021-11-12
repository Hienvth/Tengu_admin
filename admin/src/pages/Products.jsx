import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
//import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'


const Products = () => {


  const [tableData, setTableData] = useState([])

  useEffect(() => {
    axios.get('https://tengu-nodejs.herokuapp.com/api/product/').then((response) => {
      setTableData(response.data);
    });
  }, []);

  console.log(tableData)
  const columns = [
  // { title: "ID", field: "_id", filtering: false, },
    { title: "Tên sản phẩm", field: "title" },
    { title: "Giá", field: "price", align: "left", type: "currency", currencySetting: { currencyCode: "VND", minimumFractionDigits: 0, locate: "vn" } },
  //{ title: "Discount", field: "discount", align: "left", type: "numeric", lookup: { 1: "1%", 2: "2%", 3: "3%", 4: "4%" } },
  //{ title: "ActualPrice", field: "actualPrice", align: "left", type: "currency", currencySetting: { currencyCode: "VND", minimumFractionDigits: 0 }, editing: false },
    { title: "Số lượng", field: "amount", type: "numeric", align: "center" },

    { title: "Ảnh", field: "img", grouping: false, render: item => <img src={item.img} alt="" border="3" height="160px" width="120px" />, filtering: false },
    { title: "Mô tả", field: "desc", weight: "100" },
    { title: "Ngày tạo", field: "createdAt", type: "date", filtering: false },

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
          updatedData[oldRow.tableData._id] = newRow
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
        selectionProps: rowData => ({
          disabled: rowData.photo == null,
          // color:"primary"
        }),
        grouping: true, columnsButton: true,
        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
        headerStyle: { background: "#f44336", color: "#fff" }
      }}
      title="Product Information"
      icons={{ Add: () => <AddIcon /> }} />

  )
}

export default Products