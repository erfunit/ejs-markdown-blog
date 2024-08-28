# 📚 MD-Blog fullstack Application

Welcome to the **Blog Application** documentation! This project is a simple yet powerful blogging platform built using **Express.js**, **Mongoose**, and **EJS** for templating. It allows users to create, edit, view, and delete blog articles with a sleek and responsive user interface styled with **Bootstrap**.

## 🌟 Key Features

- **MongoDB Integration**: All blog articles are stored in MongoDB, making use of Mongoose for data modeling.
- **CRUD Operations**: Create, Read, Update, and Delete articles with ease.
- **Slug Generation**: Automatic generation of SEO-friendly URLs (slugs) for articles.
- **Markdown Support**: Write articles using Markdown, which is then converted to sanitized HTML.
- **Responsive UI**: The frontend is styled with Bootstrap, ensuring the app looks great on all devices.

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/erfunit/ejs-markdown-blog
cd blog-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```
DATABASE_URI=your_db_uri
```

### 4. Start the Application

```bash
npm start
```

Your application will be running at `http://localhost:3002`.

## 🗂️ Project Structure

```plaintext
.
├── models
│   └── articles.js        # Mongoose schema and model for articles
├── routes
│   └── article.js         # Express router for article-related routes
├── views
│   ├── articles           # EJS templates for articles (new, edit, index, show)
│   ├── _form_fields.ejs   # Partial template for article forms
│   └── layout.ejs         # Layout template
├── .env                   # Environment variables
├── app.js                 # Main Express application file
└── package.json           # Project metadata and dependencies
```

## 📄 Models

### Article Model (`models/articles.js`)

The `Article` model defines the structure of the blog articles stored in MongoDB.

- **title**: The title of the article (required).
- **description**: A short description of the article.
- **markdown**: The main content of the article, written in Markdown (required).
- **createdAt**: The date the article was created (default: current date).
- **slug**: A URL-friendly version of the title (unique).
- **sanitizedHtml**: The HTML version of the Markdown content, sanitized to prevent XSS attacks.

## 🛤️ Routes

### 1. **`GET /`** - Home Page

Displays a list of all articles, sorted by the most recent.

### 2. **`GET /articles/new`** - New Article Form

Renders the form for creating a new article.

### 3. **`POST /articles`** - Create Article

Handles the submission of the new article form.

### 4. **`GET /articles/edit/:id`** - Edit Article Form

Renders the form for editing an existing article.

### 5. **`PUT /articles/:id`** - Update Article

Handles the submission of the edit form to update the article.

### 6. **`DELETE /articles/:id`** - Delete Article

Handles the deletion of an article.

### 7. **`GET /articles/:slug`** - View Article

Displays the full content of a specific article based on its slug.

## 🧩 Middleware & Utilities

- **express.urlencoded({ extended: false })**: Parses incoming requests with URL-encoded payloads.
- **methodOverride('_method')**: Allows the use of HTTP verbs like PUT and DELETE in places where the client doesn't support it.

## 🛡️ Security

- **Sanitized HTML**: User-provided Markdown content is sanitized using `dompurify` to prevent XSS attacks.

## 🎨 Views

All the views are rendered using **EJS**. They are located in the `views/` directory:

- **`views/articles/index.ejs`**: Lists all articles.
- **`views/articles/new.ejs`**: Form for creating a new article.
- **`views/articles/edit.ejs`**: Form for editing an article.
- **`views/articles/show.ejs`**: Displays a single article.

## 🛠️ Utilities

- **slugify**: Generates URL-friendly slugs from article titles.
- **marked**: Converts Markdown content to HTML.
- **method-override**: Enables HTTP verbs like PUT and DELETE where they're not supported.

## 🚀 Deployment

To deploy this application, ensure that the environment variables are correctly set up and that MongoDB is accessible. Consider using services like **Heroku** or **Vercel** for easy deployment.

## 📦 Dependencies

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **ejs**: Templating engine.
- **slugify**: Generates URL-friendly slugs.
- **marked**: Markdown parser.
- **dompurify**: Sanitizes HTML to prevent XSS.
- **method-override**: Middleware for using HTTP verbs like PUT and DELETE.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy coding! ✨ If you encounter any issues, feel free to open an issue or contribute to the project.
