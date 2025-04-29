//  16th Video ---> Passing JSX as Props

function Profile () {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name='Alice'
        age={30}
        greeting={
          <div>
            <strong>Hii Alice, have a good day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading </p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name='Bob'
        age={28}
        greeting={
          <div>
            <strong>Hii Bob, have a good day!</strong>
          </div>
        }
      >
        <p>Hobbies: Coding </p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};

export default Profile;

function ProfileCard ({ name, age, greeting, children }) {
  // const {name, age, greeting, children} = props;

  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
};
