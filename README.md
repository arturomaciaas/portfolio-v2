# Arturo Macias - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by Brittany Chiang's portfolio design with a black, white, and teal color scheme.

## Features

- 🎨 Split-screen layout with static left panel and scrollable right content
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation with active section highlighting
- 📧 Contact form powered by Resend API
- 📄 Integrated resume viewer
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Resend API key (get one at [resend.com](https://resend.com))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arturomaciaas/portfolio-v2.git
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `app/page.tsx` - Name, title, and social links
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience entries
- `components/Projects.tsx` - Project showcases
- `public/arturo-macias-cv.pdf` - Replace with your resume

### Update Email Configuration

In `app/api/contact/route.ts`, update the email configuration:
- Change the `from` field to use your verified Resend domain
- Update the `to` field with your email address

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `RESEND_API_KEY` environment variable in Vercel project settings
4. Deploy!

The easiest way to deploy is using the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/arturomaciaas/portfolio-v2)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Deployment:** Vercel

## Project Structure

```
portfolio-v2/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Experience.tsx        # Experience section
│   ├── Navigation.tsx        # Navigation menu
│   └── Projects.tsx          # Projects section
├── public/
│   ├── arturo-macias-cv.pdf  # Resume PDF
│   └── favicon.ico           # Favicon
└── ...config files
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Arturo Macias - [arturomaciaas@protonmail.com](mailto:arturomaciaas@protonmail.com)

- LinkedIn: [linkedin.com/in/arturomaciaas](https://www.linkedin.com/in/arturomaciaas/)
- GitHub: [github.com/arturomaciaas](https://github.com/arturomaciaas)
