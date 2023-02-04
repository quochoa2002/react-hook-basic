import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value)

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }       
        
        typingTimeoutRef.current = setTimeout(() => {
            const fromValue = {
                searchTerm: value,
            }
            onSubmit(fromValue)         
        }, 300);
    }

    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFiltersForm;