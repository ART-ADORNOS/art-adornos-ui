# Naming Conventions

This document defines the official naming conventions for this project.
All contributors must follow these rules.

---

## 1. Feature folders

- Use **camelCase**
- Always **plural**
- Represent a full domain, not a single entity

✅ Correct

- auth
- carts
- categories
- products
- orderHistory
- startups

❌ Incorrect

- category
- cart
- startup
- order-history

---

## 2. Components

- Use **PascalCase**
- One component per file

✅ Correct

- Navbar.js
- ProductCard.js
- CartNavBar.js

❌ Incorrect

- navbar.js
- product_card.js

---

## 3. Pages (Routes)

- Use **PascalCase**
- Suffix with `Page` when possible

✅ Correct

- LoginPage.js
- DashboardPage.js
- OrderHistoryPage.js

---

## 4. Hooks

- Must start with `use`
- Use **camelCase**

✅ Correct

- useUserLogin.js
- useGetProducts.js

❌ Incorrect

- userLogin.js
- getProductsHook.js

---

## 5. Services / API

- Folder name: `services`
- File name: camelCase + Service

✅ Correct

- getProductService.js
- registerOrderService.js

❌ Incorrect

- service/
- GetProduct.js

---

## 6. Test files

- Folder name: `__tests__`
- Same name as tested file

✅ Correct

- ProductCard.test.js
- useUserLogin.test.js
