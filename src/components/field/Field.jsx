import './Field.css';

function Field({ label, value }) {
  return (
    <div className='field'>
      <dt className="field-label">{ label }</dt>
      <dd className="field-value">{ value }</dd>
    </div>
  );
};

export default Field;