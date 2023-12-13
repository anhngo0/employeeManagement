import { useNavigate, useParams } from 'react-router-dom'; 
import React
 from 'react';
const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();
  const {employeeId} = useParams();
  // other hooks

  return (
    <WrappedComponent
      {...props}
      {...{ navigate, employeeId /* other hooks */ }}
    />
  );
};

export default withRouter;