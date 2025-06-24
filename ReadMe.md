# Occupi Demo Backend

This is the backend API for the Occupi demo application. It is built with Node.js, Express, and TypeScript, and uses TypeORM for database access.

[Technical Assessment is here](https://github.com/paulyzx/Occupi-Backend-Demo/blob/main/TechnicalAssessment.md)

## Features

- Company, Customer, and Payment management
- RESTful API endpoints
- Modular architecture with controllers, services, and routes
- TypeScript for type safety
- Centralized controller registry

## Project Structure

```
src/
  controllers/
  db/
  routes/
  services/
  views/
  app.ts
  controllerRegistry.ts
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A supported database (e.g., PostgreSQL, MySQL, SQLite)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/occupi-app.git
   cd occupi-app/demo_backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:
   - DB_DATABASE=<DATABASE NAME>
   - DB_HOST=localhost
   - DB_PORT=5432
   - DB_USERNAME=<DATABASE USERNAME>

4. Run database migrations (if any):
   ```sh
   npm run typeorm migration:run
   ```

5. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /payment/:id` - Get payment by ID
- `GET /payment/customer/:customerId` - Get all payments for a customer
- `GET /payment/` - Get all payments
- `POST /payment/` - Create a new payment

Similar endpoints exist for `company` and `customer`.

## Development

- Code is organized by feature (controllers, services, routes).
- Use TypeScript for all source files.
- Use async/await for asynchronous operations.

## License

[MIT](LICENSE)