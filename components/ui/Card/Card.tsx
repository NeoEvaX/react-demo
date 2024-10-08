import clsx from "clsx";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-[480px] rounded-lg bg-white px-10 py-4 drop-shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
