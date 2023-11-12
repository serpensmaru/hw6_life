export default function Card({ content, id, handleRemove }) {
  return (
    <div className="card">
    <i
      onClick={() => handleRemove(id)}
      className="fa fa-times-circle"
      aria-hidden="true"
    />
    <p className="content"> {content}</p>
  </div>
  )

}
