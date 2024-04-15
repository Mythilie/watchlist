
export const filterData = (searchText, videos) => {
    const filterData = videos.filter((video) => video.Title?.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}


