CREATE DATABASE IF NOT EXISTS watchtower_db;
USE watchtower_db;

-- Drop existings tables to ensure clean slate (Be careful in production)
-- In dev, this is fine to reset state.
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS requests;
DROP TABLE IF EXISTS announcements;
DROP TABLE IF EXISTS schedules;
SET FOREIGN_KEY_CHECKS = 1;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company_id VARCHAR(50) UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('Admin', 'Manager', 'Officer', 'Employee', 'HR Manager', 'Department Head', 'Operations Manager') DEFAULT 'Employee',
  department VARCHAR(100),
  /* position column removed as it is redundant to role */
  birthdate DATE,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Requests Table
CREATE TABLE IF NOT EXISTS requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type ENUM('Leave Request', 'Overtime Request', 'Shift Swap Request', 'Undertime Request') NOT NULL,
  details TEXT,
  reason TEXT,
  date_filed DATE DEFAULT (CURRENT_DATE),
  status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  dh_status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  hr_status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  om_status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  dh_approved_by VARCHAR(100),
  hr_approved_by VARCHAR(100),
  om_approved_by VARCHAR(100),
  /* approved_by column removed */
  meta_data JSON, -- Stores flexible data like { "from": "date", "to": "date", "hours": 4 }
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Announcements Table
CREATE TABLE IF NOT EXISTS announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type ENUM('Events', 'Maintenance', 'Announcements') NOT NULL,
  date_event DATE,
  time_event VARCHAR(50),
  author VARCHAR(100),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Schedules (Simple implementation for now)
CREATE TABLE IF NOT EXISTS schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_ids JSON, -- Array of User IDs or Names assigned
  week_start_date DATE,
  mon VARCHAR(50) DEFAULT 'OFF',
  tue VARCHAR(50) DEFAULT 'OFF',
  wed VARCHAR(50) DEFAULT 'OFF',
  thu VARCHAR(50) DEFAULT 'OFF',
  fri VARCHAR(50) DEFAULT 'OFF',
  sat VARCHAR(50) DEFAULT 'OFF',
  sun VARCHAR(50) DEFAULT 'OFF',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeding Data ---------------------------------------

-- Users
INSERT INTO users (first_name, last_name, email, password, role, company_id, department) VALUES 
('Alice', 'Guo', 'alice@wt.com', 'password123', 'HR Manager', 'STF-001', 'Human Resources'),
('Bong', 'Revilla', 'bong@wt.com', 'password123', 'Officer', 'STF-002', 'Security'),
('Juan', 'Dela Cruz', 'juan@wt.com', 'password123', 'Employee', 'WT-2026-001', 'Operations'),
('Raque', 'Canete', 'raque@wt.com', 'password123', 'Employee', 'WT-2026-002', 'Operations');

-- Announcements
INSERT INTO announcements (title, description, type, date_event, time_event, author, image_url) VALUES 
('Annual Team Building 2026', 'Get ready for an exciting weekend of team bonding and fun activities at the glorious pristine beaches of Boracay!', 'Events', '2026-02-15', 'All Day', 'HR Department', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
('System Maintenance Scheduled', 'We will be conducting a scheduled server maintenance this coming Saturday. Expect some downtime between 2:00 AM to 4:00 AM.', 'Maintenance', '2026-01-30', '2:00 AM - 4:00 AM', 'IT Support', 'https://images.unsplash.com/photo-1558494949-ef253d0c48e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
('New Health Benefit Policy', 'We have updated our health benefit package to include more dental coverage and mental health support.', 'Announcements', '2026-01-20', '9:00 AM', 'HR Department', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');

-- Requests (Mock for Dashboard)
INSERT INTO requests (user_id, type, details, reason, status, hr_status, dh_status, om_status, date_filed) VALUES 
(4, 'Leave Request', 'Vacation Leave', 'Family Reunion', 'Pending', 'Approved', 'Pending', 'Waiting', '2026-01-24'),
(4, 'Overtime Request', '3 Hours', 'Project catchup', 'Approved', 'Approved', 'Approved', 'Approved', '2026-01-20'),
(3, 'Shift Swap Request', 'Swap with Pedro', 'Medical Appointment', 'Rejected', 'Rejected', 'Waiting', 'Waiting', '2026-01-22');

-- Schedules
INSERT INTO schedules (user_ids, week_start_date, mon, tue, wed, thu, fri, sat, sun) VALUES 
('["Clint", "Renzie"]', '2026-01-22', '8 AM - 4 PM', '8 AM - 4 PM', '8 AM - 4 PM', '8 AM - 4 PM', '8 AM - 4 PM', 'OFF', 'OFF'),
('["Ken B", "Raque"]', '2026-01-22', '12 AM - 8 AM', 'OFF', 'OFF', '4 PM - 12 AM', '4 PM - 12 AM', '4 PM - 12 AM', '12 AM - 8 AM'),
('["Matthieu"]', '2026-01-22', '4 PM - 12 AM', '4 PM - 12 AM', '4 PM - 12 AM', '4 PM - 12 AM', 'OFF', 'OFF', '4 PM - 12 AM');
