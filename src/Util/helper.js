export const filterData = (searchText, videos) => {
  try {
    const filterData = videos.filter((video) =>
      video.Title?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const setSavedMovie = (email, movieDetails) => {
  try {
    let allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
    allAccounts.users.map((user) => {
      if (email === user.email) user.savedMovies.push(movieDetails);
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
