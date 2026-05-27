# SportNest - Sports Facility Booking Management System

## Purpose

SportNest is a full-stack sports facility booking platform where users can explore sports facilities, view facility details, book available time slots, manage their own bookings, and add or manage facilities as facility owners.

The project is built for a real-world sports reservation experience with authentication, protected routes, booking management, search, filter, responsive UI, and clean user interaction.

## Live Links

- Client-side Live Website: https://sportnest-client-psi.vercel.app/
- Server-side Live API: https://sportnest-server-psi.vercel.app/
- Client-side GitHub Repository: https://github.com/Tahaimage8/sportnest-client
- Server-side GitHub Repository: https://github.com/Tahaimage8/sportnest-server

## Key Features

- Responsive landing page with banner, featured facilities, and extra static sections
- Public All Facilities page
- Facility search by name
- Facility filter by sport type
- Facility details page
- Better Auth authentication
- Email/password login and registration
- Google login
- Private routes for authenticated users
- Add facility form with owner email
- Manage My Facilities page for facility owners
- Edit and delete facility options
- Booking system with date and time slot selection
- My Bookings page for logged-in users
- Cancel booking with confirmation
- Toast notifications for success and error messages
- Custom loading page
- Custom not-found page
- Theme toggle
- Framer Motion animations
- Clean and recruiter-friendly UI

## Pages and Routes

- `/` - Home page
- `/facilities` - All facilities page
- `/facilities/[id]` - Facility details and booking page
- `/login` - Login page
- `/register` - Registration page
- `/add-facility` - Add facility private page
- `/manage-facilities` - Manage owner facilities private page
- `/my-bookings` - Logged-in user's bookings private page

## Technologies Used

- Next.js
- React
- Tailwind CSS
- HeroUI
- Better Auth
- MongoDB
- Framer Motion
- React Hot Toast
- Lucide React
- React Icons
- Next Themes

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `@better-auth/mongo-adapter`
- `@heroui/react`
- `@heroui/styles`
- `framer-motion`
- `next-themes`
- `mongodb`
- `react-hot-toast`
- `lucide-react`
- `react-icons`
- `axios`
- `tailwindcss`
- `eslint`

## Environment Variables

Create a `.env.local` file in the client project and add:

```env
NEXT_PUBLIC_SERVER_URL=your_server_url
BETTER_AUTH_URL=your_client_url
BETTER_AUTH_SECRET=your_better_auth_secret
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret