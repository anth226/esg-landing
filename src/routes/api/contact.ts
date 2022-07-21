import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// TODO: Ask what do to on error and success

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData();
	const fname = data.get('fname');
	const lname = data.get('lname');
	const phone = data.get('phone');
	const email = data.get('email');

	const msg = {
		to: email, // Change to your recipient
		from: 'contact@esgi.io', // Change to your verified sender
		subject: 'ESG Contact',
		text: `First Name: ${fname}, Last Name: ${lname}, Email: ${email}, Phone: ${phone}`,
	};

	const res = await sgMail.send(msg);
	return {
		status: 302,
		headers: {
			Location: '/',
		},
	};
}
