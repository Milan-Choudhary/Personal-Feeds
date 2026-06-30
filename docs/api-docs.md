# API Documentation

## Auth

- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/signin` - Authenticate and receive a JWT.

## Articles

- `GET /api/articles` - Fetch all articles.
- `GET /api/articles/:id` - Fetch article by ID.
- `POST /api/articles` - Create a new article (requires auth).

## Users

- `GET /api/users/me` - Fetch current user profile (requires auth).
- `PUT /api/users/me` - Update current user profile (requires auth).
