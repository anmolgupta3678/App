# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (recommended: Gmail)
4. Connect your email account (anmolgupta3678@gmail.com)
5. Note down the Service ID (e.g., `service_anmol_portfolio`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{user_name}}

**Content:**
```
Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{user_message}}

---
Sent from your portfolio contact form
```

4. Save the template and note the Template ID (e.g., `template_anmol_contact`)

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

## Step 5: Update Contact.tsx
Replace these values in `src/pages/Contact.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

## Step 6: Test the Form
1. Fill out the contact form
2. Submit and check if you receive the email
3. Check the browser console for any errors

## Troubleshooting
- Make sure all IDs are correct
- Check if your email service is properly connected
- Verify the template variables match the form field names
- Check browser console for error messages

## Form Field Names (Important!)
The form uses these field names that must match your EmailJS template:
- `user_name` (Full Name)
- `user_email` (Email Address)  
- `user_subject` (Subject)
- `user_message` (Message)

Make sure your EmailJS template uses these exact variable names! 