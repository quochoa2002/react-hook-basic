import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    function handleValueOnchange(e) {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        // prevent reloading browser
        e.preventDefault();
        if(!onSubmit) return;

        const fromValues = {
            title: value,
        };
        onSubmit(fromValues);

        // reset from
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueOnchange}/>
        </form>
    );
}

export default TodoForm;