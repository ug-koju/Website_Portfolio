// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Any link pointing to #top (logo, footer "Back to top") scrolls smoothly to the very top.
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#top');
  });
});

// Contact form — sends straight to your inbox via Formspree (free, no backend needed).
//
// SETUP (2 minutes, one-time):
//   1) Go to https://formspree.io and sign up free with yugalkoju108@gmail.com
//   2) Create a new form — Formspree gives you an endpoint like:
//        https://formspree.io/f/abcdwxyz
//   3) Paste that endpoint below, replacing FORMSPREE_ENDPOINT's value.
//   4) Formspree will send one confirmation email the first time — click the
//      link in it to activate the form. After that, every submission from
//      this site lands directly in your inbox.
//
// Until step 3 is done, the form automatically falls back to opening the
// visitor's own email client instead, so nothing is ever broken.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeryjeg';

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function sendViaMailto(name, email, message) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:yugalkoju108@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email client…';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in every field before sending.';
    return;
  }

  const formspreeConfigured = FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');

  if (!formspreeConfigured) {
    sendViaMailto(name, email, message);
    form.reset();
    return;
  }

  status.textContent = 'Sending…';

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });

    if (response.ok) {
      status.textContent = "Thanks — your message is on its way. I'll get back to you soon.";
      form.reset();
    } else {
      throw new Error('Formspree request failed');
    }
  } catch (err) {
    // Network hiccup or misconfigured endpoint — fall back so the message still gets through.
    sendViaMailto(name, email, message);
    form.reset();
  }
});

// Scroll-reveal animation: elements fade/lift into view as they enter the viewport,
// and fade back out as they leave — so it plays again scrolling back up too.
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('in-view', entry.isIntersecting);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  // Unsupported browser — just show everything immediately.
  revealEls.forEach((el) => el.classList.add('in-view'));
}
