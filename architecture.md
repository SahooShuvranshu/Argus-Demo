# 🏛️ Argus Demo Service — System Architecture Specification

## Technology Stack
- **Runtime**: Node.js 20+
- **Web Framework**: Express.js REST API
- **Database**: PostgreSQL with Prisma ORM

## Layering & Compliance Rules
1. **Separation of Concerns**:
   - All HTTP route definitions and request/response handlers must reside inside `src/routes/`.
   - All database queries, transaction logic, and data processing must reside inside `src/services/`.
2. **Forbidden Patterns**:
   - Route handlers in `src/routes/` MUST NOT execute direct SQL queries or bypass service layers.
   - Code committed to `main` must contain ZERO hardcoded secret keys, leftover `console.log` debug statements, or empty function stubs (`// TODO`).
