export default function Header(props) {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.header}</h1>
        <button onClick={props.handleToggleTitle}>Toggle the Title</button>
        <input
          onChange={props.handleChangeTitle}
          type="text"
          placeholder="Change the Title ..."
        />
      </div>
    </header>
  );
}
