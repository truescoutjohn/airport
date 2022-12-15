const baseUrl = 'https://api.iev.aero/api/flights/';
export default date => fetch(`${baseUrl}${date}`).then(response => response.json());
