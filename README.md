# 📡 Backend API Endpoints

## 🔐 Authentication

| Method | Endpoint    | Description             | Body Parameters                            |
|--------|-------------|-------------------------|---------------------------------------------|
| POST   | `/register` | Register a new user     | `name`, `email`, `password`, `role`         |
| POST   | `/login`    | Login and get JWT token | `email`, `password`                         |

---

## 🎯 Gigs (Authenticated)

> All routes require a valid JWT in the `Authorization: Bearer <token>` header.

| Method | Endpoint        | Description              | Body Parameters                                                                 |
|--------|-----------------|--------------------------|----------------------------------------------------------------------------------|
| POST   | `/api/gigs`     | Create a new gig         | `title`, `description`, `budget`, `deliveryTime`, `category`, `tags`            |
| GET    | `/api/gigs`     | Get all gigs             | —                                                                                |
| GET    | `/api/gigs/:id` | Get a gig by ID          | —                                                                                |
| DELETE | `/api/gigs/:id` | Delete a gig (if owner)  | —                                                                                |

---

## 📦 Orders (Authenticated)

> All routes require a valid JWT in the `Authorization: Bearer <token>` header.

| Method | Endpoint                     | Description                        | Body Parameters                                      |
|--------|------------------------------|------------------------------------|-------------------------------------------------------|
| POST   | `/api/orders`                | Create a new order from a gig      | `gig`, `deadline`, `requirements`                    |
| GET    | `/api/orders`                | Get all orders for the user        | —                                                     |
| PUT    | `/api/orders/:id/status`     | Update status of an order          | `status`: `pending`, `in-progress`, `completed`, `cancelled` |

---

> 🔒 All authenticated routes require a valid JWT token.
>  
> 🌐 Base URL: `https://gigs-io-backend-4ulp6pwvc-sahilgumber7s-projects.vercel.app`

