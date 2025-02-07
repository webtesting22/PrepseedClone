const isProd = "production" === process.env.NODE_ENV;
const googleTagsId = isProd ? "G-TGB1XQFGHZ" : "UA-randomid";

export const trackPageView = (path) => {
	try {
		window.gtag("config", googleTagsId, {
			page_location: window.location,
			page_path: path,
		});
	} catch (error) {}
};

const trackButtonClick = (data) => {
	try {
		window.gtag("event", (data && data.action) || "click", data);
	} catch (e) {}
};

export const trackEvent = (action, data) => {
	try {
		const parsedData = {};
		const handledKeys = [
			"non_interaction",
			"label",
			"event_label",
			"category",
			"event_category",
		];
		if (data && data.non_interaction) {
			parsedData.non_interaction = true;
		}
		if (data && data.value) {
			parsedData.value = data.value;
		}
		if (data && (data.label || data.event_label)) {
			parsedData.event_label = data.event_label || data.label;
		}
		if (data && (data.category || data.event_category)) {
			parsedData.event_category = data.event_category || data.category;
		}

		if (data) {
			Object.keys(data).forEach((key) => {
				parsedData[key] = data[key];
			});
		}

		window.gtag("event", action, parsedData);
	} catch (e) {}
};

export const createTrackButtonWithConfig = (config) => {
	return (e) => {
		const label =
			config.label ||
			e.target.innerText ||
			e.target.getAttribute("title") ||
			e.target.getAttribute("alt");
		trackButtonClick({
			event_category: config.category,
			event_label: label,
			action: config.action,
		});
	};
};

export const createTrackEventWithConfig = (config) => {
	return (e) => {
		// e is either label or an event
		let label = config.label;
		if (!label) {
			try {
				label = e.target.innerText;
			} catch (error) {
				if (typeof e === "string") {
					label = e;
				}
			}
		}
		const category = config.category;
		const action = config.action;
		try {
			window.gtag("event", action, {
				event_label: label,
				event_category: category,
				non_interaction: config.non_interaction,
			});
		} catch (e) {}
	};
};

export function initialize() {
	const elem = document.createElement("script");
	elem.setAttribute("async", "");
	elem.setAttribute(
		"src",
		`https://www.googletagmanager.com/gtag/js?id=${googleTagsId}`
	);
	setTimeout(() => {
		document.head.append(elem);
	}, 2000);
	window.dataLayer = window.dataLayer || [];
	if (!window.gtag) {
		window.gtag = function () {
			dataLayer.push(arguments);
		};
	}
	gtag("js", new Date());
	gtag("config", googleTagsId);
}
