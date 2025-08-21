-- schema.sql
CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_verified BOOLEAN DEFAULT FALSE
    );

-- CREATE TABLE
--     medicine_uploads (
--         id SERIAL PRIMARY KEY,
--         user_id INT REFERENCES users (id) ON DELETE CASCADE,
--         medicine_name VARCHAR(255) NOT NULL,
--         code VARCHAR(100), -- Optional barcode or QR code
--         image_url TEXT NOT NULL, -- Path to uploaded image
--         ai_info TEXT, -- Warnings, dosage, etc.
--         uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--     );