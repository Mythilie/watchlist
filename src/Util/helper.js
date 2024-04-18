export const filterData = (searchText, movies) => {
  try {
    const filterData = movies.filter((movie) =>
      movie.Title?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const setSavedMovie = (email, movieDetails) => {
  try {
    let allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
    allAccounts?.users?.map((user) => {
      if (email === user.email) user.savedMovies.push(movieDetails);
      return user;
    });
    localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const modifySavedMovie = (email, Title) => {
  try {
    let allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
    allAccounts?.users?.map((user) => {
      if (email === user.email) {
        user.savedMovies = user.savedMovies.filter(
          (movie) => Title !== movie.Title
        );
      }
      return user;
    });
    localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSavedMovie = (email) => {
  try {
    let existingUserMovies = JSON.parse(localStorage.getItem("allAccounts"));
    return existingUserMovies.users.filter((user) => user.email === email)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};
