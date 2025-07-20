# TickTock - Time Management Application

A modern time tracking and timesheet management application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- View weekly timesheets
- Track time entries with project and task details
- Responsive design for desktop and mobile
- Progress tracking for weekly hours
- Add, edit, and delete time entries
- Authentication and protected routes

## Prerequisites

- Node.js 18+ and npm/yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/faisal004/time-management-app.git
   cd time-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # App router pages and layouts
│   └── (dashboard)/        # Protected dashboard routes
│       └── dashboard/      # Timesheet dashboard
├── components/             # Reusable UI components
│   ├── dashboard/          # Dashboard specific components
│   └── ui/                 # UI components
├── lib/                    # Utility functions
├── routes/                 # API route handlers
├── types/                  # TypeScript type definitions
└── data/                   # Dummy data and data helpers
```

## Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Type Safety**: TypeScript
- **Icons**: Lucide React

## Key Features Implementation

### Authentication
- Uses NextAuth.js with JWT strategy
- Protected routes using Next.js middleware
- Session management with secure HTTP-only cookies

### Data Management
- Local state management with React hooks
- Dummy data generation for development
- Type-safe API with TypeScript

### UI/UX
- Responsive design with mobile-first approach
- Accessible components following WAI-ARIA standards
- Loading and error states for better UX

## Assumptions

1. **Data Persistence**: Currently uses in-memory state management. For production, you'll need to implement a database.
2. **Authentication**: Basic authentication is implemented. Additional providers can be added as needed.
3. **Time Tracking**: Tracks time in whole hours. No partial hours or minutes.
4. **Work Week**: Assumes a standard Monday-Friday work week.


## Environment Variables

- `NEXTAUTH_SECRET`: Secret key for NextAuth.js
- `NEXTAUTH_URL`: Base URL of your application

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the repository on Vercel
3. Add your environment variables
4. Deploy!




