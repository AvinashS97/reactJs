// V65:
//* In the Context API, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component that needs access to the context data must be a desendant of the provider component that supplies the context Value.

import { useBioContext } from '.';

export const Services = () => {
  const { myName, myAge } = useBioContext()

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>
        Hello Context API (Services). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
