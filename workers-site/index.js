(() => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __markAsModule = (target) => __defProp(target, '__esModule', { value: true });
	var __esm = (fn, res) =>
		function __init() {
			return fn && (res = (0, fn[Object.keys(fn)[0]])((fn = 0))), res;
		};
	var __commonJS = (cb, mod) =>
		function __require() {
			return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
		};
	var __export = (target, all) => {
		__markAsModule(target);
		for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
	};
	var __reExport = (target, module, desc) => {
		if ((module && typeof module === 'object') || typeof module === 'function') {
			for (let key2 of __getOwnPropNames(module))
				if (!__hasOwnProp.call(target, key2) && key2 !== 'default')
					__defProp(target, key2, {
						get: () => module[key2],
						enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable
					});
		}
		return target;
	};
	var __toModule = (module) => {
		return __reExport(
			__markAsModule(
				__defProp(
					module != null ? __create(__getProtoOf(module)) : {},
					'default',
					module && module.__esModule && 'default' in module
						? { get: () => module.default, enumerable: true }
						: { value: module, enumerable: true }
				)
			),
			module
		);
	};

	// .svelte-kit/output/server/chunks/layout-84a7d8b4.js
	var layout_84a7d8b4_exports = {};
	__export(layout_84a7d8b4_exports, {
		default: () => Layout
	});
	var Layout;
	var init_layout_84a7d8b4 = __esm({
		'.svelte-kit/output/server/chunks/layout-84a7d8b4.js'() {
			init_app_f96727fd();
			Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `${slots.default ? slots.default({}) : ``}`;
			});
		}
	});

	// .svelte-kit/output/server/chunks/error-85466862.js
	var error_85466862_exports = {};
	__export(error_85466862_exports, {
		default: () => Error2,
		load: () => load
	});
	function load({ error: error2, status }) {
		return { props: { error: error2, status } };
	}
	var Error2;
	var init_error_85466862 = __esm({
		'.svelte-kit/output/server/chunks/error-85466862.js'() {
			init_app_f96727fd();
			Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { status } = $$props;
				let { error: error2 } = $$props;
				if ($$props.status === void 0 && $$bindings.status && status !== void 0)
					$$bindings.status(status);
				if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
					$$bindings.error(error2);
				return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
			});
		}
	});

	// .svelte-kit/output/server/chunks/index-c0b20ccf.js
	var index_c0b20ccf_exports = {};
	__export(index_c0b20ccf_exports, {
		default: () => Routes
	});
	function getDefaults$1() {
		return {
			baseUrl: null,
			breaks: false,
			extensions: null,
			gfm: true,
			headerIds: true,
			headerPrefix: '',
			highlight: null,
			langPrefix: 'language-',
			mangle: true,
			pedantic: false,
			renderer: null,
			sanitize: false,
			sanitizer: null,
			silent: false,
			smartLists: false,
			smartypants: false,
			tokenizer: null,
			walkTokens: null,
			xhtml: false
		};
	}
	function changeDefaults$1(newDefaults) {
		defaults$5.exports.defaults = newDefaults;
	}
	function escape$3(html, encode) {
		if (encode) {
			if (escapeTest.test(html)) {
				return html.replace(escapeReplace, getEscapeReplacement);
			}
		} else {
			if (escapeTestNoEncode.test(html)) {
				return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
			}
		}
		return html;
	}
	function unescape$1(html) {
		return html.replace(unescapeTest, (_, n) => {
			n = n.toLowerCase();
			if (n === 'colon') return ':';
			if (n.charAt(0) === '#') {
				return n.charAt(1) === 'x'
					? String.fromCharCode(parseInt(n.substring(2), 16))
					: String.fromCharCode(+n.substring(1));
			}
			return '';
		});
	}
	function edit$1(regex, opt) {
		regex = regex.source || regex;
		opt = opt || '';
		const obj = {
			replace: (name, val) => {
				val = val.source || val;
				val = val.replace(caret, '$1');
				regex = regex.replace(name, val);
				return obj;
			},
			getRegex: () => {
				return new RegExp(regex, opt);
			}
		};
		return obj;
	}
	function cleanUrl$1(sanitize, base2, href) {
		if (sanitize) {
			let prot;
			try {
				prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, '').toLowerCase();
			} catch (e) {
				return null;
			}
			if (
				prot.indexOf('javascript:') === 0 ||
				prot.indexOf('vbscript:') === 0 ||
				prot.indexOf('data:') === 0
			) {
				return null;
			}
		}
		if (base2 && !originIndependentUrl.test(href)) {
			href = resolveUrl(base2, href);
		}
		try {
			href = encodeURI(href).replace(/%25/g, '%');
		} catch (e) {
			return null;
		}
		return href;
	}
	function resolveUrl(base2, href) {
		if (!baseUrls[' ' + base2]) {
			if (justDomain.test(base2)) {
				baseUrls[' ' + base2] = base2 + '/';
			} else {
				baseUrls[' ' + base2] = rtrim$1(base2, '/', true);
			}
		}
		base2 = baseUrls[' ' + base2];
		const relativeBase = base2.indexOf(':') === -1;
		if (href.substring(0, 2) === '//') {
			if (relativeBase) {
				return href;
			}
			return base2.replace(protocol, '$1') + href;
		} else if (href.charAt(0) === '/') {
			if (relativeBase) {
				return href;
			}
			return base2.replace(domain, '$1') + href;
		} else {
			return base2 + href;
		}
	}
	function merge$2(obj) {
		let i = 1,
			target,
			key2;
		for (; i < arguments.length; i++) {
			target = arguments[i];
			for (key2 in target) {
				if (Object.prototype.hasOwnProperty.call(target, key2)) {
					obj[key2] = target[key2];
				}
			}
		}
		return obj;
	}
	function splitCells$1(tableRow, count) {
		const row = tableRow.replace(/\|/g, (match, offset, str) => {
				let escaped2 = false,
					curr = offset;
				while (--curr >= 0 && str[curr] === '\\') escaped2 = !escaped2;
				if (escaped2) {
					return '|';
				} else {
					return ' |';
				}
			}),
			cells = row.split(/ \|/);
		let i = 0;
		if (cells.length > count) {
			cells.splice(count);
		} else {
			while (cells.length < count) cells.push('');
		}
		for (; i < cells.length; i++) {
			cells[i] = cells[i].trim().replace(/\\\|/g, '|');
		}
		return cells;
	}
	function rtrim$1(str, c, invert) {
		const l = str.length;
		if (l === 0) {
			return '';
		}
		let suffLen = 0;
		while (suffLen < l) {
			const currChar = str.charAt(l - suffLen - 1);
			if (currChar === c && !invert) {
				suffLen++;
			} else if (currChar !== c && invert) {
				suffLen++;
			} else {
				break;
			}
		}
		return str.substr(0, l - suffLen);
	}
	function findClosingBracket$1(str, b) {
		if (str.indexOf(b[1]) === -1) {
			return -1;
		}
		const l = str.length;
		let level = 0,
			i = 0;
		for (; i < l; i++) {
			if (str[i] === '\\') {
				i++;
			} else if (str[i] === b[0]) {
				level++;
			} else if (str[i] === b[1]) {
				level--;
				if (level < 0) {
					return i;
				}
			}
		}
		return -1;
	}
	function checkSanitizeDeprecation$1(opt) {
		if (opt && opt.sanitize && !opt.silent) {
			console.warn(
				'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
			);
		}
	}
	function repeatString$1(pattern, count) {
		if (count < 1) {
			return '';
		}
		let result = '';
		while (count > 1) {
			if (count & 1) {
				result += pattern;
			}
			count >>= 1;
			pattern += pattern;
		}
		return result + pattern;
	}
	function outputLink(cap, link, raw) {
		const href = link.href;
		const title = link.title ? escape$2(link.title) : null;
		const text = cap[1].replace(/\\([\[\]])/g, '$1');
		if (cap[0].charAt(0) !== '!') {
			return {
				type: 'link',
				raw,
				href,
				title,
				text
			};
		} else {
			return {
				type: 'image',
				raw,
				href,
				title,
				text: escape$2(text)
			};
		}
	}
	function indentCodeCompensation(raw, text) {
		const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
		if (matchIndentToCode === null) {
			return text;
		}
		const indentToCode = matchIndentToCode[1];
		return text
			.split('\n')
			.map((node) => {
				const matchIndentInNode = node.match(/^\s+/);
				if (matchIndentInNode === null) {
					return node;
				}
				const [indentInNode] = matchIndentInNode;
				if (indentInNode.length >= indentToCode.length) {
					return node.slice(indentToCode.length);
				}
				return node;
			})
			.join('\n');
	}
	function smartypants(text) {
		return text
			.replace(/---/g, '\u2014')
			.replace(/--/g, '\u2013')
			.replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
			.replace(/'/g, '\u2019')
			.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
			.replace(/"/g, '\u201D')
			.replace(/\.{3}/g, '\u2026');
	}
	function mangle(text) {
		let out = '',
			i,
			ch;
		const l = text.length;
		for (i = 0; i < l; i++) {
			ch = text.charCodeAt(i);
			if (Math.random() > 0.5) {
				ch = 'x' + ch.toString(16);
			}
			out += '&#' + ch + ';';
		}
		return out;
	}
	function marked(src, opt, callback) {
		if (typeof src === 'undefined' || src === null) {
			throw new Error('marked(): input parameter is undefined or null');
		}
		if (typeof src !== 'string') {
			throw new Error(
				'marked(): input parameter is of type ' +
					Object.prototype.toString.call(src) +
					', string expected'
			);
		}
		if (typeof opt === 'function') {
			callback = opt;
			opt = null;
		}
		opt = merge({}, marked.defaults, opt || {});
		checkSanitizeDeprecation(opt);
		if (callback) {
			const highlight = opt.highlight;
			let tokens;
			try {
				tokens = Lexer$1.lex(src, opt);
			} catch (e) {
				return callback(e);
			}
			const done = function (err) {
				let out;
				if (!err) {
					try {
						if (opt.walkTokens) {
							marked.walkTokens(tokens, opt.walkTokens);
						}
						out = Parser2.parse(tokens, opt);
					} catch (e) {
						err = e;
					}
				}
				opt.highlight = highlight;
				return err ? callback(err) : callback(null, out);
			};
			if (!highlight || highlight.length < 3) {
				return done();
			}
			delete opt.highlight;
			if (!tokens.length) return done();
			let pending = 0;
			marked.walkTokens(tokens, function (token) {
				if (token.type === 'code') {
					pending++;
					setTimeout(() => {
						highlight(token.text, token.lang, function (err, code) {
							if (err) {
								return done(err);
							}
							if (code != null && code !== token.text) {
								token.text = code;
								token.escaped = true;
							}
							pending--;
							if (pending === 0) {
								done();
							}
						});
					}, 0);
				}
			});
			if (pending === 0) {
				done();
			}
			return;
		}
		try {
			const tokens = Lexer$1.lex(src, opt);
			if (opt.walkTokens) {
				marked.walkTokens(tokens, opt.walkTokens);
			}
			return Parser2.parse(tokens, opt);
		} catch (e) {
			e.message += '\nPlease report this to https://github.com/markedjs/marked.';
			if (opt.silent) {
				return '<p>An error occurred:</p><pre>' + escape2(e.message + '', true) + '</pre>';
			}
			throw e;
		}
	}
	async function fetchPost() {
		const data = await fetch(
			'/src/posts/2014/01/14/automatic-changelog-generation-with-git.md'
		).then((response) => response.text());
		console.log('Data:', data);
		return data;
	}
	var Parser$1,
		defaults$5,
		escapeTest,
		escapeReplace,
		escapeTestNoEncode,
		escapeReplaceNoEncode,
		escapeReplacements,
		getEscapeReplacement,
		unescapeTest,
		caret,
		nonWordAndColonTest,
		originIndependentUrl,
		baseUrls,
		justDomain,
		protocol,
		domain,
		noopTest$1,
		helpers,
		defaults$4,
		rtrim,
		splitCells,
		escape$2,
		findClosingBracket,
		Tokenizer_1,
		noopTest2,
		edit,
		merge$1,
		block$1,
		inline$1,
		rules,
		Tokenizer$1,
		defaults$3,
		block,
		inline,
		repeatString,
		Lexer_1,
		defaults$2,
		cleanUrl,
		escape$1,
		Renderer_1,
		TextRenderer_1,
		Slugger_1,
		Renderer$1,
		TextRenderer$1,
		Slugger$1,
		defaults$1,
		unescape,
		Parser_1,
		Lexer$1,
		Parser2,
		Tokenizer2,
		Renderer2,
		TextRenderer2,
		Slugger$2,
		merge,
		checkSanitizeDeprecation,
		escape2,
		getDefaults,
		changeDefaults,
		defaults,
		marked_1,
		key,
		Heading,
		Paragraph,
		Text,
		Image,
		Link,
		Em,
		Del,
		Codespan,
		Strong,
		Table,
		TableHead,
		TableBody,
		TableRow,
		TableCell,
		List,
		ListItem,
		Hr,
		Html,
		Blockquote,
		Code,
		Br,
		defaultRenderers,
		defaultOptions,
		Lexer2,
		Slugger2,
		SvelteMarkdown,
		Article,
		Routes;
	var init_index_c0b20ccf = __esm({
		'.svelte-kit/output/server/chunks/index-c0b20ccf.js'() {
			init_app_f96727fd();
			Parser$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let $$restProps = compute_rest_props($$props, ['type', 'tokens', 'ordered', 'renderers']);
				let { type = void 0 } = $$props;
				let { tokens = void 0 } = $$props;
				let { ordered = false } = $$props;
				let { renderers } = $$props;
				if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
				if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
					$$bindings.tokens(tokens);
				if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
					$$bindings.ordered(ordered);
				if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
					$$bindings.renderers(renderers);
				return `${
					!type
						? `${each(
								tokens,
								(token) =>
									`${validate_component(Parser$1, 'svelte:self').$$render(
										$$result,
										Object.assign(token, { renderers }),
										{},
										{}
									)}`
						  )}`
						: `${
								renderers[type]
									? `${
											type === 'table'
												? `${validate_component(
														renderers.table || missing_component,
														'svelte:component'
												  ).$$render(
														$$result,
														{},
														{},
														{
															default: () => `${validate_component(
																renderers.tablehead || missing_component,
																'svelte:component'
															).$$render(
																$$result,
																{},
																{},
																{
																	default: () =>
																		`${validate_component(
																			renderers.tablerow || missing_component,
																			'svelte:component'
																		).$$render(
																			$$result,
																			{},
																			{},
																			{
																				default: () =>
																					`${each(
																						tokens.header,
																						(cells, i) =>
																							`${validate_component(
																								renderers.tablecell || missing_component,
																								'svelte:component'
																							).$$render(
																								$$result,
																								{
																									header: true,
																									align: $$restProps.align[i] || 'center'
																								},
																								{},
																								{
																									default: () => `${validate_component(
																										Parser$1,
																										'svelte:self'
																									).$$render(
																										$$result,
																										{ tokens: cells, renderers },
																										{},
																										{}
																									)}
              `
																								}
																							)}`
																					)}`
																			}
																		)}`
																}
															)}
        ${validate_component(renderers.tablebody || missing_component, 'svelte:component').$$render(
					$$result,
					{},
					{},
					{
						default: () =>
							`${each(
								tokens.cells,
								(row) =>
									`${validate_component(
										renderers.tablerow || missing_component,
										'svelte:component'
									).$$render(
										$$result,
										{},
										{},
										{
											default: () => `${each(
												row,
												(cells, i) =>
													`${validate_component(
														renderers.tablecell || missing_component,
														'svelte:component'
													).$$render(
														$$result,
														{
															header: false,
															align: $$restProps.align[i] || 'center'
														},
														{},
														{
															default: () => `${validate_component(
																Parser$1,
																'svelte:self'
															).$$render($$result, { tokens: cells, renderers }, {}, {})}
                `
														}
													)}`
											)}
            `
										}
									)}`
							)}`
					}
				)}`
														}
												  )}`
												: `${
														type === 'list'
															? `${
																	ordered
																		? `${validate_component(
																				renderers.list || missing_component,
																				'svelte:component'
																		  ).$$render(
																				$$result,
																				Object.assign({ ordered }, $$restProps),
																				{},
																				{
																					default: () =>
																						`${each(
																							$$restProps.items,
																							(item) =>
																								`${validate_component(
																									renderers.orderedlistitem ||
																										renderers.listitem ||
																										missing_component,
																									'svelte:component'
																								).$$render(
																									$$result,
																									Object.assign(item),
																									{},
																									{
																										default: () => `${validate_component(
																											Parser$1,
																											'svelte:self'
																										).$$render(
																											$$result,
																											{ tokens: item.tokens, renderers },
																											{},
																											{}
																										)}
            `
																									}
																								)}`
																						)}`
																				}
																		  )}`
																		: `${validate_component(
																				renderers.list || missing_component,
																				'svelte:component'
																		  ).$$render(
																				$$result,
																				Object.assign({ ordered }, $$restProps),
																				{},
																				{
																					default: () =>
																						`${each(
																							$$restProps.items,
																							(item) =>
																								`${validate_component(
																									renderers.unorderedlistitem ||
																										renderers.listitem ||
																										missing_component,
																									'svelte:component'
																								).$$render(
																									$$result,
																									Object.assign(item),
																									{},
																									{
																										default: () => `${validate_component(
																											Parser$1,
																											'svelte:self'
																										).$$render(
																											$$result,
																											{ tokens: item.tokens, renderers },
																											{},
																											{}
																										)}
            `
																									}
																								)}`
																						)}`
																				}
																		  )}`
															  }`
															: `${validate_component(
																	renderers[type] || missing_component,
																	'svelte:component'
															  ).$$render(
																	$$result,
																	Object.assign($$restProps),
																	{},
																	{
																		default: () =>
																			`${
																				tokens
																					? `${validate_component(Parser$1, 'svelte:self').$$render(
																							$$result,
																							{ tokens, renderers },
																							{},
																							{}
																					  )}`
																					: `${escape($$restProps.raw)}`
																			}`
																	}
															  )}`
												  }`
									  }`
									: ``
						  }`
				}`;
			});
			defaults$5 = { exports: {} };
			defaults$5.exports = {
				defaults: getDefaults$1(),
				getDefaults: getDefaults$1,
				changeDefaults: changeDefaults$1
			};
			escapeTest = /[&<>"']/;
			escapeReplace = /[&<>"']/g;
			escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
			escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
			escapeReplacements = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;'
			};
			getEscapeReplacement = (ch) => escapeReplacements[ch];
			unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
			caret = /(^|[^\[])\^/g;
			nonWordAndColonTest = /[^\w:]/g;
			originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
			baseUrls = {};
			justDomain = /^[^:]+:\/*[^/]*$/;
			protocol = /^([^:]+:)[\s\S]*$/;
			domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
			noopTest$1 = { exec: function noopTest() {} };
			helpers = {
				escape: escape$3,
				unescape: unescape$1,
				edit: edit$1,
				cleanUrl: cleanUrl$1,
				resolveUrl,
				noopTest: noopTest$1,
				merge: merge$2,
				splitCells: splitCells$1,
				rtrim: rtrim$1,
				findClosingBracket: findClosingBracket$1,
				checkSanitizeDeprecation: checkSanitizeDeprecation$1,
				repeatString: repeatString$1
			};
			({ defaults: defaults$4 } = defaults$5.exports);
			({ rtrim, splitCells, escape: escape$2, findClosingBracket } = helpers);
			Tokenizer_1 = class Tokenizer {
				constructor(options2) {
					this.options = options2 || defaults$4;
				}
				space(src) {
					const cap = this.rules.block.newline.exec(src);
					if (cap) {
						if (cap[0].length > 1) {
							return {
								type: 'space',
								raw: cap[0]
							};
						}
						return { raw: '\n' };
					}
				}
				code(src) {
					const cap = this.rules.block.code.exec(src);
					if (cap) {
						const text = cap[0].replace(/^ {1,4}/gm, '');
						return {
							type: 'code',
							raw: cap[0],
							codeBlockStyle: 'indented',
							text: !this.options.pedantic ? rtrim(text, '\n') : text
						};
					}
				}
				fences(src) {
					const cap = this.rules.block.fences.exec(src);
					if (cap) {
						const raw = cap[0];
						const text = indentCodeCompensation(raw, cap[3] || '');
						return {
							type: 'code',
							raw,
							lang: cap[2] ? cap[2].trim() : cap[2],
							text
						};
					}
				}
				heading(src) {
					const cap = this.rules.block.heading.exec(src);
					if (cap) {
						let text = cap[2].trim();
						if (/#$/.test(text)) {
							const trimmed = rtrim(text, '#');
							if (this.options.pedantic) {
								text = trimmed.trim();
							} else if (!trimmed || / $/.test(trimmed)) {
								text = trimmed.trim();
							}
						}
						return {
							type: 'heading',
							raw: cap[0],
							depth: cap[1].length,
							text
						};
					}
				}
				nptable(src) {
					const cap = this.rules.block.nptable.exec(src);
					if (cap) {
						const item = {
							type: 'table',
							header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
							align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
							cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
							raw: cap[0]
						};
						if (item.header.length === item.align.length) {
							let l = item.align.length;
							let i;
							for (i = 0; i < l; i++) {
								if (/^ *-+: *$/.test(item.align[i])) {
									item.align[i] = 'right';
								} else if (/^ *:-+: *$/.test(item.align[i])) {
									item.align[i] = 'center';
								} else if (/^ *:-+ *$/.test(item.align[i])) {
									item.align[i] = 'left';
								} else {
									item.align[i] = null;
								}
							}
							l = item.cells.length;
							for (i = 0; i < l; i++) {
								item.cells[i] = splitCells(item.cells[i], item.header.length);
							}
							return item;
						}
					}
				}
				hr(src) {
					const cap = this.rules.block.hr.exec(src);
					if (cap) {
						return {
							type: 'hr',
							raw: cap[0]
						};
					}
				}
				blockquote(src) {
					const cap = this.rules.block.blockquote.exec(src);
					if (cap) {
						const text = cap[0].replace(/^ *> ?/gm, '');
						return {
							type: 'blockquote',
							raw: cap[0],
							text
						};
					}
				}
				list(src) {
					const cap = this.rules.block.list.exec(src);
					if (cap) {
						let raw = cap[0];
						const bull = cap[2];
						const isordered = bull.length > 1;
						const list = {
							type: 'list',
							raw,
							ordered: isordered,
							start: isordered ? +bull.slice(0, -1) : '',
							loose: false,
							items: []
						};
						const itemMatch = cap[0].match(this.rules.block.item);
						let next = false,
							item,
							space,
							bcurr,
							bnext,
							addBack,
							loose,
							istask,
							ischecked,
							endMatch;
						let l = itemMatch.length;
						bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);
						for (let i = 0; i < l; i++) {
							item = itemMatch[i];
							raw = item;
							if (!this.options.pedantic) {
								endMatch = item.match(
									new RegExp('\\n\\s*\\n {0,' + (bcurr[0].length - 1) + '}\\S')
								);
								if (endMatch) {
									addBack = item.length - endMatch.index + itemMatch.slice(i + 1).join('\n').length;
									list.raw = list.raw.substring(0, list.raw.length - addBack);
									item = item.substring(0, endMatch.index);
									raw = item;
									l = i + 1;
								}
							}
							if (i !== l - 1) {
								bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);
								if (
									!this.options.pedantic
										? bnext[1].length >= bcurr[0].length || bnext[1].length > 3
										: bnext[1].length > bcurr[1].length
								) {
									itemMatch.splice(
										i,
										2,
										itemMatch[i] +
											(!this.options.pedantic &&
											bnext[1].length < bcurr[0].length &&
											!itemMatch[i].match(/\n$/)
												? ''
												: '\n') +
											itemMatch[i + 1]
									);
									i--;
									l--;
									continue;
								} else if (
									!this.options.pedantic || this.options.smartLists
										? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1]
										: isordered === (bnext[2].length === 1)
								) {
									addBack = itemMatch.slice(i + 1).join('\n').length;
									list.raw = list.raw.substring(0, list.raw.length - addBack);
									i = l - 1;
								}
								bcurr = bnext;
							}
							space = item.length;
							item = item.replace(/^ *([*+-]|\d+[.)]) ?/, '');
							if (~item.indexOf('\n ')) {
								space -= item.length;
								item = !this.options.pedantic
									? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
									: item.replace(/^ {1,4}/gm, '');
							}
							item = rtrim(item, '\n');
							if (i !== l - 1) {
								raw = raw + '\n';
							}
							loose = next || /\n\n(?!\s*$)/.test(raw);
							if (i !== l - 1) {
								next = raw.slice(-2) === '\n\n';
								if (!loose) loose = next;
							}
							if (loose) {
								list.loose = true;
							}
							if (this.options.gfm) {
								istask = /^\[[ xX]\] /.test(item);
								ischecked = void 0;
								if (istask) {
									ischecked = item[1] !== ' ';
									item = item.replace(/^\[[ xX]\] +/, '');
								}
							}
							list.items.push({
								type: 'list_item',
								raw,
								task: istask,
								checked: ischecked,
								loose,
								text: item
							});
						}
						return list;
					}
				}
				html(src) {
					const cap = this.rules.block.html.exec(src);
					if (cap) {
						return {
							type: this.options.sanitize ? 'paragraph' : 'html',
							raw: cap[0],
							pre:
								!this.options.sanitizer &&
								(cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
							text: this.options.sanitize
								? this.options.sanitizer
									? this.options.sanitizer(cap[0])
									: escape$2(cap[0])
								: cap[0]
						};
					}
				}
				def(src) {
					const cap = this.rules.block.def.exec(src);
					if (cap) {
						if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
						const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
						return {
							type: 'def',
							tag,
							raw: cap[0],
							href: cap[2],
							title: cap[3]
						};
					}
				}
				table(src) {
					const cap = this.rules.block.table.exec(src);
					if (cap) {
						const item = {
							type: 'table',
							header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
							align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
							cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
						};
						if (item.header.length === item.align.length) {
							item.raw = cap[0];
							let l = item.align.length;
							let i;
							for (i = 0; i < l; i++) {
								if (/^ *-+: *$/.test(item.align[i])) {
									item.align[i] = 'right';
								} else if (/^ *:-+: *$/.test(item.align[i])) {
									item.align[i] = 'center';
								} else if (/^ *:-+ *$/.test(item.align[i])) {
									item.align[i] = 'left';
								} else {
									item.align[i] = null;
								}
							}
							l = item.cells.length;
							for (i = 0; i < l; i++) {
								item.cells[i] = splitCells(
									item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
									item.header.length
								);
							}
							return item;
						}
					}
				}
				lheading(src) {
					const cap = this.rules.block.lheading.exec(src);
					if (cap) {
						return {
							type: 'heading',
							raw: cap[0],
							depth: cap[2].charAt(0) === '=' ? 1 : 2,
							text: cap[1]
						};
					}
				}
				paragraph(src) {
					const cap = this.rules.block.paragraph.exec(src);
					if (cap) {
						return {
							type: 'paragraph',
							raw: cap[0],
							text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
						};
					}
				}
				text(src) {
					const cap = this.rules.block.text.exec(src);
					if (cap) {
						return {
							type: 'text',
							raw: cap[0],
							text: cap[0]
						};
					}
				}
				escape(src) {
					const cap = this.rules.inline.escape.exec(src);
					if (cap) {
						return {
							type: 'escape',
							raw: cap[0],
							text: escape$2(cap[1])
						};
					}
				}
				tag(src, inLink, inRawBlock) {
					const cap = this.rules.inline.tag.exec(src);
					if (cap) {
						if (!inLink && /^<a /i.test(cap[0])) {
							inLink = true;
						} else if (inLink && /^<\/a>/i.test(cap[0])) {
							inLink = false;
						}
						if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
							inRawBlock = true;
						} else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
							inRawBlock = false;
						}
						return {
							type: this.options.sanitize ? 'text' : 'html',
							raw: cap[0],
							inLink,
							inRawBlock,
							text: this.options.sanitize
								? this.options.sanitizer
									? this.options.sanitizer(cap[0])
									: escape$2(cap[0])
								: cap[0]
						};
					}
				}
				link(src) {
					const cap = this.rules.inline.link.exec(src);
					if (cap) {
						const trimmedUrl = cap[2].trim();
						if (!this.options.pedantic && /^</.test(trimmedUrl)) {
							if (!/>$/.test(trimmedUrl)) {
								return;
							}
							const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
							if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
								return;
							}
						} else {
							const lastParenIndex = findClosingBracket(cap[2], '()');
							if (lastParenIndex > -1) {
								const start = cap[0].indexOf('!') === 0 ? 5 : 4;
								const linkLen = start + cap[1].length + lastParenIndex;
								cap[2] = cap[2].substring(0, lastParenIndex);
								cap[0] = cap[0].substring(0, linkLen).trim();
								cap[3] = '';
							}
						}
						let href = cap[2];
						let title = '';
						if (this.options.pedantic) {
							const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
							if (link) {
								href = link[1];
								title = link[3];
							}
						} else {
							title = cap[3] ? cap[3].slice(1, -1) : '';
						}
						href = href.trim();
						if (/^</.test(href)) {
							if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
								href = href.slice(1);
							} else {
								href = href.slice(1, -1);
							}
						}
						return outputLink(
							cap,
							{
								href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
								title: title ? title.replace(this.rules.inline._escapes, '$1') : title
							},
							cap[0]
						);
					}
				}
				reflink(src, links) {
					let cap;
					if (
						(cap = this.rules.inline.reflink.exec(src)) ||
						(cap = this.rules.inline.nolink.exec(src))
					) {
						let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
						link = links[link.toLowerCase()];
						if (!link || !link.href) {
							const text = cap[0].charAt(0);
							return {
								type: 'text',
								raw: text,
								text
							};
						}
						return outputLink(cap, link, cap[0]);
					}
				}
				emStrong(src, maskedSrc, prevChar = '') {
					let match = this.rules.inline.emStrong.lDelim.exec(src);
					if (!match) return;
					if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
					const nextChar = match[1] || match[2] || '';
					if (
						!nextChar ||
						(nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))
					) {
						const lLength = match[0].length - 1;
						let rDelim,
							rLength,
							delimTotal = lLength,
							midDelimTotal = 0;
						const endReg =
							match[0][0] === '*'
								? this.rules.inline.emStrong.rDelimAst
								: this.rules.inline.emStrong.rDelimUnd;
						endReg.lastIndex = 0;
						maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
						while ((match = endReg.exec(maskedSrc)) != null) {
							rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
							if (!rDelim) continue;
							rLength = rDelim.length;
							if (match[3] || match[4]) {
								delimTotal += rLength;
								continue;
							} else if (match[5] || match[6]) {
								if (lLength % 3 && !((lLength + rLength) % 3)) {
									midDelimTotal += rLength;
									continue;
								}
							}
							delimTotal -= rLength;
							if (delimTotal > 0) continue;
							rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
							if (Math.min(lLength, rLength) % 2) {
								return {
									type: 'em',
									raw: src.slice(0, lLength + match.index + rLength + 1),
									text: src.slice(1, lLength + match.index + rLength)
								};
							}
							return {
								type: 'strong',
								raw: src.slice(0, lLength + match.index + rLength + 1),
								text: src.slice(2, lLength + match.index + rLength - 1)
							};
						}
					}
				}
				codespan(src) {
					const cap = this.rules.inline.code.exec(src);
					if (cap) {
						let text = cap[2].replace(/\n/g, ' ');
						const hasNonSpaceChars = /[^ ]/.test(text);
						const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
						if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
							text = text.substring(1, text.length - 1);
						}
						text = escape$2(text, true);
						return {
							type: 'codespan',
							raw: cap[0],
							text
						};
					}
				}
				br(src) {
					const cap = this.rules.inline.br.exec(src);
					if (cap) {
						return {
							type: 'br',
							raw: cap[0]
						};
					}
				}
				del(src) {
					const cap = this.rules.inline.del.exec(src);
					if (cap) {
						return {
							type: 'del',
							raw: cap[0],
							text: cap[2]
						};
					}
				}
				autolink(src, mangle2) {
					const cap = this.rules.inline.autolink.exec(src);
					if (cap) {
						let text, href;
						if (cap[2] === '@') {
							text = escape$2(this.options.mangle ? mangle2(cap[1]) : cap[1]);
							href = 'mailto:' + text;
						} else {
							text = escape$2(cap[1]);
							href = text;
						}
						return {
							type: 'link',
							raw: cap[0],
							text,
							href,
							tokens: [
								{
									type: 'text',
									raw: text,
									text
								}
							]
						};
					}
				}
				url(src, mangle2) {
					let cap;
					if ((cap = this.rules.inline.url.exec(src))) {
						let text, href;
						if (cap[2] === '@') {
							text = escape$2(this.options.mangle ? mangle2(cap[0]) : cap[0]);
							href = 'mailto:' + text;
						} else {
							let prevCapZero;
							do {
								prevCapZero = cap[0];
								cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
							} while (prevCapZero !== cap[0]);
							text = escape$2(cap[0]);
							if (cap[1] === 'www.') {
								href = 'http://' + text;
							} else {
								href = text;
							}
						}
						return {
							type: 'link',
							raw: cap[0],
							text,
							href,
							tokens: [
								{
									type: 'text',
									raw: text,
									text
								}
							]
						};
					}
				}
				inlineText(src, inRawBlock, smartypants2) {
					const cap = this.rules.inline.text.exec(src);
					if (cap) {
						let text;
						if (inRawBlock) {
							text = this.options.sanitize
								? this.options.sanitizer
									? this.options.sanitizer(cap[0])
									: escape$2(cap[0])
								: cap[0];
						} else {
							text = escape$2(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
						}
						return {
							type: 'text',
							raw: cap[0],
							text
						};
					}
				}
			};
			({ noopTest: noopTest2, edit, merge: merge$1 } = helpers);
			block$1 = {
				newline: /^(?: *(?:\n|$))+/,
				code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
				fences:
					/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
				hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
				heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
				blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
				list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
				html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
				def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
				nptable: noopTest2,
				table: noopTest2,
				lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
				_paragraph:
					/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
				text: /^[^\n]+/
			};
			block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
			block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
			block$1.def = edit(block$1.def)
				.replace('label', block$1._label)
				.replace('title', block$1._title)
				.getRegex();
			block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
			block$1.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
			block$1.item = edit(block$1.item, 'gm').replace(/bull/g, block$1.bullet).getRegex();
			block$1.listItemStart = edit(/^( *)(bull) */)
				.replace('bull', block$1.bullet)
				.getRegex();
			block$1.list = edit(block$1.list)
				.replace(/bull/g, block$1.bullet)
				.replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
				.replace('def', '\\n+(?=' + block$1.def.source + ')')
				.getRegex();
			block$1._tag =
				'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
			block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
			block$1.html = edit(block$1.html, 'i')
				.replace('comment', block$1._comment)
				.replace('tag', block$1._tag)
				.replace(
					'attribute',
					/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
				)
				.getRegex();
			block$1.paragraph = edit(block$1._paragraph)
				.replace('hr', block$1.hr)
				.replace('heading', ' {0,3}#{1,6} ')
				.replace('|lheading', '')
				.replace('blockquote', ' {0,3}>')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
				.replace('tag', block$1._tag)
				.getRegex();
			block$1.blockquote = edit(block$1.blockquote)
				.replace('paragraph', block$1.paragraph)
				.getRegex();
			block$1.normal = merge$1({}, block$1);
			block$1.gfm = merge$1({}, block$1.normal, {
				nptable:
					'^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
				table:
					'^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
			});
			block$1.gfm.nptable = edit(block$1.gfm.nptable)
				.replace('hr', block$1.hr)
				.replace('heading', ' {0,3}#{1,6} ')
				.replace('blockquote', ' {0,3}>')
				.replace('code', ' {4}[^\\n]')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
				.replace('tag', block$1._tag)
				.getRegex();
			block$1.gfm.table = edit(block$1.gfm.table)
				.replace('hr', block$1.hr)
				.replace('heading', ' {0,3}#{1,6} ')
				.replace('blockquote', ' {0,3}>')
				.replace('code', ' {4}[^\\n]')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
				.replace('tag', block$1._tag)
				.getRegex();
			block$1.pedantic = merge$1({}, block$1.normal, {
				html: edit(
					`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
				)
					.replace('comment', block$1._comment)
					.replace(
						/tag/g,
						'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
					)
					.getRegex(),
				def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
				heading: /^(#{1,6})(.*)(?:\n+|$)/,
				fences: noopTest2,
				paragraph: edit(block$1.normal._paragraph)
					.replace('hr', block$1.hr)
					.replace('heading', ' *#{1,6} *[^\n]')
					.replace('lheading', block$1.lheading)
					.replace('blockquote', ' {0,3}>')
					.replace('|fences', '')
					.replace('|list', '')
					.replace('|html', '')
					.getRegex()
			});
			inline$1 = {
				escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
				autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
				url: noopTest2,
				tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
				link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
				reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
				nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
				reflinkSearch: 'reflink|nolink(?!\\()',
				emStrong: {
					lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
					rDelimAst:
						/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
					rDelimUnd:
						/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
				},
				code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
				br: /^( {2,}|\\)\n(?!\s*$)/,
				del: noopTest2,
				text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
				punctuation: /^([\spunctuation])/
			};
			inline$1._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
			inline$1.punctuation = edit(inline$1.punctuation)
				.replace(/punctuation/g, inline$1._punctuation)
				.getRegex();
			inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
			inline$1.escapedEmSt = /\\\*|\\_/g;
			inline$1._comment = edit(block$1._comment).replace('(?:-->|$)', '-->').getRegex();
			inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim)
				.replace(/punct/g, inline$1._punctuation)
				.getRegex();
			inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, 'g')
				.replace(/punct/g, inline$1._punctuation)
				.getRegex();
			inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, 'g')
				.replace(/punct/g, inline$1._punctuation)
				.getRegex();
			inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
			inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
			inline$1._email =
				/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
			inline$1.autolink = edit(inline$1.autolink)
				.replace('scheme', inline$1._scheme)
				.replace('email', inline$1._email)
				.getRegex();
			inline$1._attribute =
				/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
			inline$1.tag = edit(inline$1.tag)
				.replace('comment', inline$1._comment)
				.replace('attribute', inline$1._attribute)
				.getRegex();
			inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
			inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
			inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
			inline$1.link = edit(inline$1.link)
				.replace('label', inline$1._label)
				.replace('href', inline$1._href)
				.replace('title', inline$1._title)
				.getRegex();
			inline$1.reflink = edit(inline$1.reflink).replace('label', inline$1._label).getRegex();
			inline$1.reflinkSearch = edit(inline$1.reflinkSearch, 'g')
				.replace('reflink', inline$1.reflink)
				.replace('nolink', inline$1.nolink)
				.getRegex();
			inline$1.normal = merge$1({}, inline$1);
			inline$1.pedantic = merge$1({}, inline$1.normal, {
				strong: {
					start: /^__|\*\*/,
					middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
					endAst: /\*\*(?!\*)/g,
					endUnd: /__(?!_)/g
				},
				em: {
					start: /^_|\*/,
					middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
					endAst: /\*(?!\*)/g,
					endUnd: /_(?!_)/g
				},
				link: edit(/^!?\[(label)\]\((.*?)\)/)
					.replace('label', inline$1._label)
					.getRegex(),
				reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
					.replace('label', inline$1._label)
					.getRegex()
			});
			inline$1.gfm = merge$1({}, inline$1.normal, {
				escape: edit(inline$1.escape).replace('])', '~|])').getRegex(),
				_extended_email:
					/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
				url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
				_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
				del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
				text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
			});
			inline$1.gfm.url = edit(inline$1.gfm.url, 'i')
				.replace('email', inline$1.gfm._extended_email)
				.getRegex();
			inline$1.breaks = merge$1({}, inline$1.gfm, {
				br: edit(inline$1.br).replace('{2,}', '*').getRegex(),
				text: edit(inline$1.gfm.text)
					.replace('\\b_', '\\b_| {2,}\\n')
					.replace(/\{2,\}/g, '*')
					.getRegex()
			});
			rules = {
				block: block$1,
				inline: inline$1
			};
			Tokenizer$1 = Tokenizer_1;
			({ defaults: defaults$3 } = defaults$5.exports);
			({ block, inline } = rules);
			({ repeatString } = helpers);
			Lexer_1 = class Lexer {
				constructor(options2) {
					this.tokens = [];
					this.tokens.links = Object.create(null);
					this.options = options2 || defaults$3;
					this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
					this.tokenizer = this.options.tokenizer;
					this.tokenizer.options = this.options;
					const rules2 = {
						block: block.normal,
						inline: inline.normal
					};
					if (this.options.pedantic) {
						rules2.block = block.pedantic;
						rules2.inline = inline.pedantic;
					} else if (this.options.gfm) {
						rules2.block = block.gfm;
						if (this.options.breaks) {
							rules2.inline = inline.breaks;
						} else {
							rules2.inline = inline.gfm;
						}
					}
					this.tokenizer.rules = rules2;
				}
				static get rules() {
					return {
						block,
						inline
					};
				}
				static lex(src, options2) {
					const lexer = new Lexer(options2);
					return lexer.lex(src);
				}
				static lexInline(src, options2) {
					const lexer = new Lexer(options2);
					return lexer.inlineTokens(src);
				}
				lex(src) {
					src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
					this.blockTokens(src, this.tokens, true);
					this.inline(this.tokens);
					return this.tokens;
				}
				blockTokens(src, tokens = [], top = true) {
					if (this.options.pedantic) {
						src = src.replace(/^ +$/gm, '');
					}
					let token, i, l, lastToken, cutSrc, lastParagraphClipped;
					while (src) {
						if (
							this.options.extensions &&
							this.options.extensions.block &&
							this.options.extensions.block.some((extTokenizer) => {
								if ((token = extTokenizer.call(this, src, tokens))) {
									src = src.substring(token.raw.length);
									tokens.push(token);
									return true;
								}
								return false;
							})
						) {
							continue;
						}
						if ((token = this.tokenizer.space(src))) {
							src = src.substring(token.raw.length);
							if (token.type) {
								tokens.push(token);
							}
							continue;
						}
						if ((token = this.tokenizer.code(src))) {
							src = src.substring(token.raw.length);
							lastToken = tokens[tokens.length - 1];
							if (lastToken && lastToken.type === 'paragraph') {
								lastToken.raw += '\n' + token.raw;
								lastToken.text += '\n' + token.text;
							} else {
								tokens.push(token);
							}
							continue;
						}
						if ((token = this.tokenizer.fences(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.heading(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.nptable(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.hr(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.blockquote(src))) {
							src = src.substring(token.raw.length);
							token.tokens = this.blockTokens(token.text, [], top);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.list(src))) {
							src = src.substring(token.raw.length);
							l = token.items.length;
							for (i = 0; i < l; i++) {
								token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
							}
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.html(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if (top && (token = this.tokenizer.def(src))) {
							src = src.substring(token.raw.length);
							if (!this.tokens.links[token.tag]) {
								this.tokens.links[token.tag] = {
									href: token.href,
									title: token.title
								};
							}
							continue;
						}
						if ((token = this.tokenizer.table(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.lheading(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						cutSrc = src;
						if (this.options.extensions && this.options.extensions.startBlock) {
							let startIndex = Infinity;
							const tempSrc = src.slice(1);
							let tempStart;
							this.options.extensions.startBlock.forEach(function (getStartIndex) {
								tempStart = getStartIndex.call(this, tempSrc);
								if (typeof tempStart === 'number' && tempStart >= 0) {
									startIndex = Math.min(startIndex, tempStart);
								}
							});
							if (startIndex < Infinity && startIndex >= 0) {
								cutSrc = src.substring(0, startIndex + 1);
							}
						}
						if (top && (token = this.tokenizer.paragraph(cutSrc))) {
							lastToken = tokens[tokens.length - 1];
							if (lastParagraphClipped && lastToken.type === 'paragraph') {
								lastToken.raw += '\n' + token.raw;
								lastToken.text += '\n' + token.text;
							} else {
								tokens.push(token);
							}
							lastParagraphClipped = cutSrc.length !== src.length;
							src = src.substring(token.raw.length);
							continue;
						}
						if ((token = this.tokenizer.text(src))) {
							src = src.substring(token.raw.length);
							lastToken = tokens[tokens.length - 1];
							if (lastToken && lastToken.type === 'text') {
								lastToken.raw += '\n' + token.raw;
								lastToken.text += '\n' + token.text;
							} else {
								tokens.push(token);
							}
							continue;
						}
						if (src) {
							const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
							if (this.options.silent) {
								console.error(errMsg);
								break;
							} else {
								throw new Error(errMsg);
							}
						}
					}
					return tokens;
				}
				inline(tokens) {
					let i, j, k, l2, row, token;
					const l = tokens.length;
					for (i = 0; i < l; i++) {
						token = tokens[i];
						switch (token.type) {
							case 'paragraph':
							case 'text':
							case 'heading': {
								token.tokens = [];
								this.inlineTokens(token.text, token.tokens);
								break;
							}
							case 'table': {
								token.tokens = {
									header: [],
									cells: []
								};
								l2 = token.header.length;
								for (j = 0; j < l2; j++) {
									token.tokens.header[j] = [];
									this.inlineTokens(token.header[j], token.tokens.header[j]);
								}
								l2 = token.cells.length;
								for (j = 0; j < l2; j++) {
									row = token.cells[j];
									token.tokens.cells[j] = [];
									for (k = 0; k < row.length; k++) {
										token.tokens.cells[j][k] = [];
										this.inlineTokens(row[k], token.tokens.cells[j][k]);
									}
								}
								break;
							}
							case 'blockquote': {
								this.inline(token.tokens);
								break;
							}
							case 'list': {
								l2 = token.items.length;
								for (j = 0; j < l2; j++) {
									this.inline(token.items[j].tokens);
								}
								break;
							}
						}
					}
					return tokens;
				}
				inlineTokens(src, tokens = [], inLink = false, inRawBlock = false) {
					let token, lastToken, cutSrc;
					let maskedSrc = src;
					let match;
					let keepPrevChar, prevChar;
					if (this.tokens.links) {
						const links = Object.keys(this.tokens.links);
						if (links.length > 0) {
							while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
								if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
									maskedSrc =
										maskedSrc.slice(0, match.index) +
										'[' +
										repeatString('a', match[0].length - 2) +
										']' +
										maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
								}
							}
						}
					}
					while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
						maskedSrc =
							maskedSrc.slice(0, match.index) +
							'[' +
							repeatString('a', match[0].length - 2) +
							']' +
							maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
					}
					while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
						maskedSrc =
							maskedSrc.slice(0, match.index) +
							'++' +
							maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
					}
					while (src) {
						if (!keepPrevChar) {
							prevChar = '';
						}
						keepPrevChar = false;
						if (
							this.options.extensions &&
							this.options.extensions.inline &&
							this.options.extensions.inline.some((extTokenizer) => {
								if ((token = extTokenizer.call(this, src, tokens))) {
									src = src.substring(token.raw.length);
									tokens.push(token);
									return true;
								}
								return false;
							})
						) {
							continue;
						}
						if ((token = this.tokenizer.escape(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.tag(src, inLink, inRawBlock))) {
							src = src.substring(token.raw.length);
							inLink = token.inLink;
							inRawBlock = token.inRawBlock;
							lastToken = tokens[tokens.length - 1];
							if (lastToken && token.type === 'text' && lastToken.type === 'text') {
								lastToken.raw += token.raw;
								lastToken.text += token.text;
							} else {
								tokens.push(token);
							}
							continue;
						}
						if ((token = this.tokenizer.link(src))) {
							src = src.substring(token.raw.length);
							if (token.type === 'link') {
								token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
							}
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.reflink(src, this.tokens.links))) {
							src = src.substring(token.raw.length);
							lastToken = tokens[tokens.length - 1];
							if (token.type === 'link') {
								token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
								tokens.push(token);
							} else if (lastToken && token.type === 'text' && lastToken.type === 'text') {
								lastToken.raw += token.raw;
								lastToken.text += token.text;
							} else {
								tokens.push(token);
							}
							continue;
						}
						if ((token = this.tokenizer.emStrong(src, maskedSrc, prevChar))) {
							src = src.substring(token.raw.length);
							token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.codespan(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.br(src))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.del(src))) {
							src = src.substring(token.raw.length);
							token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
							tokens.push(token);
							continue;
						}
						if ((token = this.tokenizer.autolink(src, mangle))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						if (!inLink && (token = this.tokenizer.url(src, mangle))) {
							src = src.substring(token.raw.length);
							tokens.push(token);
							continue;
						}
						cutSrc = src;
						if (this.options.extensions && this.options.extensions.startInline) {
							let startIndex = Infinity;
							const tempSrc = src.slice(1);
							let tempStart;
							this.options.extensions.startInline.forEach(function (getStartIndex) {
								tempStart = getStartIndex.call(this, tempSrc);
								if (typeof tempStart === 'number' && tempStart >= 0) {
									startIndex = Math.min(startIndex, tempStart);
								}
							});
							if (startIndex < Infinity && startIndex >= 0) {
								cutSrc = src.substring(0, startIndex + 1);
							}
						}
						if ((token = this.tokenizer.inlineText(cutSrc, inRawBlock, smartypants))) {
							src = src.substring(token.raw.length);
							if (token.raw.slice(-1) !== '_') {
								prevChar = token.raw.slice(-1);
							}
							keepPrevChar = true;
							lastToken = tokens[tokens.length - 1];
							if (lastToken && lastToken.type === 'text') {
								lastToken.raw += token.raw;
								lastToken.text += token.text;
							} else {
								tokens.push(token);
							}
							continue;
						}
						if (src) {
							const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
							if (this.options.silent) {
								console.error(errMsg);
								break;
							} else {
								throw new Error(errMsg);
							}
						}
					}
					return tokens;
				}
			};
			({ defaults: defaults$2 } = defaults$5.exports);
			({ cleanUrl, escape: escape$1 } = helpers);
			Renderer_1 = class Renderer {
				constructor(options2) {
					this.options = options2 || defaults$2;
				}
				code(code, infostring, escaped2) {
					const lang = (infostring || '').match(/\S*/)[0];
					if (this.options.highlight) {
						const out = this.options.highlight(code, lang);
						if (out != null && out !== code) {
							escaped2 = true;
							code = out;
						}
					}
					code = code.replace(/\n$/, '') + '\n';
					if (!lang) {
						return '<pre><code>' + (escaped2 ? code : escape$1(code, true)) + '</code></pre>\n';
					}
					return (
						'<pre><code class="' +
						this.options.langPrefix +
						escape$1(lang, true) +
						'">' +
						(escaped2 ? code : escape$1(code, true)) +
						'</code></pre>\n'
					);
				}
				blockquote(quote) {
					return '<blockquote>\n' + quote + '</blockquote>\n';
				}
				html(html) {
					return html;
				}
				heading(text, level, raw, slugger) {
					if (this.options.headerIds) {
						return (
							'<h' +
							level +
							' id="' +
							this.options.headerPrefix +
							slugger.slug(raw) +
							'">' +
							text +
							'</h' +
							level +
							'>\n'
						);
					}
					return '<h' + level + '>' + text + '</h' + level + '>\n';
				}
				hr() {
					return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
				}
				list(body, ordered, start) {
					const type = ordered ? 'ol' : 'ul',
						startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
					return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
				}
				listitem(text) {
					return '<li>' + text + '</li>\n';
				}
				checkbox(checked) {
					return (
						'<input ' +
						(checked ? 'checked="" ' : '') +
						'disabled="" type="checkbox"' +
						(this.options.xhtml ? ' /' : '') +
						'> '
					);
				}
				paragraph(text) {
					return '<p>' + text + '</p>\n';
				}
				table(header, body) {
					if (body) body = '<tbody>' + body + '</tbody>';
					return '<table>\n<thead>\n' + header + '</thead>\n' + body + '</table>\n';
				}
				tablerow(content) {
					return '<tr>\n' + content + '</tr>\n';
				}
				tablecell(content, flags) {
					const type = flags.header ? 'th' : 'td';
					const tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
					return tag + content + '</' + type + '>\n';
				}
				strong(text) {
					return '<strong>' + text + '</strong>';
				}
				em(text) {
					return '<em>' + text + '</em>';
				}
				codespan(text) {
					return '<code>' + text + '</code>';
				}
				br() {
					return this.options.xhtml ? '<br/>' : '<br>';
				}
				del(text) {
					return '<del>' + text + '</del>';
				}
				link(href, title, text) {
					href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
					if (href === null) {
						return text;
					}
					let out = '<a href="' + escape$1(href) + '"';
					if (title) {
						out += ' title="' + title + '"';
					}
					out += '>' + text + '</a>';
					return out;
				}
				image(href, title, text) {
					href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
					if (href === null) {
						return text;
					}
					let out = '<img src="' + href + '" alt="' + text + '"';
					if (title) {
						out += ' title="' + title + '"';
					}
					out += this.options.xhtml ? '/>' : '>';
					return out;
				}
				text(text) {
					return text;
				}
			};
			TextRenderer_1 = class TextRenderer {
				strong(text) {
					return text;
				}
				em(text) {
					return text;
				}
				codespan(text) {
					return text;
				}
				del(text) {
					return text;
				}
				html(text) {
					return text;
				}
				text(text) {
					return text;
				}
				link(href, title, text) {
					return '' + text;
				}
				image(href, title, text) {
					return '' + text;
				}
				br() {
					return '';
				}
			};
			Slugger_1 = class Slugger {
				constructor() {
					this.seen = {};
				}
				serialize(value) {
					return value
						.toLowerCase()
						.trim()
						.replace(/<[!\/a-z].*?>/gi, '')
						.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
						.replace(/\s/g, '-');
				}
				getNextSafeSlug(originalSlug, isDryRun) {
					let slug = originalSlug;
					let occurenceAccumulator = 0;
					if (this.seen.hasOwnProperty(slug)) {
						occurenceAccumulator = this.seen[originalSlug];
						do {
							occurenceAccumulator++;
							slug = originalSlug + '-' + occurenceAccumulator;
						} while (this.seen.hasOwnProperty(slug));
					}
					if (!isDryRun) {
						this.seen[originalSlug] = occurenceAccumulator;
						this.seen[slug] = 0;
					}
					return slug;
				}
				slug(value, options2 = {}) {
					const slug = this.serialize(value);
					return this.getNextSafeSlug(slug, options2.dryrun);
				}
			};
			Renderer$1 = Renderer_1;
			TextRenderer$1 = TextRenderer_1;
			Slugger$1 = Slugger_1;
			({ defaults: defaults$1 } = defaults$5.exports);
			({ unescape } = helpers);
			Parser_1 = class Parser {
				constructor(options2) {
					this.options = options2 || defaults$1;
					this.options.renderer = this.options.renderer || new Renderer$1();
					this.renderer = this.options.renderer;
					this.renderer.options = this.options;
					this.textRenderer = new TextRenderer$1();
					this.slugger = new Slugger$1();
				}
				static parse(tokens, options2) {
					const parser = new Parser(options2);
					return parser.parse(tokens);
				}
				static parseInline(tokens, options2) {
					const parser = new Parser(options2);
					return parser.parseInline(tokens);
				}
				parse(tokens, top = true) {
					let out = '',
						i,
						j,
						k,
						l2,
						l3,
						row,
						cell,
						header,
						body,
						token,
						ordered,
						start,
						loose,
						itemBody,
						item,
						checked,
						task,
						checkbox,
						ret;
					const l = tokens.length;
					for (i = 0; i < l; i++) {
						token = tokens[i];
						if (
							this.options.extensions &&
							this.options.extensions.renderers &&
							this.options.extensions.renderers[token.type]
						) {
							ret = this.options.extensions.renderers[token.type].call(this, token);
							if (
								ret !== false ||
								![
									'space',
									'hr',
									'heading',
									'code',
									'table',
									'blockquote',
									'list',
									'html',
									'paragraph',
									'text'
								].includes(token.type)
							) {
								out += ret || '';
								continue;
							}
						}
						switch (token.type) {
							case 'space': {
								continue;
							}
							case 'hr': {
								out += this.renderer.hr();
								continue;
							}
							case 'heading': {
								out += this.renderer.heading(
									this.parseInline(token.tokens),
									token.depth,
									unescape(this.parseInline(token.tokens, this.textRenderer)),
									this.slugger
								);
								continue;
							}
							case 'code': {
								out += this.renderer.code(token.text, token.lang, token.escaped);
								continue;
							}
							case 'table': {
								header = '';
								cell = '';
								l2 = token.header.length;
								for (j = 0; j < l2; j++) {
									cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
										header: true,
										align: token.align[j]
									});
								}
								header += this.renderer.tablerow(cell);
								body = '';
								l2 = token.cells.length;
								for (j = 0; j < l2; j++) {
									row = token.tokens.cells[j];
									cell = '';
									l3 = row.length;
									for (k = 0; k < l3; k++) {
										cell += this.renderer.tablecell(this.parseInline(row[k]), {
											header: false,
											align: token.align[k]
										});
									}
									body += this.renderer.tablerow(cell);
								}
								out += this.renderer.table(header, body);
								continue;
							}
							case 'blockquote': {
								body = this.parse(token.tokens);
								out += this.renderer.blockquote(body);
								continue;
							}
							case 'list': {
								ordered = token.ordered;
								start = token.start;
								loose = token.loose;
								l2 = token.items.length;
								body = '';
								for (j = 0; j < l2; j++) {
									item = token.items[j];
									checked = item.checked;
									task = item.task;
									itemBody = '';
									if (item.task) {
										checkbox = this.renderer.checkbox(checked);
										if (loose) {
											if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
												item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
												if (
													item.tokens[0].tokens &&
													item.tokens[0].tokens.length > 0 &&
													item.tokens[0].tokens[0].type === 'text'
												) {
													item.tokens[0].tokens[0].text =
														checkbox + ' ' + item.tokens[0].tokens[0].text;
												}
											} else {
												item.tokens.unshift({
													type: 'text',
													text: checkbox
												});
											}
										} else {
											itemBody += checkbox;
										}
									}
									itemBody += this.parse(item.tokens, loose);
									body += this.renderer.listitem(itemBody, task, checked);
								}
								out += this.renderer.list(body, ordered, start);
								continue;
							}
							case 'html': {
								out += this.renderer.html(token.text);
								continue;
							}
							case 'paragraph': {
								out += this.renderer.paragraph(this.parseInline(token.tokens));
								continue;
							}
							case 'text': {
								body = token.tokens ? this.parseInline(token.tokens) : token.text;
								while (i + 1 < l && tokens[i + 1].type === 'text') {
									token = tokens[++i];
									body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
								}
								out += top ? this.renderer.paragraph(body) : body;
								continue;
							}
							default: {
								const errMsg = 'Token with "' + token.type + '" type was not found.';
								if (this.options.silent) {
									console.error(errMsg);
									return;
								} else {
									throw new Error(errMsg);
								}
							}
						}
					}
					return out;
				}
				parseInline(tokens, renderer) {
					renderer = renderer || this.renderer;
					let out = '',
						i,
						token,
						ret;
					const l = tokens.length;
					for (i = 0; i < l; i++) {
						token = tokens[i];
						if (
							this.options.extensions &&
							this.options.extensions.renderers &&
							this.options.extensions.renderers[token.type]
						) {
							ret = this.options.extensions.renderers[token.type].call(this, token);
							if (
								ret !== false ||
								![
									'escape',
									'html',
									'link',
									'image',
									'strong',
									'em',
									'codespan',
									'br',
									'del',
									'text'
								].includes(token.type)
							) {
								out += ret || '';
								continue;
							}
						}
						switch (token.type) {
							case 'escape': {
								out += renderer.text(token.text);
								break;
							}
							case 'html': {
								out += renderer.html(token.text);
								break;
							}
							case 'link': {
								out += renderer.link(
									token.href,
									token.title,
									this.parseInline(token.tokens, renderer)
								);
								break;
							}
							case 'image': {
								out += renderer.image(token.href, token.title, token.text);
								break;
							}
							case 'strong': {
								out += renderer.strong(this.parseInline(token.tokens, renderer));
								break;
							}
							case 'em': {
								out += renderer.em(this.parseInline(token.tokens, renderer));
								break;
							}
							case 'codespan': {
								out += renderer.codespan(token.text);
								break;
							}
							case 'br': {
								out += renderer.br();
								break;
							}
							case 'del': {
								out += renderer.del(this.parseInline(token.tokens, renderer));
								break;
							}
							case 'text': {
								out += renderer.text(token.text);
								break;
							}
							default: {
								const errMsg = 'Token with "' + token.type + '" type was not found.';
								if (this.options.silent) {
									console.error(errMsg);
									return;
								} else {
									throw new Error(errMsg);
								}
							}
						}
					}
					return out;
				}
			};
			Lexer$1 = Lexer_1;
			Parser2 = Parser_1;
			Tokenizer2 = Tokenizer_1;
			Renderer2 = Renderer_1;
			TextRenderer2 = TextRenderer_1;
			Slugger$2 = Slugger_1;
			({ merge, checkSanitizeDeprecation, escape: escape2 } = helpers);
			({ getDefaults, changeDefaults, defaults } = defaults$5.exports);
			marked.options = marked.setOptions = function (opt) {
				merge(marked.defaults, opt);
				changeDefaults(marked.defaults);
				return marked;
			};
			marked.getDefaults = getDefaults;
			marked.defaults = defaults;
			marked.use = function (...args) {
				const opts = merge({}, ...args);
				const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
				let hasExtensions;
				args.forEach((pack) => {
					if (pack.extensions) {
						hasExtensions = true;
						pack.extensions.forEach((ext) => {
							if (!ext.name) {
								throw new Error('extension name required');
							}
							if (ext.renderer) {
								const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
								if (prevRenderer) {
									extensions.renderers[ext.name] = function (...args2) {
										let ret = ext.renderer.apply(this, args2);
										if (ret === false) {
											ret = prevRenderer.apply(this, args2);
										}
										return ret;
									};
								} else {
									extensions.renderers[ext.name] = ext.renderer;
								}
							}
							if (ext.tokenizer) {
								if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
									throw new Error("extension level must be 'block' or 'inline'");
								}
								if (extensions[ext.level]) {
									extensions[ext.level].unshift(ext.tokenizer);
								} else {
									extensions[ext.level] = [ext.tokenizer];
								}
								if (ext.start) {
									if (ext.level === 'block') {
										if (extensions.startBlock) {
											extensions.startBlock.push(ext.start);
										} else {
											extensions.startBlock = [ext.start];
										}
									} else if (ext.level === 'inline') {
										if (extensions.startInline) {
											extensions.startInline.push(ext.start);
										} else {
											extensions.startInline = [ext.start];
										}
									}
								}
							}
							if (ext.childTokens) {
								extensions.childTokens[ext.name] = ext.childTokens;
							}
						});
					}
					if (pack.renderer) {
						const renderer = marked.defaults.renderer || new Renderer2();
						for (const prop in pack.renderer) {
							const prevRenderer = renderer[prop];
							renderer[prop] = (...args2) => {
								let ret = pack.renderer[prop].apply(renderer, args2);
								if (ret === false) {
									ret = prevRenderer.apply(renderer, args2);
								}
								return ret;
							};
						}
						opts.renderer = renderer;
					}
					if (pack.tokenizer) {
						const tokenizer = marked.defaults.tokenizer || new Tokenizer2();
						for (const prop in pack.tokenizer) {
							const prevTokenizer = tokenizer[prop];
							tokenizer[prop] = (...args2) => {
								let ret = pack.tokenizer[prop].apply(tokenizer, args2);
								if (ret === false) {
									ret = prevTokenizer.apply(tokenizer, args2);
								}
								return ret;
							};
						}
						opts.tokenizer = tokenizer;
					}
					if (pack.walkTokens) {
						const walkTokens = marked.defaults.walkTokens;
						opts.walkTokens = (token) => {
							pack.walkTokens.call(this, token);
							if (walkTokens) {
								walkTokens(token);
							}
						};
					}
					if (hasExtensions) {
						opts.extensions = extensions;
					}
					marked.setOptions(opts);
				});
			};
			marked.walkTokens = function (tokens, callback) {
				for (const token of tokens) {
					callback(token);
					switch (token.type) {
						case 'table': {
							for (const cell of token.tokens.header) {
								marked.walkTokens(cell, callback);
							}
							for (const row of token.tokens.cells) {
								for (const cell of row) {
									marked.walkTokens(cell, callback);
								}
							}
							break;
						}
						case 'list': {
							marked.walkTokens(token.items, callback);
							break;
						}
						default: {
							if (
								marked.defaults.extensions &&
								marked.defaults.extensions.childTokens &&
								marked.defaults.extensions.childTokens[token.type]
							) {
								marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
									marked.walkTokens(token[childTokens], callback);
								});
							} else if (token.tokens) {
								marked.walkTokens(token.tokens, callback);
							}
						}
					}
				}
			};
			marked.parseInline = function (src, opt) {
				if (typeof src === 'undefined' || src === null) {
					throw new Error('marked.parseInline(): input parameter is undefined or null');
				}
				if (typeof src !== 'string') {
					throw new Error(
						'marked.parseInline(): input parameter is of type ' +
							Object.prototype.toString.call(src) +
							', string expected'
					);
				}
				opt = merge({}, marked.defaults, opt || {});
				checkSanitizeDeprecation(opt);
				try {
					const tokens = Lexer$1.lexInline(src, opt);
					if (opt.walkTokens) {
						marked.walkTokens(tokens, opt.walkTokens);
					}
					return Parser2.parseInline(tokens, opt);
				} catch (e) {
					e.message += '\nPlease report this to https://github.com/markedjs/marked.';
					if (opt.silent) {
						return '<p>An error occurred:</p><pre>' + escape2(e.message + '', true) + '</pre>';
					}
					throw e;
				}
			};
			marked.Parser = Parser2;
			marked.parser = Parser2.parse;
			marked.Renderer = Renderer2;
			marked.TextRenderer = TextRenderer2;
			marked.Lexer = Lexer$1;
			marked.lexer = Lexer$1.lex;
			marked.Tokenizer = Tokenizer2;
			marked.Slugger = Slugger$2;
			marked.parse = marked;
			marked_1 = marked;
			key = {};
			Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let id;
				let { depth } = $$props;
				let { raw } = $$props;
				let { text } = $$props;
				const { slug, getOptions } = getContext(key);
				const options2 = getOptions();
				if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
					$$bindings.depth(depth);
				if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0) $$bindings.raw(raw);
				if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
				id = options2.headerIds ? options2.headerPrefix + slug(text) : void 0;
				return `${
					depth === 1
						? `<h1${add_attribute('id', id, 0)}>${slots.default ? slots.default({}) : ``}</h1>`
						: `${
								depth === 2
									? `<h2${add_attribute('id', id, 0)}>${
											slots.default ? slots.default({}) : ``
									  }</h2>`
									: `${
											depth === 3
												? `<h3${add_attribute('id', id, 0)}>${
														slots.default ? slots.default({}) : ``
												  }</h3>`
												: `${
														depth === 4
															? `<h4${add_attribute('id', id, 0)}>${
																	slots.default ? slots.default({}) : ``
															  }</h4>`
															: `${
																	depth === 5
																		? `<h5${add_attribute('id', id, 0)}>${
																				slots.default ? slots.default({}) : ``
																		  }</h5>`
																		: `${
																				depth === 6
																					? `<h6${add_attribute('id', id, 0)}>${
																							slots.default ? slots.default({}) : ``
																					  }</h6>`
																					: `${escape(raw)}`
																		  }`
															  }`
												  }`
									  }`
						  }`
				}`;
			});
			Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<p>${slots.default ? slots.default({}) : ``}</p>`;
			});
			Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { text } = $$props;
				let { raw } = $$props;
				if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
				if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0) $$bindings.raw(raw);
				return `${slots.default ? slots.default({}) : ``}`;
			});
			Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { href = '' } = $$props;
				let { title = void 0 } = $$props;
				let { text = '' } = $$props;
				if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
				if ($$props.title === void 0 && $$bindings.title && title !== void 0)
					$$bindings.title(title);
				if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
				return `<img${add_attribute('src', href, 0)}${add_attribute(
					'title',
					title,
					0
				)}${add_attribute('alt', text, 0)}>`;
			});
			Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { href = '' } = $$props;
				let { title = void 0 } = $$props;
				if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
				if ($$props.title === void 0 && $$bindings.title && title !== void 0)
					$$bindings.title(title);
				return `<a${add_attribute('href', href, 0)}${add_attribute('title', title, 0)}>${
					slots.default ? slots.default({}) : ``
				}</a>`;
			});
			Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<em>${slots.default ? slots.default({}) : ``}</em>`;
			});
			Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<del>${slots.default ? slots.default({}) : ``}</del>`;
			});
			Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { raw } = $$props;
				if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0) $$bindings.raw(raw);
				return `<code>${escape(raw.replace(/`/g, ''))}</code>`;
			});
			Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
			});
			Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<table>${slots.default ? slots.default({}) : ``}</table>`;
			});
			TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
			});
			TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
			});
			TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
			});
			TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { header } = $$props;
				let { align } = $$props;
				if ($$props.header === void 0 && $$bindings.header && header !== void 0)
					$$bindings.header(header);
				if ($$props.align === void 0 && $$bindings.align && align !== void 0)
					$$bindings.align(align);
				return `${
					header
						? `<th${add_attribute('align', align, 0)}>${
								slots.default ? slots.default({}) : ``
						  }</th>`
						: `<td${add_attribute('align', align, 0)}>${
								slots.default ? slots.default({}) : ``
						  }</td>`
				}`;
			});
			List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { ordered } = $$props;
				let { start } = $$props;
				if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
					$$bindings.ordered(ordered);
				if ($$props.start === void 0 && $$bindings.start && start !== void 0)
					$$bindings.start(start);
				return `${
					ordered
						? `<ol${add_attribute('start', start, 0)}>${
								slots.default ? slots.default({}) : ``
						  }</ol>`
						: `<ul>${slots.default ? slots.default({}) : ``}</ul>`
				}`;
			});
			ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<li>${slots.default ? slots.default({}) : ``}</li>`;
			});
			Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<hr>`;
			});
			Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { text } = $$props;
				if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
				return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
			});
			Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
			});
			Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { lang } = $$props;
				let { text } = $$props;
				if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
				if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
				return `<pre${add_attribute('class', lang, 0)}><code>${escape(text)}</code></pre>`;
			});
			Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				return `<br>${slots.default ? slots.default({}) : ``}`;
			});
			defaultRenderers = {
				heading: Heading,
				paragraph: Paragraph,
				text: Text,
				image: Image,
				link: Link,
				em: Em,
				strong: Strong,
				codespan: Codespan,
				del: Del,
				table: Table,
				tablehead: TableHead,
				tablebody: TableBody,
				tablerow: TableRow,
				tablecell: TableCell,
				list: List,
				orderedlistitem: null,
				unorderedlistitem: null,
				listitem: ListItem,
				hr: Hr,
				html: Html,
				blockquote: Blockquote,
				code: Code,
				br: Br
			};
			defaultOptions = {
				baseUrl: null,
				breaks: false,
				gfm: true,
				headerIds: true,
				headerPrefix: '',
				highlight: null,
				langPrefix: 'language-',
				mangle: true,
				pedantic: false,
				renderer: null,
				sanitize: false,
				sanitizer: null,
				silent: false,
				smartLists: false,
				smartypants: false,
				tokenizer: null,
				xhtml: false
			};
			Lexer2 = marked_1.Lexer;
			Slugger2 = marked_1.Slugger;
			SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let slugger;
				let combinedOptions;
				let combinedRenderers;
				let { source = '' } = $$props;
				let { renderers = {} } = $$props;
				let { options: options2 = {} } = $$props;
				let { isInline = false } = $$props;
				const dispatch = createEventDispatcher();
				let tokens;
				let lexer;
				setContext(key, {
					slug: (val) => (slugger ? slugger.slug(val) : ''),
					getOptions: () => combinedOptions
				});
				if ($$props.source === void 0 && $$bindings.source && source !== void 0)
					$$bindings.source(source);
				if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
					$$bindings.renderers(renderers);
				if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
					$$bindings.options(options2);
				if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
					$$bindings.isInline(isInline);
				slugger = source ? new Slugger2() : void 0;
				combinedOptions = { ...defaultOptions, ...options2 };
				{
					{
						lexer = new Lexer2(combinedOptions);
						tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
						dispatch('parsed', { tokens });
					}
				}
				combinedRenderers = { ...defaultRenderers, ...renderers };
				return `${validate_component(Parser$1, 'Parser').$$render(
					$$result,
					{ tokens, renderers: combinedRenderers },
					{},
					{}
				)}`;
			});
			Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { title } = $$props;
				let { articleBody } = $$props;
				let { date } = $$props;
				if ($$props.title === void 0 && $$bindings.title && title !== void 0)
					$$bindings.title(title);
				if ($$props.articleBody === void 0 && $$bindings.articleBody && articleBody !== void 0)
					$$bindings.articleBody(articleBody);
				if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
				return `


<div><h1 class="${'title'}">${escape(title)}</h1>
	<p class="${'date'}">written on ${escape(date)}</p>
	<div class="${'content'}">
		${validate_component(SvelteMarkdown, 'SvelteMarkdown').$$render(
			$$result,
			{ source: articleBody },
			{},
			{}
		)}</div></div>`;
			});
			Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let promise = fetchPost();
				return `${(function (__value) {
					if (is_promise(__value)) {
						__value.then(null, noop);
						return `
	<p>...waiting</p>
`;
					}
					return (function (markdown) {
						return `
	
	${validate_component(Article, 'Article').$$render(
		$$result,
		{
			title: 'Neato',
			articleBody: markdown,
			date: 'Today!'
		},
		{},
		{}
	)}
`;
					})(__value);
				})(promise)}`;
			});
		}
	});

	// .svelte-kit/output/server/chunks/app-f96727fd.js
	function get_single_valued_header(headers, key2) {
		const value = headers[key2];
		if (Array.isArray(value)) {
			if (value.length === 0) {
				return void 0;
			}
			if (value.length > 1) {
				throw new Error(
					`Multiple headers provided for ${key2}. Multiple may be provided only for set-cookie`
				);
			}
			return value[0];
		}
		return value;
	}
	function coalesce_to_error(err) {
		return err instanceof Error || (err && err.name && err.message)
			? err
			: new Error(JSON.stringify(err));
	}
	function lowercase_keys(obj) {
		const clone = {};
		for (const key2 in obj) {
			clone[key2.toLowerCase()] = obj[key2];
		}
		return clone;
	}
	function error(body) {
		return {
			status: 500,
			body,
			headers: {}
		};
	}
	function is_string(s2) {
		return typeof s2 === 'string' || s2 instanceof String;
	}
	function is_content_type_textual(content_type) {
		if (!content_type) return true;
		const [type] = content_type.split(';');
		return (
			type === 'text/plain' ||
			type === 'application/json' ||
			type === 'application/x-www-form-urlencoded' ||
			type === 'multipart/form-data'
		);
	}
	async function render_endpoint(request, route, match) {
		const mod = await route.load();
		const handler = mod[request.method.toLowerCase().replace('delete', 'del')];
		if (!handler) {
			return;
		}
		const params = route.params(match);
		const response = await handler({ ...request, params });
		const preface = `Invalid response from route ${request.path}`;
		if (!response) {
			return;
		}
		if (typeof response !== 'object') {
			return error(`${preface}: expected an object, got ${typeof response}`);
		}
		let { status = 200, body, headers = {} } = response;
		headers = lowercase_keys(headers);
		const type = get_single_valued_header(headers, 'content-type');
		const is_type_textual = is_content_type_textual(type);
		if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
			return error(
				`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`
			);
		}
		let normalized_body;
		if (
			(typeof body === 'object' || typeof body === 'undefined') &&
			!(body instanceof Uint8Array) &&
			(!type || type.startsWith('application/json'))
		) {
			headers = { ...headers, 'content-type': 'application/json; charset=utf-8' };
			normalized_body = JSON.stringify(typeof body === 'undefined' ? {} : body);
		} else {
			normalized_body = body;
		}
		return { status, body: normalized_body, headers };
	}
	function devalue(value) {
		var counts = new Map();
		function walk(thing) {
			if (typeof thing === 'function') {
				throw new Error('Cannot stringify a function');
			}
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}
			counts.set(thing, 1);
			if (!isPrimitive(thing)) {
				var type = getType(thing);
				switch (type) {
					case 'Number':
					case 'String':
					case 'Boolean':
					case 'Date':
					case 'RegExp':
						return;
					case 'Array':
						thing.forEach(walk);
						break;
					case 'Set':
					case 'Map':
						Array.from(thing).forEach(walk);
						break;
					default:
						var proto = Object.getPrototypeOf(thing);
						if (
							proto !== Object.prototype &&
							proto !== null &&
							Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames
						) {
							throw new Error('Cannot stringify arbitrary non-POJOs');
						}
						if (Object.getOwnPropertySymbols(thing).length > 0) {
							throw new Error('Cannot stringify POJOs with symbolic keys');
						}
						Object.keys(thing).forEach(function (key2) {
							return walk(thing[key2]);
						});
				}
			}
		}
		walk(value);
		var names = new Map();
		Array.from(counts)
			.filter(function (entry) {
				return entry[1] > 1;
			})
			.sort(function (a, b) {
				return b[1] - a[1];
			})
			.forEach(function (entry, i) {
				names.set(entry[0], getName(i));
			});
		function stringify(thing) {
			if (names.has(thing)) {
				return names.get(thing);
			}
			if (isPrimitive(thing)) {
				return stringifyPrimitive(thing);
			}
			var type = getType(thing);
			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					return 'Object(' + stringify(thing.valueOf()) + ')';
				case 'RegExp':
					return 'new RegExp(' + stringifyString(thing.source) + ', "' + thing.flags + '")';
				case 'Date':
					return 'new Date(' + thing.getTime() + ')';
				case 'Array':
					var members = thing.map(function (v, i) {
						return i in thing ? stringify(v) : '';
					});
					var tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
					return '[' + members.join(',') + tail + ']';
				case 'Set':
				case 'Map':
					return 'new ' + type + '([' + Array.from(thing).map(stringify).join(',') + '])';
				default:
					var obj =
						'{' +
						Object.keys(thing)
							.map(function (key2) {
								return safeKey(key2) + ':' + stringify(thing[key2]);
							})
							.join(',') +
						'}';
					var proto = Object.getPrototypeOf(thing);
					if (proto === null) {
						return Object.keys(thing).length > 0
							? 'Object.assign(Object.create(null),' + obj + ')'
							: 'Object.create(null)';
					}
					return obj;
			}
		}
		var str = stringify(value);
		if (names.size) {
			var params_1 = [];
			var statements_1 = [];
			var values_1 = [];
			names.forEach(function (name, thing) {
				params_1.push(name);
				if (isPrimitive(thing)) {
					values_1.push(stringifyPrimitive(thing));
					return;
				}
				var type = getType(thing);
				switch (type) {
					case 'Number':
					case 'String':
					case 'Boolean':
						values_1.push('Object(' + stringify(thing.valueOf()) + ')');
						break;
					case 'RegExp':
						values_1.push(thing.toString());
						break;
					case 'Date':
						values_1.push('new Date(' + thing.getTime() + ')');
						break;
					case 'Array':
						values_1.push('Array(' + thing.length + ')');
						thing.forEach(function (v, i) {
							statements_1.push(name + '[' + i + ']=' + stringify(v));
						});
						break;
					case 'Set':
						values_1.push('new Set');
						statements_1.push(
							name +
								'.' +
								Array.from(thing)
									.map(function (v) {
										return 'add(' + stringify(v) + ')';
									})
									.join('.')
						);
						break;
					case 'Map':
						values_1.push('new Map');
						statements_1.push(
							name +
								'.' +
								Array.from(thing)
									.map(function (_a) {
										var k = _a[0],
											v = _a[1];
										return 'set(' + stringify(k) + ', ' + stringify(v) + ')';
									})
									.join('.')
						);
						break;
					default:
						values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
						Object.keys(thing).forEach(function (key2) {
							statements_1.push('' + name + safeProp(key2) + '=' + stringify(thing[key2]));
						});
				}
			});
			statements_1.push('return ' + str);
			return (
				'(function(' +
				params_1.join(',') +
				'){' +
				statements_1.join(';') +
				'}(' +
				values_1.join(',') +
				'))'
			);
		} else {
			return str;
		}
	}
	function getName(num) {
		var name = '';
		do {
			name = chars[num % chars.length] + name;
			num = ~~(num / chars.length) - 1;
		} while (num >= 0);
		return reserved.test(name) ? name + '_' : name;
	}
	function isPrimitive(thing) {
		return Object(thing) !== thing;
	}
	function stringifyPrimitive(thing) {
		if (typeof thing === 'string') return stringifyString(thing);
		if (thing === void 0) return 'void 0';
		if (thing === 0 && 1 / thing < 0) return '-0';
		var str = String(thing);
		if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
		return str;
	}
	function getType(thing) {
		return Object.prototype.toString.call(thing).slice(8, -1);
	}
	function escapeUnsafeChar(c) {
		return escaped$1[c] || c;
	}
	function escapeUnsafeChars(str) {
		return str.replace(unsafeChars, escapeUnsafeChar);
	}
	function safeKey(key2) {
		return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
	}
	function safeProp(key2) {
		return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2)
			? '.' + key2
			: '[' + escapeUnsafeChars(JSON.stringify(key2)) + ']';
	}
	function stringifyString(str) {
		var result = '"';
		for (var i = 0; i < str.length; i += 1) {
			var char = str.charAt(i);
			var code = char.charCodeAt(0);
			if (char === '"') {
				result += '\\"';
			} else if (char in escaped$1) {
				result += escaped$1[char];
			} else if (code >= 55296 && code <= 57343) {
				var next = str.charCodeAt(i + 1);
				if (code <= 56319 && next >= 56320 && next <= 57343) {
					result += char + str[++i];
				} else {
					result += '\\u' + code.toString(16).toUpperCase();
				}
			} else {
				result += char;
			}
		}
		result += '"';
		return result;
	}
	function noop$1() {}
	function safe_not_equal(a, b) {
		return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
	}
	function writable(value, start = noop$1) {
		let stop;
		const subscribers = new Set();
		function set(new_value) {
			if (safe_not_equal(value, new_value)) {
				value = new_value;
				if (stop) {
					const run_queue = !subscriber_queue.length;
					for (const subscriber of subscribers) {
						subscriber[1]();
						subscriber_queue.push(subscriber, value);
					}
					if (run_queue) {
						for (let i = 0; i < subscriber_queue.length; i += 2) {
							subscriber_queue[i][0](subscriber_queue[i + 1]);
						}
						subscriber_queue.length = 0;
					}
				}
			}
		}
		function update(fn) {
			set(fn(value));
		}
		function subscribe(run2, invalidate = noop$1) {
			const subscriber = [run2, invalidate];
			subscribers.add(subscriber);
			if (subscribers.size === 1) {
				stop = start(set) || noop$1;
			}
			run2(value);
			return () => {
				subscribers.delete(subscriber);
				if (subscribers.size === 0) {
					stop();
					stop = null;
				}
			};
		}
		return { set, update, subscribe };
	}
	function hash(value) {
		let hash2 = 5381;
		let i = value.length;
		if (typeof value === 'string') {
			while (i) hash2 = (hash2 * 33) ^ value.charCodeAt(--i);
		} else {
			while (i) hash2 = (hash2 * 33) ^ value[--i];
		}
		return (hash2 >>> 0).toString(36);
	}
	function escape_json_string_in_html(str) {
		return escape$12(
			str,
			escape_json_string_in_html_dict,
			(code) => `\\u${code.toString(16).toUpperCase()}`
		);
	}
	function escape_html_attr(str) {
		return '"' + escape$12(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
	}
	function escape$12(str, dict, unicode_encoder) {
		let result = '';
		for (let i = 0; i < str.length; i += 1) {
			const char = str.charAt(i);
			const code = char.charCodeAt(0);
			if (char in dict) {
				result += dict[char];
			} else if (code >= 55296 && code <= 57343) {
				const next = str.charCodeAt(i + 1);
				if (code <= 56319 && next >= 56320 && next <= 57343) {
					result += char + str[++i];
				} else {
					result += unicode_encoder(code);
				}
			} else {
				result += char;
			}
		}
		return result;
	}
	async function render_response({
		branch,
		options: options2,
		$session,
		page_config,
		status,
		error: error2,
		page
	}) {
		const css2 = new Set(options2.entry.css);
		const js = new Set(options2.entry.js);
		const styles = new Set();
		const serialized_data = [];
		let rendered;
		let is_private = false;
		let maxage;
		if (error2) {
			error2.stack = options2.get_stack(error2);
		}
		if (page_config.ssr) {
			branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
				if (node.css) node.css.forEach((url) => css2.add(url));
				if (node.js) node.js.forEach((url) => js.add(url));
				if (node.styles) node.styles.forEach((content) => styles.add(content));
				if (fetched && page_config.hydrate) serialized_data.push(...fetched);
				if (uses_credentials) is_private = true;
				maxage = loaded.maxage;
			});
			const session = writable($session);
			const props = {
				stores: {
					page: writable(null),
					navigating: writable(null),
					session
				},
				page,
				components: branch.map(({ node }) => node.module.default)
			};
			for (let i = 0; i < branch.length; i += 1) {
				props[`props_${i}`] = await branch[i].loaded.props;
			}
			let session_tracking_active = false;
			const unsubscribe = session.subscribe(() => {
				if (session_tracking_active) is_private = true;
			});
			session_tracking_active = true;
			try {
				rendered = options2.root.render(props);
			} finally {
				unsubscribe();
			}
		} else {
			rendered = { head: '', html: '', css: { code: '', map: null } };
		}
		const include_js = page_config.router || page_config.hydrate;
		if (!include_js) js.clear();
		const links = options2.amp
			? styles.size > 0 || rendered.css.code.length > 0
				? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join('\n')}</style>`
				: ''
			: [
					...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
					...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
			  ].join('\n		');
		let init2 = '';
		if (options2.amp) {
			init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
		} else if (include_js) {
			init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : 'document.body'},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
					throw new Error(`Failed to serialize session data: ${error3.message}`);
				})},
				host: ${page && page.host ? s$1(page.host) : 'location.host'},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${
					page_config.ssr && page_config.hydrate
						? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(',\n						')}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : 'location.host'}, // TODO this is redundant
						path: ${
							page && page.path
								? try_serialize(page.path, (error3) => {
										throw new Error(`Failed to serialize page.path: ${error3.message}`);
								  })
								: null
						},
						query: new URLSearchParams(${page && page.query ? s$1(page.query.toString()) : ''}),
						params: ${
							page && page.params
								? try_serialize(page.params, (error3) => {
										throw new Error(`Failed to serialize page.params: ${error3.message}`);
								  })
								: null
						}
					}
				}`
						: 'null'
				}
			});
		<\/script>`;
		}
		if (options2.service_worker) {
			init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
		}
		const head = [
			rendered.head,
			styles.size && !options2.amp
				? `<style data-svelte>${Array.from(styles).join('\n')}</style>`
				: '',
			links,
			init2
		].join('\n\n		');
		const body = options2.amp
			? rendered.html
			: `${rendered.html}

			${serialized_data
				.map(({ url, body: body2, json }) => {
					let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(
						url
					)}`;
					if (body2) attributes += ` data-body="${hash(body2)}"`;
					return `<script ${attributes}>${json}<\/script>`;
				})
				.join('\n\n	')}
		`;
		const headers = {
			'content-type': 'text/html'
		};
		if (maxage) {
			headers['cache-control'] = `${is_private ? 'private' : 'public'}, max-age=${maxage}`;
		}
		if (!options2.floc) {
			headers['permissions-policy'] = 'interest-cohort=()';
		}
		return {
			status,
			headers,
			body: options2.template({ head, body })
		};
	}
	function try_serialize(data, fail) {
		try {
			return devalue(data);
		} catch (err) {
			if (fail) fail(coalesce_to_error(err));
			return null;
		}
	}
	function serialize_error(error2) {
		if (!error2) return null;
		let serialized = try_serialize(error2);
		if (!serialized) {
			const { name, message, stack } = error2;
			serialized = try_serialize({ ...error2, name, message, stack });
		}
		if (!serialized) {
			serialized = '{}';
		}
		return serialized;
	}
	function normalize(loaded) {
		const has_error_status =
			loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
		if (loaded.error || has_error_status) {
			const status = loaded.status;
			if (!loaded.error && has_error_status) {
				return {
					status: status || 500,
					error: new Error()
				};
			}
			const error2 = typeof loaded.error === 'string' ? new Error(loaded.error) : loaded.error;
			if (!(error2 instanceof Error)) {
				return {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`
					)
				};
			}
			if (!status || status < 400 || status > 599) {
				console.warn(
					'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				);
				return { status: 500, error: error2 };
			}
			return { status, error: error2 };
		}
		if (loaded.redirect) {
			if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
				return {
					status: 500,
					error: new Error(
						'"redirect" property returned from load() must be accompanied by a 3xx status code'
					)
				};
			}
			if (typeof loaded.redirect !== 'string') {
				return {
					status: 500,
					error: new Error('"redirect" property returned from load() must be a string')
				};
			}
		}
		if (loaded.context) {
			throw new Error(
				'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
			);
		}
		return loaded;
	}
	async function load_node({
		request,
		options: options2,
		state,
		route,
		page,
		node,
		$session,
		stuff,
		prerender_enabled,
		is_leaf,
		is_error,
		status,
		error: error2
	}) {
		const { module } = node;
		let uses_credentials = false;
		const fetched = [];
		let set_cookie_headers = [];
		let loaded;
		const page_proxy = new Proxy(page, {
			get: (target, prop, receiver) => {
				if (prop === 'query' && prerender_enabled) {
					throw new Error('Cannot access query on a page with prerendering enabled');
				}
				return Reflect.get(target, prop, receiver);
			}
		});
		if (module.load) {
			const load_input = {
				page: page_proxy,
				get session() {
					uses_credentials = true;
					return $session;
				},
				fetch: async (resource, opts = {}) => {
					let url;
					if (typeof resource === 'string') {
						url = resource;
					} else {
						url = resource.url;
						opts = {
							method: resource.method,
							headers: resource.headers,
							body: resource.body,
							mode: resource.mode,
							credentials: resource.credentials,
							cache: resource.cache,
							redirect: resource.redirect,
							referrer: resource.referrer,
							integrity: resource.integrity,
							...opts
						};
					}
					const resolved = resolve(request.path, url.split('?')[0]);
					let response;
					const prefix = options2.paths.assets || options2.paths.base;
					const filename = (
						resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved
					).slice(1);
					const filename_html = `${filename}/index.html`;
					const asset = options2.manifest.assets.find(
						(d) => d.file === filename || d.file === filename_html
					);
					if (asset) {
						response = options2.read
							? new Response(options2.read(asset.file), {
									headers: asset.type ? { 'content-type': asset.type } : {}
							  })
							: await fetch(`http://${page.host}/${asset.file}`, opts);
					} else if (resolved.startsWith('/') && !resolved.startsWith('//')) {
						const relative = resolved;
						const headers = {
							...opts.headers
						};
						if (opts.credentials !== 'omit') {
							uses_credentials = true;
							headers.cookie = request.headers.cookie;
							if (!headers.authorization) {
								headers.authorization = request.headers.authorization;
							}
						}
						if (opts.body && typeof opts.body !== 'string') {
							throw new Error('Request body must be a string');
						}
						const search = url.includes('?') ? url.slice(url.indexOf('?') + 1) : '';
						const rendered = await respond(
							{
								host: request.host,
								method: opts.method || 'GET',
								headers,
								path: relative,
								rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
								query: new URLSearchParams(search)
							},
							options2,
							{
								fetched: url,
								initiator: route
							}
						);
						if (rendered) {
							if (state.prerender) {
								state.prerender.dependencies.set(relative, rendered);
							}
							response = new Response(rendered.body, {
								status: rendered.status,
								headers: rendered.headers
							});
						}
					} else {
						if (resolved.startsWith('//')) {
							throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
						}
						if (typeof request.host !== 'undefined') {
							const { hostname: fetch_hostname } = new URL(url);
							const [server_hostname] = request.host.split(':');
							if (
								`.${fetch_hostname}`.endsWith(`.${server_hostname}`) &&
								opts.credentials !== 'omit'
							) {
								uses_credentials = true;
								opts.headers = {
									...opts.headers,
									cookie: request.headers.cookie
								};
							}
						}
						const external_request = new Request(url, opts);
						response = await options2.hooks.externalFetch.call(null, external_request);
					}
					if (response) {
						const proxy = new Proxy(response, {
							get(response2, key2, _receiver) {
								async function text() {
									const body = await response2.text();
									const headers = {};
									for (const [key22, value] of response2.headers) {
										if (key22 === 'set-cookie') {
											set_cookie_headers = set_cookie_headers.concat(value);
										} else if (key22 !== 'etag') {
											headers[key22] = value;
										}
									}
									if (!opts.body || typeof opts.body === 'string') {
										fetched.push({
											url,
											body: opts.body,
											json: `{"status":${response2.status},"statusText":${s(
												response2.statusText
											)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
										});
									}
									return body;
								}
								if (key2 === 'text') {
									return text;
								}
								if (key2 === 'json') {
									return async () => {
										return JSON.parse(await text());
									};
								}
								return Reflect.get(response2, key2, response2);
							}
						});
						return proxy;
					}
					return (
						response ||
						new Response('Not found', {
							status: 404
						})
					);
				},
				stuff: { ...stuff }
			};
			if (is_error) {
				load_input.status = status;
				load_input.error = error2;
			}
			loaded = await module.load.call(null, load_input);
		} else {
			loaded = {};
		}
		if (!loaded && is_leaf && !is_error) return;
		if (!loaded) {
			throw new Error(`${node.entry} - load must return a value except for page fall through`);
		}
		return {
			node,
			loaded: normalize(loaded),
			stuff: loaded.stuff || stuff,
			fetched,
			set_cookie_headers,
			uses_credentials
		};
	}
	function resolve(base2, path) {
		const base_match = absolute.exec(base2);
		const path_match = absolute.exec(path);
		if (!base_match) {
			throw new Error(`bad base path: "${base2}"`);
		}
		const baseparts = path_match ? [] : base2.slice(base_match[0].length).split('/');
		const pathparts = path_match ? path.slice(path_match[0].length).split('/') : path.split('/');
		baseparts.pop();
		for (let i = 0; i < pathparts.length; i += 1) {
			const part = pathparts[i];
			if (part === '.') continue;
			else if (part === '..') baseparts.pop();
			else baseparts.push(part);
		}
		const prefix = (path_match && path_match[0]) || (base_match && base_match[0]) || '';
		return `${prefix}${baseparts.join('/')}`;
	}
	async function respond_with_error({
		request,
		options: options2,
		state,
		$session,
		status,
		error: error2
	}) {
		const default_layout = await options2.load_component(options2.manifest.layout);
		const default_error = await options2.load_component(options2.manifest.error);
		const page = {
			host: request.host,
			path: request.path,
			query: request.query,
			params: {}
		};
		const loaded = await load_node({
			request,
			options: options2,
			state,
			route: null,
			page,
			node: default_layout,
			$session,
			stuff: {},
			prerender_enabled: is_prerender_enabled(options2, default_error, state),
			is_leaf: false,
			is_error: false
		});
		const branch = [
			loaded,
			await load_node({
				request,
				options: options2,
				state,
				route: null,
				page,
				node: default_error,
				$session,
				stuff: loaded ? loaded.stuff : {},
				prerender_enabled: is_prerender_enabled(options2, default_error, state),
				is_leaf: false,
				is_error: true,
				status,
				error: error2
			})
		];
		try {
			return await render_response({
				options: options2,
				$session,
				page_config: {
					hydrate: options2.hydrate,
					router: options2.router,
					ssr: options2.ssr
				},
				status,
				error: error2,
				branch,
				page
			});
		} catch (err) {
			const error3 = coalesce_to_error(err);
			options2.handle_error(error3, request);
			return {
				status: 500,
				headers: {},
				body: error3.stack
			};
		}
	}
	function is_prerender_enabled(options2, node, state) {
		return (
			options2.prerender && (!!node.module.prerender || (!!state.prerender && state.prerender.all))
		);
	}
	async function respond$1(opts) {
		const { request, options: options2, state, $session, route } = opts;
		let nodes;
		try {
			nodes = await Promise.all(route.a.map((id) => (id ? options2.load_component(id) : void 0)));
		} catch (err) {
			const error3 = coalesce_to_error(err);
			options2.handle_error(error3, request);
			return await respond_with_error({
				request,
				options: options2,
				state,
				$session,
				status: 500,
				error: error3
			});
		}
		const leaf = nodes[nodes.length - 1].module;
		let page_config = get_page_config(leaf, options2);
		if (!leaf.prerender && state.prerender && !state.prerender.all) {
			return {
				status: 204,
				headers: {}
			};
		}
		let branch = [];
		let status = 200;
		let error2;
		let set_cookie_headers = [];
		ssr: if (page_config.ssr) {
			let stuff = {};
			for (let i = 0; i < nodes.length; i += 1) {
				const node = nodes[i];
				let loaded;
				if (node) {
					try {
						loaded = await load_node({
							...opts,
							node,
							stuff,
							prerender_enabled: is_prerender_enabled(options2, node, state),
							is_leaf: i === nodes.length - 1,
							is_error: false
						});
						if (!loaded) return;
						set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
						if (loaded.loaded.redirect) {
							return with_cookies(
								{
									status: loaded.loaded.status,
									headers: {
										location: encodeURI(loaded.loaded.redirect)
									}
								},
								set_cookie_headers
							);
						}
						if (loaded.loaded.error) {
							({ status, error: error2 } = loaded.loaded);
						}
					} catch (err) {
						const e = coalesce_to_error(err);
						options2.handle_error(e, request);
						status = 500;
						error2 = e;
					}
					if (loaded && !error2) {
						branch.push(loaded);
					}
					if (error2) {
						while (i--) {
							if (route.b[i]) {
								const error_node = await options2.load_component(route.b[i]);
								let node_loaded;
								let j = i;
								while (!(node_loaded = branch[j])) {
									j -= 1;
								}
								try {
									const error_loaded = await load_node({
										...opts,
										node: error_node,
										stuff: node_loaded.stuff,
										prerender_enabled: is_prerender_enabled(options2, error_node, state),
										is_leaf: false,
										is_error: true,
										status,
										error: error2
									});
									if (error_loaded.loaded.error) {
										continue;
									}
									page_config = get_page_config(error_node.module, options2);
									branch = branch.slice(0, j + 1).concat(error_loaded);
									break ssr;
								} catch (err) {
									const e = coalesce_to_error(err);
									options2.handle_error(e, request);
									continue;
								}
							}
						}
						return with_cookies(
							await respond_with_error({
								request,
								options: options2,
								state,
								$session,
								status,
								error: error2
							}),
							set_cookie_headers
						);
					}
				}
				if (loaded && loaded.loaded.stuff) {
					stuff = {
						...stuff,
						...loaded.loaded.stuff
					};
				}
			}
		}
		try {
			return with_cookies(
				await render_response({
					...opts,
					page_config,
					status,
					error: error2,
					branch: branch.filter(Boolean)
				}),
				set_cookie_headers
			);
		} catch (err) {
			const error3 = coalesce_to_error(err);
			options2.handle_error(error3, request);
			return with_cookies(
				await respond_with_error({
					...opts,
					status: 500,
					error: error3
				}),
				set_cookie_headers
			);
		}
	}
	function get_page_config(leaf, options2) {
		return {
			ssr: 'ssr' in leaf ? !!leaf.ssr : options2.ssr,
			router: 'router' in leaf ? !!leaf.router : options2.router,
			hydrate: 'hydrate' in leaf ? !!leaf.hydrate : options2.hydrate
		};
	}
	function with_cookies(response, set_cookie_headers) {
		if (set_cookie_headers.length) {
			response.headers['set-cookie'] = set_cookie_headers;
		}
		return response;
	}
	async function render_page(request, route, match, options2, state) {
		if (state.initiator === route) {
			return {
				status: 404,
				headers: {},
				body: `Not found: ${request.path}`
			};
		}
		const params = route.params(match);
		const page = {
			host: request.host,
			path: request.path,
			query: request.query,
			params
		};
		const $session = await options2.hooks.getSession(request);
		const response = await respond$1({
			request,
			options: options2,
			state,
			$session,
			route,
			page
		});
		if (response) {
			return response;
		}
		if (state.fetched) {
			return {
				status: 500,
				headers: {},
				body: `Bad request in load function: failed to fetch ${state.fetched}`
			};
		}
	}
	function read_only_form_data() {
		const map = new Map();
		return {
			append(key2, value) {
				if (map.has(key2)) {
					(map.get(key2) || []).push(value);
				} else {
					map.set(key2, [value]);
				}
			},
			data: new ReadOnlyFormData(map)
		};
	}
	function parse_body(raw, headers) {
		if (!raw) return raw;
		const content_type = headers['content-type'];
		const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
		const text = () => new TextDecoder(headers['content-encoding'] || 'utf-8').decode(raw);
		switch (type) {
			case 'text/plain':
				return text();
			case 'application/json':
				return JSON.parse(text());
			case 'application/x-www-form-urlencoded':
				return get_urlencoded(text());
			case 'multipart/form-data': {
				const boundary = directives.find((directive) => directive.startsWith('boundary='));
				if (!boundary) throw new Error('Missing boundary');
				return get_multipart(text(), boundary.slice('boundary='.length));
			}
			default:
				return raw;
		}
	}
	function get_urlencoded(text) {
		const { data, append } = read_only_form_data();
		text
			.replace(/\+/g, ' ')
			.split('&')
			.forEach((str) => {
				const [key2, value] = str.split('=');
				append(decodeURIComponent(key2), decodeURIComponent(value));
			});
		return data;
	}
	function get_multipart(text, boundary) {
		const parts = text.split(`--${boundary}`);
		if (parts[0] !== '' || parts[parts.length - 1].trim() !== '--') {
			throw new Error('Malformed form data');
		}
		const { data, append } = read_only_form_data();
		parts.slice(1, -1).forEach((part) => {
			const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
			if (!match) {
				throw new Error('Malformed form data');
			}
			const raw_headers = match[1];
			const body = match[2].trim();
			let key2;
			const headers = {};
			raw_headers.split('\r\n').forEach((str) => {
				const [raw_header, ...raw_directives] = str.split('; ');
				let [name, value] = raw_header.split(': ');
				name = name.toLowerCase();
				headers[name] = value;
				const directives = {};
				raw_directives.forEach((raw_directive) => {
					const [name2, value2] = raw_directive.split('=');
					directives[name2] = JSON.parse(value2);
				});
				if (name === 'content-disposition') {
					if (value !== 'form-data') throw new Error('Malformed form data');
					if (directives.filename) {
						throw new Error('File upload is not yet implemented');
					}
					if (directives.name) {
						key2 = directives.name;
					}
				}
			});
			if (!key2) throw new Error('Malformed form data');
			append(key2, body);
		});
		return data;
	}
	async function respond(incoming, options2, state = {}) {
		if (incoming.path !== '/' && options2.trailing_slash !== 'ignore') {
			const has_trailing_slash = incoming.path.endsWith('/');
			if (
				(has_trailing_slash && options2.trailing_slash === 'never') ||
				(!has_trailing_slash &&
					options2.trailing_slash === 'always' &&
					!(incoming.path.split('/').pop() || '').includes('.'))
			) {
				const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + '/';
				const q = incoming.query.toString();
				return {
					status: 301,
					headers: {
						location: options2.paths.base + path + (q ? `?${q}` : '')
					}
				};
			}
		}
		const headers = lowercase_keys(incoming.headers);
		const request = {
			...incoming,
			headers,
			body: parse_body(incoming.rawBody, headers),
			params: {},
			locals: {}
		};
		try {
			return await options2.hooks.handle({
				request,
				resolve: async (request2) => {
					if (state.prerender && state.prerender.fallback) {
						return await render_response({
							options: options2,
							$session: await options2.hooks.getSession(request2),
							page_config: { ssr: false, router: true, hydrate: true },
							status: 200,
							branch: []
						});
					}
					const decoded = decodeURI(request2.path);
					for (const route of options2.manifest.routes) {
						const match = route.pattern.exec(decoded);
						if (!match) continue;
						const response =
							route.type === 'endpoint'
								? await render_endpoint(request2, route, match)
								: await render_page(request2, route, match, options2, state);
						if (response) {
							if (response.status === 200) {
								const cache_control = get_single_valued_header(response.headers, 'cache-control');
								if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
									const etag = `"${hash(response.body || '')}"`;
									if (request2.headers['if-none-match'] === etag) {
										return {
											status: 304,
											headers: {}
										};
									}
									response.headers['etag'] = etag;
								}
							}
							return response;
						}
					}
					const $session = await options2.hooks.getSession(request2);
					return await respond_with_error({
						request: request2,
						options: options2,
						state,
						$session,
						status: 404,
						error: new Error(`Not found: ${request2.path}`)
					});
				}
			});
		} catch (err) {
			const e = coalesce_to_error(err);
			options2.handle_error(e, request);
			return {
				status: 500,
				headers: {},
				body: options2.dev ? e.stack : e.message
			};
		}
	}
	function noop() {}
	function is_promise(value) {
		return value && typeof value === 'object' && typeof value.then === 'function';
	}
	function run(fn) {
		return fn();
	}
	function blank_object() {
		return Object.create(null);
	}
	function run_all(fns) {
		fns.forEach(run);
	}
	function compute_rest_props(props, keys) {
		const rest = {};
		keys = new Set(keys);
		for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
		return rest;
	}
	function custom_event(type, detail, bubbles = false) {
		const e = document.createEvent('CustomEvent');
		e.initCustomEvent(type, bubbles, false, detail);
		return e;
	}
	function set_current_component(component) {
		current_component = component;
	}
	function get_current_component() {
		if (!current_component) throw new Error('Function called outside component initialization');
		return current_component;
	}
	function createEventDispatcher() {
		const component = get_current_component();
		return (type, detail) => {
			const callbacks = component.$$.callbacks[type];
			if (callbacks) {
				const event = custom_event(type, detail);
				callbacks.slice().forEach((fn) => {
					fn.call(component, event);
				});
			}
		};
	}
	function setContext(key2, context) {
		get_current_component().$$.context.set(key2, context);
	}
	function getContext(key2) {
		return get_current_component().$$.context.get(key2);
	}
	function escape(html) {
		return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
	}
	function each(items, fn) {
		let str = '';
		for (let i = 0; i < items.length; i += 1) {
			str += fn(items[i], i);
		}
		return str;
	}
	function validate_component(component, name) {
		if (!component || !component.$$render) {
			if (name === 'svelte:component') name += ' this={...}';
			throw new Error(
				`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`
			);
		}
		return component;
	}
	function create_ssr_component(fn) {
		function $$render(result, props, bindings, slots, context) {
			const parent_component = current_component;
			const $$ = {
				on_destroy,
				context: new Map(context || (parent_component ? parent_component.$$.context : [])),
				on_mount: [],
				before_update: [],
				after_update: [],
				callbacks: blank_object()
			};
			set_current_component({ $$ });
			const html = fn(result, props, bindings, slots);
			set_current_component(parent_component);
			return html;
		}
		return {
			render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
				on_destroy = [];
				const result = { title: '', head: '', css: new Set() };
				const html = $$render(result, props, {}, $$slots, context);
				run_all(on_destroy);
				return {
					html,
					css: {
						code: Array.from(result.css)
							.map((css2) => css2.code)
							.join('\n'),
						map: null
					},
					head: result.title + result.head
				};
			},
			$$render
		};
	}
	function add_attribute(name, value, boolean) {
		if (value == null || (boolean && !value)) return '';
		return ` ${name}${
			value === true
				? ''
				: `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`
		}`;
	}
	function afterUpdate() {}
	function set_paths(paths) {
		base = paths.base;
		assets = paths.assets || base;
	}
	function set_prerendering(value) {}
	function init(settings = default_settings) {
		set_paths(settings.paths);
		set_prerendering(settings.prerendering || false);
		const hooks = get_hooks(user_hooks);
		options = {
			amp: false,
			dev: false,
			entry: {
				file: assets + '/_app/start-676f41ec.js',
				css: [assets + '/_app/assets/start-61d1577b.css'],
				js: [assets + '/_app/start-676f41ec.js', assets + '/_app/chunks/vendor-ee965c0a.js']
			},
			fetched: void 0,
			floc: false,
			get_component_path: (id) => assets + '/_app/' + entry_lookup[id],
			get_stack: (error2) => String(error2),
			handle_error: (error2, request) => {
				hooks.handleError({ error: error2, request });
				error2.stack = options.get_stack(error2);
			},
			hooks,
			hydrate: true,
			initiator: void 0,
			load_component,
			manifest,
			paths: settings.paths,
			prerender: true,
			read: settings.read,
			root: Root,
			service_worker: null,
			router: true,
			ssr: true,
			target: '#svelte',
			template,
			trailing_slash: 'never'
		};
	}
	async function load_component(file) {
		const { entry, css: css2, js, styles } = metadata_lookup[file];
		return {
			module: await module_lookup[file](),
			entry: assets + '/_app/' + entry,
			css: css2.map((dep) => assets + '/_app/' + dep),
			js: js.map((dep) => assets + '/_app/' + dep),
			styles
		};
	}
	function render(request, { prerender } = {}) {
		const host = request.headers['host'];
		return respond({ ...request, host }, options, { prerender });
	}
	var __accessCheck,
		__privateGet,
		__privateAdd,
		__privateSet,
		_map,
		chars,
		unsafeChars,
		reserved,
		escaped$1,
		objectProtoOwnPropertyNames,
		subscriber_queue,
		escape_json_string_in_html_dict,
		escape_html_attr_dict,
		s$1,
		s,
		absolute,
		ReadOnlyFormData,
		current_component,
		escaped,
		missing_component,
		on_destroy,
		css,
		Root,
		base,
		assets,
		user_hooks,
		template,
		options,
		default_settings,
		empty,
		manifest,
		get_hooks,
		module_lookup,
		metadata_lookup;
	var init_app_f96727fd = __esm({
		'.svelte-kit/output/server/chunks/app-f96727fd.js'() {
			__accessCheck = (obj, member, msg) => {
				if (!member.has(obj)) throw TypeError('Cannot ' + msg);
			};
			__privateGet = (obj, member, getter) => {
				__accessCheck(obj, member, 'read from private field');
				return getter ? getter.call(obj) : member.get(obj);
			};
			__privateAdd = (obj, member, value) => {
				if (member.has(obj)) throw TypeError('Cannot add the same private member more than once');
				member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
			};
			__privateSet = (obj, member, value, setter) => {
				__accessCheck(obj, member, 'write to private field');
				setter ? setter.call(obj, value) : member.set(obj, value);
				return value;
			};
			chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
			unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
			reserved =
				/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
			escaped$1 = {
				'<': '\\u003C',
				'>': '\\u003E',
				'/': '\\u002F',
				'\\': '\\\\',
				'\b': '\\b',
				'\f': '\\f',
				'\n': '\\n',
				'\r': '\\r',
				'	': '\\t',
				'\0': '\\0',
				'\u2028': '\\u2028',
				'\u2029': '\\u2029'
			};
			objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
			Promise.resolve();
			subscriber_queue = [];
			escape_json_string_in_html_dict = {
				'"': '\\"',
				'<': '\\u003C',
				'>': '\\u003E',
				'/': '\\u002F',
				'\\': '\\\\',
				'\b': '\\b',
				'\f': '\\f',
				'\n': '\\n',
				'\r': '\\r',
				'	': '\\t',
				'\0': '\\0',
				'\u2028': '\\u2028',
				'\u2029': '\\u2029'
			};
			escape_html_attr_dict = {
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;'
			};
			s$1 = JSON.stringify;
			s = JSON.stringify;
			absolute = /^([a-z]+:)?\/?\//;
			ReadOnlyFormData = class {
				constructor(map) {
					__privateAdd(this, _map, void 0);
					__privateSet(this, _map, map);
				}
				get(key2) {
					const value = __privateGet(this, _map).get(key2);
					return value && value[0];
				}
				getAll(key2) {
					return __privateGet(this, _map).get(key2);
				}
				has(key2) {
					return __privateGet(this, _map).has(key2);
				}
				*[Symbol.iterator]() {
					for (const [key2, value] of __privateGet(this, _map)) {
						for (let i = 0; i < value.length; i += 1) {
							yield [key2, value[i]];
						}
					}
				}
				*entries() {
					for (const [key2, value] of __privateGet(this, _map)) {
						for (let i = 0; i < value.length; i += 1) {
							yield [key2, value[i]];
						}
					}
				}
				*keys() {
					for (const [key2] of __privateGet(this, _map)) yield key2;
				}
				*values() {
					for (const [, value] of __privateGet(this, _map)) {
						for (let i = 0; i < value.length; i += 1) {
							yield value[i];
						}
					}
				}
			};
			_map = new WeakMap();
			Promise.resolve();
			escaped = {
				'"': '&quot;',
				"'": '&#39;',
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;'
			};
			missing_component = {
				$$render: () => ''
			};
			css = {
				code: '#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}',
				map: null
			};
			Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
				let { stores } = $$props;
				let { page } = $$props;
				let { components } = $$props;
				let { props_0 = null } = $$props;
				let { props_1 = null } = $$props;
				let { props_2 = null } = $$props;
				setContext('__svelte__', stores);
				afterUpdate(stores.page.notify);
				if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
					$$bindings.stores(stores);
				if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
				if ($$props.components === void 0 && $$bindings.components && components !== void 0)
					$$bindings.components(components);
				if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
					$$bindings.props_0(props_0);
				if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
					$$bindings.props_1(props_1);
				if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
					$$bindings.props_2(props_2);
				$$result.css.add(css);
				{
					stores.page.set(page);
				}
				return `


${validate_component(components[0] || missing_component, 'svelte:component').$$render(
	$$result,
	Object.assign(props_0 || {}),
	{},
	{
		default: () =>
			`${
				components[1]
					? `${validate_component(components[1] || missing_component, 'svelte:component').$$render(
							$$result,
							Object.assign(props_1 || {}),
							{},
							{
								default: () =>
									`${
										components[2]
											? `${validate_component(
													components[2] || missing_component,
													'svelte:component'
											  ).$$render($$result, Object.assign(props_2 || {}), {}, {})}`
											: ``
									}`
							}
					  )}`
					: ``
			}`
	}
)}

${``}`;
			});
			base = '';
			assets = '';
			user_hooks = /* @__PURE__ */ Object.freeze({
				__proto__: null,
				[Symbol.toStringTag]: 'Module'
			});
			template = ({ head, body }) =>
				'<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' +
				head +
				'\n	</head>\n	<body>\n		<div id="svelte">' +
				body +
				'</div>\n	</body>\n</html>\n';
			options = null;
			default_settings = { paths: { base: '', assets: '' } };
			empty = () => ({});
			manifest = {
				assets: [{ file: 'favicon.png', size: 1571, type: 'image/png' }],
				layout: '.svelte-kit/build/components/layout.svelte',
				error: '.svelte-kit/build/components/error.svelte',
				routes: [
					{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ['.svelte-kit/build/components/layout.svelte', 'src/routes/index.svelte'],
						b: ['.svelte-kit/build/components/error.svelte']
					}
				]
			};
			get_hooks = (hooks) => ({
				getSession: hooks.getSession || (() => ({})),
				handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
				handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
				externalFetch: hooks.externalFetch || fetch
			});
			module_lookup = {
				'.svelte-kit/build/components/layout.svelte': () =>
					Promise.resolve().then(() => (init_layout_84a7d8b4(), layout_84a7d8b4_exports)),
				'.svelte-kit/build/components/error.svelte': () =>
					Promise.resolve().then(() => (init_error_85466862(), error_85466862_exports)),
				'src/routes/index.svelte': () =>
					Promise.resolve().then(() => (init_index_c0b20ccf(), index_c0b20ccf_exports))
			};
			metadata_lookup = {
				'.svelte-kit/build/components/layout.svelte': {
					entry: 'layout.svelte-9b276872.js',
					css: [],
					js: ['layout.svelte-9b276872.js', 'chunks/vendor-ee965c0a.js'],
					styles: []
				},
				'.svelte-kit/build/components/error.svelte': {
					entry: 'error.svelte-409a1b85.js',
					css: [],
					js: ['error.svelte-409a1b85.js', 'chunks/vendor-ee965c0a.js'],
					styles: []
				},
				'src/routes/index.svelte': {
					entry: 'pages/index.svelte-36d588d1.js',
					css: [],
					js: ['pages/index.svelte-36d588d1.js', 'chunks/vendor-ee965c0a.js'],
					styles: []
				}
			};
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/mime/Mime.js
	var require_Mime = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/mime/Mime.js'(exports, module) {
			'use strict';
			function Mime() {
				this._types = Object.create(null);
				this._extensions = Object.create(null);
				for (let i = 0; i < arguments.length; i++) {
					this.define(arguments[i]);
				}
				this.define = this.define.bind(this);
				this.getType = this.getType.bind(this);
				this.getExtension = this.getExtension.bind(this);
			}
			Mime.prototype.define = function (typeMap, force) {
				for (let type in typeMap) {
					let extensions = typeMap[type].map(function (t) {
						return t.toLowerCase();
					});
					type = type.toLowerCase();
					for (let i = 0; i < extensions.length; i++) {
						const ext = extensions[i];
						if (ext[0] === '*') {
							continue;
						}
						if (!force && ext in this._types) {
							throw new Error(
								'Attempt to change mapping for "' +
									ext +
									'" extension from "' +
									this._types[ext] +
									'" to "' +
									type +
									'". Pass `force=true` to allow this, otherwise remove "' +
									ext +
									'" from the list of extensions for "' +
									type +
									'".'
							);
						}
						this._types[ext] = type;
					}
					if (force || !this._extensions[type]) {
						const ext = extensions[0];
						this._extensions[type] = ext[0] !== '*' ? ext : ext.substr(1);
					}
				}
			};
			Mime.prototype.getType = function (path) {
				path = String(path);
				let last = path.replace(/^.*[/\\]/, '').toLowerCase();
				let ext = last.replace(/^.*\./, '').toLowerCase();
				let hasPath = last.length < path.length;
				let hasDot = ext.length < last.length - 1;
				return ((hasDot || !hasPath) && this._types[ext]) || null;
			};
			Mime.prototype.getExtension = function (type) {
				type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
				return (type && this._extensions[type.toLowerCase()]) || null;
			};
			module.exports = Mime;
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js
	var require_standard = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js'(exports, module) {
			module.exports = {
				'application/andrew-inset': ['ez'],
				'application/applixware': ['aw'],
				'application/atom+xml': ['atom'],
				'application/atomcat+xml': ['atomcat'],
				'application/atomdeleted+xml': ['atomdeleted'],
				'application/atomsvc+xml': ['atomsvc'],
				'application/atsc-dwd+xml': ['dwd'],
				'application/atsc-held+xml': ['held'],
				'application/atsc-rsat+xml': ['rsat'],
				'application/bdoc': ['bdoc'],
				'application/calendar+xml': ['xcs'],
				'application/ccxml+xml': ['ccxml'],
				'application/cdfx+xml': ['cdfx'],
				'application/cdmi-capability': ['cdmia'],
				'application/cdmi-container': ['cdmic'],
				'application/cdmi-domain': ['cdmid'],
				'application/cdmi-object': ['cdmio'],
				'application/cdmi-queue': ['cdmiq'],
				'application/cu-seeme': ['cu'],
				'application/dash+xml': ['mpd'],
				'application/davmount+xml': ['davmount'],
				'application/docbook+xml': ['dbk'],
				'application/dssc+der': ['dssc'],
				'application/dssc+xml': ['xdssc'],
				'application/ecmascript': ['es', 'ecma'],
				'application/emma+xml': ['emma'],
				'application/emotionml+xml': ['emotionml'],
				'application/epub+zip': ['epub'],
				'application/exi': ['exi'],
				'application/express': ['exp'],
				'application/fdt+xml': ['fdt'],
				'application/font-tdpfr': ['pfr'],
				'application/geo+json': ['geojson'],
				'application/gml+xml': ['gml'],
				'application/gpx+xml': ['gpx'],
				'application/gxf': ['gxf'],
				'application/gzip': ['gz'],
				'application/hjson': ['hjson'],
				'application/hyperstudio': ['stk'],
				'application/inkml+xml': ['ink', 'inkml'],
				'application/ipfix': ['ipfix'],
				'application/its+xml': ['its'],
				'application/java-archive': ['jar', 'war', 'ear'],
				'application/java-serialized-object': ['ser'],
				'application/java-vm': ['class'],
				'application/javascript': ['js', 'mjs'],
				'application/json': ['json', 'map'],
				'application/json5': ['json5'],
				'application/jsonml+json': ['jsonml'],
				'application/ld+json': ['jsonld'],
				'application/lgr+xml': ['lgr'],
				'application/lost+xml': ['lostxml'],
				'application/mac-binhex40': ['hqx'],
				'application/mac-compactpro': ['cpt'],
				'application/mads+xml': ['mads'],
				'application/manifest+json': ['webmanifest'],
				'application/marc': ['mrc'],
				'application/marcxml+xml': ['mrcx'],
				'application/mathematica': ['ma', 'nb', 'mb'],
				'application/mathml+xml': ['mathml'],
				'application/mbox': ['mbox'],
				'application/mediaservercontrol+xml': ['mscml'],
				'application/metalink+xml': ['metalink'],
				'application/metalink4+xml': ['meta4'],
				'application/mets+xml': ['mets'],
				'application/mmt-aei+xml': ['maei'],
				'application/mmt-usd+xml': ['musd'],
				'application/mods+xml': ['mods'],
				'application/mp21': ['m21', 'mp21'],
				'application/mp4': ['mp4s', 'm4p'],
				'application/msword': ['doc', 'dot'],
				'application/mxf': ['mxf'],
				'application/n-quads': ['nq'],
				'application/n-triples': ['nt'],
				'application/node': ['cjs'],
				'application/octet-stream': [
					'bin',
					'dms',
					'lrf',
					'mar',
					'so',
					'dist',
					'distz',
					'pkg',
					'bpk',
					'dump',
					'elc',
					'deploy',
					'exe',
					'dll',
					'deb',
					'dmg',
					'iso',
					'img',
					'msi',
					'msp',
					'msm',
					'buffer'
				],
				'application/oda': ['oda'],
				'application/oebps-package+xml': ['opf'],
				'application/ogg': ['ogx'],
				'application/omdoc+xml': ['omdoc'],
				'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
				'application/oxps': ['oxps'],
				'application/p2p-overlay+xml': ['relo'],
				'application/patch-ops-error+xml': ['xer'],
				'application/pdf': ['pdf'],
				'application/pgp-encrypted': ['pgp'],
				'application/pgp-signature': ['asc', 'sig'],
				'application/pics-rules': ['prf'],
				'application/pkcs10': ['p10'],
				'application/pkcs7-mime': ['p7m', 'p7c'],
				'application/pkcs7-signature': ['p7s'],
				'application/pkcs8': ['p8'],
				'application/pkix-attr-cert': ['ac'],
				'application/pkix-cert': ['cer'],
				'application/pkix-crl': ['crl'],
				'application/pkix-pkipath': ['pkipath'],
				'application/pkixcmp': ['pki'],
				'application/pls+xml': ['pls'],
				'application/postscript': ['ai', 'eps', 'ps'],
				'application/provenance+xml': ['provx'],
				'application/pskc+xml': ['pskcxml'],
				'application/raml+yaml': ['raml'],
				'application/rdf+xml': ['rdf', 'owl'],
				'application/reginfo+xml': ['rif'],
				'application/relax-ng-compact-syntax': ['rnc'],
				'application/resource-lists+xml': ['rl'],
				'application/resource-lists-diff+xml': ['rld'],
				'application/rls-services+xml': ['rs'],
				'application/route-apd+xml': ['rapd'],
				'application/route-s-tsid+xml': ['sls'],
				'application/route-usd+xml': ['rusd'],
				'application/rpki-ghostbusters': ['gbr'],
				'application/rpki-manifest': ['mft'],
				'application/rpki-roa': ['roa'],
				'application/rsd+xml': ['rsd'],
				'application/rss+xml': ['rss'],
				'application/rtf': ['rtf'],
				'application/sbml+xml': ['sbml'],
				'application/scvp-cv-request': ['scq'],
				'application/scvp-cv-response': ['scs'],
				'application/scvp-vp-request': ['spq'],
				'application/scvp-vp-response': ['spp'],
				'application/sdp': ['sdp'],
				'application/senml+xml': ['senmlx'],
				'application/sensml+xml': ['sensmlx'],
				'application/set-payment-initiation': ['setpay'],
				'application/set-registration-initiation': ['setreg'],
				'application/shf+xml': ['shf'],
				'application/sieve': ['siv', 'sieve'],
				'application/smil+xml': ['smi', 'smil'],
				'application/sparql-query': ['rq'],
				'application/sparql-results+xml': ['srx'],
				'application/srgs': ['gram'],
				'application/srgs+xml': ['grxml'],
				'application/sru+xml': ['sru'],
				'application/ssdl+xml': ['ssdl'],
				'application/ssml+xml': ['ssml'],
				'application/swid+xml': ['swidtag'],
				'application/tei+xml': ['tei', 'teicorpus'],
				'application/thraud+xml': ['tfi'],
				'application/timestamped-data': ['tsd'],
				'application/toml': ['toml'],
				'application/trig': ['trig'],
				'application/ttml+xml': ['ttml'],
				'application/ubjson': ['ubj'],
				'application/urc-ressheet+xml': ['rsheet'],
				'application/urc-targetdesc+xml': ['td'],
				'application/voicexml+xml': ['vxml'],
				'application/wasm': ['wasm'],
				'application/widget': ['wgt'],
				'application/winhlp': ['hlp'],
				'application/wsdl+xml': ['wsdl'],
				'application/wspolicy+xml': ['wspolicy'],
				'application/xaml+xml': ['xaml'],
				'application/xcap-att+xml': ['xav'],
				'application/xcap-caps+xml': ['xca'],
				'application/xcap-diff+xml': ['xdf'],
				'application/xcap-el+xml': ['xel'],
				'application/xcap-ns+xml': ['xns'],
				'application/xenc+xml': ['xenc'],
				'application/xhtml+xml': ['xhtml', 'xht'],
				'application/xliff+xml': ['xlf'],
				'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
				'application/xml-dtd': ['dtd'],
				'application/xop+xml': ['xop'],
				'application/xproc+xml': ['xpl'],
				'application/xslt+xml': ['*xsl', 'xslt'],
				'application/xspf+xml': ['xspf'],
				'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
				'application/yang': ['yang'],
				'application/yin+xml': ['yin'],
				'application/zip': ['zip'],
				'audio/3gpp': ['*3gpp'],
				'audio/adpcm': ['adp'],
				'audio/amr': ['amr'],
				'audio/basic': ['au', 'snd'],
				'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
				'audio/mobile-xmf': ['mxmf'],
				'audio/mp3': ['*mp3'],
				'audio/mp4': ['m4a', 'mp4a'],
				'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
				'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
				'audio/s3m': ['s3m'],
				'audio/silk': ['sil'],
				'audio/wav': ['wav'],
				'audio/wave': ['*wav'],
				'audio/webm': ['weba'],
				'audio/xm': ['xm'],
				'font/collection': ['ttc'],
				'font/otf': ['otf'],
				'font/ttf': ['ttf'],
				'font/woff': ['woff'],
				'font/woff2': ['woff2'],
				'image/aces': ['exr'],
				'image/apng': ['apng'],
				'image/avif': ['avif'],
				'image/bmp': ['bmp'],
				'image/cgm': ['cgm'],
				'image/dicom-rle': ['drle'],
				'image/emf': ['emf'],
				'image/fits': ['fits'],
				'image/g3fax': ['g3'],
				'image/gif': ['gif'],
				'image/heic': ['heic'],
				'image/heic-sequence': ['heics'],
				'image/heif': ['heif'],
				'image/heif-sequence': ['heifs'],
				'image/hej2k': ['hej2'],
				'image/hsj2': ['hsj2'],
				'image/ief': ['ief'],
				'image/jls': ['jls'],
				'image/jp2': ['jp2', 'jpg2'],
				'image/jpeg': ['jpeg', 'jpg', 'jpe'],
				'image/jph': ['jph'],
				'image/jphc': ['jhc'],
				'image/jpm': ['jpm'],
				'image/jpx': ['jpx', 'jpf'],
				'image/jxr': ['jxr'],
				'image/jxra': ['jxra'],
				'image/jxrs': ['jxrs'],
				'image/jxs': ['jxs'],
				'image/jxsc': ['jxsc'],
				'image/jxsi': ['jxsi'],
				'image/jxss': ['jxss'],
				'image/ktx': ['ktx'],
				'image/ktx2': ['ktx2'],
				'image/png': ['png'],
				'image/sgi': ['sgi'],
				'image/svg+xml': ['svg', 'svgz'],
				'image/t38': ['t38'],
				'image/tiff': ['tif', 'tiff'],
				'image/tiff-fx': ['tfx'],
				'image/webp': ['webp'],
				'image/wmf': ['wmf'],
				'message/disposition-notification': ['disposition-notification'],
				'message/global': ['u8msg'],
				'message/global-delivery-status': ['u8dsn'],
				'message/global-disposition-notification': ['u8mdn'],
				'message/global-headers': ['u8hdr'],
				'message/rfc822': ['eml', 'mime'],
				'model/3mf': ['3mf'],
				'model/gltf+json': ['gltf'],
				'model/gltf-binary': ['glb'],
				'model/iges': ['igs', 'iges'],
				'model/mesh': ['msh', 'mesh', 'silo'],
				'model/mtl': ['mtl'],
				'model/obj': ['obj'],
				'model/step+xml': ['stpx'],
				'model/step+zip': ['stpz'],
				'model/step-xml+zip': ['stpxz'],
				'model/stl': ['stl'],
				'model/vrml': ['wrl', 'vrml'],
				'model/x3d+binary': ['*x3db', 'x3dbz'],
				'model/x3d+fastinfoset': ['x3db'],
				'model/x3d+vrml': ['*x3dv', 'x3dvz'],
				'model/x3d+xml': ['x3d', 'x3dz'],
				'model/x3d-vrml': ['x3dv'],
				'text/cache-manifest': ['appcache', 'manifest'],
				'text/calendar': ['ics', 'ifb'],
				'text/coffeescript': ['coffee', 'litcoffee'],
				'text/css': ['css'],
				'text/csv': ['csv'],
				'text/html': ['html', 'htm', 'shtml'],
				'text/jade': ['jade'],
				'text/jsx': ['jsx'],
				'text/less': ['less'],
				'text/markdown': ['markdown', 'md'],
				'text/mathml': ['mml'],
				'text/mdx': ['mdx'],
				'text/n3': ['n3'],
				'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
				'text/richtext': ['rtx'],
				'text/rtf': ['*rtf'],
				'text/sgml': ['sgml', 'sgm'],
				'text/shex': ['shex'],
				'text/slim': ['slim', 'slm'],
				'text/spdx': ['spdx'],
				'text/stylus': ['stylus', 'styl'],
				'text/tab-separated-values': ['tsv'],
				'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
				'text/turtle': ['ttl'],
				'text/uri-list': ['uri', 'uris', 'urls'],
				'text/vcard': ['vcard'],
				'text/vtt': ['vtt'],
				'text/xml': ['*xml'],
				'text/yaml': ['yaml', 'yml'],
				'video/3gpp': ['3gp', '3gpp'],
				'video/3gpp2': ['3g2'],
				'video/h261': ['h261'],
				'video/h263': ['h263'],
				'video/h264': ['h264'],
				'video/iso.segment': ['m4s'],
				'video/jpeg': ['jpgv'],
				'video/jpm': ['*jpm', 'jpgm'],
				'video/mj2': ['mj2', 'mjp2'],
				'video/mp2t': ['ts'],
				'video/mp4': ['mp4', 'mp4v', 'mpg4'],
				'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
				'video/ogg': ['ogv'],
				'video/quicktime': ['qt', 'mov'],
				'video/webm': ['webm']
			};
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/mime/types/other.js
	var require_other = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/mime/types/other.js'(exports, module) {
			module.exports = {
				'application/prs.cww': ['cww'],
				'application/vnd.1000minds.decision-model+xml': ['1km'],
				'application/vnd.3gpp.pic-bw-large': ['plb'],
				'application/vnd.3gpp.pic-bw-small': ['psb'],
				'application/vnd.3gpp.pic-bw-var': ['pvb'],
				'application/vnd.3gpp2.tcap': ['tcap'],
				'application/vnd.3m.post-it-notes': ['pwn'],
				'application/vnd.accpac.simply.aso': ['aso'],
				'application/vnd.accpac.simply.imp': ['imp'],
				'application/vnd.acucobol': ['acu'],
				'application/vnd.acucorp': ['atc', 'acutc'],
				'application/vnd.adobe.air-application-installer-package+zip': ['air'],
				'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
				'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
				'application/vnd.adobe.xdp+xml': ['xdp'],
				'application/vnd.adobe.xfdf': ['xfdf'],
				'application/vnd.ahead.space': ['ahead'],
				'application/vnd.airzip.filesecure.azf': ['azf'],
				'application/vnd.airzip.filesecure.azs': ['azs'],
				'application/vnd.amazon.ebook': ['azw'],
				'application/vnd.americandynamics.acc': ['acc'],
				'application/vnd.amiga.ami': ['ami'],
				'application/vnd.android.package-archive': ['apk'],
				'application/vnd.anser-web-certificate-issue-initiation': ['cii'],
				'application/vnd.anser-web-funds-transfer-initiation': ['fti'],
				'application/vnd.antix.game-component': ['atx'],
				'application/vnd.apple.installer+xml': ['mpkg'],
				'application/vnd.apple.keynote': ['key'],
				'application/vnd.apple.mpegurl': ['m3u8'],
				'application/vnd.apple.numbers': ['numbers'],
				'application/vnd.apple.pages': ['pages'],
				'application/vnd.apple.pkpass': ['pkpass'],
				'application/vnd.aristanetworks.swi': ['swi'],
				'application/vnd.astraea-software.iota': ['iota'],
				'application/vnd.audiograph': ['aep'],
				'application/vnd.balsamiq.bmml+xml': ['bmml'],
				'application/vnd.blueice.multipass': ['mpm'],
				'application/vnd.bmi': ['bmi'],
				'application/vnd.businessobjects': ['rep'],
				'application/vnd.chemdraw+xml': ['cdxml'],
				'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
				'application/vnd.cinderella': ['cdy'],
				'application/vnd.citationstyles.style+xml': ['csl'],
				'application/vnd.claymore': ['cla'],
				'application/vnd.cloanto.rp9': ['rp9'],
				'application/vnd.clonk.c4group': ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
				'application/vnd.cluetrust.cartomobile-config': ['c11amc'],
				'application/vnd.cluetrust.cartomobile-config-pkg': ['c11amz'],
				'application/vnd.commonspace': ['csp'],
				'application/vnd.contact.cmsg': ['cdbcmsg'],
				'application/vnd.cosmocaller': ['cmc'],
				'application/vnd.crick.clicker': ['clkx'],
				'application/vnd.crick.clicker.keyboard': ['clkk'],
				'application/vnd.crick.clicker.palette': ['clkp'],
				'application/vnd.crick.clicker.template': ['clkt'],
				'application/vnd.crick.clicker.wordbank': ['clkw'],
				'application/vnd.criticaltools.wbs+xml': ['wbs'],
				'application/vnd.ctc-posml': ['pml'],
				'application/vnd.cups-ppd': ['ppd'],
				'application/vnd.curl.car': ['car'],
				'application/vnd.curl.pcurl': ['pcurl'],
				'application/vnd.dart': ['dart'],
				'application/vnd.data-vision.rdz': ['rdz'],
				'application/vnd.dbf': ['dbf'],
				'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
				'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
				'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
				'application/vnd.dece.zip': ['uvz', 'uvvz'],
				'application/vnd.denovo.fcselayout-link': ['fe_launch'],
				'application/vnd.dna': ['dna'],
				'application/vnd.dolby.mlp': ['mlp'],
				'application/vnd.dpgraph': ['dpg'],
				'application/vnd.dreamfactory': ['dfac'],
				'application/vnd.ds-keypoint': ['kpxx'],
				'application/vnd.dvb.ait': ['ait'],
				'application/vnd.dvb.service': ['svc'],
				'application/vnd.dynageo': ['geo'],
				'application/vnd.ecowin.chart': ['mag'],
				'application/vnd.enliven': ['nml'],
				'application/vnd.epson.esf': ['esf'],
				'application/vnd.epson.msf': ['msf'],
				'application/vnd.epson.quickanime': ['qam'],
				'application/vnd.epson.salt': ['slt'],
				'application/vnd.epson.ssf': ['ssf'],
				'application/vnd.eszigno3+xml': ['es3', 'et3'],
				'application/vnd.ezpix-album': ['ez2'],
				'application/vnd.ezpix-package': ['ez3'],
				'application/vnd.fdf': ['fdf'],
				'application/vnd.fdsn.mseed': ['mseed'],
				'application/vnd.fdsn.seed': ['seed', 'dataless'],
				'application/vnd.flographit': ['gph'],
				'application/vnd.fluxtime.clip': ['ftc'],
				'application/vnd.framemaker': ['fm', 'frame', 'maker', 'book'],
				'application/vnd.frogans.fnc': ['fnc'],
				'application/vnd.frogans.ltf': ['ltf'],
				'application/vnd.fsc.weblaunch': ['fsc'],
				'application/vnd.fujitsu.oasys': ['oas'],
				'application/vnd.fujitsu.oasys2': ['oa2'],
				'application/vnd.fujitsu.oasys3': ['oa3'],
				'application/vnd.fujitsu.oasysgp': ['fg5'],
				'application/vnd.fujitsu.oasysprs': ['bh2'],
				'application/vnd.fujixerox.ddd': ['ddd'],
				'application/vnd.fujixerox.docuworks': ['xdw'],
				'application/vnd.fujixerox.docuworks.binder': ['xbd'],
				'application/vnd.fuzzysheet': ['fzs'],
				'application/vnd.genomatix.tuxedo': ['txd'],
				'application/vnd.geogebra.file': ['ggb'],
				'application/vnd.geogebra.tool': ['ggt'],
				'application/vnd.geometry-explorer': ['gex', 'gre'],
				'application/vnd.geonext': ['gxt'],
				'application/vnd.geoplan': ['g2w'],
				'application/vnd.geospace': ['g3w'],
				'application/vnd.gmx': ['gmx'],
				'application/vnd.google-apps.document': ['gdoc'],
				'application/vnd.google-apps.presentation': ['gslides'],
				'application/vnd.google-apps.spreadsheet': ['gsheet'],
				'application/vnd.google-earth.kml+xml': ['kml'],
				'application/vnd.google-earth.kmz': ['kmz'],
				'application/vnd.grafeq': ['gqf', 'gqs'],
				'application/vnd.groove-account': ['gac'],
				'application/vnd.groove-help': ['ghf'],
				'application/vnd.groove-identity-message': ['gim'],
				'application/vnd.groove-injector': ['grv'],
				'application/vnd.groove-tool-message': ['gtm'],
				'application/vnd.groove-tool-template': ['tpl'],
				'application/vnd.groove-vcard': ['vcg'],
				'application/vnd.hal+xml': ['hal'],
				'application/vnd.handheld-entertainment+xml': ['zmm'],
				'application/vnd.hbci': ['hbci'],
				'application/vnd.hhe.lesson-player': ['les'],
				'application/vnd.hp-hpgl': ['hpgl'],
				'application/vnd.hp-hpid': ['hpid'],
				'application/vnd.hp-hps': ['hps'],
				'application/vnd.hp-jlyt': ['jlt'],
				'application/vnd.hp-pcl': ['pcl'],
				'application/vnd.hp-pclxl': ['pclxl'],
				'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
				'application/vnd.ibm.minipay': ['mpy'],
				'application/vnd.ibm.modcap': ['afp', 'listafp', 'list3820'],
				'application/vnd.ibm.rights-management': ['irm'],
				'application/vnd.ibm.secure-container': ['sc'],
				'application/vnd.iccprofile': ['icc', 'icm'],
				'application/vnd.igloader': ['igl'],
				'application/vnd.immervision-ivp': ['ivp'],
				'application/vnd.immervision-ivu': ['ivu'],
				'application/vnd.insors.igm': ['igm'],
				'application/vnd.intercon.formnet': ['xpw', 'xpx'],
				'application/vnd.intergeo': ['i2g'],
				'application/vnd.intu.qbo': ['qbo'],
				'application/vnd.intu.qfx': ['qfx'],
				'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
				'application/vnd.irepository.package+xml': ['irp'],
				'application/vnd.is-xpr': ['xpr'],
				'application/vnd.isac.fcs': ['fcs'],
				'application/vnd.jam': ['jam'],
				'application/vnd.jcp.javame.midlet-rms': ['rms'],
				'application/vnd.jisp': ['jisp'],
				'application/vnd.joost.joda-archive': ['joda'],
				'application/vnd.kahootz': ['ktz', 'ktr'],
				'application/vnd.kde.karbon': ['karbon'],
				'application/vnd.kde.kchart': ['chrt'],
				'application/vnd.kde.kformula': ['kfo'],
				'application/vnd.kde.kivio': ['flw'],
				'application/vnd.kde.kontour': ['kon'],
				'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
				'application/vnd.kde.kspread': ['ksp'],
				'application/vnd.kde.kword': ['kwd', 'kwt'],
				'application/vnd.kenameaapp': ['htke'],
				'application/vnd.kidspiration': ['kia'],
				'application/vnd.kinar': ['kne', 'knp'],
				'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
				'application/vnd.kodak-descriptor': ['sse'],
				'application/vnd.las.las+xml': ['lasxml'],
				'application/vnd.llamagraphics.life-balance.desktop': ['lbd'],
				'application/vnd.llamagraphics.life-balance.exchange+xml': ['lbe'],
				'application/vnd.lotus-1-2-3': ['123'],
				'application/vnd.lotus-approach': ['apr'],
				'application/vnd.lotus-freelance': ['pre'],
				'application/vnd.lotus-notes': ['nsf'],
				'application/vnd.lotus-organizer': ['org'],
				'application/vnd.lotus-screencam': ['scm'],
				'application/vnd.lotus-wordpro': ['lwp'],
				'application/vnd.macports.portpkg': ['portpkg'],
				'application/vnd.mapbox-vector-tile': ['mvt'],
				'application/vnd.mcd': ['mcd'],
				'application/vnd.medcalcdata': ['mc1'],
				'application/vnd.mediastation.cdkey': ['cdkey'],
				'application/vnd.mfer': ['mwf'],
				'application/vnd.mfmp': ['mfm'],
				'application/vnd.micrografx.flo': ['flo'],
				'application/vnd.micrografx.igx': ['igx'],
				'application/vnd.mif': ['mif'],
				'application/vnd.mobius.daf': ['daf'],
				'application/vnd.mobius.dis': ['dis'],
				'application/vnd.mobius.mbk': ['mbk'],
				'application/vnd.mobius.mqy': ['mqy'],
				'application/vnd.mobius.msl': ['msl'],
				'application/vnd.mobius.plc': ['plc'],
				'application/vnd.mobius.txf': ['txf'],
				'application/vnd.mophun.application': ['mpn'],
				'application/vnd.mophun.certificate': ['mpc'],
				'application/vnd.mozilla.xul+xml': ['xul'],
				'application/vnd.ms-artgalry': ['cil'],
				'application/vnd.ms-cab-compressed': ['cab'],
				'application/vnd.ms-excel': ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
				'application/vnd.ms-excel.addin.macroenabled.12': ['xlam'],
				'application/vnd.ms-excel.sheet.binary.macroenabled.12': ['xlsb'],
				'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
				'application/vnd.ms-excel.template.macroenabled.12': ['xltm'],
				'application/vnd.ms-fontobject': ['eot'],
				'application/vnd.ms-htmlhelp': ['chm'],
				'application/vnd.ms-ims': ['ims'],
				'application/vnd.ms-lrm': ['lrm'],
				'application/vnd.ms-officetheme': ['thmx'],
				'application/vnd.ms-outlook': ['msg'],
				'application/vnd.ms-pki.seccat': ['cat'],
				'application/vnd.ms-pki.stl': ['*stl'],
				'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
				'application/vnd.ms-powerpoint.addin.macroenabled.12': ['ppam'],
				'application/vnd.ms-powerpoint.presentation.macroenabled.12': ['pptm'],
				'application/vnd.ms-powerpoint.slide.macroenabled.12': ['sldm'],
				'application/vnd.ms-powerpoint.slideshow.macroenabled.12': ['ppsm'],
				'application/vnd.ms-powerpoint.template.macroenabled.12': ['potm'],
				'application/vnd.ms-project': ['mpp', 'mpt'],
				'application/vnd.ms-word.document.macroenabled.12': ['docm'],
				'application/vnd.ms-word.template.macroenabled.12': ['dotm'],
				'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
				'application/vnd.ms-wpl': ['wpl'],
				'application/vnd.ms-xpsdocument': ['xps'],
				'application/vnd.mseq': ['mseq'],
				'application/vnd.musician': ['mus'],
				'application/vnd.muvee.style': ['msty'],
				'application/vnd.mynfc': ['taglet'],
				'application/vnd.neurolanguage.nlu': ['nlu'],
				'application/vnd.nitf': ['ntf', 'nitf'],
				'application/vnd.noblenet-directory': ['nnd'],
				'application/vnd.noblenet-sealer': ['nns'],
				'application/vnd.noblenet-web': ['nnw'],
				'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
				'application/vnd.nokia.n-gage.data': ['ngdat'],
				'application/vnd.nokia.n-gage.symbian.install': ['n-gage'],
				'application/vnd.nokia.radio-preset': ['rpst'],
				'application/vnd.nokia.radio-presets': ['rpss'],
				'application/vnd.novadigm.edm': ['edm'],
				'application/vnd.novadigm.edx': ['edx'],
				'application/vnd.novadigm.ext': ['ext'],
				'application/vnd.oasis.opendocument.chart': ['odc'],
				'application/vnd.oasis.opendocument.chart-template': ['otc'],
				'application/vnd.oasis.opendocument.database': ['odb'],
				'application/vnd.oasis.opendocument.formula': ['odf'],
				'application/vnd.oasis.opendocument.formula-template': ['odft'],
				'application/vnd.oasis.opendocument.graphics': ['odg'],
				'application/vnd.oasis.opendocument.graphics-template': ['otg'],
				'application/vnd.oasis.opendocument.image': ['odi'],
				'application/vnd.oasis.opendocument.image-template': ['oti'],
				'application/vnd.oasis.opendocument.presentation': ['odp'],
				'application/vnd.oasis.opendocument.presentation-template': ['otp'],
				'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
				'application/vnd.oasis.opendocument.spreadsheet-template': ['ots'],
				'application/vnd.oasis.opendocument.text': ['odt'],
				'application/vnd.oasis.opendocument.text-master': ['odm'],
				'application/vnd.oasis.opendocument.text-template': ['ott'],
				'application/vnd.oasis.opendocument.text-web': ['oth'],
				'application/vnd.olpc-sugar': ['xo'],
				'application/vnd.oma.dd2+xml': ['dd2'],
				'application/vnd.openblox.game+xml': ['obgx'],
				'application/vnd.openofficeorg.extension': ['oxt'],
				'application/vnd.openstreetmap.data+xml': ['osm'],
				'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pptx'],
				'application/vnd.openxmlformats-officedocument.presentationml.slide': ['sldx'],
				'application/vnd.openxmlformats-officedocument.presentationml.slideshow': ['ppsx'],
				'application/vnd.openxmlformats-officedocument.presentationml.template': ['potx'],
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['xlsx'],
				'application/vnd.openxmlformats-officedocument.spreadsheetml.template': ['xltx'],
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
				'application/vnd.openxmlformats-officedocument.wordprocessingml.template': ['dotx'],
				'application/vnd.osgeo.mapguide.package': ['mgp'],
				'application/vnd.osgi.dp': ['dp'],
				'application/vnd.osgi.subsystem': ['esa'],
				'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
				'application/vnd.pawaafile': ['paw'],
				'application/vnd.pg.format': ['str'],
				'application/vnd.pg.osasli': ['ei6'],
				'application/vnd.picsel': ['efif'],
				'application/vnd.pmi.widget': ['wg'],
				'application/vnd.pocketlearn': ['plf'],
				'application/vnd.powerbuilder6': ['pbd'],
				'application/vnd.previewsystems.box': ['box'],
				'application/vnd.proteus.magazine': ['mgz'],
				'application/vnd.publishare-delta-tree': ['qps'],
				'application/vnd.pvi.ptid1': ['ptid'],
				'application/vnd.quark.quarkxpress': ['qxd', 'qxt', 'qwd', 'qwt', 'qxl', 'qxb'],
				'application/vnd.rar': ['rar'],
				'application/vnd.realvnc.bed': ['bed'],
				'application/vnd.recordare.musicxml': ['mxl'],
				'application/vnd.recordare.musicxml+xml': ['musicxml'],
				'application/vnd.rig.cryptonote': ['cryptonote'],
				'application/vnd.rim.cod': ['cod'],
				'application/vnd.rn-realmedia': ['rm'],
				'application/vnd.rn-realmedia-vbr': ['rmvb'],
				'application/vnd.route66.link66+xml': ['link66'],
				'application/vnd.sailingtracker.track': ['st'],
				'application/vnd.seemail': ['see'],
				'application/vnd.sema': ['sema'],
				'application/vnd.semd': ['semd'],
				'application/vnd.semf': ['semf'],
				'application/vnd.shana.informed.formdata': ['ifm'],
				'application/vnd.shana.informed.formtemplate': ['itp'],
				'application/vnd.shana.informed.interchange': ['iif'],
				'application/vnd.shana.informed.package': ['ipk'],
				'application/vnd.simtech-mindmapper': ['twd', 'twds'],
				'application/vnd.smaf': ['mmf'],
				'application/vnd.smart.teacher': ['teacher'],
				'application/vnd.software602.filler.form+xml': ['fo'],
				'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
				'application/vnd.spotfire.dxp': ['dxp'],
				'application/vnd.spotfire.sfs': ['sfs'],
				'application/vnd.stardivision.calc': ['sdc'],
				'application/vnd.stardivision.draw': ['sda'],
				'application/vnd.stardivision.impress': ['sdd'],
				'application/vnd.stardivision.math': ['smf'],
				'application/vnd.stardivision.writer': ['sdw', 'vor'],
				'application/vnd.stardivision.writer-global': ['sgl'],
				'application/vnd.stepmania.package': ['smzip'],
				'application/vnd.stepmania.stepchart': ['sm'],
				'application/vnd.sun.wadl+xml': ['wadl'],
				'application/vnd.sun.xml.calc': ['sxc'],
				'application/vnd.sun.xml.calc.template': ['stc'],
				'application/vnd.sun.xml.draw': ['sxd'],
				'application/vnd.sun.xml.draw.template': ['std'],
				'application/vnd.sun.xml.impress': ['sxi'],
				'application/vnd.sun.xml.impress.template': ['sti'],
				'application/vnd.sun.xml.math': ['sxm'],
				'application/vnd.sun.xml.writer': ['sxw'],
				'application/vnd.sun.xml.writer.global': ['sxg'],
				'application/vnd.sun.xml.writer.template': ['stw'],
				'application/vnd.sus-calendar': ['sus', 'susp'],
				'application/vnd.svd': ['svd'],
				'application/vnd.symbian.install': ['sis', 'sisx'],
				'application/vnd.syncml+xml': ['xsm'],
				'application/vnd.syncml.dm+wbxml': ['bdm'],
				'application/vnd.syncml.dm+xml': ['xdm'],
				'application/vnd.syncml.dmddf+xml': ['ddf'],
				'application/vnd.tao.intent-module-archive': ['tao'],
				'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
				'application/vnd.tmobile-livetv': ['tmo'],
				'application/vnd.trid.tpt': ['tpt'],
				'application/vnd.triscape.mxs': ['mxs'],
				'application/vnd.trueapp': ['tra'],
				'application/vnd.ufdl': ['ufd', 'ufdl'],
				'application/vnd.uiq.theme': ['utz'],
				'application/vnd.umajin': ['umj'],
				'application/vnd.unity': ['unityweb'],
				'application/vnd.uoml+xml': ['uoml'],
				'application/vnd.vcx': ['vcx'],
				'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
				'application/vnd.visionary': ['vis'],
				'application/vnd.vsf': ['vsf'],
				'application/vnd.wap.wbxml': ['wbxml'],
				'application/vnd.wap.wmlc': ['wmlc'],
				'application/vnd.wap.wmlscriptc': ['wmlsc'],
				'application/vnd.webturbo': ['wtb'],
				'application/vnd.wolfram.player': ['nbp'],
				'application/vnd.wordperfect': ['wpd'],
				'application/vnd.wqd': ['wqd'],
				'application/vnd.wt.stf': ['stf'],
				'application/vnd.xara': ['xar'],
				'application/vnd.xfdl': ['xfdl'],
				'application/vnd.yamaha.hv-dic': ['hvd'],
				'application/vnd.yamaha.hv-script': ['hvs'],
				'application/vnd.yamaha.hv-voice': ['hvp'],
				'application/vnd.yamaha.openscoreformat': ['osf'],
				'application/vnd.yamaha.openscoreformat.osfpvg+xml': ['osfpvg'],
				'application/vnd.yamaha.smaf-audio': ['saf'],
				'application/vnd.yamaha.smaf-phrase': ['spf'],
				'application/vnd.yellowriver-custom-menu': ['cmp'],
				'application/vnd.zul': ['zir', 'zirz'],
				'application/vnd.zzazz.deck+xml': ['zaz'],
				'application/x-7z-compressed': ['7z'],
				'application/x-abiword': ['abw'],
				'application/x-ace-compressed': ['ace'],
				'application/x-apple-diskimage': ['*dmg'],
				'application/x-arj': ['arj'],
				'application/x-authorware-bin': ['aab', 'x32', 'u32', 'vox'],
				'application/x-authorware-map': ['aam'],
				'application/x-authorware-seg': ['aas'],
				'application/x-bcpio': ['bcpio'],
				'application/x-bdoc': ['*bdoc'],
				'application/x-bittorrent': ['torrent'],
				'application/x-blorb': ['blb', 'blorb'],
				'application/x-bzip': ['bz'],
				'application/x-bzip2': ['bz2', 'boz'],
				'application/x-cbr': ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
				'application/x-cdlink': ['vcd'],
				'application/x-cfs-compressed': ['cfs'],
				'application/x-chat': ['chat'],
				'application/x-chess-pgn': ['pgn'],
				'application/x-chrome-extension': ['crx'],
				'application/x-cocoa': ['cco'],
				'application/x-conference': ['nsc'],
				'application/x-cpio': ['cpio'],
				'application/x-csh': ['csh'],
				'application/x-debian-package': ['*deb', 'udeb'],
				'application/x-dgc-compressed': ['dgc'],
				'application/x-director': ['dir', 'dcr', 'dxr', 'cst', 'cct', 'cxt', 'w3d', 'fgd', 'swa'],
				'application/x-doom': ['wad'],
				'application/x-dtbncx+xml': ['ncx'],
				'application/x-dtbook+xml': ['dtb'],
				'application/x-dtbresource+xml': ['res'],
				'application/x-dvi': ['dvi'],
				'application/x-envoy': ['evy'],
				'application/x-eva': ['eva'],
				'application/x-font-bdf': ['bdf'],
				'application/x-font-ghostscript': ['gsf'],
				'application/x-font-linux-psf': ['psf'],
				'application/x-font-pcf': ['pcf'],
				'application/x-font-snf': ['snf'],
				'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
				'application/x-freearc': ['arc'],
				'application/x-futuresplash': ['spl'],
				'application/x-gca-compressed': ['gca'],
				'application/x-glulx': ['ulx'],
				'application/x-gnumeric': ['gnumeric'],
				'application/x-gramps-xml': ['gramps'],
				'application/x-gtar': ['gtar'],
				'application/x-hdf': ['hdf'],
				'application/x-httpd-php': ['php'],
				'application/x-install-instructions': ['install'],
				'application/x-iso9660-image': ['*iso'],
				'application/x-iwork-keynote-sffkey': ['*key'],
				'application/x-iwork-numbers-sffnumbers': ['*numbers'],
				'application/x-iwork-pages-sffpages': ['*pages'],
				'application/x-java-archive-diff': ['jardiff'],
				'application/x-java-jnlp-file': ['jnlp'],
				'application/x-keepass2': ['kdbx'],
				'application/x-latex': ['latex'],
				'application/x-lua-bytecode': ['luac'],
				'application/x-lzh-compressed': ['lzh', 'lha'],
				'application/x-makeself': ['run'],
				'application/x-mie': ['mie'],
				'application/x-mobipocket-ebook': ['prc', 'mobi'],
				'application/x-ms-application': ['application'],
				'application/x-ms-shortcut': ['lnk'],
				'application/x-ms-wmd': ['wmd'],
				'application/x-ms-wmz': ['wmz'],
				'application/x-ms-xbap': ['xbap'],
				'application/x-msaccess': ['mdb'],
				'application/x-msbinder': ['obd'],
				'application/x-mscardfile': ['crd'],
				'application/x-msclip': ['clp'],
				'application/x-msdos-program': ['*exe'],
				'application/x-msdownload': ['*exe', '*dll', 'com', 'bat', '*msi'],
				'application/x-msmediaview': ['mvb', 'm13', 'm14'],
				'application/x-msmetafile': ['*wmf', '*wmz', '*emf', 'emz'],
				'application/x-msmoney': ['mny'],
				'application/x-mspublisher': ['pub'],
				'application/x-msschedule': ['scd'],
				'application/x-msterminal': ['trm'],
				'application/x-mswrite': ['wri'],
				'application/x-netcdf': ['nc', 'cdf'],
				'application/x-ns-proxy-autoconfig': ['pac'],
				'application/x-nzb': ['nzb'],
				'application/x-perl': ['pl', 'pm'],
				'application/x-pilot': ['*prc', '*pdb'],
				'application/x-pkcs12': ['p12', 'pfx'],
				'application/x-pkcs7-certificates': ['p7b', 'spc'],
				'application/x-pkcs7-certreqresp': ['p7r'],
				'application/x-rar-compressed': ['*rar'],
				'application/x-redhat-package-manager': ['rpm'],
				'application/x-research-info-systems': ['ris'],
				'application/x-sea': ['sea'],
				'application/x-sh': ['sh'],
				'application/x-shar': ['shar'],
				'application/x-shockwave-flash': ['swf'],
				'application/x-silverlight-app': ['xap'],
				'application/x-sql': ['sql'],
				'application/x-stuffit': ['sit'],
				'application/x-stuffitx': ['sitx'],
				'application/x-subrip': ['srt'],
				'application/x-sv4cpio': ['sv4cpio'],
				'application/x-sv4crc': ['sv4crc'],
				'application/x-t3vm-image': ['t3'],
				'application/x-tads': ['gam'],
				'application/x-tar': ['tar'],
				'application/x-tcl': ['tcl', 'tk'],
				'application/x-tex': ['tex'],
				'application/x-tex-tfm': ['tfm'],
				'application/x-texinfo': ['texinfo', 'texi'],
				'application/x-tgif': ['*obj'],
				'application/x-ustar': ['ustar'],
				'application/x-virtualbox-hdd': ['hdd'],
				'application/x-virtualbox-ova': ['ova'],
				'application/x-virtualbox-ovf': ['ovf'],
				'application/x-virtualbox-vbox': ['vbox'],
				'application/x-virtualbox-vbox-extpack': ['vbox-extpack'],
				'application/x-virtualbox-vdi': ['vdi'],
				'application/x-virtualbox-vhd': ['vhd'],
				'application/x-virtualbox-vmdk': ['vmdk'],
				'application/x-wais-source': ['src'],
				'application/x-web-app-manifest+json': ['webapp'],
				'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
				'application/x-xfig': ['fig'],
				'application/x-xliff+xml': ['*xlf'],
				'application/x-xpinstall': ['xpi'],
				'application/x-xz': ['xz'],
				'application/x-zmachine': ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
				'audio/vnd.dece.audio': ['uva', 'uvva'],
				'audio/vnd.digital-winds': ['eol'],
				'audio/vnd.dra': ['dra'],
				'audio/vnd.dts': ['dts'],
				'audio/vnd.dts.hd': ['dtshd'],
				'audio/vnd.lucent.voice': ['lvp'],
				'audio/vnd.ms-playready.media.pya': ['pya'],
				'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
				'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
				'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
				'audio/vnd.rip': ['rip'],
				'audio/x-aac': ['aac'],
				'audio/x-aiff': ['aif', 'aiff', 'aifc'],
				'audio/x-caf': ['caf'],
				'audio/x-flac': ['flac'],
				'audio/x-m4a': ['*m4a'],
				'audio/x-matroska': ['mka'],
				'audio/x-mpegurl': ['m3u'],
				'audio/x-ms-wax': ['wax'],
				'audio/x-ms-wma': ['wma'],
				'audio/x-pn-realaudio': ['ram', 'ra'],
				'audio/x-pn-realaudio-plugin': ['rmp'],
				'audio/x-realaudio': ['*ra'],
				'audio/x-wav': ['*wav'],
				'chemical/x-cdx': ['cdx'],
				'chemical/x-cif': ['cif'],
				'chemical/x-cmdf': ['cmdf'],
				'chemical/x-cml': ['cml'],
				'chemical/x-csml': ['csml'],
				'chemical/x-xyz': ['xyz'],
				'image/prs.btif': ['btif'],
				'image/prs.pti': ['pti'],
				'image/vnd.adobe.photoshop': ['psd'],
				'image/vnd.airzip.accelerator.azv': ['azv'],
				'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
				'image/vnd.djvu': ['djvu', 'djv'],
				'image/vnd.dvb.subtitle': ['*sub'],
				'image/vnd.dwg': ['dwg'],
				'image/vnd.dxf': ['dxf'],
				'image/vnd.fastbidsheet': ['fbs'],
				'image/vnd.fpx': ['fpx'],
				'image/vnd.fst': ['fst'],
				'image/vnd.fujixerox.edmics-mmr': ['mmr'],
				'image/vnd.fujixerox.edmics-rlc': ['rlc'],
				'image/vnd.microsoft.icon': ['ico'],
				'image/vnd.ms-dds': ['dds'],
				'image/vnd.ms-modi': ['mdi'],
				'image/vnd.ms-photo': ['wdp'],
				'image/vnd.net-fpx': ['npx'],
				'image/vnd.pco.b16': ['b16'],
				'image/vnd.tencent.tap': ['tap'],
				'image/vnd.valve.source.texture': ['vtf'],
				'image/vnd.wap.wbmp': ['wbmp'],
				'image/vnd.xiff': ['xif'],
				'image/vnd.zbrush.pcx': ['pcx'],
				'image/x-3ds': ['3ds'],
				'image/x-cmu-raster': ['ras'],
				'image/x-cmx': ['cmx'],
				'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
				'image/x-icon': ['*ico'],
				'image/x-jng': ['jng'],
				'image/x-mrsid-image': ['sid'],
				'image/x-ms-bmp': ['*bmp'],
				'image/x-pcx': ['*pcx'],
				'image/x-pict': ['pic', 'pct'],
				'image/x-portable-anymap': ['pnm'],
				'image/x-portable-bitmap': ['pbm'],
				'image/x-portable-graymap': ['pgm'],
				'image/x-portable-pixmap': ['ppm'],
				'image/x-rgb': ['rgb'],
				'image/x-tga': ['tga'],
				'image/x-xbitmap': ['xbm'],
				'image/x-xpixmap': ['xpm'],
				'image/x-xwindowdump': ['xwd'],
				'message/vnd.wfa.wsc': ['wsc'],
				'model/vnd.collada+xml': ['dae'],
				'model/vnd.dwf': ['dwf'],
				'model/vnd.gdl': ['gdl'],
				'model/vnd.gtw': ['gtw'],
				'model/vnd.mts': ['mts'],
				'model/vnd.opengex': ['ogex'],
				'model/vnd.parasolid.transmit.binary': ['x_b'],
				'model/vnd.parasolid.transmit.text': ['x_t'],
				'model/vnd.sap.vds': ['vds'],
				'model/vnd.usdz+zip': ['usdz'],
				'model/vnd.valve.source.compiled-map': ['bsp'],
				'model/vnd.vtu': ['vtu'],
				'text/prs.lines.tag': ['dsc'],
				'text/vnd.curl': ['curl'],
				'text/vnd.curl.dcurl': ['dcurl'],
				'text/vnd.curl.mcurl': ['mcurl'],
				'text/vnd.curl.scurl': ['scurl'],
				'text/vnd.dvb.subtitle': ['sub'],
				'text/vnd.fly': ['fly'],
				'text/vnd.fmi.flexstor': ['flx'],
				'text/vnd.graphviz': ['gv'],
				'text/vnd.in3d.3dml': ['3dml'],
				'text/vnd.in3d.spot': ['spot'],
				'text/vnd.sun.j2me.app-descriptor': ['jad'],
				'text/vnd.wap.wml': ['wml'],
				'text/vnd.wap.wmlscript': ['wmls'],
				'text/x-asm': ['s', 'asm'],
				'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
				'text/x-component': ['htc'],
				'text/x-fortran': ['f', 'for', 'f77', 'f90'],
				'text/x-handlebars-template': ['hbs'],
				'text/x-java-source': ['java'],
				'text/x-lua': ['lua'],
				'text/x-markdown': ['mkd'],
				'text/x-nfo': ['nfo'],
				'text/x-opml': ['opml'],
				'text/x-org': ['*org'],
				'text/x-pascal': ['p', 'pas'],
				'text/x-processing': ['pde'],
				'text/x-sass': ['sass'],
				'text/x-scss': ['scss'],
				'text/x-setext': ['etx'],
				'text/x-sfv': ['sfv'],
				'text/x-suse-ymp': ['ymp'],
				'text/x-uuencode': ['uu'],
				'text/x-vcalendar': ['vcs'],
				'text/x-vcard': ['vcf'],
				'video/vnd.dece.hd': ['uvh', 'uvvh'],
				'video/vnd.dece.mobile': ['uvm', 'uvvm'],
				'video/vnd.dece.pd': ['uvp', 'uvvp'],
				'video/vnd.dece.sd': ['uvs', 'uvvs'],
				'video/vnd.dece.video': ['uvv', 'uvvv'],
				'video/vnd.dvb.file': ['dvb'],
				'video/vnd.fvt': ['fvt'],
				'video/vnd.mpegurl': ['mxu', 'm4u'],
				'video/vnd.ms-playready.media.pyv': ['pyv'],
				'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
				'video/vnd.vivo': ['viv'],
				'video/x-f4v': ['f4v'],
				'video/x-fli': ['fli'],
				'video/x-flv': ['flv'],
				'video/x-m4v': ['m4v'],
				'video/x-matroska': ['mkv', 'mk3d', 'mks'],
				'video/x-mng': ['mng'],
				'video/x-ms-asf': ['asf', 'asx'],
				'video/x-ms-vob': ['vob'],
				'video/x-ms-wm': ['wm'],
				'video/x-ms-wmv': ['wmv'],
				'video/x-ms-wmx': ['wmx'],
				'video/x-ms-wvx': ['wvx'],
				'video/x-msvideo': ['avi'],
				'video/x-sgi-movie': ['movie'],
				'video/x-smv': ['smv'],
				'x-conference/x-cooltalk': ['ice']
			};
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/mime/index.js
	var require_mime = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/mime/index.js'(exports, module) {
			'use strict';
			var Mime = require_Mime();
			module.exports = new Mime(require_standard(), require_other());
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js
	var require_types = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js'(
			exports
		) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.InternalError =
				exports.NotFoundError =
				exports.MethodNotAllowedError =
				exports.KVError =
					void 0;
			var KVError = class extends Error {
				constructor(message, status = 500) {
					super(message);
					Object.setPrototypeOf(this, new.target.prototype);
					this.name = KVError.name;
					this.status = status;
				}
			};
			exports.KVError = KVError;
			var MethodNotAllowedError = class extends KVError {
				constructor(message = `Not a valid request method`, status = 405) {
					super(message, status);
				}
			};
			exports.MethodNotAllowedError = MethodNotAllowedError;
			var NotFoundError2 = class extends KVError {
				constructor(message = `Not Found`, status = 404) {
					super(message, status);
				}
			};
			exports.NotFoundError = NotFoundError2;
			var InternalError = class extends KVError {
				constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
					super(message, status);
				}
			};
			exports.InternalError = InternalError;
		}
	});

	// .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js
	var require_dist = __commonJS({
		'.svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js'(
			exports
		) {
			'use strict';
			var __awaiter =
				(exports && exports.__awaiter) ||
				function (thisArg, _arguments, P, generator) {
					function adopt(value) {
						return value instanceof P
							? value
							: new P(function (resolve2) {
									resolve2(value);
							  });
					}
					return new (P || (P = Promise))(function (resolve2, reject) {
						function fulfilled(value) {
							try {
								step(generator.next(value));
							} catch (e) {
								reject(e);
							}
						}
						function rejected(value) {
							try {
								step(generator['throw'](value));
							} catch (e) {
								reject(e);
							}
						}
						function step(result) {
							result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
						}
						step((generator = generator.apply(thisArg, _arguments || [])).next());
					});
				};
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.InternalError =
				exports.NotFoundError =
				exports.MethodNotAllowedError =
				exports.serveSinglePageApp =
				exports.mapRequestToAsset =
				exports.getAssetFromKV =
					void 0;
			var mime = require_mime();
			var types_1 = require_types();
			Object.defineProperty(exports, 'MethodNotAllowedError', {
				enumerable: true,
				get: function () {
					return types_1.MethodNotAllowedError;
				}
			});
			Object.defineProperty(exports, 'NotFoundError', {
				enumerable: true,
				get: function () {
					return types_1.NotFoundError;
				}
			});
			Object.defineProperty(exports, 'InternalError', {
				enumerable: true,
				get: function () {
					return types_1.InternalError;
				}
			});
			var defaultCacheControl = {
				browserTTL: null,
				edgeTTL: 2 * 60 * 60 * 24,
				bypassCache: false
			};
			var parseStringAsObject = (maybeString) =>
				typeof maybeString === 'string' ? JSON.parse(maybeString) : maybeString;
			var getAssetFromKVDefaultOptions = {
				ASSET_NAMESPACE: typeof __STATIC_CONTENT !== 'undefined' ? __STATIC_CONTENT : void 0,
				ASSET_MANIFEST:
					typeof __STATIC_CONTENT_MANIFEST !== 'undefined'
						? parseStringAsObject(__STATIC_CONTENT_MANIFEST)
						: void 0,
				cacheControl: defaultCacheControl,
				defaultMimeType: 'text/plain',
				defaultDocument: 'index.html'
			};
			function assignOptions(options2) {
				return Object.assign({}, getAssetFromKVDefaultOptions, options2);
			}
			var mapRequestToAsset = (request, options2) => {
				options2 = assignOptions(options2);
				const parsedUrl = new URL(request.url);
				let pathname = parsedUrl.pathname;
				if (pathname.endsWith('/')) {
					pathname = pathname.concat(options2.defaultDocument);
				} else if (!mime.getType(pathname)) {
					pathname = pathname.concat('/' + options2.defaultDocument);
				}
				parsedUrl.pathname = pathname;
				return new Request(parsedUrl.toString(), request);
			};
			exports.mapRequestToAsset = mapRequestToAsset;
			function serveSinglePageApp(request, options2) {
				options2 = assignOptions(options2);
				request = mapRequestToAsset(request, options2);
				const parsedUrl = new URL(request.url);
				if (parsedUrl.pathname.endsWith('.html')) {
					return new Request(`${parsedUrl.origin}/${options2.defaultDocument}`, request);
				} else {
					return request;
				}
			}
			exports.serveSinglePageApp = serveSinglePageApp;
			var getAssetFromKV2 = (event, options2) =>
				__awaiter(void 0, void 0, void 0, function* () {
					options2 = assignOptions(options2);
					const request = event.request;
					const ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
					const ASSET_MANIFEST = parseStringAsObject(options2.ASSET_MANIFEST);
					if (typeof ASSET_NAMESPACE === 'undefined') {
						throw new types_1.InternalError(`there is no KV namespace bound to the script`);
					}
					const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, '');
					let pathIsEncoded = false;
					let requestKey;
					if (options2.mapRequestToAsset) {
						requestKey = options2.mapRequestToAsset(request);
					} else if (ASSET_MANIFEST[rawPathKey]) {
						requestKey = request;
					} else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
						pathIsEncoded = true;
						requestKey = request;
					} else {
						const mappedRequest = mapRequestToAsset(request);
						const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, '');
						if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
							pathIsEncoded = true;
							requestKey = mappedRequest;
						} else {
							requestKey = mapRequestToAsset(request, options2);
						}
					}
					const SUPPORTED_METHODS = ['GET', 'HEAD'];
					if (!SUPPORTED_METHODS.includes(requestKey.method)) {
						throw new types_1.MethodNotAllowedError(
							`${requestKey.method} is not a valid request method`
						);
					}
					const parsedUrl = new URL(requestKey.url);
					const pathname = pathIsEncoded
						? decodeURIComponent(parsedUrl.pathname)
						: parsedUrl.pathname;
					let pathKey = pathname.replace(/^\/+/, '');
					const cache = caches.default;
					let mimeType = mime.getType(pathKey) || options2.defaultMimeType;
					if (mimeType.startsWith('text') || mimeType === 'application/javascript') {
						mimeType += '; charset=utf-8';
					}
					let shouldEdgeCache = false;
					if (typeof ASSET_MANIFEST !== 'undefined') {
						if (ASSET_MANIFEST[pathKey]) {
							pathKey = ASSET_MANIFEST[pathKey];
							shouldEdgeCache = true;
						}
					}
					let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
					const evalCacheOpts = (() => {
						switch (typeof options2.cacheControl) {
							case 'function':
								return options2.cacheControl(request);
							case 'object':
								return options2.cacheControl;
							default:
								return defaultCacheControl;
						}
					})();
					const formatETag = (entityId = pathKey, validatorType = 'strong') => {
						if (!entityId) {
							return '';
						}
						switch (validatorType) {
							case 'weak':
								if (!entityId.startsWith('W/')) {
									return `W/${entityId}`;
								}
								return entityId;
							case 'strong':
								if (entityId.startsWith(`W/"`)) {
									entityId = entityId.replace('W/', '');
								}
								if (!entityId.endsWith(`"`)) {
									entityId = `"${entityId}"`;
								}
								return entityId;
							default:
								return '';
						}
					};
					options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
					if (
						options2.cacheControl.bypassCache ||
						options2.cacheControl.edgeTTL === null ||
						request.method == 'HEAD'
					) {
						shouldEdgeCache = false;
					}
					const shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === 'number';
					let response = null;
					if (shouldEdgeCache) {
						response = yield cache.match(cacheKey);
					}
					if (response) {
						if (response.status > 300 && response.status < 400) {
							if (response.body && 'cancel' in Object.getPrototypeOf(response.body)) {
								response.body.cancel();
								console.log(
									'Body exists and environment supports readable streams. Body cancelled'
								);
							} else {
								console.log('Environment doesnt support readable streams');
							}
							response = new Response(null, response);
						} else {
							let opts = {
								headers: new Headers(response.headers),
								status: 0,
								statusText: ''
							};
							opts.headers.set('cf-cache-status', 'HIT');
							if (response.status) {
								opts.status = response.status;
								opts.statusText = response.statusText;
							} else if (opts.headers.has('Content-Range')) {
								opts.status = 206;
								opts.statusText = 'Partial Content';
							} else {
								opts.status = 200;
								opts.statusText = 'OK';
							}
							response = new Response(response.body, opts);
						}
					} else {
						const body = yield ASSET_NAMESPACE.get(pathKey, 'arrayBuffer');
						if (body === null) {
							throw new types_1.NotFoundError(
								`could not find ${pathKey} in your content namespace`
							);
						}
						response = new Response(body);
						if (shouldEdgeCache) {
							response.headers.set('Accept-Ranges', 'bytes');
							response.headers.set('Content-Length', body.length);
							if (!response.headers.has('etag')) {
								response.headers.set('etag', formatETag(pathKey, 'strong'));
							}
							response.headers.set('Cache-Control', `max-age=${options2.cacheControl.edgeTTL}`);
							event.waitUntil(cache.put(cacheKey, response.clone()));
							response.headers.set('CF-Cache-Status', 'MISS');
						}
					}
					response.headers.set('Content-Type', mimeType);
					if (response.status === 304) {
						let etag = formatETag(response.headers.get('etag'), 'strong');
						let ifNoneMatch = cacheKey.headers.get('if-none-match');
						let proxyCacheStatus = response.headers.get('CF-Cache-Status');
						if (etag) {
							if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === 'MISS') {
								response.headers.set('CF-Cache-Status', 'EXPIRED');
							} else {
								response.headers.set('CF-Cache-Status', 'REVALIDATED');
							}
							response.headers.set('etag', formatETag(etag, 'weak'));
						}
					}
					if (shouldSetBrowserCache) {
						response.headers.set('Cache-Control', `max-age=${options2.cacheControl.browserTTL}`);
					} else {
						response.headers.delete('Cache-Control');
					}
					return response;
				});
			exports.getAssetFromKV = getAssetFromKV2;
		}
	});

	// .svelte-kit/output/server/app.js
	init_app_f96727fd();

	// .svelte-kit/cloudflare-workers/entry.js
	var import_kv_asset_handler = __toModule(require_dist());
	init();
	addEventListener('fetch', (event) => {
		event.respondWith(handle(event));
	});
	async function handle(event) {
		if (event.request.method == 'GET') {
			try {
				return await (0, import_kv_asset_handler.getAssetFromKV)(event);
			} catch (e) {
				if (!(e instanceof import_kv_asset_handler.NotFoundError)) {
					return new Response('Error loading static asset:' + (e.message || e.toString()), {
						status: 500
					});
				}
			}
		}
		const request = event.request;
		const request_url = new URL(request.url);
		try {
			const rendered = await render({
				host: request_url.host,
				path: request_url.pathname,
				query: request_url.searchParams,
				rawBody: await read(request),
				headers: Object.fromEntries(request.headers),
				method: request.method
			});
			if (rendered) {
				return new Response(rendered.body, {
					status: rendered.status,
					headers: makeHeaders(rendered.headers)
				});
			}
		} catch (e) {
			return new Response('Error rendering route:' + (e.message || e.toString()), { status: 500 });
		}
		return new Response({
			status: 404,
			statusText: 'Not Found'
		});
	}
	async function read(request) {
		return new Uint8Array(await request.arrayBuffer());
	}
	function makeHeaders(headers) {
		const result = new Headers();
		for (const header in headers) {
			const value = headers[header];
			if (typeof value === 'string') {
				result.set(header, value);
				continue;
			}
			for (const sub of value) {
				result.append(header, sub);
			}
		}
		return result;
	}
})();
