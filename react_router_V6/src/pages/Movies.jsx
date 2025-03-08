import { useLoaderData } from 'react-router-dom';

export const Movie = () => {
  const moviesData = useLoaderData()
  console.log(moviesData)
  return (
    <>
      <ul className='grid grid-four--cols container'>
        {MoviesData &&
          moviesData.Search.map(curMovie => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
          })}
      </ul>
    </>
  );
};
