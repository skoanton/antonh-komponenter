# List box kompontent

Jag har gjort en dropdown komponent som tar inte följande props

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
