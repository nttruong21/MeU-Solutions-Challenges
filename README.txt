- I can search for cat breeds and select a breed of my choice -> OK
  -> breed detail: https://api.thecatapi.com/v1/breeds/:breed_id

- I can see the most popular searched cat breeds summary on the homepage -> OK
  -> https://api.thecatapi.com/v1/breeds?limit=4

- I can see the top 10 most searched cat breeds -> OK
  -> https://api.thecatapi.com/v1/breeds?limit=10

- I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
  -> breed detail: https://api.thecatapi.com/v1/breeds/:breed_id

- I can see more photo of the breed
  -> https://api.thecatapi.com/v1/images/search?breed_ids=abys&limit=4

- On mobile, when I select the search option, a modal for breed search should pop up -> OK
- I can go to an article about cats when I click read more on Why you should have a cat section -> OK
- I can go to the top 10 cats by clicking see more in the dashboard -> OK

* layouts:
  - main : header, footer

* pages:
  - home
  - cat breed detail
  - top searched
  - read more

* colors
  - text:
    + #291507
    + #291507 0.6
  - background
    + #050709
    + #E3E1DC

* heading: 48px 700