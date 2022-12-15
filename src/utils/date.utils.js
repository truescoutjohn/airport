export const determineDate = (whenDay, setCallbackFunc, today) => {
  switch (whenDay) {
    case 'yesterday':
      setCallbackFunc(today.getDate() - 1);
      break;
    case 'today':
      setCallbackFunc(today.getDate());
      break;
    case 'tomorrow':
      setCallbackFunc(today.getDate() + 1);
      break;
    default:
      throw new Error('wrong when day');
  }
};

export const setSiblingDate = (whenDay, setCallbackFunc, today) => {
  switch (whenDay) {
    case 'yesterday':
      setCallbackFunc(new Date(today.setDate(today.getDate() - 1)));
      break;
    case 'today':
      setCallbackFunc(today);
      break;
    case 'tomorrow':
      setCallbackFunc(new Date(today.setDate(today.getDate() + 1)));
      break;
    default:
      throw new Error('wrong when day');
  }
};
