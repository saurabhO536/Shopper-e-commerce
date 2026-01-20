# 🛍️ SHOPPER – E-Commerce Clothing Website

SHOPPER is a modern clothing e-commerce website where users can browse and order clothes for men, women, and kids. The platform includes full login/signup authentication and a dynamic cart system with checkout features.

# ✅ Features :

- 🔐 Authentication Auth0
  The entire site is accessible. but users can sign up and log in.

- 👕 Product Categories

- Separate sections for Men, Women, and Kids

- Clicking on a product shows related items below

- 🛒 Cart Functionality

- Add items to the cart (quantity auto-increases if same item is added)

- View detailed product info directly in the cart

- Remove items from the cart easily

- 💳 Checkout System

- View subtotal price and quantity of items

- Apply discount coupons

- Final step includes a "Proceed to Checkout" button

## Folder Structure :

```ts
SHOPPER/
├── .husky/                    # Git hooks (pre-commit, lint checks)
├── dist/                      # Production build output
├── node_modules/              # Installed dependencies
├── public/                    # Static public assets
├── src/                       # Main source code
│   ├── assets/                # Images, icons, fonts
│   ├── components/            # Reusable UI components
│   ├── lib/                   # Utilities/helpers (shadcn utils, configs)
│   ├── Pages/                 # App pages / route-based components
│   ├── App.css                # Global app styles
│   ├── App.jsx                # Root component
│   ├── index.css              # Tailwind base styles
│   ├── main.jsx               # Entry point
│
├── .gitignore                 # Git ignored files
├── .nvmrc                     # Node version manager config
├── .prettierignore            # Files ignored by Prettier
├── .prettierrc                # Prettier config
├── components.json            # shadcn/ui config
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package-lock.json          # Lock file
├── package.json               # Dependencies and scripts
├── README.md                  # Documentation
├── tsconfig.app.json          # TS config (app)
├── tsconfig.json              # Main TS config
├── tsconfig.node.json         # TS config (node)
└── vite.config.js             # Vite config
```

# Clone Repo

```ts

```

# Start Development :

```ts
npm run dev (Recommended)
or
yarn run dev
or
bun run dev
```

# For Build

```ts
npm run build
```

# For husky

```ts
npx husky init

```

# For Format

```ts
npm run format
```
