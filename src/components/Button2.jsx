const Button = ({ name, isBeam = false, containerClass = '', onClick }) => {
    return (
      <a href="#contact" >
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
  
  export default Button;