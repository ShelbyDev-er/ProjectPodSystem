import React from 'react'

export default function SortModal({handleClose}) {
    return (
        <>
            <div className="sort-modal-overlay">
                <div className="sort-modal">
                    <p>Sắp xếp theo yêu cầu</p>
                    <div className="content-modal">
                        <div className="left-checkbox">
                            <span><input type="checkbox" /> abc</span>
                            <span><input type="checkbox" /> abc</span>
                            <span><input type="checkbox" /> abc</span>
                        </div>
                        <div className="right-checkbox">
                            <span><input type="checkbox" /> abc</span>
                            <span><input type="checkbox" /> abc</span>
                        </div>
                    </div>
                    <button onClick={() => handleClose()}>sort</button>
                </div>
            </div>
        </>
    )
}
