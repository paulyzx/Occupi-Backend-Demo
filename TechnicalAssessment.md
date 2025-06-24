# Occupi Technical Assessment

## Important technical concerns and risks 
- Tight Coupling
  - Routes directly import controller functions, which in turn directly use repository logic. This makes refactoring, testing, and swapping implementations harder.
- Lack of Input Validation
  - Incoming request data (e.g., req.body in POST routes) is not validated. 
- Error Handling
  - Error handling is repetitive.
  - No custom error classes or error middleware for consistent error responses.
  - Error messages may leak sensitive information if not properly sanitized before sending to clients.
- Business Logic in Routes
  - Some business logic (e.g., calling create, getAll) is handled directly in route handlers, making it harder to test and reuse.
- No Dependency Injection
  - Controllers are manually instantiated, making testing and swapping implementations more difficult.
- No Logging or Monitoring
  - Aside from console.log, there is no structured logging or monitoring, making it hard to debug issues in production.
- Type Safety
  - No explicit typing for request bodies or responses.
- No Unit Tests


## Improvements and architectural recommendations

- To mitigate these risks, consider adding input validation, centralized error handling, proper TypeScript types, dependency injection, and separating business logic from route handlers. This will improve maintainability, security, and scalability.
- Consider generating API docs with Swagger/OpenAPI.
- Consider using DTOs in the data layer. 
- Consider NestJS. From Google:
  - Choose Express.js
    - for small projects, prototypes, or when you need maximum flexibility and control over your application's architecture.
  - Choose NestJS
    - for enterprise-level applications, microservices, or projects where scalability, maintainability, and a structured, opinionated approach are crucial. It is also a strong choice if you prefer working with TypeScript and a framework that provides more built-in functionalities.


## Anything you think is well-designed or worth preserving

- Learning Node.js and Express.js is simple, allowing for reduced development time.
- According to my research, performance of Node.js is excellent. From Google:
  - Asynchronous, Non-blocking I/O: 
    - Node.js's event-driven, non-blocking I/O model allows it to handle a large number of concurrent connections efficiently, making it suitable for real-time applications and highly scalable systems.
  - Lightweight and Fast:
    - Both Node.js and Express are designed to be lightweight and performant, leading to faster application response times.
