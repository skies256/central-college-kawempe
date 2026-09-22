# Central College Kawempe

## Content management

The site uses Decap CMS at `/admin/`. Deploy the repository on Netlify, enable **Identity** and **Git Gateway**, then open `/admin/` to manage school information, images, pages and news.

Upload the supplied school photographs and logo from the CMS media library. Suggested filenames:

- `school-event-1.jpg` — event crowd photograph
- `school-event-2.jpg` — student event photograph
- `students.jpg` — student portrait photograph
- `central-college-kawempe-logo.png` — official crest/logo

The current image fields intentionally remain empty until the original image files are uploaded through Decap CMS. This prevents the website from pretending that remote stock images are official school photography.

## Contact form

`contact.html` uses a Netlify Forms-compatible form. After deploying to Netlify, submitted messages appear in the Netlify dashboard and can be forwarded by email notifications.

## WhatsApp

Set the real WhatsApp number in `content/school.json` or through Decap CMS. Use digits only with the country code, for example `2567XXXXXXXX`.
