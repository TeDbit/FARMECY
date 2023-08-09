//marking
export const onCheckChange = (itemID, itemArray, setArray) => {
  const updateArray = itemArray.map((item) =>
    item.Id === itemID ? { ...item, selected: !item.selected } : item
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

//deleting
export const deleteItem = (itemArray, setArray) => {
  const upContactData = itemArray.filter((item) => !item.selected);
  setArray(upContactData);
};
