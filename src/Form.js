import React from 'react';
import { withFormik } from 'formik';
import {PageTitle} from "./BasicComponents"

const FormPost = (props) => {
    const {
        values,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
    } = props;

    return (
    <div>
        <PageTitle title="Add transaction" />
        <div className="jumbotron small-padding top-margin">
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
                        step="0.001" 
                        className="form-control" 
                        placeholder="Enter Amount" 
                        name="amount" 
                        value={values.amount} 
                        onChange={handleChange}
                        required />
            </div>
            <button type="submit" className="btn btn-danger mt-3" disabled={isSubmitting}>
                {isSubmitting ? 'Wait' : 'Add transaction'}
            </button>
        </form>
    </div>
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

