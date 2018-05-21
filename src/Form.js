import React from 'react';
import './App.css';
import { withFormik } from 'formik';

const FormPost = (props) => {
    const {
        values,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
    } = props;

    return (
    <div className="jumbotron padding-menor margem-topo">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Sender</label>
                <input className="form-control" 
                        placeholder="Enter Sender" 
                        name="sender" 
                        value={values.sender} 
                        onChange={handleChange} 
                        required />
            </div>
            <div className="form-group">
                <label>Receiver</label>
                <input className="form-control" 
                        placeholder="Enter Receiver" 
                        name="receiver" 
                        value={values.receiver} 
                        onChange={handleChange}
                        required />
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input type="number" 
                        step="0.01" 
                        className="form-control" 
                        placeholder="Enter Amount" 
                        name="amount" 
                        value={values.amount} 
                        onChange={handleChange}
                        required />
            </div>
            <button type="submit" className="btn btn-warning margem-pequena margem-bottom" disabled={isSubmitting}>
                {isSubmitting ? 'Wait' : 'Add transaction'}
            </button>
        </form>
    </div>
    )
}

export default withFormik({
    mapPropsToValues: props => ({
        sender: '',
        receiver: '',
        amount: '',
    }),

    handleSubmit: (values, { setSubmitting, props, resetForm }) => {
            props.submit(values);
            setSubmitting(false);
            resetForm();
    },
})(FormPost);

