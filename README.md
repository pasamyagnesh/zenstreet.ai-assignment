# Calendarium.io

Still working on this app.

![Calendarium.io Screenshot](images/calendar.io.png)
# NextJS and NestJS Project

This project is a full-stack web application built using NextJS for the frontend and NestJS for the backend.

## Project Setup

To set up the project on your local machine, follow these steps:

### Frontend (NextJS)

1. **Clone the repository**:
```
git clone https://github.com/your-username/your-project.git
```

2. **Navigate to the frontend directory**:
```
cd your-project/frontend
```

3. **Install dependencies**:
```
npm install
```

4. **Start the development server**:
```
npm run dev
```

This will start the NextJS development server and you can access the frontend at `http://localhost:3000`.

### Backend (NestJS)

1. **Navigate to the backend directory**:
```
cd your-project/backend
```

2. **Install dependencies**:
```
npm install
```

3. **Start the development server**:
```
npm run start:dev
```

This will start the NestJS development server and you can access the backend API at `http://localhost:3001`.

## Project Structure

The project is organized as follows:

<span style="color:green">**frontend**</span>
- <span style="color:blue">**pages**</span>
  - <span style="color:purple">index.tsx</span>
  - <span style="color:purple">about.tsx</span>
  - <span style="color:purple">contact.tsx</span>
- <span style="color:blue">**components**</span>
  - <span style="color:purple">Header.tsx</span>
  - <span style="color:purple">Footer.tsx</span>
  - <span style="color:purple">ProductCard.tsx</span>
- <span style="color:blue">**styles**</span>
  - <span style="color:purple">globals.css</span>
- <span style="color:blue">**utils**</span>
  - <span style="color:purple">api.ts</span>

<span style="color:green">**backend**</span>
- <span style="color:blue">**src**</span>
  - <span style="color:blue">**modules**</span>
    - <span style="color:purple">users</span>
    - <span style="color:purple">products</span>
  - <span style="color:blue">**controllers**</span>
    - <span style="color:purple">UsersController.ts</span>
    - <span style="color:purple">ProductsController.ts</span>
  - <span style="color:blue">**services**</span>
    - <span style="color:purple">UsersService.ts</span>
    - <span style="color:purple">ProductsService.ts</span>
  - <span style="color:blue">**entities**</span>
    - <span style="color:purple">User.ts</span>
    - <span style="color:purple">Product.ts</span>
  - <span style="color:blue">**app.module.ts**</span>
  - <span style="color:blue">**main.ts**</span>

## Technologies Used

- **Frontend**:
  - [NextJS](https://nextjs.org/) - React framework for building server-rendered applications
  - [Axios](https://axios-http.com/) - HTTP client for making API requests
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

- **Backend**:
  - [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications
  - [TypeORM](https://typeorm.io/) - Object-Relational Mapping (ORM) library for TypeScript and JavaScript

## Features

- User authentication and authorization
- CRUD operations for products
- Integration between frontend and backend

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature/bug fix
3. Implement your changes
4. Test your changes
5. Submit a pull request
