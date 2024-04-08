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

  
---

## Accordion

--- 
  
![image](https://github.com/Deave7/gustav-component/assets/136354455/c9be0200-7bf3-4669-be55-c753ae2637ce)
  
Den har två olika teman som standard, "light" eller "dark"  
Lägg till fler teman genom att ändra på themes.scss

### Light
![image](https://github.com/Deave7/gustav-component/assets/136354455/ab048aba-4f5e-4264-8492-15e2541e44ce)

### Dark

![image](https://github.com/Deave7/gustav-component/assets/136354455/9f64d883-746f-408a-9200-d60608e9e7d8)

---

Title proppen styr titlen på Accordionen och Content propen styr vad som hamnar i den utfällbara rutan.  

