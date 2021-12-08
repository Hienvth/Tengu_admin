import {Grid} from "@material-ui/core";
//import { image } from "faker";
import React , { useState , useEffect} from "react";
import {useForm, Form} from "./useForm";
import Controls from "../control/Controls";
import * as employeeService  from "./employeeService";

const initialFvalues = {
    Photo:'',
    name:'',
    price:'',
    discount: '',
    size:'',
    categoryi:'',
    quality:'', 
    Description:'',
    createAt: new Date(),
    
}

export default function FormProduct() {
    
    
    

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFvalues);
    // const {
    //     values,
    //     setValues,
    //     errors,
    //     handleInputChange
    // } = useForm(initialFvalues);

    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };

     

    return (
        <Form>
            <Grid >
                <Grid item  xs= {6}>
                    {/* <TextField
                        variant= "outlined"
                        label="Photo"
                        name="photo"
                        values = {values.Photo}
                        onChange={handleInputChange}
                    /> */}
                   
                    <Controls.Input
                        name= "name"
                        label= "Name"
                        value= {values.name}
                        onChange = {handleInputChange}
                    />
                    <div style={{margin:'theme.spacing(0.5)'}}>
                        
                    <Controls.Input
                        variant= "outlined"
                        label="Price"
                        name="price"
                        type="numeric"
                        error={errors.price}
                        
                        values = {values.price}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <Controls.Input
                        name="quality"
                        label="Quality"
                        type="numeric"
                        error={errors.price}
                        
                        value={values.quality}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    </div>
                    <Controls.Input
                        name="size"
                        label="Size"
                        type="text"
                        value={values.size}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Photo"
                        name="photo"
                        type="file"
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleFileChange}
                        variant="outlined"
                    />

                </Grid>
                <Grid item  xs= {6} >
                    <Controls.Input
                        name="discount"
                        label="Discount"
                        type="numeric"
                        value={values.discount}
                        onChange={handleInputChange}
                    />
                    {/* <Controls.DateC
                        name="createAt"
                        label="CreateAt"
                        value= {values.createAt}
                        onChange={handleInputChange}

                    /> */}
                     <Controls.Select
                        
                        name="category"
                        label="Category"
                        
                        value={values.categoryi}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                       

                    />
                    <Controls.Input
                        name="Description"
                        label="Description"
                        type="text"
                        rowsmax={3}
                        rows={2}
                        multiline
                        
                        value={values.Description}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true
                          }}
                        error={errors.Description}
                        variant="outlined"
                        
                        
                    />

                    <div>
                        <Controls.Button
                            type= "submit"
                            text= "Submit"
                        />
                        <Controls.Button
                            text= "Cancel"
                            color = "default"
                            
                        />
                    
                    </div>

                </Grid>
            </Grid>
        </Form>
    )
}