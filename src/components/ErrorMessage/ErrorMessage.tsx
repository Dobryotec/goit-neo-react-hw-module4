import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return <div className={css.error}>Something went wrong!</div>;
};

export default ErrorMessage;
