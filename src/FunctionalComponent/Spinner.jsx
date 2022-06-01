import React from 'react'

export default function Spinner() {
    return (
        <div className='mt-5 mb-5 text-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden" style={{ height: "500px", width: "500px" }}>Loading...</span>
            </div>
        </div>
    )
}