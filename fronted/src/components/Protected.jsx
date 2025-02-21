import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth';

function Protected({children}) {
  return isAuthenticated() ? children : <Navigate to="/" />;
  
}

export default Protected;   