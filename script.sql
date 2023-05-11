CREATE TABLE
 `academit-db`.usuario(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password  VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP   
);

-- Crear tabla "category"
CREATE TABLE category (
  category_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

-- Crear tabla "video"
CREATE TABLE video (
  video_id INT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100),
  url VARCHAR(100) NOT NULL,
  upload_date DATE NOT NULL,
  user_id UUID NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);