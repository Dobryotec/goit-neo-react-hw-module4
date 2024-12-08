import css from './Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div className={css.load}>
      <div>L</div>
      <div>O</div>
      <div>A</div>
      <div>D</div>
      <div>I</div>
      <div>N</div>
      <div>G</div>
    </div>
  );
};

export default Spinner;
