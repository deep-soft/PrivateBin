/*! showdown v 2.0.0 - 15-02-2022 */ ! function() {
    function a(e) {
        "use strict";
        var r = {
            omitExtraWLInCodeBlocks: {
                defaultValue: !1,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: !1,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: !1,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: !1,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: !1,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: !1,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {
                defaultValue: !1,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: !1,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: !1,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
                defaultValue: !1,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: !1,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: !1,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: !1,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: !1,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: !1,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: !0,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: !1,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: !1,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: !1,
                description: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: !1,
                description: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: !1,
                description: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: !1,
                description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {
                defaultValue: !1,
                description: "Enables github @mentions",
                type: "boolean"
            },
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: !0,
                description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {
                defaultValue: !1,
                description: "Open all links in new windows",
                type: "boolean"
            },
            backslashEscapesHTMLTags: {
                defaultValue: !1,
                description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: !1,
                description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: !1,
                description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            ellipsis: {
                defaultValue: !0,
                description: "Replaces three dots with the ellipsis unicode character",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: !1,
                description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: !1,
                description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: !1,
                description: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (!1 === e) return JSON.parse(JSON.stringify(r));
        var t, a = {};
        for (t in r) r.hasOwnProperty(t) && (a[t] = r[t].defaultValue);
        return a
    }
    var x = {},
        t = {},
        d = {},
        p = a(!0),
        h = "vanilla",
        _ = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                disableForced4SpacesIndentedSublists: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghCompatibleHeaderId: !0,
                ghMentions: !0,
                backslashEscapesHTMLTags: !0,
                emoji: !0,
                splitAdjacentBlockquotes: !0
            },
            original: {
                noHeaderId: !0,
                ghCodeBlocks: !1
            },
            ghost: {
                omitExtraWLInCodeBlocks: !0,
                parseImgDimensions: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                smoothLivePreview: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghMentions: !1,
                encodeEmails: !0
            },
            vanilla: a(!0),
            allOn: function() {
                "use strict";
                var e, r = a(!0),
                    t = {};
                for (e in r) r.hasOwnProperty(e) && (t[e] = !0);
                return t
            }()
        };

    function g(e, r) {
        "use strict";
        var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension",
            a = {
                valid: !0,
                error: ""
            };
        x.helper.isArray(e) || (e = [e]);
        for (var n = 0; n < e.length; ++n) {
            var s = t + " sub-extension " + n + ": ",
                o = e[n];
            if ("object" != typeof o) return a.valid = !1, a.error = s + "must be an object, but " + typeof o + " given", a;
            if (!x.helper.isString(o.type)) return a.valid = !1, a.error = s + 'property "type" must be a string, but ' + typeof o.type + " given", a;
            var i = o.type = o.type.toLowerCase();
            if ("lang" !== (i = "html" === (i = "language" === i ? o.type = "lang" : i) ? o.type = "output" : i) && "output" !== i && "listener" !== i) return a.valid = !1, a.error = s + "type " + i + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', a;
            if ("listener" === i) {
                if (x.helper.isUndefined(o.listeners)) return a.valid = !1, a.error = s + '. Extensions of type "listener" must have a property called "listeners"', a
            } else if (x.helper.isUndefined(o.filter) && x.helper.isUndefined(o.regex)) return a.valid = !1, a.error = s + i + ' extensions must define either a "regex" property or a "filter" method', a;
            if (o.listeners) {
                if ("object" != typeof o.listeners) return a.valid = !1, a.error = s + '"listeners" property must be an object but ' + typeof o.listeners + " given", a;
                for (var l in o.listeners)
                    if (o.listeners.hasOwnProperty(l) && "function" != typeof o.listeners[l]) return a.valid = !1, a.error = s + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + l + " must be a function but " + typeof o.listeners[l] + " given", a
            }
            if (o.filter) {
                if ("function" != typeof o.filter) return a.valid = !1, a.error = s + '"filter" must be a function, but ' + typeof o.filter + " given", a
            } else if (o.regex) {
                if (x.helper.isString(o.regex) && (o.regex = new RegExp(o.regex, "g")), !(o.regex instanceof RegExp)) return a.valid = !1, a.error = s + '"regex" property must either be a string or a RegExp object, but ' + typeof o.regex + " given", a;
                if (x.helper.isUndefined(o.replace)) return a.valid = !1, a.error = s + '"regex" extensions must implement a replace string or function', a
            }
        }
        return a
    }

    function n(e, r) {
        "use strict";
        return "¨E" + r.charCodeAt(0) + "E"
    }
    x.helper = {}, x.extensions = {}, x.setOption = function(e, r) {
        "use strict";
        return p[e] = r, this
    }, x.getOption = function(e) {
        "use strict";
        return p[e]
    }, x.getOptions = function() {
        "use strict";
        return p
    }, x.resetOptions = function() {
        "use strict";
        p = a(!0)
    }, x.setFlavor = function(e) {
        "use strict";
        if (!_.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        x.resetOptions();
        var r, t = _[e];
        for (r in h = e, t) t.hasOwnProperty(r) && (p[r] = t[r])
    }, x.getFlavor = function() {
        "use strict";
        return h
    }, x.getFlavorOptions = function(e) {
        "use strict";
        if (_.hasOwnProperty(e)) return _[e]
    }, x.getDefaultOptions = a, x.subParser = function(e, r) {
        "use strict";
        if (x.helper.isString(e)) {
            if (void 0 === r) {
                if (t.hasOwnProperty(e)) return t[e];
                throw Error("SubParser named " + e + " not registered!")
            }
            t[e] = r
        }
    }, x.extension = function(e, r) {
        "use strict";
        if (!x.helper.isString(e)) throw Error("Extension 'name' must be a string");
        if (e = x.helper.stdExtName(e), x.helper.isUndefined(r)) {
            if (!d.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
            return d[e]
        }
        "function" == typeof r && (r = r());
        var t = g(r = x.helper.isArray(r) ? r : [r], e);
        if (!t.valid) throw Error(t.error);
        d[e] = r
    }, x.getAllExtensions = function() {
        "use strict";
        return d
    }, x.removeExtension = function(e) {
        "use strict";
        delete d[e]
    }, x.resetExtensions = function() {
        "use strict";
        d = {}
    }, x.validateExtension = function(e) {
        "use strict";
        e = g(e, null);
        return !!e.valid || (console.warn(e.error), !1)
    }, x.hasOwnProperty("helper") || (x.helper = {}), x.helper.isString = function(e) {
        "use strict";
        return "string" == typeof e || e instanceof String
    }, x.helper.isFunction = function(e) {
        "use strict";
        return e && "[object Function]" === {}.toString.call(e)
    }, x.helper.isArray = function(e) {
        "use strict";
        return Array.isArray(e)
    }, x.helper.isUndefined = function(e) {
        "use strict";
        return void 0 === e
    }, x.helper.forEach = function(e, r) {
        "use strict";
        if (x.helper.isUndefined(e)) throw new Error("obj param is required");
        if (x.helper.isUndefined(r)) throw new Error("callback param is required");
        if (!x.helper.isFunction(r)) throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(r);
        else if (x.helper.isArray(e))
            for (var t = 0; t < e.length; t++) r(e[t], t, e);
        else {
            if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
            for (var a in e) e.hasOwnProperty(a) && r(e[a], a, e)
        }
    }, x.helper.stdExtName = function(e) {
        "use strict";
        return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
    }, x.helper.escapeCharactersCallback = n, x.helper.escapeCharacters = function(e, r, t) {
        "use strict";
        r = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])", t && (r = "\\\\" + r), t = new RegExp(r, "g");
        return e = e.replace(t, n)
    }, x.helper.unescapeHTMLEntities = function(e) {
        "use strict";
        return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    };

    function u(e, r, u, t) {
        "use strict";
        var a, n, s, d = -1 < (t = t || "").indexOf("g"),
            o = new RegExp(r + "|" + u, "g" + t.replace(/g/g, "")),
            p = new RegExp(r, t.replace(/g/g, "")),
            i = [];
        do {
            for (a = 0; c = o.exec(e);)
                if (p.test(c[0])) a++ || (s = (n = o.lastIndex) - c[0].length);
                else if (a && !--a) {
                var l = c.index + c[0].length,
                    c = {
                        left: {
                            start: s,
                            end: n
                        },
                        match: {
                            start: n,
                            end: c.index
                        },
                        right: {
                            start: c.index,
                            end: l
                        },
                        wholeMatch: {
                            start: s,
                            end: l
                        }
                    };
                if (i.push(c), !d) return i
            }
        } while (a && (o.lastIndex = n));
        return i
    }

    function s(u) {
        "use strict";
        return function(e, r, t, a, c, n, s) {
            var o = t = t.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback),
                i = "",
                l = "",
                r = r || "",
                s = s || "";
            return /^www\./i.test(t) && (t = t.replace(/^www\./i, "http://www.")), u.excludeTrailingPunctuationFromURLs && n && (i = n), r + '<a href="' + t + '"' + (l = u.openLinksInNewWindow ? ' rel="noopener noreferrer" target="¨E95Eblank"' : l) + ">" + o + "</a>" + i + s
        }
    }

    function o(n, s) {
        "use strict";
        return function(e, r, t) {
            var a = "mailto:";
            return r = r || "", t = x.subParser("unescapeSpecialChars")(t, n, s), n.encodeEmails ? (a = x.helper.encodeEmailAddress(a + t), t = x.helper.encodeEmailAddress(t)) : a += t, r + '<a href="' + a + '">' + t + "</a>"
        }
    }
    x.helper.matchRecursiveRegExp = function(e, r, t, a) {
        "use strict";
        for (var n = u(e, r, t, a), s = [], o = 0; o < n.length; ++o) s.push([e.slice(n[o].wholeMatch.start, n[o].wholeMatch.end), e.slice(n[o].match.start, n[o].match.end), e.slice(n[o].left.start, n[o].left.end), e.slice(n[o].right.start, n[o].right.end)]);
        return s
    }, x.helper.replaceRecursiveRegExp = function(e, r, t, a, n) {
        "use strict";
        x.helper.isFunction(r) || (s = r, r = function() {
            return s
        });
        var s, o = u(e, t, a, n),
            t = e,
            i = o.length;
        if (0 < i) {
            var l = [];
            0 !== o[0].wholeMatch.start && l.push(e.slice(0, o[0].wholeMatch.start));
            for (var c = 0; c < i; ++c) l.push(r(e.slice(o[c].wholeMatch.start, o[c].wholeMatch.end), e.slice(o[c].match.start, o[c].match.end), e.slice(o[c].left.start, o[c].left.end), e.slice(o[c].right.start, o[c].right.end))), c < i - 1 && l.push(e.slice(o[c].wholeMatch.end, o[c + 1].wholeMatch.start));
            o[i - 1].wholeMatch.end < e.length && l.push(e.slice(o[i - 1].wholeMatch.end)), t = l.join("")
        }
        return t
    }, x.helper.regexIndexOf = function(e, r, t) {
        "use strict";
        if (!x.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (r instanceof RegExp == !1) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        e = e.substring(t || 0).search(r);
        return 0 <= e ? e + (t || 0) : e
    }, x.helper.splitAtIndex = function(e, r) {
        "use strict";
        if (!x.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, r), e.substring(r)]
    }, x.helper.encodeEmailAddress = function(e) {
        "use strict";
        var t = [function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        }, function(e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";"
        }, function(e) {
            return e
        }];
        return e = e.replace(/./g, function(e) {
            var r;
            return e = "@" === e ? t[Math.floor(2 * Math.random())](e) : .9 < (r = Math.random()) ? t[2](e) : .45 < r ? t[1](e) : t[0](e)
        })
    }, x.helper.padEnd = function(e, r, t) {
        "use strict";
        return r >>= 0, t = String(t || " "), e.length > r ? String(e) : ((r -= e.length) > t.length && (t += t.repeat(r / t.length)), String(e) + t.slice(0, r))
    }, "undefined" == typeof console && (console = {
        warn: function(e) {
            "use strict";
            alert(e)
        },
        log: function(e) {
            "use strict";
            alert(e)
        },
        error: function(e) {
            "use strict";
            throw e
        }
    }), x.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
    }, x.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    }, x.Converter = function(e) {
        "use strict";
        var r, t, n = {},
            i = [],
            l = [],
            o = {},
            a = h,
            s = {
                parsed: {},
                raw: "",
                format: ""
            };
        for (r in e = e || {}, p) p.hasOwnProperty(r) && (n[r] = p[r]);
        if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
        for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);

        function c(e, r) {
            if (r = r || null, x.helper.isString(e)) {
                if (r = e = x.helper.stdExtName(e), x.extensions[e]) {
                    console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
                    var t = x.extensions[e],
                        a = e;
                    if ("function" == typeof t && (t = t(new x.Converter)), x.helper.isArray(t) || (t = [t]), !(a = g(t, a)).valid) throw Error(a.error);
                    for (var n = 0; n < t.length; ++n) switch (t[n].type) {
                        case "lang":
                            i.push(t[n]);
                            break;
                        case "output":
                            l.push(t[n]);
                            break;
                        default:
                            throw Error("Extension loader error: Type unrecognized!!!")
                    }
                    return
                }
                if (x.helper.isUndefined(d[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                e = d[e]
            }
            "function" == typeof e && (e = e());
            a = g(e = x.helper.isArray(e) ? e : [e], r);
            if (!a.valid) throw Error(a.error);
            for (var s = 0; s < e.length; ++s) {
                switch (e[s].type) {
                    case "lang":
                        i.push(e[s]);
                        break;
                    case "output":
                        l.push(e[s])
                }
                if (e[s].hasOwnProperty("listeners"))
                    for (var o in e[s].listeners) e[s].listeners.hasOwnProperty(o) && u(o, e[s].listeners[o])
            }
        }

        function u(e, r) {
            if (!x.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
            if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof r + " given");
            o.hasOwnProperty(e) || (o[e] = []), o[e].push(r)
        }
        n.extensions && x.helper.forEach(n.extensions, c), this._dispatch = function(e, r, t, a) {
            if (o.hasOwnProperty(e))
                for (var n = 0; n < o[e].length; ++n) {
                    var s = o[e][n](e, r, this, t, a);
                    s && void 0 !== s && (r = s)
                }
            return r
        }, this.listen = function(e, r) {
            return u(e, r), this
        }, this.makeHtml = function(r) {
            if (!r) return r;
            var e, t, a = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: i,
                outputModifiers: l,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                    parsed: {},
                    raw: "",
                    format: ""
                }
            };
            return r = (r = (r = (r = (r = r.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), n.smartIndentationFix && (t = (e = r).match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + t + "}", "gm"), r = e.replace(t, "")), r = "\n\n" + r + "\n\n", r = (r = x.subParser("detab")(r, n, a)).replace(/^[ \t]+$/gm, ""), x.helper.forEach(i, function(e) {
                r = x.subParser("runExtension")(e, r, n, a)
            }), r = x.subParser("metadata")(r, n, a), r = x.subParser("hashPreCodeTags")(r, n, a), r = x.subParser("githubCodeBlocks")(r, n, a), r = x.subParser("hashHTMLBlocks")(r, n, a), r = x.subParser("hashCodeTags")(r, n, a), r = x.subParser("stripLinkDefinitions")(r, n, a), r = x.subParser("blockGamut")(r, n, a), r = x.subParser("unhashHTMLSpans")(r, n, a), r = (r = (r = x.subParser("unescapeSpecialChars")(r, n, a)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"), r = x.subParser("completeHTMLDocument")(r, n, a), x.helper.forEach(l, function(e) {
                r = x.subParser("runExtension")(e, r, n, a)
            }), s = a.metadata, r
        }, this.makeMarkdown = this.makeMd = function(e, r) {
            if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"), !r) {
                if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                r = window.document
            }
            for (var r = r.createElement("div"), t = (r.innerHTML = e, {
                    preList: function(e) {
                        for (var r = e.querySelectorAll("pre"), t = [], a = 0; a < r.length; ++a)
                            if (1 === r[a].childElementCount && "code" === r[a].firstChild.tagName.toLowerCase()) {
                                var n = r[a].firstChild.innerHTML.trim(),
                                    s = r[a].firstChild.getAttribute("data-language") || "";
                                if ("" === s)
                                    for (var o = r[a].firstChild.className.split(" "), i = 0; i < o.length; ++i) {
                                        var l = o[i].match(/^language-(.+)$/);
                                        if (null !== l) {
                                            s = l[1];
                                            break
                                        }
                                    }
                                n = x.helper.unescapeHTMLEntities(n), t.push(n), r[a].outerHTML = '<precode language="' + s + '" precodenum="' + a.toString() + '"></precode>'
                            } else t.push(r[a].innerHTML), r[a].innerHTML = "", r[a].setAttribute("prenum", a.toString());
                        return t
                    }(r)
                }), a = (! function e(r) {
                    for (var t = 0; t < r.childNodes.length; ++t) {
                        var a = r.childNodes[t];
                        3 === a.nodeType ? /\S/.test(a.nodeValue) || /^[ ]+$/.test(a.nodeValue) ? (a.nodeValue = a.nodeValue.split("\n").join(" "), a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")) : (r.removeChild(a), --t) : 1 === a.nodeType && e(a)
                    }
                }(r), r.childNodes), n = "", s = 0; s < a.length; s++) n += x.subParser("makeMarkdown.node")(a[s], t);
            return n
        }, this.setOption = function(e, r) {
            n[e] = r
        }, this.getOption = function(e) {
            return n[e]
        }, this.getOptions = function() {
            return n
        }, this.addExtension = function(e, r) {
            c(e, r = r || null)
        }, this.useExtension = function(e) {
            c(e)
        }, this.setFlavor = function(e) {
            if (!_.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            var r, t = _[e];
            for (r in a = e, t) t.hasOwnProperty(r) && (n[r] = t[r])
        }, this.getFlavor = function() {
            return a
        }, this.removeExtension = function(e) {
            x.helper.isArray(e) || (e = [e]);
            for (var r = 0; r < e.length; ++r) {
                for (var t = e[r], a = 0; a < i.length; ++a) i[a] === t && i.splice(a, 1);
                for (var n = 0; n < l.length; ++n) l[n] === t && l.splice(n, 1)
            }
        }, this.getAllExtensions = function() {
            return {
                language: i,
                output: l
            }
        }, this.getMetadata = function(e) {
            return e ? s.raw : s.parsed
        }, this.getMetadataFormat = function() {
            return s.format
        }, this._setMetadataPair = function(e, r) {
            s.parsed[e] = r
        }, this._setMetadataFormat = function(e) {
            s.format = e
        }, this._setMetadataRaw = function(e) {
            s.raw = e
        }
    }, x.subParser("anchors", function(e, i, l) {
        "use strict";

        function r(e, r, t, a, n, s, o) {
            if (x.helper.isUndefined(o) && (o = ""), t = t.toLowerCase(), -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = "";
            else if (!a) {
                if (a = "#" + (t = t || r.toLowerCase().replace(/ ?\n/g, " ")), x.helper.isUndefined(l.gUrls[t])) return e;
                a = l.gUrls[t], x.helper.isUndefined(l.gTitles[t]) || (o = l.gTitles[t])
            }
            return e = '<a href="' + (a = a.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"', "" !== o && null !== o && (e += ' title="' + (o = (o = o.replace(/"/g, "&quot;")).replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"'), i.openLinksInNewWindow && !/^#/.test(a) && (e += ' rel="noopener noreferrer" target="¨E95Eblank"'), e += ">" + r + "</a>"
        }
        return e = (e = (e = (e = (e = l.converter._dispatch("anchors.before", e, i, l)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[([^\[\]]+)]()()()()()/g, r), i.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function(e, r, t, a, n) {
            if ("\\" === t) return r + a;
            if (!x.helper.isString(i.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            t = "";
            return r + '<a href="' + i.ghMentionsLink.replace(/\{u}/g, n) + '"' + (t = i.openLinksInNewWindow ? ' rel="noopener noreferrer" target="¨E95Eblank"' : t) + ">" + a + "</a>"
        })), e = l.converter._dispatch("anchors.after", e, i, l)
    });
    var i = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
        l = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
        c = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
        m = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
        f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;
    x.subParser("autoLinks", function(e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(c, s(r))).replace(f, o(r, t)), e = t.converter._dispatch("autoLinks.after", e, r, t)
    }), x.subParser("simplifiedAutoLinks", function(e, r, t) {
        "use strict";
        return r.simplifiedAutoLink ? (e = t.converter._dispatch("simplifiedAutoLinks.before", e, r, t), e = (e = r.excludeTrailingPunctuationFromURLs ? e.replace(l, s(r)) : e.replace(i, s(r))).replace(m, o(r, t)), t.converter._dispatch("simplifiedAutoLinks.after", e, r, t)) : e
    }), x.subParser("blockGamut", function(e, r, t) {
        "use strict";
        return e = t.converter._dispatch("blockGamut.before", e, r, t), e = x.subParser("blockQuotes")(e, r, t), e = x.subParser("headers")(e, r, t), e = x.subParser("horizontalRule")(e, r, t), e = x.subParser("lists")(e, r, t), e = x.subParser("codeBlocks")(e, r, t), e = x.subParser("tables")(e, r, t), e = x.subParser("hashHTMLBlocks")(e, r, t), e = x.subParser("paragraphs")(e, r, t), e = t.converter._dispatch("blockGamut.after", e, r, t)
    }), x.subParser("blockQuotes", function(e, r, t) {
        "use strict";
        e = t.converter._dispatch("blockQuotes.before", e, r, t);
        var a = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return r.splitAdjacentBlockquotes && (a = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = (e += "\n\n").replace(a, function(e) {
            return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = x.subParser("githubCodeBlocks")(e, r, t), e = (e = (e = x.subParser("blockGamut")(e, r, t)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
                return r.replace(/^  /gm, "¨0").replace(/¨0/g, "")
            }), x.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", r, t)
        }), e = t.converter._dispatch("blockQuotes.after", e, r, t)
    }), x.subParser("codeBlocks", function(e, n, s) {
        "use strict";
        e = s.converter._dispatch("codeBlocks.before", e, n, s);
        return e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, function(e, r, t) {
            var a = "\n",
                r = x.subParser("outdent")(r, n, s);
            return r = x.subParser("encodeCode")(r, n, s), r = "<pre><code>" + (r = (r = (r = x.subParser("detab")(r, n, s)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + (a = n.omitExtraWLInCodeBlocks ? "" : a) + "</code></pre>", x.subParser("hashBlock")(r, n, s) + t
        })).replace(/¨0/, ""), e = s.converter._dispatch("codeBlocks.after", e, n, s)
    }), x.subParser("codeSpans", function(e, n, s) {
        "use strict";
        return e = (e = void 0 === (e = s.converter._dispatch("codeSpans.before", e, n, s)) ? "" : e).replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, t, a) {
            return a = (a = a.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), a = r + "<code>" + (a = x.subParser("encodeCode")(a, n, s)) + "</code>", a = x.subParser("hashHTMLSpans")(a, n, s)
        }), e = s.converter._dispatch("codeSpans.after", e, n, s)
    }), x.subParser("completeHTMLDocument", function(e, r, t) {
        "use strict";
        if (!r.completeHTMLDocument) return e;
        e = t.converter._dispatch("completeHTMLDocument.before", e, r, t);
        var a, n = "html",
            s = "<!DOCTYPE HTML>\n",
            o = "",
            i = '<meta charset="utf-8">\n',
            l = "",
            c = "";
        for (a in void 0 !== t.metadata.parsed.doctype && (s = "<!DOCTYPE " + t.metadata.parsed.doctype + ">\n", "html" !== (n = t.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== n || (i = '<meta charset="utf-8">')), t.metadata.parsed)
            if (t.metadata.parsed.hasOwnProperty(a)) switch (a.toLowerCase()) {
                case "doctype":
                    break;
                case "title":
                    o = "<title>" + t.metadata.parsed.title + "</title>\n";
                    break;
                case "charset":
                    i = "html" === n || "html5" === n ? '<meta charset="' + t.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + t.metadata.parsed.charset + '">\n';
                    break;
                case "language":
                case "lang":
                    l = ' lang="' + t.metadata.parsed[a] + '"', c += '<meta name="' + a + '" content="' + t.metadata.parsed[a] + '">\n';
                    break;
                default:
                    c += '<meta name="' + a + '" content="' + t.metadata.parsed[a] + '">\n'
            }
            return e = s + "<html" + l + ">\n<head>\n" + o + i + c + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = t.converter._dispatch("completeHTMLDocument.after", e, r, t)
    }), x.subParser("detab", function(e, r, t) {
        "use strict";
        return e = (e = (e = (e = (e = (e = t.converter._dispatch("detab.before", e, r, t)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, function(e, r) {
            for (var t = r, a = 4 - t.length % 4, n = 0; n < a; n++) t += " ";
            return t
        })).replace(/¨A/g, "    ")).replace(/¨B/g, ""), e = t.converter._dispatch("detab.after", e, r, t)
    }), x.subParser("ellipsis", function(e, r, t) {
        "use strict";
        return r.ellipsis ? (e = (e = t.converter._dispatch("ellipsis.before", e, r, t)).replace(/\.\.\./g, "…"), t.converter._dispatch("ellipsis.after", e, r, t)) : e
    }), x.subParser("emoji", function(e, r, t) {
        "use strict";
        if (!r.emoji) return e;
        return e = (e = t.converter._dispatch("emoji.before", e, r, t)).replace(/:([\S]+?):/g, function(e, r) {
            return x.helper.emojis.hasOwnProperty(r) ? x.helper.emojis[r] : e
        }), e = t.converter._dispatch("emoji.after", e, r, t)
    }), x.subParser("encodeAmpsAndAngles", function(e, r, t) {
        "use strict";
        return e = (e = (e = (e = (e = t.converter._dispatch("encodeAmpsAndAngles.before", e, r, t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), e = t.converter._dispatch("encodeAmpsAndAngles.after", e, r, t)
    }), x.subParser("encodeBackslashEscapes", function(e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("encodeBackslashEscapes.before", e, r, t)).replace(/\\(\\)/g, x.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, x.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeBackslashEscapes.after", e, r, t)
    }), x.subParser("encodeCode", function(e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("encodeCode.before", e, r, t)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, x.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeCode.after", e, r, t)
    }), x.subParser("escapeSpecialCharsWithinTagAttributes", function(e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, r, t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function(e) {
            return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, x.helper.escapeCharactersCallback)
        })).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, function(e) {
            return e.replace(/([\\`*_~=|])/g, x.helper.escapeCharactersCallback)
        }), e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, r, t)
    }), x.subParser("githubCodeBlocks", function(e, s, o) {
        "use strict";
        return s.ghCodeBlocks ? (e = o.converter._dispatch("githubCodeBlocks.before", e, s, o), e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(e, r, t, a) {
            var n = s.omitExtraWLInCodeBlocks ? "" : "\n";
            return a = x.subParser("encodeCode")(a, s, o), a = "<pre><code" + (t ? ' class="' + t + " language-" + t + '"' : "") + ">" + (a = (a = (a = x.subParser("detab")(a, s, o)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + n + "</code></pre>", a = x.subParser("hashBlock")(a, s, o), "\n\n¨G" + (o.ghCodeBlocks.push({
                text: e,
                codeblock: a
            }) - 1) + "G\n\n"
        })).replace(/¨0/, ""), o.converter._dispatch("githubCodeBlocks.after", e, s, o)) : e
    }), x.subParser("hashBlock", function(e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("hashBlock.before", e, r, t)).replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n", e = t.converter._dispatch("hashBlock.after", e, r, t)
    }), x.subParser("hashCodeTags", function(e, n, s) {
        "use strict";
        e = s.converter._dispatch("hashCodeTags.before", e, n, s);
        return e = x.helper.replaceRecursiveRegExp(e, function(e, r, t, a) {
            t = t + x.subParser("encodeCode")(r, n, s) + a;
            return "¨C" + (s.gHtmlSpans.push(t) - 1) + "C"
        }, "<code\\b[^>]*>", "</code>", "gim"), e = s.converter._dispatch("hashCodeTags.after", e, n, s)
    }), x.subParser("hashElement", function(e, r, t) {
        "use strict";
        return function(e, r) {
            return r = (r = (r = r.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), r = "\n\n¨K" + (t.gHtmlBlocks.push(r) - 1) + "K\n\n"
        }
    }), x.subParser("hashHTMLBlocks", function(e, r, n) {
        "use strict";
        e = n.converter._dispatch("hashHTMLBlocks.before", e, r, n);

        function t(e, r, t, a) {
            return -1 !== t.search(/\bmarkdown\b/) && (e = t + n.converter.makeHtml(r) + a), "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
        }
        var a = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"];
        r.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(e, r) {
            return "&lt;" + r + "&gt;"
        }));
        for (var s = 0; s < a.length; ++s)
            for (var o = new RegExp("^ {0,3}(<" + a[s] + "\\b[^>]*>)", "im"), i = "<" + a[s] + "\\b[^>]*>", u = "</" + a[s] + ">"; - 1 !== (l = x.helper.regexIndexOf(e, o));) {
                var l = x.helper.splitAtIndex(e, l),
                    c = x.helper.replaceRecursiveRegExp(l[1], t, i, u, "im");
                if (c === l[1]) break;
                e = l[0].concat(c)
            }
        return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, x.subParser("hashElement")(e, r, n)), e = (e = x.helper.replaceRecursiveRegExp(e, function(e) {
            return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
        }, "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, x.subParser("hashElement")(e, r, n)), e = n.converter._dispatch("hashHTMLBlocks.after", e, r, n)
    }), x.subParser("hashHTMLSpans", function(e, r, t) {
        "use strict";

        function a(e) {
            return "¨C" + (t.gHtmlSpans.push(e) - 1) + "C"
        }
        return e = (e = (e = (e = (e = t.converter._dispatch("hashHTMLSpans.before", e, r, t)).replace(/<[^>]+?\/>/gi, a)).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, a)).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, a)).replace(/<[^>]+?>/gi, a), e = t.converter._dispatch("hashHTMLSpans.after", e, r, t)
    }), x.subParser("unhashHTMLSpans", function(e, r, t) {
        "use strict";
        e = t.converter._dispatch("unhashHTMLSpans.before", e, r, t);
        for (var a = 0; a < t.gHtmlSpans.length; ++a) {
            for (var n = t.gHtmlSpans[a], s = 0;
                /¨C(\d+)C/.test(n);) {
                var o = RegExp.$1,
                    n = n.replace("¨C" + o + "C", t.gHtmlSpans[o]);
                if (10 === s) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break
                }++s
            }
            e = e.replace("¨C" + a + "C", n)
        }
        return e = t.converter._dispatch("unhashHTMLSpans.after", e, r, t)
    }), x.subParser("hashPreCodeTags", function(e, n, s) {
        "use strict";
        e = s.converter._dispatch("hashPreCodeTags.before", e, n, s);
        return e = x.helper.replaceRecursiveRegExp(e, function(e, r, t, a) {
            t = t + x.subParser("encodeCode")(r, n, s) + a;
            return "\n\n¨G" + (s.ghCodeBlocks.push({
                text: e,
                codeblock: t
            }) - 1) + "G\n\n"
        }, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = s.converter._dispatch("hashPreCodeTags.after", e, n, s)
    }), x.subParser("headers", function(e, n, s) {
        "use strict";
        e = s.converter._dispatch("headers.before", e, n, s);
        var o = isNaN(parseInt(n.headerLevelStart)) ? 1 : parseInt(n.headerLevelStart),
            r = n.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            t = n.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm,
            r = (e = (e = e.replace(r, function(e, r) {
                var t = x.subParser("spanGamut")(r, n, s),
                    r = n.noHeaderId ? "" : ' id="' + i(r) + '"',
                    r = "<h" + o + r + ">" + t + "</h" + o + ">";
                return x.subParser("hashBlock")(r, n, s)
            })).replace(t, function(e, r) {
                var t = x.subParser("spanGamut")(r, n, s),
                    r = n.noHeaderId ? "" : ' id="' + i(r) + '"',
                    a = o + 1,
                    r = "<h" + a + r + ">" + t + "</h" + a + ">";
                return x.subParser("hashBlock")(r, n, s)
            }), n.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm);

        function i(e) {
            var r;
            return !n.customizedHeaderId || (r = e.match(/\{([^{]+?)}\s*$/)) && r[1] && (e = r[1]), r = e, e = x.helper.isString(n.prefixHeaderId) ? n.prefixHeaderId : !0 === n.prefixHeaderId ? "section-" : "", n.rawPrefixHeaderId || (r = e + r), r = (n.ghCompatibleHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "") : n.rawHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-") : r.replace(/[^\w]/g, "")).toLowerCase(), n.rawPrefixHeaderId && (r = e + r), s.hashLinkCounts[r] ? r = r + "-" + s.hashLinkCounts[r]++ : s.hashLinkCounts[r] = 1, r
        }
        return e = e.replace(r, function(e, r, t) {
            var a = t,
                a = (n.customizedHeaderId && (a = t.replace(/\s?\{([^{]+?)}\s*$/, "")), x.subParser("spanGamut")(a, n, s)),
                t = n.noHeaderId ? "" : ' id="' + i(t) + '"',
                r = o - 1 + r.length,
                t = "<h" + r + t + ">" + a + "</h" + r + ">";
            return x.subParser("hashBlock")(t, n, s)
        }), e = s.converter._dispatch("headers.after", e, n, s)
    }), x.subParser("horizontalRule", function(e, r, t) {
        "use strict";
        e = t.converter._dispatch("horizontalRule.before", e, r, t);
        var a = x.subParser("hashBlock")("<hr />", r, t);
        return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, a), e = t.converter._dispatch("horizontalRule.after", e, r, t)
    }), x.subParser("images", function(e, r, d) {
        "use strict";

        function l(e, r, t, a, n, s, u, o) {
            var i = d.gUrls,
                l = d.gTitles,
                c = d.gDimensions;
            if (t = t.toLowerCase(), o = o || "", -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = "";
            else if ("" === a || null === a) {
                if (a = "#" + (t = "" !== t && null !== t ? t : r.toLowerCase().replace(/ ?\n/g, " ")), x.helper.isUndefined(i[t])) return e;
                a = i[t], x.helper.isUndefined(l[t]) || (o = l[t]), x.helper.isUndefined(c[t]) || (n = c[t].width, s = c[t].height)
            }
            r = r.replace(/"/g, "&quot;").replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback);
            e = '<img src="' + (a = a.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '" alt="' + r + '"';
            return o && x.helper.isString(o) && (e += ' title="' + (o = o.replace(/"/g, "&quot;").replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"'), n && s && (e = e + (' width="' + (n = "*" === n ? "auto" : n)) + '" height="' + (s = "*" === s ? "auto" : s) + '"'), e += " />"
        }
        return e = (e = (e = (e = (e = (e = d.converter._dispatch("images.before", e, r, d)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, function(e, r, t, a, n, s, o, i) {
            return l(e, r, t, a = a.replace(/\s/g, ""), n, s, 0, i)
        })).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, l)).replace(/!\[([^\[\]]+)]()()()()()/g, l), e = d.converter._dispatch("images.after", e, r, d)
    }), x.subParser("italicsAndBold", function(e, r, t) {
        "use strict";
        return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
            return "<strong><em>" + r + "</em></strong>"
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
            return "<strong>" + r + "</strong>"
        })).replace(/\b_(\S[\s\S]*?)_\b/g, function(e, r) {
            return "<em>" + r + "</em>"
        }) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
            return /\S$/.test(r) ? "<strong><em>" + r + "</em></strong>" : e
        })).replace(/__(\S[\s\S]*?)__/g, function(e, r) {
            return /\S$/.test(r) ? "<strong>" + r + "</strong>" : e
        })).replace(/_([^\s_][\s\S]*?)_/g, function(e, r) {
            return /\S$/.test(r) ? "<em>" + r + "</em>" : e
        }), e = r.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(e, r, t) {
            return r + "<strong><em>" + t + "</em></strong>"
        })).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(e, r, t) {
            return r + "<strong>" + t + "</strong>"
        })).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(e, r, t) {
            return r + "<em>" + t + "</em>"
        }) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(e, r) {
            return /\S$/.test(r) ? "<strong><em>" + r + "</em></strong>" : e
        })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function(e, r) {
            return /\S$/.test(r) ? "<strong>" + r + "</strong>" : e
        })).replace(/\*([^\s*][\s\S]*?)\*/g, function(e, r) {
            return /\S$/.test(r) ? "<em>" + r + "</em>" : e
        }), e = t.converter._dispatch("italicsAndBold.after", e, r, t)
    }), x.subParser("lists", function(e, d, c) {
        "use strict";

        function p(e, r) {
            c.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
            var t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                l = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
            return d.disableForced4SpacesIndentedSublists && (t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(t, function(e, r, t, a, n, s, o) {
                o = o && "" !== o.trim();
                var n = x.subParser("outdent")(n, d, c),
                    i = "";
                return s && d.tasklists && (i = ' class="task-list-item" style="list-style-type: none;"', n = n.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                    var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return o && (e += " checked"), e += ">"
                })), n = n.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(e) {
                    return "¨A" + e
                }), n = "<li" + i + ">" + (n = (n = r || -1 < n.search(/\n{2,}/) ? (n = x.subParser("githubCodeBlocks")(n, d, c), x.subParser("blockGamut")(n, d, c)) : (n = (n = x.subParser("lists")(n, d, c)).replace(/\n$/, ""), n = (n = x.subParser("hashHTMLBlocks")(n, d, c)).replace(/\n\n+/g, "\n\n"), (l ? x.subParser("paragraphs") : x.subParser("spanGamut"))(n, d, c))).replace("¨A", "")) + "</li>\n"
            })).replace(/¨0/g, ""), c.gListLevel--, e = r ? e.replace(/\s+$/, "") : e
        }

        function h(e, r) {
            if ("ol" === r) {
                r = e.match(/^ *(\d+)\./);
                if (r && "1" !== r[1]) return ' start="' + r[1] + '"'
            }
            return ""
        }

        function n(n, s, o) {
            var e, i = d.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                l = d.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                c = "ul" === s ? i : l,
                u = "";
            return -1 !== n.search(c) ? function e(r) {
                var t = r.search(c),
                    a = h(n, s); - 1 !== t ? (u += "\n\n<" + s + a + ">\n" + p(r.slice(0, t), !!o) + "</" + s + ">\n", c = "ul" === (s = "ul" === s ? "ol" : "ul") ? i : l, e(r.slice(t))) : u += "\n\n<" + s + a + ">\n" + p(r, !!o) + "</" + s + ">\n"
            }(n) : (e = h(n, s), u = "\n\n<" + s + e + ">\n" + p(n, !!o) + "</" + s + ">\n"), u
        }
        return e = c.converter._dispatch("lists.before", e, d, c), e += "¨0", e = (e = c.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t) {
            return n(r, -1 < t.search(/[*+-]/g) ? "ul" : "ol", !0)
        }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t, a) {
            return n(t, -1 < a.search(/[*+-]/g) ? "ul" : "ol", !1)
        })).replace(/¨0/, ""), e = c.converter._dispatch("lists.after", e, d, c)
    }), x.subParser("metadata", function(e, r, a) {
        "use strict";
        return r.metadata ? (e = (e = (e = (e = a.converter._dispatch("metadata.before", e, r, a)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(e, r, t) {
            return n(t), "¨M"
        })).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(e, r, t) {
            return r && (a.metadata.format = r), n(t), "¨M"
        })).replace(/¨M/g, ""), a.converter._dispatch("metadata.after", e, r, a)) : e;

        function n(e) {
            (e = (e = (a.metadata.raw = e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, function(e, r, t) {
                return a.metadata.parsed[r] = t, ""
            })
        }
    }), x.subParser("outdent", function(e, r, t) {
        "use strict";
        return e = (e = (e = t.converter._dispatch("outdent.before", e, r, t)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""), e = t.converter._dispatch("outdent.after", e, r, t)
    }), x.subParser("paragraphs", function(e, r, t) {
        "use strict";
        for (var u = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), a = [], n = u.length, s = 0; s < n; s++) {
            var o = u[s];
            0 <= o.search(/¨(K|G)(\d+)\1/g) ? a.push(o) : 0 <= o.search(/\S/) && (o = (o = x.subParser("spanGamut")(o, r, t)).replace(/^([ \t]*)/g, "<p>"), o += "</p>", a.push(o))
        }
        for (n = a.length, s = 0; s < n; s++) {
            for (var i = "", l = a[s], d = !1;
                /¨(K|G)(\d+)\1/.test(l);) {
                var p = RegExp.$1,
                    c = RegExp.$2;
                i = (i = "K" === p ? t.gHtmlBlocks[c] : d ? x.subParser("encodeCode")(t.ghCodeBlocks[c].text, r, t) : t.ghCodeBlocks[c].codeblock).replace(/\$/g, "$$$$"), l = l.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, i), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(l) && (d = !0)
            }
            a[s] = l
        }
        return e = (e = (e = a.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), t.converter._dispatch("paragraphs.after", e, r, t)
    }), x.subParser("runExtension", function(e, r, t, a) {
        "use strict";
        return e.filter ? r = e.filter(r, a.converter, t) : e.regex && ((a = e.regex) instanceof RegExp || (a = new RegExp(a, "g")), r = r.replace(a, e.replace)), r
    }), x.subParser("spanGamut", function(e, r, t) {
        "use strict";
        return e = t.converter._dispatch("spanGamut.before", e, r, t), e = x.subParser("codeSpans")(e, r, t), e = x.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = x.subParser("encodeBackslashEscapes")(e, r, t), e = x.subParser("images")(e, r, t), e = x.subParser("anchors")(e, r, t), e = x.subParser("autoLinks")(e, r, t), e = x.subParser("simplifiedAutoLinks")(e, r, t), e = x.subParser("emoji")(e, r, t), e = x.subParser("underline")(e, r, t), e = x.subParser("italicsAndBold")(e, r, t), e = x.subParser("strikethrough")(e, r, t), e = x.subParser("ellipsis")(e, r, t), e = x.subParser("hashHTMLSpans")(e, r, t), e = x.subParser("encodeAmpsAndAngles")(e, r, t), r.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = t.converter._dispatch("spanGamut.after", e, r, t)
    }), x.subParser("strikethrough", function(e, t, a) {
        "use strict";
        return t.strikethrough && (e = (e = a.converter._dispatch("strikethrough.before", e, t, a)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(e, r) {
            return r = r, "<del>" + (r = t.simplifiedAutoLink ? x.subParser("simplifiedAutoLinks")(r, t, a) : r) + "</del>"
        }), e = a.converter._dispatch("strikethrough.after", e, t, a)), e
    }), x.subParser("stripLinkDefinitions", function(i, l, c) {
        "use strict";

        function e(e, r, t, a, n, s, o) {
            return r = r.toLowerCase(), i.toLowerCase().split(r).length - 1 < 2 ? e : (t.match(/^data:.+?\/.+?;base64,/) ? c.gUrls[r] = t.replace(/\s/g, "") : c.gUrls[r] = x.subParser("encodeAmpsAndAngles")(t, l, c), s ? s + o : (o && (c.gTitles[r] = o.replace(/"|'/g, "&quot;")), l.parseImgDimensions && a && n && (c.gDimensions[r] = {
                width: a,
                height: n
            }), ""))
        }
        return i = (i = (i = (i += "¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, e)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, e)).replace(/¨0/, "")
    }), x.subParser("tables", function(e, y, P) {
        "use strict";
        if (!y.tables) return e;

        function r(u) {
            for (var e = u.split("\n"), r = 0; r < e.length; ++r) /^ {0,3}\|/.test(e[r]) && (e[r] = e[r].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(e[r]) && (e[r] = e[r].replace(/\|[ \t]*$/, "")), e[r] = x.subParser("codeSpans")(e[r], y, P);
            var t, a, d, n, p, h = e[0].split("|").map(function(e) {
                    return e.trim()
                }),
                _ = e[1].split("|").map(function(e) {
                    return e.trim()
                }),
                s = [],
                g = [],
                o = [],
                m = [];
            for (e.shift(), e.shift(), r = 0; r < e.length; ++r) "" !== e[r].trim() && s.push(e[r].split("|").map(function(e) {
                return e.trim()
            }));
            if (h.length < _.length) return u;
            for (r = 0; r < _.length; ++r) o.push((t = _[r], /^:[ \t]*--*$/.test(t) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(t) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(t) ? ' style="text-align:center;"' : ""));
            for (r = 0; r < h.length; ++r) x.helper.isUndefined(o[r]) && (o[r] = ""), g.push((a = h[r], d = o[r], void 0, n = "", a = a.trim(), "<th" + (n = y.tablesHeaderId || y.tableHeaderId ? ' id="' + a.replace(/ /g, "_").toLowerCase() + '"' : n) + d + ">" + (a = x.subParser("spanGamut")(a, y, P)) + "</th>\n"));
            for (r = 0; r < s.length; ++r) {
                for (var f = [], i = 0; i < g.length; ++i) x.helper.isUndefined(s[r][i]), f.push((p = s[r][i], "<td" + o[i] + ">" + x.subParser("spanGamut")(p, y, P) + "</td>\n"));
                m.push(f)
            }
            for (var b = g, w = m, l = "<table>\n<thead>\n<tr>\n", k = b.length, c = 0; c < k; ++c) l += b[c];
            for (l += "</tr>\n</thead>\n<tbody>\n", c = 0; c < w.length; ++c) {
                l += "<tr>\n";
                for (var v = 0; v < k; ++v) l += w[c][v];
                l += "</tr>\n"
            }
            return l += "</tbody>\n</table>\n"
        }
        return e = (e = (e = (e = P.converter._dispatch("tables.before", e, y, P)).replace(/\\(\|)/g, x.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, r), e = P.converter._dispatch("tables.after", e, y, P)
    }), x.subParser("underline", function(e, r, t) {
        "use strict";
        return r.underline ? (e = t.converter._dispatch("underline.before", e, r, t), e = (e = r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
            return "<u>" + r + "</u>"
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
            return "<u>" + r + "</u>"
        }) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
            return /\S$/.test(r) ? "<u>" + r + "</u>" : e
        })).replace(/__(\S[\s\S]*?)__/g, function(e, r) {
            return /\S$/.test(r) ? "<u>" + r + "</u>" : e
        })).replace(/(_)/g, x.helper.escapeCharactersCallback), t.converter._dispatch("underline.after", e, r, t)) : e
    }), x.subParser("unescapeSpecialChars", function(e, r, t) {
        "use strict";
        return e = (e = t.converter._dispatch("unescapeSpecialChars.before", e, r, t)).replace(/¨E(\d+)E/g, function(e, r) {
            r = parseInt(r);
            return String.fromCharCode(r)
        }), e = t.converter._dispatch("unescapeSpecialChars.after", e, r, t)
    }), x.subParser("makeMarkdown.blockquote", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes())
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) {
                var o = x.subParser("makeMarkdown.node")(a[s], r);
                "" !== o && (t += o)
            }
        return t = "> " + (t = t.trim()).split("\n").join("\n> ")
    }), x.subParser("makeMarkdown.codeBlock", function(e, r) {
        "use strict";
        var t = e.getAttribute("language"),
            e = e.getAttribute("precodenum");
        return "```" + t + "\n" + r.preList[e] + "\n```"
    }), x.subParser("makeMarkdown.codeSpan", function(e) {
        "use strict";
        return "`" + e.innerHTML + "`"
    }), x.subParser("makeMarkdown.emphasis", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "*";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
            t += "*"
        }
        return t
    }), x.subParser("makeMarkdown.header", function(e, r, t) {
        "use strict";
        var t = new Array(t + 1).join("#"),
            a = "";
        if (e.hasChildNodes())
            for (var a = t + " ", n = e.childNodes, s = n.length, o = 0; o < s; ++o) a += x.subParser("makeMarkdown.node")(n[o], r);
        return a
    }), x.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---"
    }), x.subParser("makeMarkdown.image", function(e) {
        "use strict";
        var r = "";
        return e.hasAttribute("src") && (r = (r += "![" + e.getAttribute("alt") + "](") + "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (r += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (r += ' "' + e.getAttribute("title") + '"'), r += ")"), r
    }), x.subParser("makeMarkdown.links", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes() && e.hasAttribute("href")) {
            for (var a = e.childNodes, n = a.length, t = "[", s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
            t = (t += "](") + ("<" + e.getAttribute("href") + ">"), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"
        }
        return t
    }), x.subParser("makeMarkdown.list", function(e, r, t) {
        "use strict";
        var a = "";
        if (!e.hasChildNodes()) return "";
        for (var n = e.childNodes, s = n.length, o = e.getAttribute("start") || 1, i = 0; i < s; ++i) void 0 !== n[i].tagName && "li" === n[i].tagName.toLowerCase() && (a += ("ol" === t ? o.toString() + ". " : "- ") + x.subParser("makeMarkdown.listItem")(n[i], r), ++o);
        return (a += "\n\x3c!-- --\x3e\n").trim()
    }), x.subParser("makeMarkdown.listItem", function(e, r) {
        "use strict";
        for (var t = "", a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
        return /\n$/.test(t) ? t = t.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : t += "\n", t
    }), x.subParser("makeMarkdown.node", function(e, r, t) {
        "use strict";
        t = t || !1;
        var a = "";
        if (3 === e.nodeType) return x.subParser("makeMarkdown.txt")(e, r);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";
        switch (e.tagName.toLowerCase()) {
            case "h1":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 1) + "\n\n");
                break;
            case "h2":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 2) + "\n\n");
                break;
            case "h3":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 3) + "\n\n");
                break;
            case "h4":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 4) + "\n\n");
                break;
            case "h5":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 5) + "\n\n");
                break;
            case "h6":
                t || (a = x.subParser("makeMarkdown.header")(e, r, 6) + "\n\n");
                break;
            case "p":
                t || (a = x.subParser("makeMarkdown.paragraph")(e, r) + "\n\n");
                break;
            case "blockquote":
                t || (a = x.subParser("makeMarkdown.blockquote")(e, r) + "\n\n");
                break;
            case "hr":
                t || (a = x.subParser("makeMarkdown.hr")(e, r) + "\n\n");
                break;
            case "ol":
                t || (a = x.subParser("makeMarkdown.list")(e, r, "ol") + "\n\n");
                break;
            case "ul":
                t || (a = x.subParser("makeMarkdown.list")(e, r, "ul") + "\n\n");
                break;
            case "precode":
                t || (a = x.subParser("makeMarkdown.codeBlock")(e, r) + "\n\n");
                break;
            case "pre":
                t || (a = x.subParser("makeMarkdown.pre")(e, r) + "\n\n");
                break;
            case "table":
                t || (a = x.subParser("makeMarkdown.table")(e, r) + "\n\n");
                break;
            case "code":
                a = x.subParser("makeMarkdown.codeSpan")(e, r);
                break;
            case "em":
            case "i":
                a = x.subParser("makeMarkdown.emphasis")(e, r);
                break;
            case "strong":
            case "b":
                a = x.subParser("makeMarkdown.strong")(e, r);
                break;
            case "del":
                a = x.subParser("makeMarkdown.strikethrough")(e, r);
                break;
            case "a":
                a = x.subParser("makeMarkdown.links")(e, r);
                break;
            case "img":
                a = x.subParser("makeMarkdown.image")(e, r);
                break;
            default:
                a = e.outerHTML + "\n\n"
        }
        return a
    }), x.subParser("makeMarkdown.paragraph", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes())
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
        return t = t.trim()
    }), x.subParser("makeMarkdown.pre", function(e, r) {
        "use strict";
        e = e.getAttribute("prenum");
        return "<pre>" + r.preList[e] + "</pre>"
    }), x.subParser("makeMarkdown.strikethrough", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "~~";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
            t += "~~"
        }
        return t
    }), x.subParser("makeMarkdown.strong", function(e, r) {
        "use strict";
        var t = "";
        if (e.hasChildNodes()) {
            t += "**";
            for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
            t += "**"
        }
        return t
    }), x.subParser("makeMarkdown.table", function(e, r) {
        "use strict";
        for (var t = "", a = [
                [],
                []
            ], n = e.querySelectorAll("thead>tr>th"), s = e.querySelectorAll("tbody>tr"), o = 0; o < n.length; ++o) {
            var u = x.subParser("makeMarkdown.tableCell")(n[o], r),
                i = "---";
            if (n[o].hasAttribute("style")) switch (n[o].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                case "text-align:left;":
                    i = ":---";
                    break;
                case "text-align:right;":
                    i = "---:";
                    break;
                case "text-align:center;":
                    i = ":---:"
            }
            a[0][o] = u.trim(), a[1][o] = i
        }
        for (o = 0; o < s.length; ++o)
            for (var d = a.push([]) - 1, p = s[o].getElementsByTagName("td"), l = 0; l < n.length; ++l) {
                var h = " ";
                void 0 !== p[l] && (h = x.subParser("makeMarkdown.tableCell")(p[l], r)), a[d].push(h)
            }
        var c = 3;
        for (o = 0; o < a.length; ++o)
            for (l = 0; l < a[o].length; ++l) {
                var _ = a[o][l].length;
                c < _ && (c = _)
            }
        for (o = 0; o < a.length; ++o) {
            for (l = 0; l < a[o].length; ++l) 1 === o ? ":" === a[o][l].slice(-1) ? a[o][l] = x.helper.padEnd(a[o][l].slice(-1), c - 1, "-") + ":" : a[o][l] = x.helper.padEnd(a[o][l], c, "-") : a[o][l] = x.helper.padEnd(a[o][l], c);
            t += "| " + a[o].join(" | ") + " |\n"
        }
        return t.trim()
    }), x.subParser("makeMarkdown.tableCell", function(e, r) {
        "use strict";
        var t = "";
        if (!e.hasChildNodes()) return "";
        for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r, !0);
        return t.trim()
    }), x.subParser("makeMarkdown.txt", function(e) {
        "use strict";
        e = e.nodeValue;
        return e = (e = e.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "), e = (e = (e = (e = (e = (e = (e = (e = (e = x.helper.unescapeHTMLEntities(e)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
    });
    "function" == typeof define && define.amd ? define(function() {
        "use strict";
        return x
    }) : "undefined" != typeof module && module.exports ? module.exports = x : this.showdown = x
}.call(this);
//# sourceMappingURL=showdown.min.js.map
