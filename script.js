// ნავიგაციის მობილური მენიუ
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // ანიმაცია hamburger-ისთვის
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// მენიუს დახურვა ლინკზე დაჭერისას
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// გლუვი სქროლი
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ექიმის ჯავშნა და დარეკვა
function bookDoctor(doctorName, phoneNumber) {
    // ვადასტურებთ მომხმარებელს
    if (confirm(`გსურთ დარეკვა ექიმთან: ${doctorName}?`)) {
        // ვახსენებთ ტელეფონის აპლიკაციას
        window.location.href = `tel:${phoneNumber}`;
    }
}

// სქროლი ჯავშნის სექციაზე
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ჯავშნის ფორმის გაგზავნა
function submitBooking() {
    const name = document.getElementById('bookingName').value;
    const phone = document.getElementById('bookingPhone').value;
    const doctor = document.getElementById('bookingDoctor').value;
    const date = document.getElementById('bookingDate').value;
    const comment = document.getElementById('bookingComment').value;

    // ვალიდაცია
    if (!name || !phone || !doctor || !date) {
        alert('გთხოვთ შეავსოთ ყველა სავალდებულო ველი!');
        return;
    }

    // ტელეფონის ვალიდაცია
    const phoneRegex = /^[\+]?[0-9]{9,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        alert('გთხოვთ შეიყვანოთ სწორი ტელეფონის ნომერი!');
        return;
    }

    // წარმატებული გაგზავნა
    alert(`გმადლობთ, ${name}!\n\nთქვენი ჯავშანი მიღებულია:\n\nექიმი: ${doctor}\nთარიღი: ${date}\nტელეფონი: ${phone}\n\nჩვენი კონსულტანტი დაგიკავშირდებათ 15 წუთში!`);

    // ფორმის გასუფთავება
    document.getElementById('bookingName').value = '';
    document.getElementById('bookingPhone').value = '';
    document.getElementById('bookingDoctor').value = '';
    document.getElementById('bookingDate').value = '';
    document.getElementById('bookingComment').value = '';

    // აქაც შეგიძლიათ დაამატოთ AJAX მოთხოვნა სერვერზე
    // fetch('/api/booking', { method: 'POST', body: JSON.stringify({...}) })
}

// კონტაქტის ფორმის გაგზავნა
function submitContact() {
    const name = document.getElementById('contactName').value;
    const lastName = document.getElementById('contactLastName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // ვალიდაცია
    if (!name || !lastName || !email || !phone || !message) {
        alert('გთხოვთ შეავსოთ ყველა სავალდებულო ველი!');
        return;
    }

    // ელ.ფოსტის ვალიდაცია
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა!');
        return;
    }

    // წარმატებული გაგზავნა
    alert(`გმადლობთ, ${name} ${lastName}!\n\nთქვენი შეტყობინება მიღებულია.\n\nჩვენ დაგიკავშირდებით უმოკლეს დროში შემდეგ საკონტაქტო ინფორმაციაზე:\n\nელ.ფოსტა: ${email}\nტელეფონი: ${phone}`);

    // ფორმის გასუფთავება
    document.getElementById('contactName').value = '';
    document.getElementById('contactLastName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactSubject').value = '';
    document.getElementById('contactMessage').value = '';

    // აქაც შეგიძლიათ დაამატოთ AJAX მოთხოვნა სერვერზე
}

// ნავიგაციის ფონი სქროლზე
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    }
});

// თარიღის მინიმუმი (დღევანდელი დღე)
const dateInputs = document.querySelectorAll('input[type="date"]');
if (dateInputs.length > 0) {
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });
}

// ანიმაციები სქროლზე (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ანიმაციების დამატება ელემენტებზე
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .doctor-card, .stat-card, .benefit-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ტელეფონის ნომრის ფორმატირება (ავტომატური)
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        // თუ იწყება 995-ით, ვტოვებთ
        if (value.startsWith('995')) {
            if (value.length > 12) {
                value = value.substring(0, 12);
            }
            e.target.value = '+' + value;
        } 
        // თუ სხვა ნომერია
        else {
            if (value.length > 9) {
                value = value.substring(0, 9);
            }
            if (value.length > 0) {
                e.target.value = '+995 ' + value;
            }
        }
    });
});

// კონსოლში შეტყობინება
console.log('%c🦷 DentiCo - სტომატოლოგიური კლინიკა', 'color: #00a8e8; font-size: 20px; font-weight: bold;');
console.log('მოგესალმებით! თუ გაქვთ შეკითხვები, დაგვიკავშირდით: +995 555 000 000');
