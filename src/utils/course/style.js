const difference = (arrays) =>
    arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));

const BOLD = "BOLD";
export const UNDERLINE = "UNDERLINE";
const convertToStyle = (text) => {
    let styles = [];
    const activeStyles = {};
    for (var i = 1; i < text.length; i++) {
        const currentChar = text[i];
        const prevChar = text[i - 1];
        [
            { name: UNDERLINE, delimiter: "_" },
            { name: BOLD, delimiter: "-" },
        ].forEach(({ name: styleName, delimiter }) => {
            if (prevChar === delimiter && currentChar === delimiter) {
                if (typeof activeStyles[styleName] === "undefined") {
                    activeStyles[styleName] = {
                        start: i - 1,
                    };
                } else {
                    styles.push({
                        start: activeStyles[styleName].start,
                        end: i,
                        style: styleName,
                    });
                    activeStyles[styleName] = undefined;
                }
            }
        });
    }
    return styles;
};

const getAllStylesForPlace = (styles, i) => {
    let appliedStyles = [];
    styles.forEach((style) => {
        if (style.start <= i && style.end >= i) {
            appliedStyles.push(style.style);
        }
    });
    return appliedStyles;
};

const makeCompactStyle = (text, styles) => {
    const charsWithStyles = [];
    for (let i = 0; i < text.length; i++) {
        const itemStyle = getAllStylesForPlace(styles, i);
        charsWithStyles.push({
            char: text[i],
            styles: itemStyle,
        });
    }

    let prevStyles = [];
    const compact = [
        { text: "", styles: prevStyles, meta: { startOf: [], endOf: [] } },
    ];
    for (let i = 0; i <= charsWithStyles.length; i++) {
        const currentStyles =
            i < charsWithStyles.length ? charsWithStyles[i].styles : [];
        const currentChar =
            i < charsWithStyles.length ? charsWithStyles[i].char : "";
        if (prevStyles.length === currentStyles.length) {
            compact[compact.length - 1].text += currentChar;
        } else if (prevStyles.length < currentStyles.length) {
            // new style added
            const addedStyles = currentStyles[currentStyles.length - 1];
            compact.push({
                text: currentChar,
                styles: currentStyles,
                meta: { startOf: addedStyles },
            });
        } else {
            // style ended
            const removedStyles = difference(prevStyles, currentStyles);
            compact[compact.length - 1].meta.endOf = removedStyles;
            compact.push({
                text: currentChar,
                styles: currentStyles,
                meta: {},
            });
        }
        prevStyles = currentStyles;
    }
    const delimiterRemoved = [];
    compact.forEach((item) => {
        let s = item.text;
        try {
            if (item.meta.startOf.length > 0) {
                s = s.substring(2);
            }
        } catch (e) {
            //
        }
        try {
            if (item.meta.endOf.length > 0) {
                s = s.substring(0, s.length - 2);
            }
        } catch (e) {
            //
        }
        delimiterRemoved.push({ text: s, styles: item.styles });
    });
    const emptyRemoved = [];
    delimiterRemoved.forEach((item) => {
        if (item.text !== "") {
            emptyRemoved.push(item);
        }
    });
    return emptyRemoved;
};

const getStyleForString = (text) => {
    const s = convertToStyle(text);
    return makeCompactStyle(text, s);
};

export const convertToHTML = (text, styles) => {
    const textWithStyles = getStyleForString(text);
    return textWithStyles
        .map((i, index) => {
            const style = {};
            i.styles.forEach((s) => {
                switch (s) {
                    case BOLD:
                        style["font-weight"] = "bold";
                        break;
                    case UNDERLINE:
                        if (Object.keys(styles).some((k) => k === UNDERLINE)) {
                            Object.keys(styles[UNDERLINE]).forEach((k) => {
                                style[k] = styles[UNDERLINE][k];
                            });
                        } else {
                            style["text-decoration"] = "underline";
                        }
                }
            });
            const styleString = Object.keys(style)
                .map((key) => `${key}:${style[key]}`)
                .join(";");
            return `<span style="${styleString}">${i.text}</span>`;
        })
        .join("");
};
export const convertAboutTextToHTML = (text) => {
    const styles = { [UNDERLINE]: { "border-bottom": "1px solid #2096f3" } };
    return convertToHTML(text, styles);
};

export const convertSuggestionTextToHTML = (text) => {
    const styles = {
        [UNDERLINE]: { "border-bottom": "1px solid rgb(32, 150, 243)" },
    };
    return convertToHTML(text, styles);
};
