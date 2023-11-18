import { Alert } from 'react-bootstrap'

const ErrorModel = ({ error }) => {
  
  return (
    <Alert variant="danger">
      { error }
    </Alert>
  )
}

export default ErrorModel
