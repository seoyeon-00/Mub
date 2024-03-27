type Button = {
  children: string | React.ReactNode;
  onClick: () => void;
  style?: string;
};

const Button = ({ children, onClick, style }: Button) => {
  return (
    <div
      className={`${
        style === "blank"
          ? "border-fontGray text-fontGray"
          : "border-point  text-point"
      }
      w-full py-3 rounded text-center border-solid border-[1px] font-medium text-sm hover:-translate-y-1 transition-all  
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
