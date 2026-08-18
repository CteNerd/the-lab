# Skill: serverless-api-change

> **Deferred.** Do not use until Phase 2 backend work begins.

Use this skill when adding or modifying a serverless API endpoint.

## Procedure

1. Define the API contract (method, path, request shape, response shape, error cases).
2. Implement input validation at the Lambda handler boundary.
3. Implement the handler (thin — delegate to service).
4. Implement the service function (business logic).
5. Implement the repository function (persistence).
6. Review IAM: confirm the execution role has only the permissions this handler needs.
7. Write unit tests for the service layer.
8. Review the frontend contract: confirm the frontend expects the same shape.
9. Update API documentation if it exists.
