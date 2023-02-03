import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.string.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRow } = pagination;
    const totalPages = Math.ceil(_totalRow / _limit)

    function HandlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <button disabled={ _page <= 1 } 
                    onClick={() => HandlePageChange(_page - 1)}
            >
                prev
            </button>

            <button disabled={ _page >= totalPages } 
                    onClick={() => HandlePageChange(_page + 1)}
            >
                next
            </button>
            
        </div>
    );
}

export default Pagination;