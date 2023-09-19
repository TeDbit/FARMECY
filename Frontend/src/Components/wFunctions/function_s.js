//marking
export const onCheckChange = (itemID, itemArray, setArray) => {
  const updateArray = itemArray.map((item) =>
    item._id === itemID ? { ...item, selected: !item.selected } : item
  );

  setArray(updateArray);
};

//marking all
export const markAll = (itemArray, setArray) => {
    var markCount = 0;
    itemArray.forEach((item) => {
      if (item.selected) {
        markCount++;
      }
      return markCount;
    });

    const mark_all = itemArray.map((item) =>
      markCount !== itemArray.length
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    setArray(mark_all);
};

export const deselectAll = (itemArray) => {
    
    itemArray.map((item) =>
    item.selected = false
     
    );
};

//deleting
export const deleteItem = (itemArray, setArray) => {
  const upContactData = itemArray.filter((item) => !item.selected);
  setArray(upContactData);
};

//searching
export const searchItems = (itemArray, setArray) => {
  let searchedItem = document.getElementById("searchbar").value;
  searchedItem = searchedItem.toLowerCase();
  console.log(searchedItem);

  const searchedData = itemArray.filter((item) =>
    item.name.toLowerCase().includes(searchedItem)
  );
  setArray(searchedData);
};
