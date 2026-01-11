# Folder Structure

This project follows a feature-first architecture.

---

## src/core

Shared low-level logic:

- axios client
- global config
- interceptors

❌ No business logic here

---

## src/modules (features)

Each folder represents a business domain.

Example:
modules/
products/
components/
hooks/
pages/
services/
utils/

---

## src/shared

Reusable and generic elements:

- UI components
- global hooks
- providers
- utils
