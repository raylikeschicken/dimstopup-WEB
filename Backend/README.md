# Web Top Up Backend

Backend API untuk aplikasi top up game, dibangun dengan Node.js, Express, dan MongoDB.

## Features

- User authentication (register/login)
- Top up product management
- Order processing
- JWT authentication

## Installation

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in `.env` file:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://user:password@cluster.example.mongodb.net/webtopup
   JWT_SECRET=your_jwt_secret_here
   CORS_ORIGIN=https://your-frontend-domain.com
   ```

4. Start the server:
   ```
   npm start
   ```

   For development:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all top up products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create new order (requires auth)
- `GET /api/orders` - Get user orders (requires auth)
- `GET /api/orders/admin/all` - Get all orders (admin)
- `PUT /api/orders/:id/status` - Update order status (admin)

## Deploy ke Railway + MongoDB Atlas

1. Buat cluster MongoDB Atlas gratis.
2. Buat database `webtopup` dan gunakan user/password yang aman.
3. Salin connection string, lalu pilih `Database Access` dan `Network Access` untuk mengizinkan akses dari server.
4. Di Railway, buat project baru dan hubungkan ke repo GitHub kamu.
   - Jika repo monorepo, pilih `Backend` sebagai root directory.
5. Atur environment variables di Railway:
   - `MONGODB_URI` = connection string Atlas
   - `JWT_SECRET` = secret random
   - `CORS_ORIGIN` = `https://your-frontend.vercel.app,http://localhost:3000`
6. Deploy Railway dan dapatkan URL backend.

### Koneksi mobile app

- Mobile app sebaiknya memanggil backend lewat API URL Railway.
- Jangan sambungkan mobile langsung ke database.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
