# Still Time to Shine

A personal blog platform built with Next.js, focusing on inspiring stories and personal growth. The platform emphasizes that it's never too late to pursue your dreams and share your journey with others.

## Features

- Modern, responsive design with Tailwind CSS
- Full CRUD functionality for blog posts
- Image upload support
- Clean and intuitive user interface
- Inspiring splash screen with call-to-action
- SQLite database with Prisma ORM

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- SQLite
- React

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/still-time-to-shine.git
cd still-time-to-shine
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
still-time-to-shine/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/         # API routes
│   │   ├── posts/       # Blog post pages
│   │   ├── splash/      # Landing page
│   │   └── home/        # Main blog page
│   ├── components/      # React components
│   └── lib/            # Utility functions
├── prisma/             # Database schema and migrations
├── public/            # Static assets
└── styles/           # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://www.prisma.io/) 