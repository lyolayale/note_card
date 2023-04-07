import Card from "./Card";

export default function CardList(props) {
  return (
    <ul className="card-list">
      {props.cardData
        .filter(card => card.isOn)
        .map(card => (
          <Card
            key={card.id}
            id={card.id}
            heading={card.heading}
            title={card.title}
            description={card.description}
            handleCardChange={props.handleCardChange}
            handleDeleteCard={props.handleDeleteCard}
          />
        ))}
    </ul>
  );
}
