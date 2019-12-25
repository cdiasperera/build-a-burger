import React from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent) => {
  return (props) => (
    <>
      <Modal>
        <p>Something didn't work</p>
      </Modal>
      <WrappedComponent {...props} />
    </>
  )
}

export default withErrorHandler
