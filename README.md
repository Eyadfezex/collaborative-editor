# Collaborative Editor

A real-time collaborative text editor built with modern web technologies. This project allows multiple users to edit a document simultaneously with real-time synchronization, making it ideal for teams, remote collaboration, and note-sharing applications.

## Features

- **Real-time Editing:** Multiple users can edit a document simultaneously with seamless updates.
- **User Authentication:** Secure authentication using Clerk for easy user management.
- **Live Collaboration:** Powered by Liveblocks to sync user presence, cursors, and document changes.
- **Rich Text Editing:** Built with Lexical for a powerful and extensible text editing experience.
- **User-friendly Interface:** Built with ShadCN-UI for a polished and accessible design.
- **Optimized Performance:** Efficient updates ensure smooth editing without lag.
- **Cross-Device Support:** Works seamlessly across desktops, tablets, and mobile devices.
- **Persistence:** Data can be saved and reloaded based on session requirements.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) - React-based framework for server-side rendering and optimized performance.
- **UI Library:** [ShadCN-UI](https://ui.shadcn.com/) - A customizable component library built on Radix UI.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **Authentication:** [Clerk](https://clerk.com/) - Authentication and user management solution.
- **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/) - WebSocket-based real-time data synchronization.
- **Rich Text Editing:** [Lexical](https://lexical.dev/) - A modern framework for building text editors.
- **Icons:** [Lucide React](https://lucide.dev/) - A set of beautifully crafted icons for React.
- **Unique Identifiers:** [NanoID](https://github.com/ai/nanoid) - A tiny, secure, URL-friendly unique ID generator.
- **Package Manager:** [pnpm](https://pnpm.io/) - Fast and disk space-efficient package manager.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Eyadfezex/collaborative-editor.git
   cd collaborative-editor
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

### Environment Setup

Create a `.env.local` file in the root directory and configure the required environment variables:
```sh
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your-liveblocks-public-key>
```

### Running the Application

#### Start the Development Server
```sh
pnpm dev
```
This will start the Next.js development server at `http://localhost:3000/`.

### Usage
- Open the app in multiple browser tabs or different devices to test real-time collaboration.
- Sign in using Clerk authentication.
- Start typing, and the changes will be synchronized across all connected clients instantly.
- Users can create and join document sessions powered by Liveblocks.
- Track user presence and see live cursor movements in real time.
- Edit text using Lexical's powerful rich text editing features.

## Deployment

To deploy the application, use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Deploy on Vercel
```sh
pnpm build
vercel deploy
```

## Contributing

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature` or `fix/your-bug`).
3. Commit your changes with meaningful messages.
4. Push your branch and open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, reach out to [Eyad Ahmed](mailto:Eyad__Ahmed@outlook.com).

