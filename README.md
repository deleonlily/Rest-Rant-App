# Rest-Rant-Project-Pt1

This is the first step in creating our fully featured Rest Rant app

<!-- | Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    | /    | Homepage |
|GET | /places/ | List all places | -->

---

1. As a developer, I need to request data from the server about a specific place so I can populate the places detail page

---

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    | /    | Homepage |
| GET | /places/ | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
|POST | /places/:id/rant | Create a rant(comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant(comment) about a particular place |
| GET | * | 404 page(matches any route not defined above)