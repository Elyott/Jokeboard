import React from 'react';

const ConfirmModal = props => {
  const { name, onDeleteClick, jokeId } = props
  return (
    <div className="modal bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Please Confirm</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are You Sure You Want To Delete {name}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(jokeId)} data-dismiss="modal">Delete</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

  export default ConfirmModal