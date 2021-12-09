import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

import FormDialog from "../components/register/register";

import FormRegister from "../components/register/formRegister";
import DeleteR from "../components/register/delete";
import axios from "axios";

const Products = () => {
  const getProductUrl = "https://tengu-nodejs.herokuapp.com/api/product/";
  const token = localStorage.getItem("accessToken");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(getProductUrl, { headers: { token: token } }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  // const [tableData, setTableData] = useState([
  //     {id:"", name: "Picture1", price:"80000", discount:"4",size:"120x240cm" , actualPrice:"", quanlity:"2",photo:"https://picsum.photos/seed/picsum/200/300",description:" good good good good good good good good good good good good good good good good good good good good", createAt:"20/1/2021" },

  //   ])
  const columns = [
    { title: "Name", field: "title" },
    {
      title: "Price",
      field: "price",
      align: "left",
      type: "currency",
      currencySetting: {
        currencyCode: "VND",
        minimumFractionDigits: 0,
        locate: "vn",
      },
    },
    {
      title: "Discount",
      field: "discount_rate",
      align: "left",
      type: "numeric",
    },
    { title: "Size", field: "size" },
    //{title:"ActualPrice", field:"actualPrice",align: "left", type:"currency", currencySetting:{currencyCode:"VND", minimumFractionDigits: 0}, editing:false},
    { title: "Quanlity", field: "amount", type: "numeric", align: "center" },

    {
      title: "Photo",
      field: "img",
      grouping: false,
      render: (item) => (
        <img src={item.img} alt="" border="3" height="80" width="60px" />
      ),
      filtering: false,
    },

    { title: "Description", field: "desc", weight: "100" },
    { title: "CreateAt", field: "createdAt", type: "date", filtering: false },
  ];

  console.log(products);
  return (
    <div className="col-12">
      <div className="card">
        <div className="func">
          <FormDialog/>
        </div>
        <div className="card__body">
          <MaterialTable
            columns={columns}
            data={products}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  // setTableData([...tableData, newRow]);
                  // setTimeout(() => resolve(), 500);
                }),
              onRowUpdate: (newRow, oldRow) =>
                new Promise((resolve, reject) => {
                  // const updatedData = [...tableData];
                  // updatedData[oldRow.tableData.id] = newRow;
                  // setTableData(updatedData);
                  // setTimeout(() => resolve(), 500);
                  const updateProductUrl =
                    "https://tengu-nodejs.herokuapp.com/api/product/" + oldRow._id;
                  axios
                    .put(
                      updateProductUrl,
                      {
                        title: newRow.title,
                        desc: newRow.desc,
                        //img: result?.secure_url || product.img,
                        //cloudinary_id: result?.public_id || product.cloudinary_id,
                        category: newRow.category,
                        size: newRow.size,
                        price: newRow.price,
                        amount: newRow.amount,
                        discount_rate: newRow.discount_rate,
                      },
                      { headers: { token: token } }
                    )
                    .then(() => {
                      alert("Cập nhật sản phẩm thành công!")
                      setTimeout(() => resolve(), 500);
                    });
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const deleteProductUrl =
                    "https://tengu-nodejs.herokuapp.com/api/product/" + selectedRow._id;
                  axios
                    .delete(deleteProductUrl, { headers: { token: token } })
                    .then(() => {
                      alert("Xóa sản phẩm thành công!")
                      setTimeout(() => resolve(), 500);
                    });
                }),
            }}
            //   actions={[
            //     {
            //       icon: () => <DeleteR/>,

            //     } ,
            //     {
            //       icon:() => <DeleteR/>
            //     }

            //       // isFreeAction:true

            //  ]}
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
              paginationPosition: "both",
              exportButton: true,
              //exportAllData: true,
              exportFileName: "TableData",
              addRowPosition: "first",
              actionsColumnIndex: -1,

              selection: false,
              showSelectAllCheckbox: false,
              showTextRowsSelected: false,
              selectionProps: (rowData) => ({
                disabled: rowData.photo == null,
                // color:"primary"
              }),
              grouping: true,
              columnsButton: true,
              // rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
              rowStyle: { background: "#f5f5f5", height: "40px" },
              headerStyle: { background: "#33B0FF ", color: "#fff" },
            }}
            title="Product"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;