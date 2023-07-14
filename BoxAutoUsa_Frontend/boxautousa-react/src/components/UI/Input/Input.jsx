import clsx from "clsx";

export default function Input(props) {
  const { className, placeholder, type = "text", ...rest } = props;

  const classNames = clsx({ input: true }, className);

  return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames}
          {...rest}
        />
      </div>
  );
}