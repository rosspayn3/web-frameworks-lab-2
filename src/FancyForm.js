import FancyInput from "./FancyInput";
import FancySelect from "./FancySelect";
import FancyButton from "./FancyButton";

const FancyForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <fieldset style={{ border: "2px groove white" }}>
        <legend
          style={{ border: "4px groove white", padding: "0.25em 0.75em" }}
        >
          FancyForm
        </legend>
        <form onSubmit={handleSubmit}>
          <FancySelect options={props.concentrations} />
          <FancyInput />
          <FancyButton />
        </form>
      </fieldset>
    </div>
  );
};

export default FancyForm;
