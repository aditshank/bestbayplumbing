// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const nav = document.querySelector(".nav")

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active")

  // Change icon based on menu state
  const icon = mobileMenuBtn.querySelector("i")
  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
  } else {
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (nav.classList.contains("active") && !nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    nav.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })

      // Close mobile menu if open
      if (nav.classList.contains("active")) {
        nav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    }
  })
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message = document.getElementById("message").value

    // In a real implementation, you would send this data to your server
    console.log("Form submitted:", { firstName, lastName, email, phone, message })

    // Show success message (in a real implementation)
    alert("Thank you for your message! We will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Add scroll animation for elements
function animateOnScroll() {
  const elements = document.querySelectorAll(".service-card, .testimonial-card, .feature")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.2

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
window.addEventListener("load", () => {
  // Add initial styles for animation
  const animatedElements = document.querySelectorAll(".service-card, .testimonial-card, .feature")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger initial animation
  setTimeout(animateOnScroll, 300)
})

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll)
