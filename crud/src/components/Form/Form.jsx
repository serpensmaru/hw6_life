export default function Form({ handleSubmit, handleChange, value }) {
  return (
    <form onSubmit={handleSubmit} className="form">
    <textarea value={value} onChange={handleChange} required={true} />
    <button className="btn-send" onSubmit={handleSubmit} disabled={!value}>
      {" "}
      <i className="fa fa-paper-plane-o" aria-hidden="true" />
    </button>
  </form>
  )
}