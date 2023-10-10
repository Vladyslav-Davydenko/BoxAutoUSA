import clsx from "clsx";
// test
export default function Button(props) {
  const { children, className, ...rest } = props;

  const classNames = clsx(
    {
      "btn": true,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}