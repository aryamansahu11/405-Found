const users = [
  { name: "Anya Singh", skillsOffered: "JavaScript, HTML", skillsWanted: "Graphic Design", rating: "3.8" },
  { name: "Sarthak Thakur", skillsOffered: "JavaScript, HTML", skillsWanted: "Graphic Design", rating: "3.9" },
  { name: "David Mallan", skillsOffered: "JavaScript, HTML", skillsWanted: "Graphic Design", rating: "4.0" },
  { name: "Priya Kapoor", skillsOffered: "CSS, React", skillsWanted: "Video Editing", rating: "4.5" },
  { name: "Ravi Joshi", skillsOffered: "Python", skillsWanted: "UI Design", rating: "4.2" },
  { name: "Sneha Roy", skillsOffered: "C++", skillsWanted: "HTML", rating: "3.6" },
  { name: "Aman Verma", skillsOffered: "Figma", skillsWanted: "JavaScript", rating: "3.7" },
  { name: "Neha Das", skillsOffered: "React Native", skillsWanted: "UX Design", rating: "4.1" }
];

const cardsPerPage = 3;
let currentPage = 1;

function renderCards(page) {
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.slice(start, end).forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <img src="https://i.pravatar.cc/80?u=${user.name}" class="avatar">
      <div>
        <h3>${user.name}</h3>
        <p><strong>Skills Offered:</strong> ${user.skillsOffered}</p>
        <p><strong>Skills Wanted:</strong> ${user.skillsWanted}</p>
        <p>Rating: ${user.rating}/5</p>
        <button class="request-btn">Request</button>
      </div>
    `;
    userList.appendChild(card);
  });

  // Animate slide
  const offset = (page - 1) * 100;
  userList.style.transform = `translateX(-${offset}%)`;
  currentPage = page;
  updatePagination();
}

function updatePagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const totalPages = Math.ceil(users.length / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => renderCards(i);
    pagination.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(1);
});
