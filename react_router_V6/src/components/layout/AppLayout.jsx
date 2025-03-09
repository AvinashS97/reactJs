import { Outlet, useNavigation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

const AppLayout = () => {

  const navigation = useNavigation();
  console.log(navigation);
  
  // const text =
  // navigation.state === "submitting"
  // ? "Saving..."
  // : navigation.state === "loading"
  // ? "Saved!"
  // : "Go";

  // return <button type="submit"></button>

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout;
