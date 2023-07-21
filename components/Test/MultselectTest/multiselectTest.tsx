import Multiselect from "multiselect-react-dropdown";
import { useId } from "react";
import Select from "react-select";

const MultiselectTest = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <Select
        instanceId={useId()}
        className="w-[500px]"
        options={options}
        isMulti
      />
      <div className="mt-5 w-[500px]">
        <Multiselect
          displayValue="key"
          placeholder="Option 2 with checkboxes"
          hideSelectedList
          showArrow
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={[
            {
              cat: "Group 1",
              key: "Option 1 that is super long text here what the heck",
            },
            {
              cat: "Group 1",
              key: "Option 2",
            },
            {
              cat: "Group 1",
              key: "Option 3",
            },
            {
              cat: "Group 2",
              key: "Option 4",
            },
            {
              cat: "Group 2",
              key: "Option 5",
            },
            {
              cat: "Group 2",
              key: "Option 6",
            },
            {
              cat: "Group 2",
              key: "Option 7",
            },
          ]}
          showCheckbox
        />
      </div>
    </>
  );
};
export default MultiselectTest;
