import clsx from "clsx";

export default function Input(props) {
  const { className, placeholder, required, type = "text", ...rest } = props;

  const classNames = clsx({ input: true }, className);

  return (
      <label className="label">
      <span className="sr-only">{placeholder}</span>
      {required && <span className={"input-required sr-only"}>*</span>}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}