import instance from "./config";

export const subscribeNewsletter = (email) => {
    const { origin, pathname } = window.location;
    return instance
        .url("/unauthorized/subscribe")
        .post({ email, info: { origin, pathname } });
};
