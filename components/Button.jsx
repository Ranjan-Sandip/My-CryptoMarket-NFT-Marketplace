const Button = ({ btnName, classStyles, handleClick }) => (
  <buttton
    type="button"
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </buttton>

);

export default Button;
