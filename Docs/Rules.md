rules.md
TaskFlow Engineering Rules
This document defines the mandatory engineering standards for the TaskFlow codebase.
Every contribution must comply with these rules.
________________________________________
1. General Principles
•	Prioritize correctness over speed.
•	Prefer simplicity over clever solutions.
•	Keep code readable and maintainable.
•	Avoid premature optimization.
•	Every change should improve the codebase.
________________________________________
2. Architecture Rules
Required layer order:
Route
↓
Middleware
↓
Controller
↓
Service
↓
Repository
↓
Database
Rules:
•	Routes register endpoints only.
•	Middleware handles cross-cutting concerns.
•	Controllers orchestrate requests and responses.
•	Services contain business logic.
•	Repositories perform data access only.
•	Models define persistence only.
Never skip layers.
________________________________________
3. Controller Rules
Controllers:
•	Validate request flow.
•	Call services.
•	Return standardized responses.
Controllers must not:
•	Query MongoDB.
•	Contain business logic.
•	Perform authorization decisions beyond invoking authorization components.
________________________________________
4. Service Rules
Services:
•	Implement business rules.
•	Coordinate repositories.
•	Handle transactions.
•	Trigger background jobs.
Services must not:
•	Access Express request/response objects.
•	Return HTTP responses.
•	Know frontend implementation details.
________________________________________
5. Repository Rules
Repositories:
•	Read and write data.
•	Build queries.
•	Execute transactions.
Repositories must not:
•	Perform authorization.
•	Implement business rules.
•	Throw HTTP-specific errors.
________________________________________
6. API Rules
•	Follow REST conventions.
•	Use plural resource names.
•	Return consistent response structures.
•	Validate every request.
•	Use correct HTTP status codes.
•	Version all public APIs.
________________________________________
7. Database Rules
•	Respect tenant isolation.
•	Use soft deletes for business entities.
•	Index frequently queried fields.
•	Never duplicate data unnecessarily.
•	Use transactions for multi-document consistency.
________________________________________
8. Security Rules
Always:
•	Hash passwords.
•	Validate input.
•	Authorize every protected action.
•	Store secrets in environment variables.
•	Use HTTP-only cookies for refresh tokens.
Never:
•	Log passwords.
•	Expose tokens.
•	Trust client-provided role information.
•	Trust client-provided organization ownership.
________________________________________
9. Error Handling Rules
•	Use custom application error classes.
•	Handle errors centrally.
•	Return standardized error responses.
•	Do not expose stack traces in production.
________________________________________
10. Logging Rules
Log:
•	Authentication events.
•	Authorization failures.
•	Important business events.
•	Unexpected errors.
Never log:
•	Passwords.
•	Tokens.
•	Secrets.
•	Sensitive personal information.
________________________________________
11. Validation Rules
•	Validate every request.
•	Validate path parameters.
•	Validate query parameters.
•	Validate request bodies.
•	Fail fast on invalid input.
________________________________________
12. Testing Rules
Every feature should include:
•	Unit tests for business logic.
•	Integration tests for APIs.
•	Regression tests for bug fixes.
No feature is complete if critical paths are untested.
________________________________________
13. Git Rules
•	One feature per branch.
•	One logical change per commit.
•	Follow Conventional Commits.
•	Merge through Pull Requests only.
________________________________________
14. Documentation Rules
Update documentation whenever:
•	APIs change.
•	Database design changes.
•	Environment variables change.
•	Architecture changes.
Documentation is part of the feature, not an afterthought.
________________________________________
15. Performance Rules
•	Avoid N+1 query patterns.
•	Paginate list endpoints.
•	Use projections to return only required fields.
•	Cache expensive read operations when justified.
•	Measure before optimizing.
________________________________________
16. Code Style Rules
•	Use TypeScript strict mode.
•	Prefer immutable data where practical.
•	Keep functions focused on one responsibility.
•	Use descriptive names.
•	Remove dead code before merging.
•	Avoid deeply nested conditionals.
•	Prefer early returns.
________________________________________
17. Definition of Done
A feature is complete only if:
•	Requirements satisfied.
•	API implemented.
•	Authorization enforced.
•	Validation completed.
•	Logging added.
•	Tests passing.
•	Documentation updated.
•	Code reviewed.
•	Ready for deployment.
________________________________________
18. Non-Negotiable Rules
The following are mandatory:
•	No business logic in controllers.
•	No direct database access outside repositories.
•	No bypassing authorization.
•	No hardcoded secrets.
•	No unhandled promise rejections.
•	No ignored lint or type errors.
•	No breaking the documented architecture without updating the design documents.
Violations of these rules should be corrected before code is merged.

