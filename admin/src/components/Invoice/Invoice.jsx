import '../Invoice/Invoice.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
import * as ReactDOM from "react-dom";
import * as React from 'react'


import logo from '../../assets/images/tengu.PNG'

import { useRef, useState, useEffect } from 'react';
import Controls from '../control/Controls';


import PageTemplate from './pagetemplate'

import Footer from './footer';
import { Grid } from '@material-ui/core';


const LayoutSample = ({detailOrder}) => {

	// const pdfExportComponent = useRef(null);
	
	const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});
	
	console.log(detailOrder)
	// const ddData = [{ text: "A4", value: "size-a4" },
	//                 { text: "Letter", value: "size-letter" },
	// 								{ text: "Executive", value: "size-executive" }
	// 							 ];

	const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

	const updatePageLayout = (event) => {
		setLayoutSelection(event.target.value);
	}
	const pdfExportComponent = React.useRef(null);

  return(
    <div id="example">
			<div className="box wide hidden-on-narrow">
				<div className="box-col">
					{/* <h4>Select a Page Size</h4> */}
					{/* <DropDownList
							data={ddData}
							textField="text"
							dataItemKey="value"
							value={layoutSelection}
							onChange={updatePageLayout}
					>
					</DropDownList> */}
				</div>
				<div className="box-col">
					<h4>Export PDF</h4>
					<Controls.Button
						text="Export"
						onClick={handleExportWithComponent}
					
					/>
	    	  {/* <Button primary={true} onClick={handleExportWithComponent}>Export</Button> */}
				</div>
			</div>
			<div className="page-container hidden-on-narrow">
				<PDFExport forcePageBreak=".page-break"
				pageTemplate={PageTemplate}
				paperSize="A4"
				margin="2cm"
				ref={pdfExportComponent}>
					<div className={ `pdf-page ` }>
						<div className="inner-page">
							<div className="pdf-header">
								<span className="company-logo">

									<img style={{ width:"20%", height:"5%"}} src={logo} alt="Tengu Logo" />
									<br/>
									 Tengu - Nơi cung cấp các sản phẩm tranh ảnh chất lượng
								</span>
								<br/>
							
								<span 
								
								// thêm cái id đơn hàng chỗ này nha 
								
								className="invoice-number">Mã đơn hàng: {detailOrder._id}</span> 
							</div>
							<br/>
							<br/>
							<div className="pdf-footer">
												
							</div>
							<div className="addresses">
								<div className="for">
									<h3>Người đặt</h3>
									<Grid>
										<p>
										{detailOrder.customerId.lastName} <a> </a>
										{detailOrder.customerId.firstName}
										{/* tên người mua */}
										</p>
										<p>
										{detailOrder.createdAt}
										{/* ngày mua */}
										</p>

									</Grid>
								</div>

								<div className="from">
									<h3>Người nhận</h3>
									<p>
									{detailOrder.customerName}
									</p>
										{/* tên người nhận */}
									<p>
									{detailOrder.address.ward}
									</p>
									{detailOrder.address.district}
									<p>
									{detailOrder.address.province}
									</p>
										{/* địa chỉ */}
										{/* số điện thoại liên lạc */}
									<p>
									sdt: {detailOrder.phone}
									</p>
																	
									
								</div>
							</div>
							<br/>
							<br/>
							<div>
								<table className="tbl1" style={{maxWidth:" 90%"}}>
									<thead className='head1'>
										<tr>
											<th className="th2">STT</th>
											<th className="th2">Tên Tranh</th>
											<th className="th2">Giá bán</th>
											<th className="th2">Số lượng</th>
											<th className="th2">Thành tiền</th>
										</tr>
									</thead>
									<tbody>
										{detailOrder.products.map((product, idx) =>{
											return (
												<tr key={idx}>
												<th className="th2">{idx + 1}</th>
												<th className="th2">{product.productId.title}</th>
												<th className="th2">{product.productId.price}</th>
												<th className="th2">{product.quantity}</th>
												<th className="th2">{product.quantity * product.productId.price}</th>
											</tr>
											);
										})}
									</tbody>
								</table>
								
								<p className="signature">
									Tổng tiền: {detailOrder.payableAmount > 800000 ? detailOrder.payableAmount : detailOrder.payableAmount + 30000} <br />
									Phí vận chuyển: {detailOrder.payableAmount > 800000 ? "FREE" : "30 000đ"}<br/>
									_______________<br/>
									Thành giá: {detailOrder.payableAmount}
								
								</p>
								<br/>
								<br/>
								<br/>
								<br/> 
								<Footer/>	
								<br/>
								<br/>
							</div>
							<div className="pdf-body">
								<div id="grid"></div>
								
							</div>

						</div>
					</div>
				</PDFExport>
			</div>
		</div>
  );
  
ReactDOM.render(< LayoutSample/>, document.querySelector("my-app"));
}


export default LayoutSample;