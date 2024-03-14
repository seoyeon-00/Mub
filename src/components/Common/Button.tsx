type Button = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Button) => {
  return (
    <div
      className="w-full py-3 border-point rounded text-center border-solid border-[1px] text-point font-medium text-sm"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
