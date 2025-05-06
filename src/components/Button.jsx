const Button2 = ({ name, isBeam = false, containerClass = '', onClick }) => {
  return (
    <a href="/resume.pdf" download>
      <button onClick={onClick} className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </button>
    </a>
  );
};

export default Button2;
