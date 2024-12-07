const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "Absolutely incredible service! The team went above and beyond our expectations. Would highly recommend to anyone looking for top-notch quality.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "The attention to detail and technical expertise demonstrated throughout the project was impressive. A pleasure to work with!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    content:
      "Game-changing results for our business. The innovative solutions provided helped us reach our goals faster than expected.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "James Rodriguez",
    role: "Creative Director",
    content:
      "Outstanding creativity and professionalism. They truly understand how to deliver exceptional results while maintaining clear communication.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "CEO",
    content:
      "A transformative partnership that has significantly impacted our business growth. Their strategic approach is unmatched.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Park",
    role: "UX Designer",
    content:
      "Their attention to user experience and design details made all the difference. The final product exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const createTestimonialCard = (testimonial) => {
  return `
        <div class="card">
            <div class="profile">
              <img src="${testimonial.image}" alt="${testimonial.name}" />
              <div>
                <div class="name">${testimonial.name}</div>
                <div class="role">${testimonial.role}</div>
              </div>
            </div>

            <div class="content">
              ${testimonial.content}
            </div>
          </div>
    `;
};

const populateColumn = (columnId) => {
  const column = document.getElementById(columnId);

  [...testimonials, ...testimonials].forEach((testimonial) => {
    column.innerHTML += createTestimonialCard(testimonial);
  });
};

testimonials.sort(() => Math.random() - 0.5);
populateColumn("column1");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column2");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column3");
