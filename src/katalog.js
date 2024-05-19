const listElement = document.getElementById("courseContainer");
const paginationElement = document.getElementById("pagination");
const searchInput = document.querySelector(".form-control");

// pagination
let currentPage = 1;
let rows = 3;
let columns = 2;
let itemsPerPage = rows * columns;
let courses = [];

// API
async function initializeCourses() {
  try {
    const response = await axios.get(
      "https://be-edspert.vercel.app/api/products"
    );
    const fetchedData = response.data;

    if (fetchedData && fetchedData.products) {
      courses = fetchedData.products;
    } else {
      courses = [];
    }

    displayList(courses, listElement, rows, columns, currentPage);
    displayPagination();
  } catch (error) {
    console.error("Error initializing courses:", error);
  }
  console.log("response", courses);
}

// DISPLAY CARD
function displayList(items, wrapper, rows, columns, page) {
  wrapper.innerHTML = "";
  page--;

  const itemsPerPage = rows * columns;
  const start = itemsPerPage * page;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const course = paginatedItems[i];

    const column = document.createElement("div");
    column.classList.add("col-md-3");
    column.innerHTML = `
            <div class="card mb-4">
                <img src="./asset/kelas.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">Batch ${course.batch}</p>
                    <ul>
                    ${
                      course.facility
                        ? course.facility
                            .map(
                              (facility) =>
                                `<li><img src="./asset/check-icon.png"> ${facility}</li>`
                            )
                            .join("")
                        : ""
                    }
                    </ul>
                    <div class="pricing">
                    <del class="card-text price">Rp ${
                      course.price
                        ? course.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        : "N/A"
                    }</del>
                    <h5 class="discount">Rp ${
                      course.disc
                        ? course.disc
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        : "N/A"
                    }</h5>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary daftar-button" data-id="${
                          course.id
                        }" type="button">Daftar Sekarang</button>
                    </div>
                </div>
            </div>`;
    wrapper.appendChild(column);
  }

//   BUTTON DAFTAR
  const buttons = document.querySelectorAll(".daftar-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const courseId = event.target.getAttribute("data-id");
      window.location.href = `product?id=${courseId}`;
    });
  });
}

// SEARCH FEATURE
function filterCourses(keyword, page = 1) {
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(keyword.toLowerCase())
  );
  displayList(filteredCourses, listElement, rows, columns, page);
}

function filter(keyword = "", page = 1) {
  filterCourses(keyword, page);
  displayPagination();
}

// PAGINATION
function displayPagination() {
  let totalPages = Math.ceil(courses.length / itemsPerPage);
  paginationElement.innerHTML = "";

  let prevButton = document.createElement("li");
  prevButton.classList.add("page-item");
  prevButton.innerHTML = `
        <a class="page-link prev" tabindex="-1" aria-disabled="true">&#8592; Previous</a>
    `;
  paginationElement.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    let button = document.createElement("li");
    button.classList.add("page-item");
    button.innerHTML = `
            <a class="page-link" href="#">${i}</a>
        `;
    paginationElement.appendChild(button);
  }

  let nextButton = document.createElement("li");
  nextButton.classList.add("page-item");
  nextButton.innerHTML = `
        <a class="page-link next" href="#">Next &#8594;</a>
    `;
  paginationElement.appendChild(nextButton);
}

searchInput.addEventListener("input", function () {
  filter(this.value);
});

paginationElement.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    if (event.target.classList.contains("prev") && currentPage > 1) {
      currentPage--;
    } else if (
      event.target.classList.contains("next") &&
      currentPage < Math.ceil(courses.length / itemsPerPage)
    ) {
      currentPage++;
    } else {
      currentPage = parseInt(event.target.textContent);
    }
    displayList(courses, listElement, rows, columns, currentPage);
  }
});

initializeCourses();

// module.exports = {displayList, displayPagination, filterCourses, filter}