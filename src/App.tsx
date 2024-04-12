import Accordion from "./components/Accordion/Accordion";
import ListBox from "./components/ListBox/ListBox";
import Navbar from "./components/Navbar/NavBar";
// import ShareButton from "./components/ShareButton/ShareButton";

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

//-------------------------------------Social Media Butten's---------------------------------------//

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn 
  { className: "discord", icon: "ri-discord-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" }
];

//------------------------------------------------------------------------------------------//



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
      <Navbar GoToNavLink={GoToNavLink} />
      <ListBox
        listItems={listItems}
        dropdownLabel="ListBox 1"
        dropdownPlaceholder="Pick a name"
        multipleList={true}
        multipleListSize={10}
        inlineDropdown={false}
        boxBorder={true}
        borderSizeInPixels={1}
      />
      <Accordion title={"Test Anton"} content={'Test content'} theme={"dark"} />
      {/* <ShareButton socialLinks={socialLinks} /> */}
    </>
  );
}

export default App;
