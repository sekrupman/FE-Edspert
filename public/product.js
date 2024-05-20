const fasilitas = [
  {
    image: "./asset/fasilitas/komunitas.png",
    title: "Komunitas",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
  {
    image: "./asset/fasilitas/1on1.png",
    title: "1-on-1 Session",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
  {
    image: "./asset/fasilitas/active-learning.png",
    title: "Active Learning",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
  {
    image: "./asset/fasilitas/happy-atmosphere.png",
    title: "Happy Atmosphere",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
  {
    image: "./asset/fasilitas/tugas.png",
    title: "Tugas",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
  {
    image: "./asset/fasilitas/intensive-bootcamp.png",
    title: "Intensive Bootcamp",
    text: "Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi.",
  },
];

// AMBIL PARAMS URL
const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

const courseId = getQueryParam("id");

// MENTOR
// const courseId = 2;

const detailCourse = async () => {
  try {
    const response = await axios.get(
      `https://be-edspert.vercel.app/api/products/`
    );
    const courses = response.data;
    // console.log('courses', courses);
    mentorList(courses, courseId);
    materi(courses, courseId);
    bannerTitle(courses, courseId);
    webTitleTab(courses, courseId);
  } catch (error) {
    console.error("Error fetching course details:", error);
  }
};
// BANNER
const title = document.getElementById("banner-title");
const bannerTitle = (courses, courseId) => {
  const filteredCourse = courses.products[courseId - 1];
  // console.log('filteredCourseTitle', filteredCourse);
  title.innerHTML = filteredCourse.title;
};

// TITLE HEAD
const webTitle = document.getElementById("website-title");
const webTitleTab = (courses, courseId) => {
  const filteredCourse = courses.products[courseId - 1];
  console.log("filteredCourseTitleTab", filteredCourse);
  webTitle.innerHTML = filteredCourse.title;
};

// webTitleTab(courses, courseId)

// MENTOR
const mentorList = (courses, courseId) => {
  const filteredCourse = courses.products[courseId - 1];
  console.log("courses", courses);
  console.log("courseId", courseId);
  console.log("filteredCourse", filteredCourse);

  const cardMentors = document.querySelectorAll(".card-mentor");

  filteredCourse.mentor.forEach((mentor, index) => {
    const randPhoto = Math.floor(Math.random() * 8) + 1;
    const card = cardMentors[index];
    card.innerHTML = `
      <div class="card" style="width: 18rem;height:25rem">
        <img src="./asset/mentor/Avatar-${randPhoto}.png" class="card-img-top" alt="Foto Mentor">
        <div class="card-body">
          <h5 class="card-title">${mentor}</h5>
          <h6 class="card-title">${filteredCourse.mentorJabatan[index]}</h6>
          <p class="card-text">${filteredCourse.mentorText[index]}</p>
          <div class="card-sosmed">
            <img src="./asset/twitter.png">
            <img src="./asset/linkedin.png">
            <img src="./asset/website.png">
          </div>
        </div>
      </div>
    `;
  });
};

// FACILITY
const cardFacility = document.querySelectorAll(".card-facility");

let index = 0;
for (let facilityIndex = 0; facilityIndex < fasilitas.length; facilityIndex++) {
  cardFacility.forEach((card) => {
    if (index < fasilitas.length) {
      card.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${fasilitas[index].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${fasilitas[index].title}</h5>
                        <p class="card-text">${fasilitas[index].text}</p>
                    </div>
                </div>
            `;
      index++;
    }
  });
}

// MATERI

const materi = (courses, courseId) => {
  const filteredCourse = courses.products[courseId - 1];
  // console.log('filteredCourseMateri', filteredCourse.materiText);
  const materiContainer = document.getElementById("materi-container");

  filteredCourse.materi.forEach((materi, index) => {
    const materiDiv = document.createElement("div");
    materiDiv.classList.add("flex", "flex-column", "materi-list");
    materiDiv.innerHTML = `
      <h5 class="list-title">${materi}</h5>
      <h6 class="list-text">${filteredCourse.materiText[index]}</h6>
    `;
    materiContainer.appendChild(materiDiv);
  });
};

detailCourse();


// module.exports={detailCourse, mentorList, materi, bannerTitle, webTitleTab}