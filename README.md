# Home Library Service

A NestJS-based REST API for managing a music library with artists, albums, tracks, and favorites.

## Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:dashque/nodejs2025Q2-service.git
   git checkout dev
   cd nodejs2025Q2-service
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

## Running the Application

### Development Mode
```bash
npm run start:dev
```
Starts the server with hot reload on file changes.

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

After starting, access the OpenAPI documentation at:
**http://localhost:4000/doc/**

## Testing

### Run All Tests

```bash
npm run start:dev
npm run test
```
Runs all e2e tests without authentication.

### Run Specific Test Suite
```bash
npm run test -- test/artists.e2e.spec.ts
```

### Watch Mode
```bash
npm run test:watch
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start in production mode |
| `npm run start:dev` | Start in development mode with watch |
| `npm run start:debug` | Start in debug mode |
| `npm run build` | Build the application |
| `npm run test` | Run all tests |
| `npm run test:auth` | Run tests with authentication |
| `npm run test:refresh` | Run refresh token tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Generate coverage report |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |

## API Endpoints

The service provides REST endpoints for:
- **Artists** - CRUD operations
- **Albums** - CRUD operations with artist relationships
- **Tracks** - CRUD operations with artist and album relationships
- **Favorites** - Manage favorite artists, albums, and tracks
- **Users** - User management

## Development

### Code Quality
```bash
# Lint and auto-fix issues
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── artists/          # Artist module
├── albums/           # Album module
├── tracks/           # Track module
├── favorites/        # Favorites module
├── auth/             # Authentication module
├── users/            # User module
└── utils/            # Shared utilities

test/                 # E2E tests
├── auth/             # Auth tests
├── artists.e2e.spec.ts
├── albums.e2e.spec.ts
├── tracks.e2e.spec.ts
├── favorites.e2e.spec.ts
└── refresh/          # Refresh token tests
```