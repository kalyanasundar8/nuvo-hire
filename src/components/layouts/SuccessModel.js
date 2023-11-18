import { Alert } from 'react-bootstrap';

const SuccessModel = ({ success }) => {

  return (
    <Alert variant="success">
      { success }
    </Alert>
  )
}

export default SuccessModel
