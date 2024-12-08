import { IContainerProps } from './Container.types';
import css from './Container.module.css';

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
