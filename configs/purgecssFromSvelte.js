import htmlparser2 from "htmlparser2";

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];

        return arr2;
    }
}

function _iterableToArray(iter) {
    if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === "[object Arguments]"
    )
        return Array.from(iter);
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var should_ignore = function should_ignore(tag) {
    if (tag.length) {
        if (tag[0] === tag[0].toUpperCase()) {
            return true;
        }

        if (tag.startsWith("svelte:")) {
            return true;
        }

        if (tag == "script" || tag == "style") {
            return true;
        }
    }

    return false;
};

function extract(content) {
    var selectors = [];
    var parser = new htmlparser2.Parser(
        {
            onopentag: function onopentag(tag, attribs) {
                if (should_ignore(tag)) {
                    return;
                }

                selectors.push(tag);

                if (attribs) {
                    if (attribs.class) {
                        var classes =
                            attribs.class.match(/[A-Za-z0-9-_:/]+/g) || [];
                        selectors = selectors.concat(classes);
                    }

                    Object.keys(attribs).forEach(function (attr) {
                        if (attr.startsWith("class:")) {
                            selectors.push(attr.substring("class:".length));
                        }
                    });

                    if (attribs.id) {
                        selectors.push(attribs.id);
                    }
                }
            },
        },
        {
            decodeEntities: true,
            lowerCaseAttributeNames: false,
            lowerCaseTags: false,
        }
    );
    parser.write(content);
    parser.end();
    const array = _toConsumableArray(new Set(selectors));
    return array;
}
export default extract;
