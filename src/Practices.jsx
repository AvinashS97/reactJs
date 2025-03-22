export const Practices = () => {
  const students = ['Avinash', 'sharma']
  return (
    <>
      {/* <p>{students.length  && "No  students found"}</p> */}

      {/* 1st Solution */}
      <p>{students.length === 0 && 'No  students found'}</p>
      {/* 2nd Solution */}
      <p>{!students.length && 'No  students found'}</p>
      <p>Number of Students: {students.length}</p>
    </>
  );
};
