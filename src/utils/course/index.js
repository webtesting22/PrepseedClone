export const findComboPacksForCourse = (comboPacks, courseUrl) =>
    comboPacks.filter((combo) =>
        combo.items.some((item) => item.courseUrl === courseUrl)
    );
