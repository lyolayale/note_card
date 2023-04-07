export default function Card(props) {
  return (
    <li className="card">
      <h2>{props.heading}</h2>
      <input
        onChange={props.handleCardChange}
        value={props.title}
        type="text"
        placeholder="title"
        id={props.id}
      />
      <input
        onChange={props.handleCardChange}
        value={props.description}
        type="text"
        placeholder="description"
        id={props.id}
      />
      <button
        className="card-btn"
        onClick={props.handleDeleteCard}
        id={props.id}
      >
        Task Complete ❌
      </button>
    </li>
  );
}
