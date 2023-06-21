let testimonialContainer = document.querySelector(".testimonial-container");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");

let testimonials = [
{
name: "John Doe",
job: "Web Developer",
testimonial: "I'm really happy with the services I received from this company. They were very responsive and helpful, and the final product was exactly what I was looking for."
},
{
name: "Jane Doe",
job: "Graphic Designer",
testimonial: "I was very impressed with the quality of work that this company did. They were able to take my ideas and turn them into a beautiful and functional design."
},
{
name: "Bill Smith",
job: "Business Owner",
testimonial: "I'm so glad I decided to work with this company. They were able to help me grow my business by creating a website that is both informative and visually appealing."
}
];

let currentTestimonial = 0;

prevButton.addEventListener("click", () => {
currentTestimonial = (currentTestimonial - 1) % testimonials.length;
displayTestimonial();
});

nextButton.addEventListener("click", () => {
currentTestimonial = (currentTestimonial + 1) % testimonials.length;
displayTestimonial();
});

function displayTestimonial() {
testimonialContainer.innerHTML = `
<p>${testimonials[currentTestimonial].testimonial}</p>
<img src="${testimonials[currentTestimonial].image}" alt="Testimonial">
<h3>${testimonials[currentTestimonial].name}</h3>
<h6>${testimonials[currentTestimonial].job}</h6>
`;
}

displayTestimonial();
