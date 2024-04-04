export const addTask = (data) => {
  return {
    type: "Add_Task",
    payload: { id: new Date.now(), data: data },
  };
};

export const deleteTask = () => {
  return {
    type: "Delete_Task",
  };
};
