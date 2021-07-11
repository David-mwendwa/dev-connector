import './Landing.scss';

const Landing = () => {
  return (
    <div className='landing'>
      <h1 className='landing__heading'>Developer Connector</h1>
      <p className='landing__para'>
        Create a developer profile or portfolio, share posts and get help
        connect with fellow developers
      </p>
      <div className='buttons'>
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Landing;
