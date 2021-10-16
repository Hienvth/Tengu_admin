import React from 'react';
import Table from '../components/products/tablePR'; 


const topCustomers = {
    head: [
        '_id',
        'categoryName',
        'subcategoryName',
        'productName',
        'price',
        'discount',
        'actualPrice',
        'quantity',
        'photo',
        'description',
        'createAt',
        'updateAt',
        'action'
    ],
    body: [
        {
            "_id": "296baaf2-8ed8-40a9-9c03-0c4991df0e70",
            "categoryName": "Tranh Canvas",
            "subcategoryName": "Tranh Phong Cảnh",
            "productName": "Bộ 3 Tranh Lá Cây Phong - VY861",
            "price": 1720000,
            "discount": 5,
            "actualPrice": 1634000,
            "quantity": 10,
            "photo": "http://res.cloudinary.com/apk-slution/image/upload/v1633240569/ekw2yiub8i1xffvhfsil.jpg",
            "description": "Tranh Phong Cảnh Siêu Cấp",
            "createAt": "2021-09-27T14:30:38.155565",
            "updateAt": "2021-10-03T12:54:35.771204"
          },
          {
            "_id": "f82fc8cf-3dcf-4464-bb46-be2ad3d5ce7d",
            "categoryName": "Tranh Canvas",
            "subcategoryName": "Phong Cảnh",
            "productName": "Bộ 9 Tranh Hoạ Tiết Hình Vẽ - VN088",
            "price": 2140000,
            "discount": 5,
            "actualPrice": 2033000,
            "quantity": 9,
            "photo": "http://res.cloudinary.com/apk-slution/image/upload/v1632746784/hy2swyjjog3jibbhn9kd.jpg",
            "description": "Với ưu điểm: sang trọng, nhẹ nhàng và hiện đại không bay màu, dễ lau chùi kết hợp với đinh 3 chân, rất dễ dàng cho việc treo trên tường mà không cần khoan.",
            "createAt": "2021-09-27T19:44:56.012074",
            "updateAt": null
          },
          {
            "_id": "47f94105-d95c-47c6-b2df-8797a07f1668",
            "categoryName": "Tranh Canvas",
            "subcategoryName": "Phong Cảnh",
            "productName": "Bộ 3 Tranh Đàn Cá Bơi Lội - VW612",
            "price": 1080000,
            "discount": 5,
            "actualPrice": 1026000,
            "quantity": 10,
            "photo": "http://res.cloudinary.com/apk-slution/image/upload/v1632750771/l0lflfb7i4deejnwfj5d.jpg",
            "description": "Tranh canvas đang là xu hướng dành cho các căn nhà hiện đại, căn hộ chung cư.",
            "createAt": "2021-09-27T20:51:22.786367",
            "updateAt": null
          }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index ) => (
    <tr key={index, Image}>
        <td>{item._id}</td>
        <td>{item.categoryName}</td>
        <td>{item.subcategoryName}</td>
        <td>{item.productName}</td>
        <td>{item.price}</td>
        <td>{item.discount}</td>
        <td>{item.actualPrice}</td>
        <td>{item.quantity}</td>
        <td><img src={'item.photo'} style={{width: 80, height: 80}} /></td>
        
        <td>{item.description}</td>
        <td>{item.createAt}</td>
        <td>{item.updateAt}</td>
        <td><button></button></td>
        
    </tr>
)
        


const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                Products
            </h2>         
            <div className="col-12">
                <div className="card">
                <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                </div>
            </div>
        </div>            
        
    )
}

export default Products
