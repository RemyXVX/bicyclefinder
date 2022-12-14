export default class Bike {
  static bikes(location) {
    return fetch ('https://bikeindex.org:443/api/v3/search?page=1&per_page=5&colors=all&location=all&distance=10&stolenness=all')
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}