import React from 'react';

import './with-spinner.styles.scss'; 

const WithSpinner = WrappedComponent => ({isLoading, ...restProps}) => {
    return isLoading ? (
    <div className="spinner-container">
        <div className="spinner"></div>
    </div>
    ) : (
    <WrappedComponent {...restProps} />
    )
}

export default WithSpinner