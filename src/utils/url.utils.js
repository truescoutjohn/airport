import moment from 'moment';

export const setQueryParams = (filterText, date, setSearchParams) => {
  if (filterText !== '') {
    setSearchParams({
      date: moment(date).format('DD-MM-YYYY'),
      search: filterText,
    });
  } else {
    setSearchParams({
      date: moment(date).format('DD-MM-YYYY'),
    });
  }
};

export const setUrl = (filterText, navigation, location) => {
  if (filterText !== '') {
    navigation({
      path: location.pathname,
      search: `?search=${filterText}`,
    });
  } else {
    navigation(location.pathname);
  }
};
