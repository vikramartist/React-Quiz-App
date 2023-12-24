const Header = () => {
  return (
    <header className="header">
      <section className="flex flex-wrap justify-evenly items-center">
        <img
          src="src\assets\react.svg"
          alt="React logo"
          className="header-img"
        />
        <h1 className="header-text">THE REACT QUIZ</h1>
      </section>
    </header>
  );
};

export default Header;
