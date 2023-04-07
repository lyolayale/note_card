import React from "react";
import Header from "./components/Header";
import CardInteractives from "./components/CardInteractives";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

// State
import data from "./js/data";

export default class App extends React.Component {
  state = {
    isMounted: data.isMounted,
    header: data.header,
    cardData: data.cardData,
  };

  handleToggleTitle = () => {
    const reactCard = "React Card App";

    if (this.state.header !== reactCard) {
      this.setState(prev => ({ ...prev, header: reactCard }));
    } else {
      this.setState(prev => ({ ...prev, header: data.header }));
    }
  };

  handleChangeTitle = e => {
    if (e.target.value === "") {
      this.setState(prev => ({ ...prev, header: data.header }));
    } else {
      this.setState(prev => ({
        ...prev,
        header: e.target.value,
      }));
    }

    setTimeout(() => {
      e.target.value = "";
    }, 10000);
  };

  handleCardChange = e => {
    const { placeholder, value, id } = e.target;

    let cardData = this.state.cardData;
    cardData = cardData.filter(card => {
      if (card.id !== Number(id)) return card;

      placeholder === "title"
        ? (card.title = value)
        : (card.description = value);
      return card;
    });
    this.setState(prev => ({ ...prev, cardData }));
  };

  handleDeleteCard = e => {
    let cardData = this.state.cardData;
    cardData = cardData.filter(card => card.id !== Number(e.target.id));
    this.setState(prev => ({ ...prev, cardData }));
  };

  handleNewCard = () => {
    const getHeading = "PLEASE PROVIDE A HEADING FOR YOUR NEW CARD? ";
    const heading = prompt(getHeading);

    const newCard = {
      heading: heading,
      title: "",
      description: "",
      id: Date.now(),
      isOn: true,
    };

    this.setState(prev => ({
      ...prev,
      cardData: prev.cardData.concat(newCard),
    }));
  };

  handleSearchCards = e => {
    const { value } = e.target;

    let cardData = this.state.cardData;
    cardData = cardData.filter(card => {
      if (
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.description.toLowerCase().includes(value.toLowerCase()) ||
        card.heading.toLowerCase().includes(value.toLowerCase()) ||
        card.id.toString().includes(value)
      ) {
        card.isOn = true;
        return card;
      } else {
        card.isOn = false;
        return card;
      }
    });

    this.setState(prev => ({ ...prev, cardData }));
  };

  componentDidUpdate() {
    const stringCardData = JSON.stringify(this.state.cardData);
    localStorage.setItem("stringCardData", stringCardData);
  }

  componentDidMount() {
    if (this.state.isMounted) {
      const stringCardData = localStorage.getItem("stringCardData");

      if (stringCardData) {
        const parseCardData = JSON.parse(stringCardData);
        this.setState(prev => ({ ...prev, cardData: parseCardData }));
      }
    }
  }

  handleClearMemory = () => {
    localStorage.clear("stringCardData");
    window.location.reload();
  };

  render() {
    return (
      <main>
        <Header
          header={this.state.header}
          placeholder={this.state.placeholder}
          handleToggleTitle={this.handleToggleTitle}
          handleChangeTitle={this.handleChangeTitle}
        />
        <CardInteractives
          handleNewCard={this.handleNewCard}
          handleSearchCards={this.handleSearchCards}
          handleClearMemory={this.handleClearMemory}
        />
        <CardList
          cardData={this.state.cardData}
          handleCardChange={this.handleCardChange}
          handleDeleteCard={this.handleDeleteCard}
        />
        <Footer />
      </main>
    );
  }
}
