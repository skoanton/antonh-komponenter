# List box kompontent

Jag har gjort en dropdown komponent som tar in följande props

```js
type ListBoxProps = {
  listItems: string[], // Listan med saker du vill ha med
  dropdownPlaceholder: string, // Din dropdown Placeholder
  dropdownLabel: string, // Din dropdown label
  multipleList: boolean, // Om du vill ha en lång lista eller en vanlig dropdown
  multipleListSize: number, // Antal saker som ska visas om du valt lista
  inlineDropdown: boolean, // En inline dropdown eller inte
  boxBorder: boolean, // Om du vill ha en border runt containern
  borderSizeInPixels: number, //Hur stor bordern ska vara
};
```

## Några exempel på hur det kan se ut

### Med Border och multilist

```js
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
```

![alt text](image-2.png)

### Utan border och en inline

```js
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
```

![alt text](image-1.png)

**************************************************************************************************

# Information if you want to use all the icons intended for this Navbar
* You need to install a patch which is

- * npm install react-icons

## then import from the following link
* import { FaBars, FaTimes } from "react-icons/fa";



- if you want to check more icons, go to =>
https://react-icons-v2.vercel.app/

**********************************************************************************

### *** [this is the HTML link < link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" /> ]

# If you want to use the share button code. 

* And you want to change the link where it should go, and if you want to change icons,
need to make changes in three places, 

* 1. App.tsx => here you change link to icon

* 2. buttens.scss => from line 118 downwards, you change the name of the link as well as the color name,
 
* 3. _colors.scss => here you change the color code for the icon and what it should be called.

* I recommend that you check this link => 
https://remixicon.com/
