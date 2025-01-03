# Service Marketplace App

This app allows clients to request services and providers to offer services. Providers can generate quotes for requested services with clear descriptions, and both parties can ask questions if they have doubts. Clients can accept the most suitable quote, and both clients and providers can rate each other to share information about their experiences.

## User Journeys

1. [User Authentication](docs/journeys/user-authentication.md) - Sign up and sign in to access the app.
2. [Create Service Request](docs/journeys/create-service-request.md) - Clients can request services they need.
3. [View Service Requests](docs/journeys/view-service-requests.md) - Providers can view available service requests.
4. [Submit Quote](docs/journeys/submit-quote.md) - Providers can submit quotes for service requests.
5. [Communication Between Client and Provider](docs/journeys/communication.md) - Clients and providers can ask questions and clarify doubts.
6. [Accept Quote](docs/journeys/accept-quote.md) - Clients can accept the quote that suits them best.
7. [Rate Client and Provider](docs/journeys/rate-user.md) - Both clients and providers can rate each other after the service.

## External APIs

- Supabase Authentication: Used for user sign-up and sign-in.
- Sentry: Used for error logging and monitoring.
- Umami: Used for analytics tracking.

## Environment Variables

The following environment variables need to be set in a `.env` file:

- VITE_PUBLIC_APP_ID
- VITE_PUBLIC_APP_ENV
- VITE_PUBLIC_SENTRY_DSN
- VITE_PUBLIC_UMAMI_WEBSITE_ID
- COCKROACH_DB_URL