# Flexoo Service Order Dashboard

A static, no-build service ordering dashboard for Flexoo, the student-led software house of Informatics ITS.
Browse the catalog, open a service, pick a package and add-ons, and send an order request.

## Access it

You may open the following public domain to access the dashboard:
[flexoo-service-order-dashboard.netlify.app](https://flexoo-service-order-dashboard.netlify.app)

## Run it

Or you may run and open it locally. It is plain HTML, CSS and JavaScript, so any static server works:

```bash
python3 -m http.server 3000
```

Then open http://localhost:3000.

## Structure

```
index.html            catalog page (hero, stats, services, testimonials)
service-detail.html   one service, rendered from ?id=
assets/css/style.css  tokens, shared components and the catalog page
assets/css/detail.css detail page styles
assets/js/app.js      navbar, scroll reveal, filter and search
assets/js/data.js     service, faq and process data
assets/js/detail.js   detail page rendering, package picker, order total
assets/img/           logo and favicon
```

## Features

- Category filter and live search (press `/` to focus, `Esc` to clear)
- Service detail pages with packages, add-ons, process and FAQ
- Live order summary with deposit estimate and order confirmation
- Responsive down to 390px, keyboard focus states, reduced-motion support
