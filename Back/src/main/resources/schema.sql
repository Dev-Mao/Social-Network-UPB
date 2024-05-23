CREATE TABLE user_student (
                              id INT PRIMARY KEY,
                              email VARCHAR(255) UNIQUE NOT NULL,
                              name VARCHAR(255) NOT NULL,
                              career VARCHAR(255),
                              password VARCHAR(255) NOT NULL,
                              role VARCHAR(50) NOT NULL
);
CREATE TABLE post (
                      id BIGINT PRIMARY KEY,
                      id_user INT,
                      publication_time DATETIME,
                      title VARCHAR(255),
                      content TEXT,
                      category VARCHAR(50),
                      FOREIGN KEY (id_user) REFERENCES user_student(id)
);
