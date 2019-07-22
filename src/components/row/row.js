import React from 'react';
import './row.css';

const Row = ({ leftElement, rigthElement }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftElement}
            </div>
            <div className="col-md-6">
                {rigthElement}
            </div>
        </div>
    );
};

export default Row;