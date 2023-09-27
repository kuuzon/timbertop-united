import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

// LOCAL MODULES
import authService from '../../services/authService';
import useAuth from '../../hooks/useAuth';
import TuCard from '../../components/common/TuCard';
import TuLabel from '../../components/common/TuLabel';
import TuInput from '../../components/common/TuInput';
import TuInlineLink from '../../components/common/TuInlineLink';
import TuButton from '../../components/common/TuButton';

function Signup() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { username, email, password } = user;

  // FORM FUNCTIONS
  // [1] handleTextChange handles state value change for all login data
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // [2] handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Early Validation - Error Check First
    if(password !== passwordConfirmRef.current.value){
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    // API Call to Write User Data
    try {
      const response = await authService.register(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch(err) {
      console.log(err?.response);
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }

  return (
    <TuCard title="Sign Up" authform>
      <Form onSubmit={ handleSubmit }>
        {/* GROUP 1: USERNAME */}
        <Form.Group className="mb-3" controlId="username">
          <TuLabel>Username</TuLabel>
          <TuInput
            type="text" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={ handleTextChange }
          />
        </Form.Group>
        {/* GROUP 2: EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <TuLabel>Email</TuLabel>
          <TuInput type="email" placeholder="Email" name="email" value={email} onChange={ handleTextChange } />
        </Form.Group>

        {/* GROUP 3: PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <TuLabel>Password</TuLabel>
          <TuInput type="password" placeholder="Password" name="password" value={password} onChange={ handleTextChange } />
        </Form.Group>

        {/* GROUP 4: PASSWORD CONFIRM */}
        <Form.Group className="mb-3" controlId="password-confirm">
          <TuLabel>Password</TuLabel>
          <TuInput type="password" placeholder="Password Confirmation" ref={passwordConfirmRef} />
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
        to="/login"
        descriptiveText="Already a member? &nbsp;"
        linkText="Login Here"
      />
    </TuCard>
  )
}

export default Signup