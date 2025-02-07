
// import { BioContext, useBioContext } from '.';
import { use } from 'react';
import { BioContext } from '.';

export const About = () => {
  // const { myName, myAge } = useBioContext();

  // const { myName, myAge } = use(BioContext);

  //* use can be called inside conditionals like if and loops like for. 

  const newHook = true;
  let myName, myAge;
  if (newHook) {
    ({ myName, myAge } = use(BioContext));
  }


  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>
        Hello Context API (About). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
