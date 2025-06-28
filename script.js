// const loginForm = document.getElementById("loginForm");
// const userRoleSpan = document.getElementById("userRole");
// const dashboard = document.getElementById("dashboard");
// const bookingSection = document.getElementById("book");
// const historySection = document.getElementById("history");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const role = document.getElementById("role").value;
//   if (role) {
//     userRoleSpan.textContent = role.toUpperCase();
//     document.querySelector(".login").classList.add("hidden");
//     dashboard.classList.remove("hidden");
//     bookingSection.classList.remove("hidden");
//     historySection.classList.remove("hidden");
//     // Sample room data
//     displayRooms(role);
//   }
// });

// function displayRooms(role) {
//   const roomsContainer = document.getElementById("rooms");
//   roomsContainer.innerHTML = "";

//   const sampleRooms = [
//     { name: "Room A", capacity: 10, location: "1st Floor", amenities: "Projector, AC" },
//     { name: "Room B", capacity: 6, location: "2nd Floor", amenities: "TV, Whiteboard" },
//   ];

//   sampleRooms.forEach((room) => {
//     const roomDiv = document.createElement("div");
//     roomDiv.innerHTML = `
//       <strong>${room.name}</strong> - ${room.location}<br>
//       Capacity: ${room.capacity}<br>
//       Amenities: ${room.amenities}<br><br>
//     `;
//     roomsContainer.appendChild(roomDiv);
//   });
// }

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("role").value;
  alert(`Login successful as ${role.toUpperCase()}`);
});


