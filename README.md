# REST-Rant 🍔🍕

![Build Status](https://img.shields.io/badge/Build-Passing-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-purple)

REST-Rant is a community-driven app where foodies can review restaurants. Discover new places to eat, or contribute your own experiences to help others!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features 🍜🌮

- Browse reviews of different restaurants.
- Search restaurants by location, cuisine, or rating.
- Add your own reviews and images.
- User authentication and profile customization.
- And much more!

## Installation 🛠️

1. **Clone this repository:**

    ```bash
    git clone https://github.com/djmotor90/project-REST-rant
    ```

2. **Navigate to the project folder:**

    ```bash
    cd REST-Rant
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

Now, navigate to `http://localhost:3000/` in your browser to start exploring!

## Usage 📝

- **Browse Restaurants**: Scroll through the homepage to see featured restaurants.
- **Search**: Use the search bar to find specific restaurants.
- **Add Reviews**: Logged-in users can add reviews to any restaurant listing.
  
_For more examples, please refer to the [Documentation](https://your-documentation-link)_

## Contributing 🤝

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

## License 📝

This project is licensed under the terms of the MIT license. For more information, see [LICENSE.md](LICENSE.md).

## Contact 📧

- **Project Owner**: [Kim Gurinov](https://github.com/djmotor90)

Feel free to reach out if you have any questions or suggestions!

## API Routes

| Method  | Path                      | Purpose                                         |
| ------- | ------------------------- | ----------------------------------------------- |
| GET     | `/`                       | Home page                                       |
| GET     | `/places`                 | Places index page                               |
| POST    | `/places`                 | Create new place                                |
| GET     | `/places/new`             | Form page for creating a new place              |
| GET     | `/places/:id`             | Details about a particular place                |
| PUT     | `/places/:id`             | Update a particular place                       |
| GET     | `/places/:id/edit`        | Form page for editing an existing place         |
| DELETE  | `/places/:id`             | Delete a particular place                       |
| POST    | `/places/:id/rant`        | Create a rant (comment) about a particular place |
| DELETE  | `/places/:id/rant/:rantId`| Delete a rant (comment) about a particular place |
| GET     | `*`                       | 404 page (matches any route not defined above)  |
