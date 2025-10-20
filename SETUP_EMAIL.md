# Email Setup Instructions

The contact form in the footer is now fully functional! Follow these steps to complete the setup:

## 1. Dependencies

The following packages have been installed:

- `resend` - Email sending service
- `@react-email/components` - Email component library (peer dependency)
- `@react-email/render` - Email rendering engine (peer dependency)

These are already configured in your `package.json`.

## 2. Get Resend API Key

1. Go to [Resend](https://resend.com) and create a free account
2. Navigate to the [API Keys page](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key (you'll only see it once!)

## 3. Configure Environment Variables

Create a `.env.local` file in the root directory of your project with the following:

```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Contact form destination email
CONTACT_EMAIL=your-email@example.com
```

Replace:

- `your_resend_api_key_here` with your actual Resend API key
- `your-email@example.com` with the email address where you want to receive contact form submissions

## 4. Verify Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Follow the DNS verification steps
4. Update the `from` field in `src/app/api/contact/route.ts`:

```typescript
from: 'Contact Form <noreply@yourdomain.com>',  // Replace with your verified domain
```

## 5. Test the Form

1. Start your development server: `pnpm dev`
2. Navigate to your website
3. Scroll to the footer
4. Fill out the contact form and submit
5. Check your email inbox (and spam folder) for the message

## Features

✅ **Form validation**: Required fields and email format validation  
✅ **Loading states**: Button shows "Sending..." while submitting  
✅ **Success/Error feedback**: Clear visual feedback to users  
✅ **Beautiful email template**: HTML-formatted emails with your branding  
✅ **Reply-to support**: You can reply directly to the sender's email

## Troubleshooting

### Form doesn't send emails

- Check that `.env.local` exists and has the correct API key
- Restart your dev server after adding environment variables
- Check the browser console and server logs for errors

### Emails go to spam

- Verify your domain with Resend
- Use a verified sender email address

### API Key invalid

- Make sure you copied the entire API key
- Check that there are no extra spaces in `.env.local`
- Try creating a new API key

## Free Tier Limits

Resend's free tier includes:

- 100 emails per day
- 3,000 emails per month

Perfect for small business websites!

## Need Help?

Contact the developer at [Origins Studios](https://www.originskh.com/)
