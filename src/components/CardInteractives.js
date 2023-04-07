export default function CardInteractives(props) {
  return (
    <section className="card-interactives">
      <div className="card-interactives-wrapper">
        <button className="add-card" onClick={props.handleNewCard}>
          Add New Card
        </button>
        <input
          onChange={props.handleSearchCards}
          type="text"
          placeholder="Search your cards ..."
        />
        <button onClick={props.handleClearMemory}>Clear Card Memory</button>
      </div>
    </section>
  );
}
