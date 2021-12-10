import '../Invoice/Invoice.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
//
import logo from '../../assets/images/tengu.PNG'

import { useRef, useState, useEffect } from 'react';
import Controls from '../control/Controls';


import PageTemplate from './pagetemplate'

import Footer from './footer';
import { Grid } from '@material-ui/core';


function LayoutSample() {
	const pdfExportComponent = useRef(null);
	const [layoutSelection, setLayoutSelection] = useState({ text: "A4", value: "size-a4"});
	
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
					<div className={ `pdf-page ${ layoutSelection.value }` }>
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
								
								className="invoice-number">Invoice </span> 
							</div>
							<br/>
							<br/>
							<div className="pdf-footer">
								<Footer/>					
							</div>
							<div className="addresses">
								<div className="for">
									<h3>Invoice For</h3>
									<Grid>
										{/* tên người mua */}
										{/* ngày mua */}
										

									</Grid>
								</div>

								<div className="from">
									<h3>From</h3>
									<Grid>

										{/* tên người nhận */}
										{/* địa chỉ */}
										{/* số điện thoại liên lạc */}


									</Grid>
																	
									
								</div>
							</div>
							<br/>
							<br/>
							<div>
								<table>
									<thead>
										<tr>
											<th>STT</th>
											<th>Tên Tranh</th>
											<th>Giá bán</th>
											<th>Khuyến mãi</th>
											<th>Thành tiền</th>
											
										</tr>
									</thead>
									<tbody>


									</tbody>
								</table>
							</div>
							<div className="pdf-body">
								<div id="grid"></div>
								<p className="signature">
									Tổng tiền: ___ <br />
									Phí vận chuyển:___ <br/>
									_______________<br/>
									Thành giá:__
								
								</p>
							</div>
						</div>
					</div>
				</PDFExport>
			</div>
		</div>
  );
}

export default LayoutSample;