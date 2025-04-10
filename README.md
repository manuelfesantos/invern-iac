# Cloudflare TypeScript Infrastructure as Code

This repository contains an Infrastructure as Code (IaC) project built using Cloudflare's TypeScript package. The code in this repository provisions and manages Cloudflare resources using TypeScript, and you can easily run and test the infrastructure setup using the provided script in the `package.json` file with Bun.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Cloudflare Integration](#cloudflare-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before getting started, ensure you have the following installed:

- **[Bun](https://bun.sh)** – A fast all-in-one JavaScript runtime.
- **Node.js** – Some npm packages or tooling may require Node.js.
- **Yarn** or **npm** – For dependency management (Bun can install packages, but you may need to install bun first).
- **Cloudflare Account** – For managing your Cloudflare resources. Ensure you have the necessary API tokens/credentials configured.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manuelfesantos/invern-iac.git
   cd invern-iac
   ```

2. **Install dependencies using Bun:**

    If you don't have Bun, you can use npm or yarn to install it:
   ```bash
    npm install bun
    ```
   
    If you have Bun installed, you can use it to install the dependencies:
   ```bash
   bun install
   ```
   

3. **Configuration:**

    - Create or update your environment configuration. For example, you may have a `.env` file to store sensitive information such as Cloudflare API keys or account IDs:

      ```env
      CLOUDFLARE_API_KEY=your_api_key_here
      CLOUDFLARE_EMAIL=your_account_email_here
      ```

    - Ensure that your Cloudflare credentials have the appropriate permissions to manage resources.

---

## Usage

To run the project, use the start script defined in your `package.json`. This script uses Bun to execute the TypeScript code:

```bash
bun run start
```

The above command will:
- Compile the TypeScript code.
- Provision or update the Cloudflare resources as defined in your IaC configuration.
- Output logs to help you track what resources are being created or updated.

---

## Project Structure

Below is an overview of the main components in the repository:

- **src/**  
  Contains the TypeScript source code for configuring Cloudflare infrastructure.
    - `index.ts`: The entry point for your IaC setup.
    - Other modules and configurations as required to model your infrastructure.

- **package.json**  
  Contains the project metadata, dependencies, and the start script.  
  Example start script:

  ```json
  "scripts": {
    "start": "bun src"
  }
  ```

- **.env**  
  Environment variables for Cloudflare credentials and configuration.

- **README.md**  
  This file, which explains the repository and how to use it.

---

## Cloudflare Integration

This project leverages Cloudflare's TypeScript package to manage resources. Some key integration points include:

- **Authentication:**  
  Uses the API Token and Account ID provided via environment variables.

- **Resource Management:**  
  Defines the desired state for Cloudflare resources (e.g., DNS records, workers, page rules) using IaC principles.

- **Deployment Process:**  
  When running the `start` command, the project applies the configuration to your Cloudflare account, ensuring your infrastructure is in sync with your code.

For additional documentation on the Cloudflare package and its capabilities, please refer to the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/) and [Cloudflare API docs](https://developers.cloudflare.com/api/).

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write tests and ensure the code follows the project's style guidelines.
4. Open a pull request with a detailed description of your changes.

For significant changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding and infrastructure provisioning!