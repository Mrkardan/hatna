// باز و بسته کردن منوی همبرگری
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});



// 


// انیمیشن متن خودکار
const words = ["سرود مثل هوای بهاری نفوذ میکند", "", "«ما امروز به سرود احتیاج داریم؛"];
let wordIndex = 0;
let charIndex = 0;
const dynamicTextElement = document.querySelector('.dynamic-text');

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        dynamicTextElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWriter, 100); // سرعت نوشتن
    } else {
        setTimeout(eraseText, 2000); // مدت زمان نمایش متن
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // سرعت پاک کردن
    } else {
        wordIndex = (wordIndex + 1) % words.length; // حرکت به کلمه بعدی
        setTimeout(typeWriter, 1000); // مدت زمان قبل از شروع متن جدید
    }
}

// شروع انیمیشن
setTimeout(typeWriter, 1000);