import classNames from 'classnames';
import './textbox.scss';

type TextBoxProps = {
  name: string;
  id?: string;
  label?: string;
  className?: string;
  isValid?: boolean;
};

const TextBox = ({ name, id, label, className, ...props }: TextBoxProps) => {
  const textBoxClassName = classNames('textbox', className);

  return (
    <div className={textBoxClassName}>
      {label && <label>{label}</label>}
      <input type='text' name='name' id={id} {...props} />
    </div>
  );
};

export default TextBox;
