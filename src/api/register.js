import instance from "./config";

export const getLogoUploadPolicy = (mime) =>
	instance
		.url("/unauthorized/coaching/logo-upload-policy")
		.query({ mime })
		.get();

export const submit = ({ coachingName, email, mobileNumber, logoUrl }) =>
	instance.url("/unauthorized/coaching/register-for-demo").post({
		coachingName,
		email,
		mobileNumber,
		logoUrl,
	});
