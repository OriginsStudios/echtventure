# Contact Form Setup

The contact form in the footer uses a simple `mailto:` link approach - no server-side setup required!

## How It Works

When a user fills out the contact form and clicks "Send Email", their default email client will open with:

- **To:** info@echtventure.com
- **Subject:** Pre-filled with the subject they entered
- **Body:** Pre-filled with their name and email address

## To Change the Email Address

To update where contact form submissions are sent, edit the email address in `src/components/layout/Footer.tsx`:

```typescript
const mailtoLink = `mailto:info@echtventure.com?subject=...`;
//                          ^^^^^^^^^^^^^^^^^^^^^^
//                          Change this email address
```

## Features

✅ **No setup required**: Works immediately, no API keys or third-party services  
✅ **Form validation**: Required fields and email format validation  
✅ **User-friendly**: Opens their familiar email client  
✅ **Mobile compatible**: Works on all devices and email clients  
✅ **Privacy-friendly**: No data sent to external servers

## Testing

1. Start your development server: `pnpm dev`
2. Navigate to your website
3. Scroll to the footer
4. Fill out the contact form and submit
5. Your email client should open with pre-filled information

## Advantages

- **Zero cost**: No third-party email service fees
- **No configuration**: Works out of the box
- **Instant setup**: No API keys or environment variables
- **Reliable**: Uses the user's own email client
- **Secure**: No sensitive data passes through your server

## Customization

You can customize the pre-filled email content by modifying the `body` variable in the `handleSubmit` function:

```typescript
const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A`;
```

Use `%0D%0A` for line breaks and `%0D%0A%0D%0A` for paragraph spacing.

## Need Help?

Contact the developer at [Origins Studios](https://www.originskh.com/)
