# Mrelgoo-frontend

Mrelgoo frontend

1 Photo upload size validation for files exceeding 15MB.
2 Reset photos on "new order" after submitting an order.
3 Auto-correct email input after validation fails on checkout and contact us pages.
4 Prevent incomplete Stripe payment intent creation; require all payment info.
5 Add upload progress bar behind the photo box with percentage text overlay.
6 Implement "Download all via email" feature to download uploaded photos in a zip file.

### --------------------------------------------------------------------------------------------------------------

I need some updates for my website:

→ Condition: if user uploaded +15mb photos, it should say: Maximum size: 15mb.

→ In dual snapshot, after submitting and order and clicking “new order”, it shouldn’t keep the photos

→ In the mail validation check on checkout page & contact us page, it should correct the mail in the mail input as well once user clicks “ok”.

→ (Now, even if user didn’t fill card numbers, it sent a pa_yment intent to stripe and it shows in Stripe dashboard: incompleted transaction). I should be like: when filling all infos on checkout page but pa_yment infos, it shouldn’t proceed nor sent the pa_yment intent to stripe, user must finish pa_yment infos as well (card numbers, expiration date, and zip code), and say (Pa_yment infos are required).

→ Currently, photos start to upload after user clicks submit order, and it takes some seconds to show the “Thank You - Popup”, it may confuse users. Solution: Add a progress bar behind the photo box, and a text Uploading 95%.. On top of it. Like example below, but the green bar should be behind text and photo and delete button, it should be like the background of the photo frame.

########

## Please let me know your pricing. Thank you.

- this one.
  → When user clicks Download all via e mail, he can download uploaded photos in zip file. This is json file in frontend linked with ZeptoMail already.

---

Tech stack:
→ frontend: nextjs, typescript, chakra ui
→ backend: nodejs, mongodb, typescript

---

## You can use a test stripe card and a real mail for testing the checkout experience

Ok, here's the website: www.baby.zone
