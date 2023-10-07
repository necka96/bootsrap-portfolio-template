function runTypingEffect() {
  const text = "I am John Smith.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

const stats = document.querySelector(".stats");
function useIncrementStats() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.textContent = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-bs-counter");
      console.log(target);
      const currentNumber = +counter.textContent;
      const smoothIcrement = target / 500;

      if (currentNumber < target) {
        counter.textContent = Math.ceil(currentNumber + smoothIcrement);
        setTimeout(updateCounter, 1);
      } else if (target === 16) {
        counter.textContent = target + "+";
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

const obesrveCounter = new IntersectionObserver((itemToWatch) => {
  itemToWatch.forEach((item) => {
    if (item.isIntersecting) {
      useIncrementStats();
      obesrveCounter.unobserve(item.target);
    }
  });
});
obesrveCounter.observe(stats);

document.addEventListener("DOMContentLoaded", runTypingEffect);
document.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("date");
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
  const formElement = document.querySelector("form");
  const submitFormText = document.querySelector("#fomrText");

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    console.log(formData);
    const clientName = formData.get("name");
    formElement.style.display = "none";
    submitFormText.textContent = `${clientName} your message has been received. I am grateful for your interest
              and will get back to you shortly.`;
  });
});
