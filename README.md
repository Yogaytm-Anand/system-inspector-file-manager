# System Inspector & File Manager

A Node.js command-line application that gathers system information, displays selected environment variables, exports structured JSON reports, and performs CRUD operations on files.

## Overview

System Inspector & File Manager is a Node.js CLI application that gathers system information, displays selected environment variables, exports reports in JSON format, and performs CRUD (Create, Read, Update, Delete) operations on files.

The project is built using Node.js built-in modules such as `os` and `fs` without any external dependencies.

---

## Features

### System Information Collection

The application collects:

* Hostname
* Operating System Platform
* CPU Architecture
* Node.js Version
* User Home Directory
* CPU Core Count
* Total Memory
* Free Memory
* System Uptime

### Environment Variables

The application displays selected environment variables:

* PATH
* USERNAME
* TEMP
* HOME
* NODE_ENV

Missing values are handled gracefully using fallback messages.

### JSON Report Export

System information and environment variables are exported to:

```text
reports/system-report.json
```

### File CRUD Operations

Supported operations:

* Create File
* Read File
* Update File
* Delete File

### Bonus Feature

File Metadata Inspection

Displays:

* File Size
* Creation Time
* Last Modified Time

---

## Project Structure

```text
hackathon3/
│
├── reports/
│   └── system-report.json
│
├── services/
│   ├── envInfo.js
│   ├── fileManager.js
│   └── systemInfo.js
│
├── app.js
├── package.json
└── README.md
```

---

## Code Flow

### Step 1: Collect System Information

The application uses the Node.js `os` module to gather system details such as hostname, architecture, memory information, uptime, and home directory.

### Step 2: Collect Environment Variables

Selected environment variables are extracted using `process.env`.

### Step 3: Generate Report

The collected information is structured into a JSON object and exported to:

```text
reports/system-report.json
```

### Step 4: Execute CLI Commands

The application reads command-line arguments using:

```javascript
process.argv
```

Based on the command provided, the corresponding file operation is executed.

### Step 5: Handle Errors

All file operations are wrapped inside a `try-catch` block to prevent crashes and provide meaningful error messages.

---

## Commands

### Generate System Report

```bash
node app.js
```

### Create File

```bash
node app.js create demo.js "console.log('Hello')"
```

### Read File

```bash
node app.js read demo.js
```

### Update File

```bash
node app.js update demo.js "console.log('Updated')"
```

### Delete File

```bash
node app.js delete demo.js
```

### File Information

```bash
node app.js info demo.js
```

---

## Strategy

The project was designed using a modular approach.

Responsibilities were separated into different files:

* `systemInfo.js` → System information collection
* `envInfo.js` → Environment variable collection
* `fileManager.js` → CRUD and file metadata operations
* `app.js` → Main controller and command handling

This separation improves readability, maintainability, and scalability.

---

## Technologies Used

* JavaScript
* Node.js
* OS Module
* File System (FS) Module

---

## Conclusion

This project demonstrates how Node.js can interact with the operating system, environment variables, and file system through a modular CLI application while maintaining structured output and proper error handling.
