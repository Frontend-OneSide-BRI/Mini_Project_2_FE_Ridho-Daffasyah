//File js for function core

//Initiate data photos and category
//Get data from folder images and category
export let dataImg = [];
export let dataVideo = [];

//Function: Make JSON data video
const getDataVideo = (category) => {
  for (let i = 1; i <= 1; i++) {
    dataVideo.push({
      id: i,
      src: `/assets/videos/${category}/${category}-${i}.mp4`,
      name: `Video-${category}-${i}`,
      category: category,
      type: "video",
      title: "Explore and Get Your Best",
      description: "Curated images and videos by our visual experts to help you make an emotional connection with your audience."
    });
  }
  return dataVideo;
};

//Function: Make JSON data image
const getDataImg = (category) => {
  if (category === "nature") {
    for (let i = 1; i <= 7; i++) {
      dataImg.push({
        id: i,
        src: `/assets/images/${category}/${category}-${i}.jpg`,
        category: category,
        name: `Image-${category}-${i}`,
        type: "image",
        title: "Explore and Get Your Best",
        description: "Curated images and videos by our visual experts to help you make an emotional connection with your audience."
      });
    }
  } else {
    for (let i = 1; i <= 8; i++) {
      dataImg.push({
        id: i,
        src: `/assets/images/${category}/${category}-${i}.jpg`,
        category: category,
        name: `Image-${category}-${i}`,
        type: "image",
        title: "Explore and Get Your Best",
        description: "Curated images and videos by our visual experts to help you make an emotional connection with your audience."
      });
    }
  }
  return dataImg;
};

//Function: Filter data by category
export const filterData = (data, category) => {
  const dataFilter = data.filter((item) => item.category === category);
  return dataFilter;
};

//Function: Get one data from filter data
export const getOneData = (data) => {
  const dataOne = data.filter((item, index) => index === data.length - 1);
  return dataOne;
};

//Function: Merge dataImg and dataVideo
export const mergeData = (dataImg, dataVideo) => {
  const data = [];
  dataImg.map((item) => {
    return data.push(item);
  });
  dataVideo.map((item) => {
    return data.push(item);
  });
    return data;
};

//Run all Function
getDataImg("nature");
getDataImg("sport");
getDataImg("cartoon");
getDataVideo("nature");

