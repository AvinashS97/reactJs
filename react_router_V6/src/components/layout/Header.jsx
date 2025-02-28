export const Header = () => {
  return (
    <>
      <header className='section-navbar'>
        <section className='top_txt'>
          <div className='head container'>
            <div className='head_txt'>
              <p>Get Thapa Membership, 30-day return or refund gurantee.</p>
            </div>
            <div className='sign_in_up'>
              <a href='#'>SIGN IN</a>
              <a href='#'>SIGN UP</a>
            </div>
          </div>
        </section>

        <div className='container'>
          <div className='navbar-brand'>
            <a href='index'>
              <p>ThapaFlix</p>
            </a>
          </div>

          <nav className='navbar'>
            <ul>
              <li className='nav-item'>
                <a href='/' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='/about' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='movie' className='nav-link'>
                  Movies
                </a>
              </li>
              <li className='nav-item'>
                <a href='contact' className='nav-link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

// 06:41
