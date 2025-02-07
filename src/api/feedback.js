import instance from "./config";

export const getProfilePictureUploadPolicy = (mime) =>
	instance
		.url("/unauthorized/feedback/image-upload-policy")
		.query({ mime })
		.get();

export const submit = ({
	email,
	courseRelevancy,
	collegeName,
	profilePictureUrl,
	recommendationLevel,
	sessionRelevancy,
	experience,
	likedMost,
	name,
	type,
}) =>
	instance.url("/unauthorized/feedback/submit").post({
		email,
		courseRelevancy,
		collegeName,
		profilePictureUrl,
		recommendationLevel,
		sessionRelevancy,
		experience,
		likedMost,
		name,
		type,
	});
