import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCar = (props) => {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '', model: '', color: '', year: '', fuel: '', price: ''
    });
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }
    return (
        <div>            
            <button style={{margin: 10}} onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <input type="text" placeholde="Brand" name="brand"
                        value={car.brand} onChange={handleChange}/><br/>
                    <input type="text" placeholde="Model" name="model"
                        value={car.model} onChange={handleChange}/><br/>
                    <input type="text" placeholde="Color" name="color"
                        value={car.color} onChange={handleChange}/><br/>
                    <input type="text" placeholde="Year" name="year"
                        value={car.year} onChange={handleChange}/><br/>
                    <input type="text" placeholde="Price" name="price"
                        value={car.price} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleClose}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default AddCar;