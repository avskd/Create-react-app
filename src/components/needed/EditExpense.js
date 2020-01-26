import React from 'react';

const EditExpense = (props) => {
    console.log(props)
    console.log(props.match.params.id)
    return (
        <div>
            <a href="#">Edit Page Expense</a> <br />
            <a href="/">Dashboard</a>
            <p>The Id of the page is {props.match.params.id}</p>
        </div>
    );
};

export default EditExpense;