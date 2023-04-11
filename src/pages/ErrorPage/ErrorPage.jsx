import { Link } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className='error-page'>
        <h1>404 Not Found!</h1>
        <Link className='go-back' to='/'>Go Back</Link>
    </div>
  )
}

export default ErrorPage