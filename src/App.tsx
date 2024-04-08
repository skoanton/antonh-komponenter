import ListBox from "./components/ListBox/ListBox";
import Mode from "./components/Mode/Mode";
function App() {
  const listItems: string[] = [
    "Robert",
    "Adam",
    "Eva",
    "Hans",
    "Ettjättelångtnamnsåattdetkanskeblirlitecooltochsåntvetinte",
  ];

  return (
    <>
      <ListBox
        listItems={listItems}
        dropdownLabel="ListBox 1"
        dropdownPlaceholder="Pick a name"
        multipleList={true}
        multipleListSize={10}
        inlineDropdown={false}
        boxBorder={true}
        borderSizeInPixels={1}
      ><Mode /></ListBox>
    </>
  );
}

export default App;
