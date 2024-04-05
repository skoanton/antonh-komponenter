import ListBox from "./components/ListBox/ListBox";
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
        multipleList={false}
        multipleListSize={10}
        inlineDropdown={true}
        boxBorder={false}
        borderSizeInPixels={1}
      />
    </>
  );
}

export default App;
