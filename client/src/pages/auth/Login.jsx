import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';

// Import custom modules
import authService from '../../services/authService';
import useAuth from '../../hooks/useAuth';
import TuCard from '../../components/common/TuCard'
import TuLabel from '../../components/common/TuLabel'
import TuInput from '../../components/common/TuInput'
import TuInlineLink from '../../components/common/TuInlineLink';
import TuButton from '../../components/common/TuButton';

const Login = () => {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { email, password } = user;

  // FORM FUNCTIONS
  // [1] handleTextChange handles state value change for all login data
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // [2] handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch(err) {
      console.log(err?.response);
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }

  return (
    <TuCard title="Login" authform>
      <Form onSubmit={ handleSubmit }>
        {/* GROUP 1: EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <TuLabel>Email</TuLabel>
          <TuInput type="email" placeholder="Enter email" name="email" value={email} onChange={ handleTextChange } required />
        </Form.Group>

        {/* GROUP 2: PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <TuLabel>Password</TuLabel>
          <TuInput type="password" placeholder="Enter password" name="password" value={password} onChange={ handleTextChange } required />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <TuButton loadingState={loading}>
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'Submit'}
        </TuButton>
      </Form>
      <TuInlineLink 
        to="/signup"
        descriptiveText="Not a member? &nbsp;"
        linkText="Sign Up"
      />
    </TuCard>
  )
}

export default Login