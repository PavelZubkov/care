"use strict";
var exports = void 0;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.node.ts
;
"use strict";
var $;
(function ($) {
    $mol_offline();
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node/node.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $mol_object2 {
        type;
        data;
        sub;
        baseUri;
        row;
        col;
        length;
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//mol/tree/tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static white = this.ansi(97, 39);
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static White = (str) => this.inverse(this.white(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));
//mol/term/color/color.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));
//mol/log3/log3.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//mol/env/env.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//mol/env/env.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//mol/exec/exec.node.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//mol/dom/context/context.node.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50% , calc( 54% + 44% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0% , calc( 50% - 30% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 0%, calc( 50% + 50% * var(--mol_theme_luma) ), .2 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 0%, 50%, .05 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 5% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 50% - 15% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 40% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//mol/window/window.node.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.node.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [-1]: '🔴',
                [-2]: '🟡',
                [-3]: '🟢',
                [-4]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor']
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor']
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right, compare) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!compare(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values(), $mol_compare_deep);
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys(), Object.is)
            && compare_iterator(left.values(), right.values(), $mol_compare_deep);
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const existen = $mol_wire_auto()?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static getter(task, keys) {
            const field = task.name + '()';
            if (keys) {
                return function $mol_wire_atom_get(host, args) {
                    let dict, key, fiber;
                    key = `${host?.[Symbol.toStringTag] ?? host}.${task.name}(${args.map(v => $mol_key(v)).join(',')})`;
                    dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
                    if (dict) {
                        const existen = dict.get(key);
                        if (existen)
                            return existen;
                    }
                    else {
                        dict = (host ?? task)[field] = new Map();
                    }
                    fiber = new $mol_wire_atom(key, task, host, args);
                    dict.set(key, fiber);
                    return fiber;
                };
            }
            else {
                return function $mol_wire_atom_get(host, args) {
                    const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
                    if (existen)
                        return existen;
                    const key = `${host?.[Symbol.toStringTag] ?? host}.${field}`;
                    const fiber = new $mol_wire_atom(key, task, host, args);
                    (host ?? task)[field] = fiber;
                    return fiber;
                };
            }
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            if (next !== prev) {
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                this.cache = next;
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { }
                }
                if (this.sub_from < this.data.length) {
                    if (!$mol_compare_deep(prev, next)) {
                        this.emit();
                    }
                }
            }
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_mem(keys) {
        const wrap = $mol_wire_mem_func(keys);
        return (host, field, descr) => {
            if (!descr)
                descr = Reflect.getOwnPropertyDescriptor(host, field);
            const orig = descr?.value ?? host[field];
            const sup = Reflect.getPrototypeOf(host);
            if (typeof sup[field] === 'function') {
                Object.defineProperty(orig, 'name', { value: sup[field].name });
            }
            const descr2 = {
                ...descr,
                value: wrap(orig)
            };
            Reflect.defineProperty(host, field, descr2);
            return descr2;
        };
    }
    $.$mol_wire_mem = $mol_wire_mem;
    function $mol_wire_mem_func(keys) {
        return (func) => {
            const persist = $mol_wire_atom.getter(func, keys);
            const wrapper = function (...args) {
                let atom = persist(this, args.slice(0, keys));
                if (args.length <= keys || args[keys] === undefined) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            };
            Object.defineProperty(wrapper, 'name', { value: func.name + ' ' });
            Object.assign(wrapper, { orig: func });
            return wrapper;
        };
    }
    $.$mol_wire_mem_func = $mol_wire_mem_func;
})($ || ($ = {}));
//mol/wire/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_mem(0);
    $.$mol_mem_key = $mol_wire_mem(1);
    $.$mol_mem_key2 = $mol_wire_mem(2);
    $.$mol_mem_key3 = $mol_wire_mem(3);
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is equired for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_shower = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    return node;
                if ((error_shower.get(error) ?? this) !== this)
                    return node;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_shower.set(error, this);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (owner?.host instanceof $mol_view) {
                const suffix = owner.task.name.trim();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.host.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.host.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            $mol_wire_fiber.sync();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$mol_theme.line, 'transparent'],
                width: 'thin',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $mol_theme.line,
                },
                border: {
                    radius: $mol_gap.round,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:nth-child(odd):not([mol_book2_placeholder]) {\n\tbackground-color: var(--mol_theme_card);\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $mol_after_frame(() => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const meta_size = 36;
    function $hyoo_crowd_chunk_pack(raw) {
        const data = $mol_charset_encode(JSON.stringify(raw.data));
        const pack = new Uint8Array(meta_size + data.length + (4 - data.length % 4));
        const pack2 = new Uint16Array(pack.buffer);
        const pack4 = new Uint32Array(pack.buffer);
        pack4[0] = raw.head;
        pack2[2] = raw.head / 2 ** 32;
        pack2[3] = raw.self;
        pack4[2] = raw.self / 2 ** 16;
        pack4[3] = raw.prev;
        pack2[8] = raw.prev / 2 ** 32;
        pack2[9] = raw.next;
        pack4[5] = raw.next / 2 ** 16;
        pack4[6] = raw.peer;
        pack2[14] = raw.peer / 2 ** 32;
        pack2[15] = data.length;
        pack4[8] = raw.time;
        pack.set(data, meta_size);
        return pack;
    }
    $.$hyoo_crowd_chunk_pack = $hyoo_crowd_chunk_pack;
    function $hyoo_crowd_chunk_unpack(pack) {
        const pack2 = new Uint16Array(pack.buffer, pack.byteOffset, pack.byteLength / 2);
        const pack4 = new Uint32Array(pack.buffer, pack.byteOffset, pack.byteLength / 4);
        const chunk = {
            head: pack4[0] + pack2[2] * 2 ** 32,
            self: pack2[3] + pack4[2] * 2 ** 16,
            prev: pack4[3] + pack2[8] * 2 ** 32,
            next: pack2[9] + pack4[5] * 2 ** 16,
            peer: pack4[6] + pack2[14] * 2 ** 32,
            time: pack4[8],
            data: JSON.parse($mol_charset_decode(new Uint8Array(pack.buffer, pack.byteOffset + meta_size, pack2[15]))),
        };
        return chunk;
    }
    $.$hyoo_crowd_chunk_unpack = $hyoo_crowd_chunk_unpack;
    function $hyoo_crowd_chunk_compare(left, right) {
        if (left.time > right.time)
            return 1;
        if (left.time < right.time)
            return -1;
        return left.peer - right.peer;
    }
    $.$hyoo_crowd_chunk_compare = $hyoo_crowd_chunk_compare;
})($ || ($ = {}));
//hyoo/crowd/chunk/chunk.ts
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//mol/db/response/response.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//mol/db/db.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//mol/db/store/store.ts
;
"use strict";
//mol/db/store/store_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//mol/db/index/index.ts
;
"use strict";
//mol/db/index/index_schema.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.indexedDB = $node['fake-indexeddb'];
})($ || ($ = {}));
//mol/db/db.node.ts
;
"use strict";
//mol/db/db_schema.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        now = 0;
        constructor(entries) {
            super(entries);
            if (entries) {
                for (const [peer, time] of entries) {
                    if (this.now < time)
                        this.now = time;
                }
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see(peer, time);
            }
        }
        see(peer, time) {
            if (this.now < time)
                this.now = time;
            const peer_time = this.get(peer);
            if (!peer_time || peer_time < time) {
                this.set(peer, time);
            }
            return time;
        }
        fresh(peer, time) {
            return time > (this.get(peer) ?? 0);
        }
        ahead(clock) {
            for (const [peer, time] of this.entries()) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        tick(peer) {
            return this.see(peer, Math.max(Date.now(), this.now + 1));
        }
        clear() {
            super.clear();
            this.now = 0;
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
})($ || ($ = {}));
//hyoo/crowd/clock/clock.ts
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//mol/hash/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: "ECDSA",
        hash: { name: "SHA-256" },
        namedCurve: 'P-256',
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $.crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 91;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('spki', serial, algorithm, true, ['verify']));
        }
        async serial() {
            return await crypto.subtle.exportKey('spki', this.native);
        }
        async verify(data, sign) {
            return await crypto.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size = 138;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('pkcs8', serial, algorithm, true, ['sign']));
        }
        async serial() {
            return await crypto.subtle.exportKey('pkcs8', this.native);
        }
        async sign(data) {
            return await crypto.subtle.sign(algorithm, this.native, data);
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
})($ || ($ = {}));
//mol/crypto/auditor/auditor.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//mol/base64/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        if (Buffer.isBuffer(str))
            return str.toString('base64');
        return Buffer.from(str).toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    $.$mol_base64_encode = $mol_base64_encode_node;
})($ || ($ = {}));
//mol/base64/encode/encode.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//mol/base64/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    $.$mol_base64_decode = $mol_base64_decode_node;
})($ || ($ = {}));
//mol/base64/decode/decode.node.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        for (const key in props) {
            if (typeof props[key] === 'string') {
                ;
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node {
        doc;
        head;
        constructor(doc, head) {
            this.doc = doc;
            this.head = head;
        }
        static for(doc, head = 0) {
            return new this(doc, head);
        }
        as(Node) {
            return new Node(this.doc, this.head);
        }
        chunks() {
            return this.doc.chunk_alive(this.head);
        }
        nodes(Node) {
            return this.chunks().map(chunk => new Node(this.doc, chunk.self));
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.as($hyoo_crowd_list).list()), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.nodes($hyoo_crowd_node)));
        }
    }
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//hyoo/crowd/node/node.tsx
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//mol/reconcile/reconcile.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const chunks = this.chunks();
            if (next === undefined) {
                return chunks.map(chunk => chunk.data);
            }
            else {
                this.insert(next, 0, chunks.length);
                return next;
            }
        }
        insert(next, from = this.chunks().length, to = from) {
            $mol_reconcile({
                prev: this.chunks(),
                from,
                to,
                next,
                equal: (next, prev) => prev.data === next,
                drop: (prev, lead) => this.doc.wipe(prev),
                insert: (next, lead) => this.doc.put(this.head, this.doc.id_new(), lead?.self ?? 0, next),
                update: (next, prev, lead) => this.doc.put(prev.head, prev.self, lead?.self ?? 0, next),
            });
        }
        move(from, to) {
            const chunks = this.chunks();
            const lead = to ? chunks[to - 1].self : 0;
            return this.doc.move(chunks[from], this.head, lead);
        }
        cut(seat) {
            return this.doc.wipe(this.chunks()[seat]);
        }
    }
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//hyoo/crowd/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            return new Node(this.doc, $mol_hash_string(key, this.head));
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//hyoo/crowd/struct/struct.ts
;
"use strict";
var $;
(function ($) {
    const desync = 60 * 60 * 1000;
    class $hyoo_crowd_doc {
        peer;
        constructor(peer = 0) {
            this.peer = peer;
            if (!peer)
                this.peer = this.id_new();
        }
        destructor() { }
        _clock = new $hyoo_crowd_clock;
        get clock() {
            this.pub.promote();
            return this._clock;
        }
        pub = new $mol_wire_pub;
        _chunk_all = new Map();
        _chunk_lists = new Map();
        _chunk_alive = new Map();
        size() {
            return this._chunk_all.size;
        }
        chunk(head, self) {
            return this._chunk_all.get(`${head}/${self}`) ?? null;
        }
        chunk_list(head) {
            let chunks = this._chunk_lists.get(head);
            if (!chunks)
                this._chunk_lists.set(head, chunks = Object.assign([], { dirty: false }));
            return chunks;
        }
        chunk_alive(head) {
            this.pub.promote();
            let chunks = this._chunk_alive.get(head);
            if (!chunks) {
                const all = this.chunk_list(head);
                if (all.dirty)
                    this.resort(head);
                chunks = all.filter(chunk => chunk.data !== null);
                this._chunk_alive.set(head, chunks);
            }
            return chunks;
        }
        root = new $hyoo_crowd_struct(this, 0);
        id_new() {
            return 1 + Math.floor(Math.random() * (2 ** (6 * 8) - 2));
        }
        fork(peer) {
            return new $hyoo_crowd_doc(peer).apply(this.delta());
        }
        delta(clock = new $hyoo_crowd_clock) {
            this.pub.promote();
            const delta = [];
            for (const chunk of this._chunk_all.values()) {
                const time = clock.get(chunk.peer);
                if (time && chunk.time <= time)
                    continue;
                delta.push(chunk);
            }
            delta.sort($hyoo_crowd_chunk_compare);
            return delta;
        }
        toJSON() {
            return this.delta();
        }
        resort(head) {
            const chunks = this._chunk_lists.get(head);
            const queue = chunks.splice(0).sort((left, right) => {
                return -$hyoo_crowd_chunk_compare(left, right);
            });
            for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                const kid = queue[cursor];
                let index = 0;
                if (kid.prev) {
                    let prev = this.chunk(head, kid.prev);
                    index = chunks.indexOf(prev) + 1;
                    if (!index) {
                        index = chunks.length;
                        if (kid.next) {
                            const next = this.chunk(head, kid.next);
                            index = chunks.indexOf(next);
                            if (index === -1)
                                continue;
                        }
                    }
                }
                chunks.splice(index, 0, kid);
                queue.splice(cursor, 1);
                cursor = queue.length;
            }
            this._chunk_lists.set(head, chunks);
            chunks.dirty = false;
            return chunks;
        }
        apply(delta) {
            const deadline = Date.now() + desync;
            for (const next of delta) {
                if (next.time > deadline) {
                    console.warn('Ignored chunk from far future', next);
                    continue;
                }
                this._clock.see(next.peer, next.time);
                const chunks = this.chunk_list(next.head);
                const guid = `${next.head}/${next.self}`;
                let prev = this._chunk_all.get(guid);
                if (prev) {
                    if ($hyoo_crowd_chunk_compare(prev, next) > 0)
                        continue;
                    chunks.splice(chunks.indexOf(prev), 1, next);
                }
                else {
                    chunks.push(next);
                }
                this._chunk_all.set(guid, next);
                chunks.dirty = true;
                this._chunk_alive.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        put(head, self, prev, data) {
            let chunk_old = this.chunk(head, self);
            let chunk_prev = prev ? this.chunk(head, prev) : null;
            const chunk_list = this.chunk_list(head);
            if (chunk_old) {
                chunk_list.splice(chunk_list.indexOf(chunk_old), 1);
            }
            const seat = chunk_prev ? chunk_list.indexOf(chunk_prev) + 1 : 0;
            const next = chunk_list[seat]?.self ?? 0;
            const chunk_new = {
                head,
                self,
                prev: prev,
                next,
                peer: this.peer,
                time: this._clock.tick(this.peer),
                data,
            };
            this._chunk_all.set(`${chunk_new.head}/${chunk_new.self}`, chunk_new);
            chunk_list.splice(seat, 0, chunk_new);
            this._chunk_alive.set(head, undefined);
            this.pub.emit();
            return chunk_new;
        }
        wipe(chunk) {
            if (chunk.data === null)
                return chunk;
            for (const kid of this.chunk_list(chunk.self)) {
                this.wipe(kid);
            }
            return this.put(chunk.head, chunk.self, chunk.prev, null);
        }
        move(chunk, head, prev) {
            this.wipe(chunk);
            return this.put(head, chunk.self, prev, chunk.data);
        }
        insert(chunk, head, seat) {
            const prev = seat ? this.chunk_list(head)[seat - 1].self : 0;
            return this.move(chunk, head, prev);
        }
    }
    $.$hyoo_crowd_doc = $hyoo_crowd_doc;
})($ || ($ = {}));
//hyoo/crowd/doc/doc.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const chunks = this.chunks();
            let last;
            for (const chunk of chunks) {
                if (!last || $hyoo_crowd_chunk_compare(chunk, last) > 0)
                    last = chunk;
            }
            if (next === undefined) {
                return last?.data ?? null;
            }
            else {
                if (last?.data === next)
                    return next;
                for (const chunk of chunks) {
                    if (chunk === last)
                        continue;
                    this.doc.wipe(chunk);
                }
                this.doc.put(this.head, last?.self ?? this.doc.id_new(), 0, next);
                return next;
            }
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next) ?? 0);
        }
        bool(next) {
            return Boolean(this.value(next) ?? false);
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//hyoo/crowd/reg/reg.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, char_only, char_except } = $mol_regexp;
    $.$hyoo_crowd_tokenizer = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': {
                tab,
                spaces: '  ',
            },
            'spaces': repeat_greedy([
                forbid_after(line_end),
                unicode_only('White_Space'),
            ], 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'Word': [
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': repeat_greedy(char_only([
                unicode_only('General_Category', 'Lowercase_Letter'),
                unicode_only('Diacritic'),
                unicode_only('General_Category', 'Number'),
            ]), 1),
            'others': [
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    });
})($ || ($ = {}));
//hyoo/crowd/tokenizer/tokenizer.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.as($hyoo_crowd_list).list().filter(item => typeof item === 'string').join('');
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.chunks();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = [...next.matchAll($hyoo_crowd_tokenizer)].map(token => token[0]);
            this.as($hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const chunk of this.chunks()) {
                const len = String(chunk.data).length;
                if (off < len)
                    return { chunk: chunk.self, offset: off };
                else
                    off -= len;
            }
            return { chunk: this.head, offset: offset };
        }
        offset_by_point(point) {
            let offset = 0;
            for (const chunk of this.chunks()) {
                if (chunk.self === point.chunk)
                    return offset + point.offset;
                offset += String(chunk.data).length;
            }
            return offset;
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));
//hyoo/crowd/text/text.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.error;
            return $mol_db_response(request).then(() => { });
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//mol/db/database/database.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            this.native.abort();
        }
        commit() {
            this.native.commit();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//mol/db/transaction/transaction.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_shared extends $mol_object2 {
        db() {
            return $mol_wire_sync(this).db_init();
        }
        db_init() {
            return this.$.$mol_db('$mol_state_shared_db', mig => mig.store_make('Chunks'), mig => null, mig => mig.store_drop('Chunks'), mig => mig.store_make('Docs'));
        }
        server() {
            return `wss://sync-hyoo-ru.herokuapp.com/`;
        }
        db_clock = new $hyoo_crowd_clock;
        peer() {
            return $mol_hash_string(this.keys_serial().public);
        }
        keys_serial() {
            const key = this + '.keys()';
            let serial = this.$.$mol_state_local.value(key);
            if (serial)
                return serial;
            const pair = $mol_wire_sync(this.$).$mol_crypto_auditor_pair();
            serial = {
                public: $mol_base64_encode(new Uint8Array($mol_wire_sync(pair.public).serial())),
                private: $mol_base64_encode(new Uint8Array($mol_wire_sync(pair.private).serial())),
            };
            this.$.$mol_state_local.value(key, serial);
            return serial;
        }
        keys() {
            const prev = this.keys_serial();
            return {
                public: $mol_wire_sync(this.$.$mol_crypto_auditor_public).from($mol_base64_decode(prev.public)),
                private: $mol_wire_sync(this.$.$mol_crypto_auditor_private).from($mol_base64_decode(prev.private)),
            };
        }
        store() {
            return new this.$.$hyoo_crowd_doc(this.peer());
        }
        path() {
            return '';
        }
        node() {
            return this.store().root;
        }
        doc(key) {
            if (!key)
                return this;
            const State = this.constructor;
            const state = new State;
            state.path = $mol_const(this.path() ? this.path() + '/' + key : key);
            state.doc = k => this.doc(key + '/' + k);
            state.socket = () => this.socket();
            state.peer = () => this.peer();
            state.keys_serial = () => this.keys_serial();
            state.keys = () => this.keys();
            state.db = () => this.db();
            return state;
        }
        sub(key) {
            const State = this.constructor;
            const state = new State;
            state.node = $mol_const(this.node().sub(key, $hyoo_crowd_struct));
            state.sync = () => this.sync();
            state.path = () => this.path();
            state.db = () => this.db();
            return state;
        }
        request_done(next) {
            return (res) => { };
        }
        sync() {
            try {
                this.db_sync();
                this.server_sync();
            }
            catch (error) {
                if (error instanceof Promise)
                    return null;
                $mol_fail_log(error);
            }
            return null;
        }
        db_sync() {
            this.db();
            const store = this.store();
            if (store.clock.now) {
                if (store.clock.ahead(this.db_clock)) {
                    $mol_wire_sync(this).db_save();
                }
            }
            else {
                $mol_wire_sync(this).db_load();
            }
            return null;
        }
        async db_load() {
            const db = this.db();
            const Docs = db.read('Docs').Docs;
            const path = this.path();
            const delta = await Docs.get([path]);
            if (!delta)
                return;
            const store = this.store();
            store.apply(delta);
            this.db_clock.sync(store.clock);
        }
        async db_save() {
            const path = this.path();
            const db = this.db();
            const store = this.store();
            const trans = db.change('Docs');
            const Docs = trans.stores.Docs;
            const stored = await Docs.get([path]) ?? [];
            store.apply(stored);
            Docs.put(store.delta(), [path]);
            trans.commit();
            this.db_clock.sync(store.clock);
            return null;
        }
        server_sync() {
            this.socket();
            const store = this.store();
            const server_clock = this.server_clock();
            const delta = store.delta(server_clock);
            if (delta.length || !server_clock.now) {
                this.send(this.path(), delta);
                server_clock.sync(store.clock);
            }
            return null;
        }
        value(next) {
            const res = this.node().as($hyoo_crowd_reg).value(next);
            this.sync();
            return res;
        }
        list(next) {
            const res = this.node().as($hyoo_crowd_list).list(next) ?? [];
            this.sync();
            return res;
        }
        text(next) {
            const res = this.node().as($hyoo_crowd_text).text(next) ?? '';
            this.sync();
            return res;
        }
        selection(next) {
            const node = this.node().as($hyoo_crowd_text);
            if (next) {
                this.selection_range(next.map(offset => node.point_by_offset(offset)));
                return next;
            }
            else {
                return this.selection_range().map(point => node.offset_by_point(point));
            }
        }
        selection_range(next) {
            return next ?? [{ chunk: 0, offset: 0 }, { chunk: 0, offset: 0 }];
        }
        server_clock() {
            this.socket();
            return new $hyoo_crowd_clock;
        }
        socket(reset) {
            this.heartbeat();
            const socket = new $mol_dom_context.WebSocket(this.server());
            socket.onmessage = event => {
                if (!event.data)
                    return;
                const message = JSON.parse(event.data);
                if (!Array.isArray(message))
                    return;
                let [path, ...delta] = message;
                if (typeof path !== 'string')
                    return;
                if (!delta)
                    return;
                const doc = this.doc(path);
                const store = doc.store();
                if (!delta.length) {
                }
                store.apply(delta);
                doc.server_clock().sync(store.clock);
            };
            socket.onclose = () => {
                setTimeout(() => this.socket(null), 5000);
            };
            return socket;
        }
        heartbeat() {
            const timer = setInterval(() => {
                const socket = this.socket();
                if (socket.readyState !== socket.OPEN)
                    return;
                socket.send('');
            }, 30000);
            return {
                destructor: () => clearInterval(timer)
            };
        }
        send(key, next) {
            const socket = this.socket();
            $mol_wire_sync(this).wait_connection();
            if (socket.readyState !== socket.OPEN)
                return;
            const message = next === undefined ? [key] : [key, ...next];
            socket.send(JSON.stringify(message));
        }
        wait_connection() {
            const socket = this.socket();
            if (socket.readyState !== socket.CONNECTING)
                return;
            return new Promise(done => socket.addEventListener('open', done));
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "keys_serial", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "keys", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "store", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_shared.prototype, "doc", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_shared.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "request_done", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "db_sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "server_sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "list", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "selection_range", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "server_clock", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "socket", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "heartbeat", null);
    __decorate([
        $mol_action
    ], $mol_state_shared.prototype, "send", null);
    $.$mol_state_shared = $mol_state_shared;
})($ || ($ = {}));
//mol/state/shared/shared.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_domain extends $mol_object2 {
        state() {
            return new $mol_state_shared();
        }
        sign() {
            const obj = new $care_app_sign;
            obj.domain = $mol_const(this);
            return obj;
        }
        person() {
            const obj = new $care_app_person_service;
            obj.domain = $mol_const(this);
            return obj;
        }
        user() {
            return this.sign().token() ? this.person().item(this.sign().token()) : null;
        }
        org() {
            const obj = new $care_app_org_service;
            obj.domain = $mol_const(this);
            return obj;
        }
        project() {
            const obj = new $care_app_project_service;
            obj.domain = $mol_const(this);
            return obj;
        }
        job() {
            const obj = new $care_app_job_service;
            obj.domain = $mol_const(this);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "state", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "sign", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "user", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "org", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $care_app_domain.prototype, "job", null);
    $.$care_app_domain = $care_app_domain;
})($ || ($ = {}));
//care/app/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_sign extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('sign');
        }
        token(next) {
            return this.$.$mol_state_local.value('token', next) ?? '';
        }
    }
    $.$care_app_sign = $care_app_sign;
})($ || ($ = {}));
//care/app/sign/sign.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//mol/compare/array/array.ts
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    this.stat(null);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', $mol_fail_log);
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, virt) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            if (virt)
                return next;
            try {
                stat = next ?? stat_convert($node.fs.statSync(path, { throwIfNoEntry: false }));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                this.$.$mol_fail_hidden(e);
            }
        }
        buffer(next) {
            const path = this.path();
            if (next === undefined) {
                if (!this.stat())
                    return new Uint8Array;
                try {
                    const prev = $mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            const now = new Date;
            this.stat({
                type: 'file',
                size: next.length,
                atime: now,
                mtime: now,
                ctime: now,
            }, 'virt');
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//mol/file/file.node.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:hover:where(:not(:disabled)) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 40;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2.5rem;\n\tcolor: var(--mol_theme_shade);\n\tz-index: 1;\n\tpadding: var(--mol_gap_text);\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_eye extends $mol_icon {
        path() {
            return "M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
        }
    }
    $.$mol_icon_eye = $mol_icon_eye;
})($ || ($ = {}));
//mol/icon/eye/-view.tree/eye.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:hover [mol_icon] ,\n[mol_button_typed]:focus [mol_icon] {\n\ttransform: scale(1.5);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_password extends $mol_view {
        type(val) {
            if (val !== undefined)
                return val;
            return "password";
        }
        sub() {
            return this.content();
        }
        hint() {
            return "";
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Pass() {
            const obj = new this.$.$mol_string();
            obj.type = () => this.type();
            obj.hint = () => this.hint();
            obj.value = (val) => this.value(val);
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Show_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        Show() {
            const obj = new this.$.$mol_check_icon();
            obj.checked = (val) => this.checked(val);
            obj.Icon = () => this.Show_icon();
            return obj;
        }
        content() {
            return [
                this.Pass(),
                this.Show()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Pass", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show_icon", null);
    __decorate([
        $mol_mem
    ], $mol_password.prototype, "Show", null);
    $.$mol_password = $mol_password;
})($ || ($ = {}));
//mol/password/-view.tree/password.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_password extends $.$mol_password {
            checked(next) {
                this.type(next ? 'text' : 'password');
                return next ?? false;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_password.prototype, "checked", null);
        $$.$mol_password = $mol_password;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/password/password.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//mol/state/arg/arg.node.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            target() {
                return (this.uri_native().origin === $mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.css", "[mol_form_foot] {\n\tmargin: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//mol/form/-css/form.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_sign_up extends $mol_page {
        person() {
            return this.domain().person();
        }
        sign() {
            return this.domain().sign();
        }
        domain() {
            const obj = new this.$.$care_app_domain();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$care_app_sign_up_title');
        }
        error() {
            return {
                required: this.$.$mol_locale.text('$care_app_sign_up_error_required'),
                phone_taken: this.$.$mol_locale.text('$care_app_sign_up_error_phone_taken'),
                password_short: this.$.$mol_locale.text('$care_app_sign_up_error_password_short'),
                password_not_match: this.$.$mol_locale.text('$care_app_sign_up_error_password_not_match')
            };
        }
        body() {
            return [
                this.Form()
            ];
        }
        name_bid() {
            return "";
        }
        name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_up_Name_control_hint');
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_up_Name_field_name');
            obj.bid = () => this.name_bid();
            obj.control = () => this.Name_control();
            return obj;
        }
        name_sur_bid() {
            return "";
        }
        name_sur(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name_sur_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_up_Name_sur_control_hint');
            obj.value = (next) => this.name_sur(next);
            return obj;
        }
        Name_sur_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_up_Name_sur_field_name');
            obj.bid = () => this.name_sur_bid();
            obj.control = () => this.Name_sur_control();
            return obj;
        }
        phone_bid() {
            return "";
        }
        phone(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Phone_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_up_Phone_control_hint');
            obj.value = (next) => this.phone(next);
            return obj;
        }
        Phone_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_up_Phone_field_name');
            obj.bid = () => this.phone_bid();
            obj.control = () => this.Phone_control();
            return obj;
        }
        password_bid() {
            return "";
        }
        password(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Password_control() {
            const obj = new this.$.$mol_password();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_up_Password_control_hint');
            obj.value = (next) => this.password(next);
            return obj;
        }
        Password_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_up_Password_field_name');
            obj.bid = () => this.password_bid();
            obj.control = () => this.Password_control();
            return obj;
        }
        password_confirm_bid() {
            return "";
        }
        password_confirm(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Password_confirm_control() {
            const obj = new this.$.$mol_password();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_up_Password_confirm_control_hint');
            obj.value = (next) => this.password_confirm(next);
            return obj;
        }
        Password_confirm_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_up_Password_confirm_field_name');
            obj.bid = () => this.password_confirm_bid();
            obj.control = () => this.Password_confirm_control();
            return obj;
        }
        submit_label() {
            return this.$.$mol_locale.text('$care_app_sign_up_submit_label');
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        submit_enabled() {
            return true;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.submit_label();
            obj.click = (next) => this.submit(next);
            obj.enabled = () => this.submit_enabled();
            return obj;
        }
        sign_in_link_label() {
            return this.$.$mol_locale.text('$care_app_sign_up_sign_in_link_label');
        }
        Sign_in_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                sign: "in"
            });
            obj.sub = () => [
                this.sign_in_link_label()
            ];
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Name_field(),
                this.Name_sur_field(),
                this.Phone_field(),
                this.Password_field(),
                this.Password_confirm_field()
            ];
            obj.buttons = () => [
                this.Submit(),
                this.Sign_in_link()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "domain", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "name_sur", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Name_sur_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Name_sur_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "phone", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Phone_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Phone_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "password", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Password_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Password_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "password_confirm", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Password_confirm_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Password_confirm_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Sign_in_link", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_up.prototype, "Form", null);
    $.$care_app_sign_up = $care_app_sign_up;
})($ || ($ = {}));
//care/app/sign/up/-view.tree/up.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($.$care_app_sign_up, {
            Form: {
                Foot: {
                    flex: {
                        direction: 'column',
                    },
                },
            },
            Submit: {
                width: per(100),
            },
            Sign_in_link: {
                width: per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/sign/up/up.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_sign_up extends $.$care_app_sign_up {
            name_bid() {
                return !this.name() ? this.error().required : '';
            }
            name_sur_bid() {
                return !this.name_sur() ? this.error().required : '';
            }
            phone_bid() {
                if (!this.phone())
                    return this.error().required;
                if (this.person().find(obj => obj.phone() === this.phone().trim()).length > 0)
                    return this.error().phone_taken;
                return '';
            }
            password_bid() {
                if (!this.password())
                    return this.error().required;
                if (this.password().length < 8)
                    return this.error().password_short;
                if (this.password() !== this.password_confirm())
                    return this.error().password_not_match;
                return '';
            }
            password_confirm_bid() {
                if (!this.password_confirm())
                    return this.error().required;
                return '';
            }
            submit_enabled() {
                return !this.name_bid() && !this.name_sur_bid() && !this.phone_bid() && !this.password_bid() && !this.password_confirm_bid();
            }
            submit() {
                const obj = this.domain().person().item($mol_guid());
                obj.name(this.name());
                obj.name_sur(this.name_sur());
                obj.phone(this.phone());
                obj.password(this.password());
                this.person().index().add(obj.id());
                this.sign().token(obj.id());
            }
        }
        $$.$care_app_sign_up = $care_app_sign_up;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/sign/up/up.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_sign_in extends $mol_page {
        person() {
            return this.domain().person();
        }
        sign() {
            return this.domain().sign();
        }
        domain() {
            const obj = new this.$.$care_app_domain();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$care_app_sign_in_title');
        }
        error() {
            return {
                required: this.$.$mol_locale.text('$care_app_sign_in_error_required'),
                wrong: this.$.$mol_locale.text('$care_app_sign_in_error_wrong')
            };
        }
        body() {
            return [
                this.Form()
            ];
        }
        phone_bid() {
            return "";
        }
        phone(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Phone_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_in_Phone_control_hint');
            obj.value = (next) => this.phone(next);
            return obj;
        }
        Phone_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_in_Phone_field_name');
            obj.bid = () => this.phone_bid();
            obj.control = () => this.Phone_control();
            return obj;
        }
        password_bid() {
            return "";
        }
        password(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Password_control() {
            const obj = new this.$.$mol_password();
            obj.hint = () => this.$.$mol_locale.text('$care_app_sign_in_Password_control_hint');
            obj.value = (next) => this.password(next);
            return obj;
        }
        Password_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_sign_in_Password_field_name');
            obj.bid = () => this.password_bid();
            obj.control = () => this.Password_control();
            return obj;
        }
        submit_label() {
            return this.$.$mol_locale.text('$care_app_sign_in_submit_label');
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        submit_enabled() {
            return true;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.submit_label();
            obj.click = (next) => this.submit(next);
            obj.enabled = () => this.submit_enabled();
            return obj;
        }
        sign_in_link_label() {
            return this.$.$mol_locale.text('$care_app_sign_in_sign_in_link_label');
        }
        Sign_up_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                sign: "up"
            });
            obj.sub = () => [
                this.sign_in_link_label()
            ];
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Phone_field(),
                this.Password_field()
            ];
            obj.buttons = () => [
                this.Submit(),
                this.Sign_up_link()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "domain", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "phone", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Phone_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Phone_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "password", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Password_control", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Password_field", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Sign_up_link", null);
    __decorate([
        $mol_mem
    ], $care_app_sign_in.prototype, "Form", null);
    $.$care_app_sign_in = $care_app_sign_in;
})($ || ($ = {}));
//care/app/sign/in/-view.tree/in.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($.$care_app_sign_in, {
            Form: {
                Foot: {
                    flex: {
                        direction: 'column',
                    },
                },
            },
            Submit: {
                width: per(100),
            },
            Sign_up_link: {
                width: per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/sign/in/in.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_sign_in extends $.$care_app_sign_in {
            phone_bid(next) {
                if (next)
                    return next;
                return !this.phone() ? this.error().required : '';
            }
            password_bid(next) {
                if (next)
                    return next;
                return !this.password() ? this.error().required : '';
            }
            submit_enabled() {
                return !this.phone_bid() && !this.password_bid();
            }
            submit() {
                const [person] = this.person().find(obj => obj.phone() === this.phone() && obj.password() === this.password());
                if (!person)
                    return this.phone_bid(this.error().wrong);
                this.sign().token(person.id());
            }
            bid_clear() {
                this.phone();
                this.password();
                this.phone_bid('');
                this.password_bid('');
            }
            auto() {
                this.person().find().map(obj => { obj.phone(); obj.password(); });
                this.bid_clear();
            }
        }
        __decorate([
            $mol_mem
        ], $care_app_sign_in.prototype, "phone_bid", null);
        __decorate([
            $mol_mem
        ], $care_app_sign_in.prototype, "password_bid", null);
        __decorate([
            $mol_mem
        ], $care_app_sign_in.prototype, "bid_clear", null);
        $$.$care_app_sign_in = $care_app_sign_in;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/sign/in/in.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_index extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            throw new Error('Not defined');
        }
        list(next) {
            return this.state().sub('index_list').list(next);
        }
        add(id) {
            this.list([...this.list(), id]);
        }
        drop(id) {
            this.list(this.list().filter(id2 => id2 !== id));
        }
        find(Obj, fn) {
            const list = this.list().map(id => {
                const obj = new Obj;
                obj.id = $mol_const(id);
                obj.domain = $mol_const(this.domain());
                return obj;
            });
            if (!fn)
                return list;
            return list.filter(fn);
        }
    }
    $.$care_app_index = $care_app_index;
})($ || ($ = {}));
//care/app/index/index.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_job_service extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('job');
        }
        index() {
            const obj = new $care_app_index;
            obj.domain = $mol_const(this.domain());
            obj.state = $mol_const(this.state().doc('index'));
            return obj;
        }
        find(fn) {
            return this.index().find($care_app_job, fn);
        }
        item(id) {
            const obj = new $care_app_job;
            obj.domain = $mol_const(this.domain());
            obj.id = $mol_const(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $care_app_job_service.prototype, "item", null);
    $.$care_app_job_service = $care_app_job_service;
    class $care_app_job extends $mol_object2 {
        id() {
            throw new Error('Not defined');
        }
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('job').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        functions(next) {
            return String(this.state().sub('functions').value(next) ?? '');
        }
        requests(next) {
            return String(this.state().sub('requests').value(next) ?? '');
        }
        provided(next) {
            return String(this.state().sub('provided').value(next) ?? '');
        }
        experience(next) {
            return String(this.state().sub('experience').value(next) ?? '');
        }
        format(next) {
            return String(this.state().sub('format').value(next) ?? '');
        }
        duration(next) {
            return String(this.state().sub('duration').value(next) ?? '');
        }
        work_schedule(next) {
            return String(this.state().sub('work_schedule').value(next) ?? '');
        }
        pay(next) {
            return String(this.state().sub('pay').value(next) ?? '');
        }
        urgented(next) {
            return Boolean(this.state().sub('urgented').value(next) ?? false);
        }
        project(next) {
            const id = String(this.state().sub('project').value(next && next.id()));
            return this.domain().project().item(id);
        }
        response_list(next) {
            const ids = this.state().sub('response_list').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().person().item(String(id)));
        }
        response_status(key, next) {
            const status = this.state().sub('response_status').sub(key.id()).value(next) ?? 'wait';
            return status;
        }
        response_message(key, next) {
            return String(this.state().sub('response_message').sub(key.id()).value(next) ?? '');
        }
    }
    $.$care_app_job = $care_app_job;
})($ || ($ = {}));
//care/app/job/job.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_project_service extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('project');
        }
        index() {
            const obj = new $care_app_index;
            obj.domain = $mol_const(this.domain());
            obj.state = $mol_const(this.state().doc('index'));
            return obj;
        }
        find(fn) {
            return this.index().find($care_app_project, fn);
        }
        item(id) {
            const obj = new $care_app_project;
            obj.domain = $mol_const(this.domain());
            obj.id = $mol_const(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $care_app_project_service.prototype, "item", null);
    $.$care_app_project_service = $care_app_project_service;
    class $care_app_project extends $mol_object2 {
        id() {
            throw new Error('Not defined');
        }
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('project').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        description(next) {
            return String(this.state().sub('description').value(next) ?? '');
        }
        result(next) {
            return String(this.state().sub('result').value(next) ?? '');
        }
        duration(next) {
            return String(this.state().sub('duration').value(next) ?? '');
        }
        date_start(next) {
            const str = this.state().sub('date_start').value(next && next.toString());
            return new $mol_time_moment(str ? String(str) : undefined);
        }
        org(next) {
            const id = String(this.state().sub('org').value(next && next.id()));
            return this.domain().org().item(id);
        }
        jobs(next) {
            const ids = this.state().sub('jobs').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().job().item(String(id)));
        }
    }
    $.$care_app_project = $care_app_project;
})($ || ($ = {}));
//care/app/project/project.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_org_service extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('org');
        }
        index() {
            const obj = new $care_app_index;
            obj.domain = $mol_const(this.domain());
            obj.state = $mol_const(this.state().doc('index'));
            return obj;
        }
        find(fn) {
            return this.index().find($care_app_org, fn);
        }
        item(id) {
            const obj = new $care_app_org;
            obj.domain = $mol_const(this.domain());
            obj.id = $mol_const(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $care_app_org_service.prototype, "item", null);
    $.$care_app_org_service = $care_app_org_service;
    class $care_app_org extends $mol_object2 {
        id() {
            throw new Error('Not defined');
        }
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('org').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        description(next) {
            return String(this.state().sub('description').value(next) ?? '');
        }
        image(next) {
            return String(this.state().sub('image').value(next) ?? '');
        }
        owner(next) {
            const id = this.state().sub('owner').value(next && next.id());
            return this.domain().person().item(String(id));
        }
        project_list(next) {
            const ids = this.state().sub('projects').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().project().item(String(id)));
        }
    }
    $.$care_app_org = $care_app_org;
})($ || ($ = {}));
//care/app/org/org.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_person_service extends $mol_object2 {
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('person');
        }
        index() {
            const obj = new $care_app_index;
            obj.domain = $mol_const(this.domain());
            obj.state = $mol_const(this.state().doc('index'));
            return obj;
        }
        find(fn) {
            return this.index().find($care_app_person, fn);
        }
        item(id) {
            const obj = new $care_app_person;
            obj.domain = $mol_const(this.domain());
            obj.id = $mol_const(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $care_app_person_service.prototype, "item", null);
    $.$care_app_person_service = $care_app_person_service;
    class $care_app_person extends $mol_object2 {
        id() {
            throw new Error('Not defined');
        }
        domain() {
            throw new Error('Not defined');
        }
        state() {
            return this.domain().state().doc('person').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        name_sur(next) {
            return String(this.state().sub('name_sur').value(next) ?? '');
        }
        name_full() {
            return `${this.name()} ${this.name_sur()}`;
        }
        phone(next) {
            return String(this.state().sub('phone').value(next) ?? '');
        }
        password(next) {
            return String(this.state().sub('password').value(next) ?? '');
        }
        org_list(next) {
            const ids = this.state().sub('org_list').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().org().item(String(id)));
        }
        response_list(next) {
            const ids = this.state().sub('response_list').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().job().item(String(id)));
        }
        response_status(key) {
            return this.domain().job().item(key.id()).response_status(this);
        }
        response_message(key) {
            return this.domain().job().item(key.id()).response_message(this);
        }
        about(next) {
            return String(this.state().sub('about').value(next) ?? '');
        }
        images(next) {
            const array = this.state().sub('images').list(next);
            return array.map(base64 => String(base64));
        }
        contact_telegram(next) {
            return String(this.state().sub('contact_telegram').value(next) ?? '');
        }
        contact_mail(next) {
            return String(this.state().sub('contact_mail').value(next) ?? '');
        }
        contact_website(next) {
            return String(this.state().sub('contact_website').value(next) ?? '');
        }
        company_list(next) {
            const array = this.state().sub('company_list').list(next);
            return array.map(String);
        }
        company_name(id, next) {
            return String(this.state().sub('company').sub(id).sub('name').value(next) ?? '');
        }
        company_website(id, next) {
            return String(this.state().sub('company').sub(id).sub('website').value(next) ?? '');
        }
        company_position(id, next) {
            return String(this.state().sub('company').sub(id).sub('position').value(next) ?? '');
        }
        company_industry(id, next) {
            return String(this.state().sub('company').sub(id).sub('industry').value(next) ?? '');
        }
        company_tasks(id, next) {
            return String(this.state().sub('company').sub(id).sub('tasks').value(next) ?? '');
        }
        company_date_start(id, next) {
            const str = this.state().sub('company').sub(id).sub('date_start').value(next && next.toString()) ?? '';
            return new $mol_time_moment(str ? String(str) : undefined);
        }
        company_date_end(id, next) {
            const str = this.state().sub('company').sub(id).sub('date_end').value(next && next.toString()) ?? '';
            return str ? new $mol_time_moment(String(str)) : null;
        }
        company_working_now(id, next) {
            return Boolean(this.state().sub('company').sub(id).sub('working_now').value(next) ?? false);
        }
        education_list(next) {
            const array = this.state().sub('education_list').list(next);
            return array.map(String);
        }
        education_level(id, next) {
            return String(this.state().sub('education').sub(id).sub('level').value(next) ?? '');
        }
        education_institution(id, next) {
            return String(this.state().sub('education').sub(id).sub('institution').value(next) ?? '');
        }
        education_department(id, next) {
            return String(this.state().sub('education').sub(id).sub('department').value(next) ?? '');
        }
        education_specialty(id, next) {
            return String(this.state().sub('education').sub(id).sub('specialty').value(next) ?? '');
        }
        education_year_end(id, next) {
            return Number(this.state().sub('education').sub(id).sub('year_end').value(next) ?? 2022);
        }
        skill_list(next) {
            const array = this.state().sub('skill_list').list(next);
            return array.map(key => String(key));
        }
    }
    $.$care_app_person = $care_app_person;
})($ || ($ = {}));
//care/app/person/person.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_magnify extends $mol_icon {
        path() {
            return "M9.5,3C13.09,3 16,5.91 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16C5.91,16 3,13.09 3,9.5C3,5.91 5.91,3 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
        }
    }
    $.$mol_icon_magnify = $mol_icon_magnify;
})($ || ($ = {}));
//mol/icon/magnify/-view.tree/magnify.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_logout extends $mol_icon {
        path() {
            return "M16,17V14H9V10H16V7L21,12L16,17M14,2C15.1,2 16,2.9 16,4V6H14V4H5V20H14V18H16V20C16,21.1 15.1,22 14,22H5C3.9,22 3,21.1 3,20V4C3,2.9 3.9,2 5,2H14Z";
        }
    }
    $.$mol_icon_logout = $mol_icon_logout;
})($ || ($ = {}));
//mol/icon/logout/-view.tree/logout.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_logout_variant extends $mol_icon {
        path() {
            return "M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3C20.1,3 21,3.9 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z";
        }
    }
    $.$mol_icon_logout_variant = $mol_icon_logout_variant;
})($ || ($ = {}));
//mol/icon/logout/variant/-view.tree/variant.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_account extends $mol_icon {
        path() {
            return "M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
        }
    }
    $.$mol_icon_account = $mol_icon_account;
})($ || ($ = {}));
//mol/icon/account/-view.tree/account.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pencil extends $mol_icon {
        path() {
            return "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
        }
    }
    $.$mol_icon_pencil = $mol_icon_pencil;
})($ || ($ = {}));
//mol/icon/pencil/-view.tree/pencil.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//mol/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/bar/-css/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_briefcase extends $mol_icon {
        path() {
            return "M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V19C22,20.1 21.1,21 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z";
        }
    }
    $.$mol_icon_briefcase = $mol_icon_briefcase;
})($ || ($ = {}));
//mol/icon/briefcase/-view.tree/briefcase.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_briefcase_outline extends $mol_icon {
        path() {
            return "M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z";
        }
    }
    $.$mol_icon_briefcase_outline = $mol_icon_briefcase_outline;
})($ || ($ = {}));
//mol/icon/briefcase/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_office extends $mol_icon {
        path() {
            return "M3,18L7,16.75V7L14,5V19.5L3.5,18.25L14,22L20,20.75V3.5L13.95,2L3,5.75V18Z";
        }
    }
    $.$mol_icon_office = $mol_icon_office;
})($ || ($ = {}));
//mol/icon/office/-view.tree/office.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_office_building extends $mol_icon {
        path() {
            return "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";
        }
    }
    $.$mol_icon_office_building = $mol_icon_office_building;
})($ || ($ = {}));
//mol/icon/office/building/-view.tree/building.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_nav extends $mol_page {
        user_id() {
            return this.user().id();
        }
        user() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        tools() {
            return [
                this.Search_open(),
                this.Sign_out()
            ];
        }
        body() {
            return [
                this.Person(),
                this.Person_activity(),
                this.Org_list(),
                this.Job_search()
            ];
        }
        Search_open_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        Search_open() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                search: ""
            });
            obj.sub = () => [
                this.Search_open_icon()
            ];
            return obj;
        }
        sign_out(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Sign_out_icon() {
            const obj = new this.$.$mol_icon_logout_variant();
            return obj;
        }
        Sign_out() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$care_app_nav_Sign_out_hint');
            obj.click = (next) => this.sign_out(next);
            obj.sub = () => [
                this.Sign_out_icon()
            ];
            return obj;
        }
        Person_icon() {
            const obj = new this.$.$mol_icon_account();
            return obj;
        }
        person_label() {
            return "Моя страница";
        }
        Person_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: this.user_id()
            });
            obj.sub = () => [
                this.Person_icon(),
                this.person_label()
            ];
            return obj;
        }
        Person_edit_icon() {
            const obj = new this.$.$mol_icon_pencil();
            return obj;
        }
        Person_edit_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person_edit: ""
            });
            obj.sub = () => [
                this.Person_edit_icon()
            ];
            return obj;
        }
        Person() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Person_link(),
                this.Person_edit_link()
            ];
            return obj;
        }
        Person_activity_icon() {
            const obj = new this.$.$mol_icon_briefcase_outline();
            return obj;
        }
        person_activity_label() {
            return "Деятельность";
        }
        Person_activity() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person_activity: ""
            });
            obj.sub = () => [
                this.Person_activity_icon(),
                this.person_activity_label()
            ];
            return obj;
        }
        Org_list_icon() {
            const obj = new this.$.$mol_icon_office_building();
            return obj;
        }
        org_list_label() {
            return "Организации";
        }
        Org_list() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                orgs: ""
            });
            obj.sub = () => [
                this.Org_list_icon(),
                this.org_list_label()
            ];
            return obj;
        }
        Job_search_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        job_search_label() {
            return "Поиск вакансий";
        }
        Job_search() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                job_search: ""
            });
            obj.sub = () => [
                this.Job_search_icon(),
                this.job_search_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "user", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Search_open_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Search_open", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "sign_out", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Sign_out_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Sign_out", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_link", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_edit_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_edit_link", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_activity_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Person_activity", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Org_list_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Org_list", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Job_search_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_nav.prototype, "Job_search", null);
    $.$care_app_nav = $care_app_nav;
})($ || ($ = {}));
//care/app/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_nav, {
            Person: {
                justifyContent: 'space-between',
            },
            Person_link: {
                flex: {
                    grow: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/nav/nav.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_org_list extends $mol_page {
        user() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$care_app_org_list_title');
        }
        tools() {
            return [
                this.Org_add(),
                this.Close_page()
            ];
        }
        body() {
            return [
                this.List()
            ];
        }
        Row(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                org: this.org_id(id)
            });
            obj.title = () => this.org_name(id);
            return obj;
        }
        List_empty() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.list_empty_text()
            ];
            return obj;
        }
        Org_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Org_add() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$care_app_org_list_Org_add_hint');
            obj.arg = () => ({
                org: ""
            });
            obj.sub = () => [
                this.Org_add_icon()
            ];
            return obj;
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$care_app_org_list_Close_page_hint');
            obj.arg = () => ({
                orgs: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        rows() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.rows();
            return obj;
        }
        org_id(id) {
            return "";
        }
        org_name(id) {
            return "";
        }
        list_empty_text() {
            return this.$.$mol_locale.text('$care_app_org_list_list_empty_text');
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "user", null);
    __decorate([
        $mol_mem_key
    ], $care_app_org_list.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "List_empty", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "Org_add_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "Org_add", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_org_list.prototype, "List", null);
    $.$care_app_org_list = $care_app_org_list;
})($ || ($ = {}));
//care/app/org/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_org_list, {
            List_empty: {
                padding: $mol_gap.text,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/list/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_org_list extends $.$care_app_org_list {
            domain() {
                return this.user().domain();
            }
            org() {
                return this.domain().org();
            }
            rows() {
                return this.user().org_list().map(obj => this.Row(obj.id()));
            }
            org_id(id) {
                return id;
            }
            org_name(id) {
                return this.org().item(id).name();
            }
            body() {
                return this.user().org_list().length > 0 ? [this.List()] : [this.List_empty()];
            }
        }
        $$.$care_app_org_list = $care_app_org_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image2 extends $mol_view {
        links() {
            return [];
        }
        aspect() {
            return 1;
        }
        sub() {
            return [
                this.Content()
            ];
        }
        height() {
            return "100%";
        }
        background() {
            return "";
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.height(),
                backgroundImage: this.background()
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image2.prototype, "Content", null);
    $.$mol_image2 = $mol_image2;
})($ || ($ = {}));
//mol/image2/-view.tree/image2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image2/image2.view.css", "[mol_image2] {\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n}\n\n[mol_image2_content] {\n\tdisplay: block;\n\tbackground-size: cover;\n\tbackground-position: top center;\n\tflex: auto;\n}\n");
})($ || ($ = {}));
//mol/image2/-css/image2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image2 extends $.$mol_image2 {
            background() {
                return this.links().map(link => `url("${link}")`).join(' , ');
            }
            height() {
                return `${100 / this.aspect()}%`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image2.prototype, "background", null);
        __decorate([
            $mol_mem
        ], $mol_image2.prototype, "height", null);
        $$.$mol_image2 = $mol_image2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image2/image2.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_org_page extends $mol_page {
        org() {
            const obj = new this.$.$care_app_org();
            return obj;
        }
        title() {
            return "Организация";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        body() {
            return [
                this.Org_head(),
                this.Org_body()
            ];
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                org: null,
                project: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        org_image() {
            return "";
        }
        Org_image() {
            const obj = new this.$.$mol_image2();
            obj.links = () => [
                this.org_image()
            ];
            return obj;
        }
        org_name() {
            return "";
        }
        Org_name() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.org_name()
            ];
            return obj;
        }
        Org_head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Org_image(),
                this.Org_name()
            ];
            return obj;
        }
        org_description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Об организации";
            obj.content = () => [
                this.org_description()
            ];
            return obj;
        }
        Project_add() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: ""
            });
            obj.title = () => "Создать проект";
            return obj;
        }
        project_id(id) {
            return "";
        }
        project_name(id) {
            return "";
        }
        Project_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: this.project_id(id)
            });
            obj.sub = () => [
                this.project_name(id)
            ];
            return obj;
        }
        project_rows() {
            return [
                this.Project_add(),
                this.Project_link("0")
            ];
        }
        Project_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.project_rows();
            return obj;
        }
        Activity() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Деятельность";
            obj.content = () => [
                this.Project_list()
            ];
            return obj;
        }
        Org_body() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Description(),
                this.Activity()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "org", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Org_image", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Org_name", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Org_head", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Description", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Project_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_org_page.prototype, "Project_link", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Project_list", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Activity", null);
    __decorate([
        $mol_mem
    ], $care_app_org_page.prototype, "Org_body", null);
    $.$care_app_org_page = $care_app_org_page;
})($ || ($ = {}));
//care/app/org/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$care_app_org_page, {
            Body: {
                padding: $mol_gap.block,
            },
            Org_image: {
                width: rem(7),
                border: {
                    radius: per(50),
                },
                margin: {
                    right: $mol_gap.block,
                },
            },
            Org_name: {
                width: per(100),
                maxWidth: calc('100% - 7rem'),
                font: {
                    size: rem(1.25),
                },
            },
            Org_head: {
                width: per(100),
                alignItems: 'center',
                flex: {
                    direction: 'row',
                },
                margin: {
                    bottom: $mol_gap.block,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_org_page extends $.$care_app_org_page {
            domain() {
                return this.org().domain();
            }
            org_name() {
                return this.org().name();
            }
            org_image() {
                return this.org().image() || '';
            }
            org_description() {
                return this.org().description();
            }
            project_rows() {
                const list = this.org().project_list().map(obj => this.Project_link(obj.id()));
                return [this.Project_add(), ...list];
            }
            project_id(id) {
                return id;
            }
            project_name(id) {
                return this.domain().project().item(id).name();
            }
        }
        $$.$care_app_org_page = $care_app_org_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//mol/text/code/token/-view.tree/token.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/token/token.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        find_pos(id) {
            return null;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//mol/text/code/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//mol/syntax2/syntax2.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?)(?:(?:  |\t)(?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\w)|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));
//mol/syntax2/md/md.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/row/row.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_copy extends $mol_icon {
        path() {
            return "M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z";
        }
    }
    $.$mol_icon_content_copy = $mol_icon_content_copy;
})($ || ($ = {}));
//mol/icon/content/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_copy extends $mol_button_minor {
        text() {
            return "";
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_content_copy();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_copy.prototype, "Icon", null);
    $.$mol_button_copy = $mol_button_copy;
})($ || ($ = {}));
//mol/button/copy/-view.tree/copy.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            click(event) {
                this.$.$mol_dom_context.navigator.clipboard.writeText(this.text());
            }
        }
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/copy/copy.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        find_pos(id) {
            return null;
        }
        sub() {
            return [
                this.Rows(),
                this.Copy()
            ];
        }
        sidebar_showed() {
            return false;
        }
        render_visible_only() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        rows() {
            return [
                this.Row("0")
            ];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.render_visible_only = () => this.render_visible_only();
            obj.rows = () => this.rows();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_copy();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_code_Copy_hint');
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Rows", null);
    __decorate([
        $mol_mem
    ], $mol_text_code.prototype, "Copy", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//mol/text/code/-view.tree/code.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                position: 'sticky',
                top: 0,
                margin: {
                    left: px(-1),
                },
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/code/code.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//mol/float/-view.tree/float.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//mol/float/-css/float.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//mol/check/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem -.25rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon_path] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//mol/check/expand/-css/expand.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/expand/expand.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(id) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.minimal_width = () => this.minimal_width();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//mol/grid/-view.tree/grid.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n\tbox-shadow: inset 0 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: none;\n}\n\n[mol_grid_head] > * + * ,\n[mol_grid_table] > * > * + * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//mol/grid/-css/grid.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/grid/grid.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading()
            };
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//mol/link/iconed/-view.tree/iconed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1rem;\n\twidth: 1rem;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\tmargin: .25rem 0;\n\talign-self: normal;\n\tvertical-align: text-bottom;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//mol/link/iconed/-css/iconed.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const suffix = this.uri().split(this.host(), 2)[1].replace(/^[\/\?#!]+/, '')
                    || this.host();
                return decodeURIComponent(suffix).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/iconed/iconed.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $mol_scroll {
        dom_name() {
            return "object";
        }
        window() {
            return null;
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.Fallback_link()
            ];
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        mime() {
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Fallback_image() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.uri();
            obj.title = () => this.title();
            return obj;
        }
        Fallback_link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.uri();
            obj.sub = () => [
                this.Fallback_image()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback_image", null);
    __decorate([
        $mol_mem
    ], $mol_embed_native.prototype, "Fallback_link", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//mol/embed/native/-view.tree/native.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//mol/embed/native/-css/native.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            uri_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).uri_change);
            }
            uri_change(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                if (event.data[0] !== 'hashchange')
                    return;
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.uri_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_listener", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_change", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/embed/native/native.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        param() {
            return "";
        }
        flow_tokens() {
            return [];
        }
        auto() {
            return [
                this.auto_scroll()
            ];
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.block_content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.quote_text(id);
            obj.auto_scroll = () => null;
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_text();
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.list_text(id);
            obj.auto_scroll = () => null;
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.dom_name = () => this.header_level(id);
            obj.content = () => this.block_content(id);
            obj.arg = () => this.header_arg(id);
            return obj;
        }
        Code(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.code_text(id);
            obj.highlight = () => this.highlight();
            obj.sidebar_showed = () => this.code_sidebar_showed();
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_text();
            obj.auto_scroll = () => null;
            obj.uri_resolve = (id) => this.uri_resolve(id);
            obj.text = () => this.table_cell_text(id);
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_dimmer();
            obj.dom_name = () => "span";
            obj.needle = () => this.highlight();
            obj.haystack = () => this.line_text(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            obj.dom_name = () => "span";
            obj.type = () => this.line_type(id);
            obj.sub = () => this.line_content(id);
            return obj;
        }
        Code_line(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => false;
            obj.highlight = () => this.highlight();
            obj.text = () => this.line_text(id);
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.line_content(id);
            return obj;
        }
        Link_http(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => [
                this.String(id)
            ];
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_embed_native();
            obj.uri = () => this.link_uri(id);
            obj.title = () => this.line_text(id);
            return obj;
        }
        auto_scroll() {
            return null;
        }
        block_content(id) {
            return [];
        }
        uri_resolve(id) {
            return null;
        }
        quote_text(id) {
            return "";
        }
        list_text(id) {
            return "";
        }
        header_level(id) {
            return "h";
        }
        header_arg(id) {
            return {};
        }
        code_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
        code_sidebar_showed() {
            return true;
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_text(id) {
            return "";
        }
        line_text(id) {
            return "";
        }
        line_type(id) {
            return "";
        }
        line_content(id) {
            return [];
        }
        link_uri(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Paragraph", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "List", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Code_line", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Link_http", null);
    __decorate([
        $mol_mem_key
    ], $mol_text.prototype, "Image", null);
    $.$mol_text = $mol_text;
    class $mol_text_header extends $mol_paragraph {
        sub() {
            return [
                this.Link()
            ];
        }
        arg() {
            return {};
        }
        content() {
            return [];
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg();
            obj.hint = () => this.$.$mol_locale.text('$mol_text_header_Link_hint');
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_text_header.prototype, "Link", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
//mol/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n}\n\n[mol_text_quote] {\n\tbox-shadow: inset 1px 0 0px 0px var(--mol_theme_line);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_list] {\n\tpadding-left: 1.5rem;\n}\n\n[mol_text_list_paragraph] {\n\tdisplay: list-item;\n}\n\n[mol_text_list_paragraph]::before {\n\tcontent: '•';\n\twidth: 1.5rem;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n}\n\n[mol_text_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\taspect-ratio: auto;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n\n[mol_text_code_copy] {\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tmargin-left: -1px;\n}\n\n[mol_text_code_copy_icon] {\n\tbackground-color: var(--mol_theme_card);\n}\n");
})($ || ($ = {}));
//mol/text/-css/text.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Code(index);
                        case 'code-indent': return this.Code(index);
                        case 'table': return this.Table(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?\)\./, '').replace(/[()]/g, '');
            }
            header_level(index) {
                return 'h' + this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.flow_tokens()[index].chunks[2]
                };
            }
            code_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t|    )/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+ ]|\d+\.) /mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    default: return (chunks[0] || chunks[1]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Image(path2);
                        case 'code3': return this.Code_line(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            image_title(path) {
                const token = this.line_token(path);
                return token.chunks[0];
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "code_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "image_title", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $mol_stack {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Edit() {
            const obj = new this.$.$mol_textarea_edit();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(id) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (id) => this.row_numb(id);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
    class $mol_textarea_edit extends $mol_string {
        dom_name() {
            return "textarea";
        }
        field() {
            return {
                ...super.field(),
                scrollTop: 0
            };
        }
    }
    $.$mol_textarea_edit = $mol_textarea_edit;
})($ || ($ = {}));
//mol/textarea/-view.tree/textarea.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n}\n\n[mol_textarea_view] {\n\tz-index: 1;\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n");
})($ || ($ = {}));
//mol/textarea/-css/textarea.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/textarea/textarea.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//mol/icon/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.files = (next) => this.files(next);
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//mol/button/open/-view.tree/open.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/open/open.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_attach extends $mol_view {
        items(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        sub() {
            return [
                this.Content()
            ];
        }
        Add() {
            const obj = new this.$.$mol_button_open();
            obj.title = () => this.attach_title();
            obj.files = (val) => this.attach_new(val);
            return obj;
        }
        Item(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.item_drop(id, event);
            obj.sub = () => [
                this.Image(id)
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.content();
            return obj;
        }
        attach_title() {
            return "";
        }
        attach_new(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        item_drop(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        item_uri(id) {
            return "";
        }
        Image(id) {
            const obj = new this.$.$mol_image();
            obj.title = () => "";
            obj.uri = () => this.item_uri(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "items", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Add", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Item", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $mol_attach.prototype, "attach_new", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "item_drop", null);
    __decorate([
        $mol_mem_key
    ], $mol_attach.prototype, "Image", null);
    $.$mol_attach = $mol_attach;
})($ || ($ = {}));
//mol/attach/-view.tree/attach.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/attach/attach.view.css", "[mol_attach_item] {\n\twidth: 6rem;\n\theight: 6rem;\n\tborder-radius: var(--mol_gap_round);\n\tpadding: 0;\n}\n\n[mol_attach_image] {\n\tbackground: var(--mol_theme_card);\n\twidth: 100%;\n\theight: 100%;\n}\n\n[mol_attach_add] {\n\tmargin: .375rem;\n\tbackground: var(--mol_theme_card);\n\twidth: 6rem;\n\theight: 6rem;\n\talign-items: center;\n\tjustify-content: center;\n\toverflow: hidden;\n}\n\n[mol_attach_add_icon] {\n\twidth: 50%;\n\theight: 50%;\n}\n");
})($ || ($ = {}));
//mol/attach/-css/attach.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_attach extends $.$mol_attach {
            attach_new(files) {
                this.items([
                    ...this.items(),
                    ...files.map(file => URL.createObjectURL(file)),
                ]);
            }
            content() {
                return [...this.items().map((_, i) => this.Item(i)), this.Add()];
            }
            item_uri(index) {
                return this.items()[index];
            }
            item_drop(index, event) {
                const items = this.items();
                this.items([
                    ...items.slice(0, index),
                    ...items.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_attach.prototype, "content", null);
        $$.$mol_attach = $mol_attach;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/attach/attach.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_attach extends $mol_attach {
    }
    $.$care_attach = $care_attach;
})($ || ($ = {}));
//care/attach/-view.tree/attach.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_attach extends $.$care_attach {
            attach_new(files) {
                this.items([
                    ...this.items(),
                    ...files.map(file => this.to_base64(file)),
                ]);
            }
            to_base64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader;
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            }
        }
        __decorate([
            $mol_mem_key
        ], $care_attach.prototype, "to_base64", null);
        $$.$care_attach = $care_attach;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/attach/attach.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_org_add extends $mol_page {
        org() {
            const obj = new this.$.$care_app_org_service();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$care_app_org_add_title');
        }
        error() {
            return {
                required: this.$.$mol_locale.text('$care_app_org_add_error_required')
            };
        }
        body() {
            return [
                this.Form()
            ];
        }
        name_bid() {
            return "";
        }
        name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_org_add_Name_field_name');
            obj.bid = () => this.name_bid();
            obj.control = () => this.Name_control();
            return obj;
        }
        description_bid() {
            return "";
        }
        description(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Description_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.description(next);
            return obj;
        }
        Description_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_org_add_Description_field_name');
            obj.bid = () => this.description_bid();
            obj.control = () => this.Description_control();
            return obj;
        }
        images(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Image_control() {
            const obj = new this.$.$care_attach();
            obj.items = (next) => this.images(next);
            return obj;
        }
        Image_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$care_app_org_add_Image_field_name');
            obj.control = () => this.Image_control();
            return obj;
        }
        submit_enabled() {
            return true;
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.enabled = () => this.submit_enabled();
            obj.click = (next) => this.submit(next);
            obj.title = () => this.$.$mol_locale.text('$care_app_org_add_Submit_title');
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Name_field(),
                this.Description_field(),
                this.Image_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "org", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "description", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Description_control", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Description_field", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "images", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Image_control", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Image_field", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $care_app_org_add.prototype, "Form", null);
    $.$care_app_org_add = $care_app_org_add;
})($ || ($ = {}));
//care/app/org/add/-view.tree/add.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        $mol_style_define($.$care_app_org_add, {
            $mol_textarea: {
                maxWidth: per(100),
            },
            Submit: {
                width: per(100),
            },
            Form: {
                Foot: {
                    flex: {
                        direction: 'column',
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/add/add.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_org_add extends $.$care_app_org_add {
            domain() {
                return this.org().domain();
            }
            user() {
                return this.domain().user();
            }
            name_bid() {
                return !this.name() ? this.error().required : '';
            }
            description_bid() {
                return !this.description() ? this.error().required : '';
            }
            submit_enabled() {
                return !this.name_bid() && !this.description_bid();
            }
            submit() {
                const obj = this.org().item($mol_guid());
                obj.name(this.name());
                obj.description(this.description());
                obj.image(this.images()[0] ?? '');
                obj.owner(this.user());
                this.user().org_list([...this.user().org_list(), obj]);
                this.org().index().add(obj.id());
                this.$.$mol_state_arg.value('org', null);
            }
        }
        $$.$care_app_org_add = $care_app_org_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/org/add/add.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.top > (viewport.height - rect_bubble.bottom) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.left > (viewport.width - rect_bubble.right) ? 'left' : 'right';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar extends $mol_icon {
        path() {
            return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
        }
    }
    $.$mol_icon_calendar = $mol_icon_calendar;
})($ || ($ = {}));
//mol/icon/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hor extends $mol_view {
    }
    $.$mol_hor = $mol_hor;
})($ || ($ = {}));
//mol/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));
//mol/hor/hor.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_calendar extends $mol_list {
        sub() {
            return [
                this.Head(),
                this.Weekdays()
            ];
        }
        weeks() {
            return [];
        }
        Weekday(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.holiday = () => this.weekend(id);
            obj.sub = () => [
                this.weekday(id)
            ];
            return obj;
        }
        Week(id) {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.week_days(id);
            return obj;
        }
        Day(id) {
            const obj = new this.$.$mol_calendar_day();
            obj.ghost = () => this.day_ghost(id);
            obj.holiday = () => this.day_holiday(id);
            obj.selected = () => this.day_selected(id);
            obj.theme = () => this.day_theme(id);
            obj.sub = () => this.day_content(id);
            return obj;
        }
        month_string() {
            return "";
        }
        month_moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        weekdays() {
            return [];
        }
        Weekdays() {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.weekdays();
            return obj;
        }
        weekend(id) {
            return false;
        }
        weekday(id) {
            return "";
        }
        week_days(id) {
            return [];
        }
        day_ghost(id) {
            return false;
        }
        day_holiday(id) {
            return false;
        }
        day_selected(id) {
            return false;
        }
        day_theme(id) {
            return "";
        }
        day_text(id) {
            return "";
        }
        day_content(id) {
            return [
                this.day_text(id)
            ];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    $.$mol_calendar = $mol_calendar;
    class $mol_calendar_day extends $mol_view {
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return {
                mol_calendar_holiday: this.holiday(),
                mol_calendar_ghost: this.ghost(),
                mol_calendar_selected: this.selected(),
                mol_theme: this.theme()
            };
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
        theme() {
            return "";
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//mol/calendar/-view.tree/calendar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//mol/time/interval/interval.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_calendar_weekday] {\n\tcolor: var(--mol_theme_shade);\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_calendar_ghost] {\n\topacity: .2;\n}\n");
})($ || ($ = {}));
//mol/calendar/-css/calendar.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $mol_time_moment(this.month_string() || undefined);
                return new $mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            weeks_count() {
                const interval = new $mol_time_interval({
                    start: this.day_draw_from(),
                    end: this.day_last(),
                });
                return Math.ceil(interval.duration.count({ day: 7 }));
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $mol_time_moment().toString('YYYY-MM-DD') === day;
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_current' : super.day_theme(day);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks_count", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/calendar/calendar.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_date extends $mol_pick {
        Icon() {
            const obj = new this.$.$mol_icon_calendar();
            return obj;
        }
        bubble_content() {
            return [
                this.Input(),
                this.Calendar()
            ];
        }
        value_number(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        value_moment(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        input_hint() {
            return "YYYY-MM-DD hh:mm";
        }
        enabled() {
            return true;
        }
        Input() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.input_hint();
            obj.enabled = () => this.enabled();
            return obj;
        }
        month_moment() {
            return this.value_moment();
        }
        day_selected(id) {
            return false;
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        prev_hint() {
            return this.$.$mol_locale.text('$mol_date_prev_hint');
        }
        prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Prev_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Prev() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.prev_hint();
            obj.click = (event) => this.prev(event);
            obj.sub = () => [
                this.Prev_icon()
            ];
            return obj;
        }
        next_hint() {
            return this.$.$mol_locale.text('$mol_date_next_hint');
        }
        next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Next_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Next() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.next_hint();
            obj.click = (event) => this.next(event);
            obj.sub = () => [
                this.Next_icon()
            ];
            return obj;
        }
        Calendar_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Prev(),
                this.Calendar_title(),
                this.Next()
            ];
            return obj;
        }
        Calendar_title() {
            return this.Calendar().Title();
        }
        Calendar() {
            const obj = new this.$.$mol_date_calendar();
            obj.month_moment = () => this.month_moment();
            obj.day_selected = (id) => this.day_selected(id);
            obj.day_click = (id, event) => this.day_click(id, event);
            obj.head = () => [
                this.Calendar_tools()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value_moment", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Prev", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next_icon", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Next", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar_tools", null);
    __decorate([
        $mol_mem
    ], $mol_date.prototype, "Calendar", null);
    $.$mol_date = $mol_date;
    class $mol_date_calendar extends $mol_calendar {
        day_content(id) {
            return [
                this.Day_button(id)
            ];
        }
        day_click(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Day_button(id) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.day_text(id);
            obj.event_click = (event) => this.day_click(id, event);
            obj.minimal_height = () => 24;
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    __decorate([
        $mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//mol/date/-view.tree/date.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));
//mol/try/try.node.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/date/date.view.css", "[mol_date_bubble] {\n\tpadding: .5rem;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n[mol_date_prev] {\n\tjustify-content: flex-end;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\tpadding: .25rem .5rem;\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));
//mol/date/-css/date.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value_moment()?.toString('YYYY-MM-DD hh:mm') ?? this.Icon()];
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $mol_try(() => val && new $mol_time_moment(val)) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(val) {
                const stamp = this.value_number(val && val.valueOf());
                return isNaN(stamp) ? null : new $mol_time_moment(stamp);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $mol_try(() => new $mol_time_moment(this.value()));
                if (moment instanceof Error || !moment.year)
                    return new $mol_time_moment;
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/date/date.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_project_add extends $mol_page {
        project_service() {
            const obj = new this.$.$care_app_project_service();
            return obj;
        }
        org() {
            const obj = new this.$.$care_app_org();
            return obj;
        }
        title() {
            return "Создание проекта";
        }
        body() {
            return [
                this.Form()
            ];
        }
        name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Название";
            obj.control = () => this.Name_control();
            return obj;
        }
        description(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Description_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.description(next);
            return obj;
        }
        Description_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Описание";
            obj.control = () => this.Description_control();
            return obj;
        }
        result(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Result_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.result(next);
            return obj;
        }
        Result_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Результаты";
            obj.control = () => this.Result_control();
            return obj;
        }
        duration(next) {
            if (next !== undefined)
                return next;
            return "one_time";
        }
        duration_dict() {
            return {
                one_time: "Разовый",
                month0: "Менее 1 месяца",
                month1_3: "1 - 3 месяца",
                month3_12: "3 месяца - 1 год",
                month12_plus: "Более 1 года",
                unlimited: "Неограниченно"
            };
        }
        Duration_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.duration(next);
            obj.options = () => this.duration_dict();
            return obj;
        }
        Duration_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Продолжительность";
            obj.control = () => this.Duration_control();
            return obj;
        }
        date_start(next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Date_start_control() {
            const obj = new this.$.$mol_date();
            obj.align = () => "top_center";
            obj.value_moment = (next) => this.date_start(next);
            return obj;
        }
        Date_start_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Дата начала";
            obj.control = () => this.Date_start_control();
            return obj;
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.click = (next) => this.submit(next);
            obj.title = () => "Создать";
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Name_field(),
                this.Description_field(),
                this.Result_field(),
                this.Duration_field(),
                this.Date_start_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "project_service", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "org", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "description", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Description_control", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Description_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "result", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Result_control", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Result_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "duration", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Duration_control", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Duration_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "date_start", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Date_start_control", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Date_start_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $care_app_project_add.prototype, "Form", null);
    $.$care_app_project_add = $care_app_project_add;
})($ || ($ = {}));
//care/app/project/add/-view.tree/add.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($.$care_app_project_add, {
            $mol_textarea: {
                maxWidth: per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/project/add/add.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_project_add extends $.$care_app_project_add {
            domain() {
                return this.project_service().domain();
            }
            submit() {
                const obj = this.project_service().item($mol_guid());
                obj.name(this.name());
                obj.description(this.description());
                obj.result(this.result());
                obj.duration(this.duration());
                obj.date_start(this.date_start());
                this.project_service().index().add(obj.id());
                this.org().project_list([...this.org().project_list(), obj]);
                obj.org(this.org());
                this.$.$mol_state_arg.value('project', null);
            }
        }
        $$.$care_app_project_add = $care_app_project_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/project/add/add.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_project_page extends $mol_page {
        name() {
            return this.project().name();
        }
        description() {
            return this.project().description();
        }
        result() {
            return this.project().result();
        }
        duration() {
            return this.project().duration();
        }
        date_start() {
            return this.project().date_start();
        }
        project() {
            const obj = new this.$.$care_app_project();
            return obj;
        }
        duration_dict() {
            return this.add_page().duration_dict();
        }
        add_page() {
            const obj = new this.$.$care_app_project_add();
            return obj;
        }
        title() {
            return "Проект";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        body() {
            return [
                this.Name_field(),
                this.Description_field(),
                this.Result_field(),
                this.Duration_field(),
                this.Date_start_field(),
                this.Job_field()
            ];
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Название";
            obj.content = () => [
                this.name()
            ];
            return obj;
        }
        Description_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Описание";
            obj.content = () => [
                this.description()
            ];
            return obj;
        }
        Result_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Ожидаемые результат";
            obj.content = () => [
                this.result()
            ];
            return obj;
        }
        duration_string() {
            return "";
        }
        Duration_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Продолжительность";
            obj.content = () => [
                this.duration_string()
            ];
            return obj;
        }
        date_start_string() {
            return "";
        }
        Date_start_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Дата начала";
            obj.content = () => [
                this.date_start_string()
            ];
            return obj;
        }
        Job_add() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                job: ""
            });
            obj.title = () => this.$.$mol_locale.text('$care_app_project_page_Job_add_title');
            return obj;
        }
        job_id(id) {
            return "";
        }
        job_name(id) {
            return "";
        }
        Job_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                job: this.job_id(id)
            });
            obj.sub = () => [
                this.job_name(id)
            ];
            return obj;
        }
        job_list_rows() {
            return [
                this.Job_add(),
                this.Job_link("0")
            ];
        }
        Job_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.job_list_rows();
            return obj;
        }
        Job_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Вакансии";
            obj.content = () => [
                this.Job_list()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "add_page", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Description_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Result_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Duration_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Date_start_field", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Job_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_project_page.prototype, "Job_link", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Job_list", null);
    __decorate([
        $mol_mem
    ], $care_app_project_page.prototype, "Job_field", null);
    $.$care_app_project_page = $care_app_project_page;
})($ || ($ = {}));
//care/app/project/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_project_page, {
            Body: {
                padding: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/project/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_project_page extends $.$care_app_project_page {
            domain() {
                return this.project().domain();
            }
            duration_string() {
                return this.duration_dict()[this.duration()];
            }
            date_start_string() {
                return this.date_start().toString('DD Month YYYY');
            }
            job_list_rows() {
                const jobs = this.project().jobs().map(obj => this.Job_link(obj.id()));
                return [this.Job_add(), ...jobs];
            }
            job_id(id) {
                return id;
            }
            job_name(id) {
                return this.domain().job().item(id).name();
            }
        }
        $$.$care_app_project_page = $care_app_project_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/project/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_job_add extends $mol_page {
        job_service() {
            const obj = new this.$.$care_app_job_service();
            return obj;
        }
        project() {
            const obj = new this.$.$care_app_project();
            return obj;
        }
        title() {
            return "Создание вакансия";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        body() {
            return [
                this.Form()
            ];
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.name(next);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Название";
            obj.control = () => this.Name_control();
            return obj;
        }
        functions(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Functions_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.functions(next);
            return obj;
        }
        Functions_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Обязанности";
            obj.control = () => this.Functions_control();
            return obj;
        }
        requests(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Requests_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.requests(next);
            return obj;
        }
        Requests_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Требования";
            obj.control = () => this.Requests_control();
            return obj;
        }
        provided(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Provided_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.provided(next);
            return obj;
        }
        Provided_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Что предоставляется";
            obj.control = () => this.Provided_control();
            return obj;
        }
        experience(next) {
            if (next !== undefined)
                return next;
            return "no_matter";
        }
        experience_dict() {
            return {
                no_matter: "Не имеет значения",
                no_expirience: "Без опыта",
                year1_3: "1 - 3 года",
                year3_6: "3 - 6 лет",
                year6_plus: "Более 6 лет"
            };
        }
        Experience_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.experience(next);
            obj.options = () => this.experience_dict();
            return obj;
        }
        Experience_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Опыт работы";
            obj.control = () => this.Experience_control();
            return obj;
        }
        format(next) {
            if (next !== undefined)
                return next;
            return "remotely";
        }
        format_dict() {
            return {
                remotely: "Удаленно",
                offline: "Офлайн",
                both: "Оба"
            };
        }
        Format_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.format(next);
            obj.options = () => this.format_dict();
            return obj;
        }
        Format_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Формат";
            obj.control = () => this.Format_control();
            return obj;
        }
        duration(next) {
            if (next !== undefined)
                return next;
            return "one_time";
        }
        duration_dict() {
            return {
                one_time: "Разовая",
                month0: "Меньше месяца",
                month1_3: "1 - 3 месяца",
                month3_6: "3 - 6 месяцев",
                month6_12: "6 - 12 месяцев",
                month12_plus: "Более 1 года",
                unlimited: "Неограниченно"
            };
        }
        Duration_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.duration(next);
            obj.options = () => this.duration_dict();
            return obj;
        }
        Duration_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Продолжительность трудоустройсва";
            obj.control = () => this.Duration_control();
            return obj;
        }
        work_schedule(next) {
            if (next !== undefined)
                return next;
            return "every_day";
        }
        work_schedule_dict() {
            return {
                every_day: "Каждый день",
                shift: "Сменный",
                flexible: "Гибкий"
            };
        }
        Work_shedule_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.work_schedule(next);
            obj.options = () => this.work_schedule_dict();
            return obj;
        }
        Work_shedule_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "График";
            obj.control = () => this.Work_shedule_control();
            return obj;
        }
        pay(next) {
            if (next !== undefined)
                return next;
            return "no";
        }
        pay_dict() {
            return {
                no: "Не предусмотрено",
                yes: "Предусмотрено"
            };
        }
        Pay_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.pay(next);
            obj.options = () => this.pay_dict();
            return obj;
        }
        Pay_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Оплата";
            obj.control = () => this.Pay_control();
            return obj;
        }
        submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.click = (next) => this.submit(next);
            obj.title = () => this.$.$mol_locale.text('$care_app_job_add_Submit_title');
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Name_field(),
                this.Functions_field(),
                this.Requests_field(),
                this.Provided_field(),
                this.Experience_field(),
                this.Format_field(),
                this.Duration_field(),
                this.Work_shedule_field(),
                this.Pay_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "job_service", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "name", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Name_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "functions", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Functions_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Functions_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "requests", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Requests_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Requests_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "provided", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Provided_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Provided_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "experience", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Experience_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Experience_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "format", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Format_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Format_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "duration", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Duration_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Duration_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "work_schedule", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Work_shedule_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Work_shedule_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "pay", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Pay_control", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Pay_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $care_app_job_add.prototype, "Form", null);
    $.$care_app_job_add = $care_app_job_add;
})($ || ($ = {}));
//care/app/job/add/-view.tree/add.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($.$care_app_job_add, {
            $mol_textarea: {
                maxWidth: per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/add/add.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_job_add extends $.$care_app_job_add {
            submit() {
                const obj = this.job_service().item($mol_guid());
                obj.name(this.name());
                obj.functions(this.functions());
                obj.requests(this.requests());
                obj.provided(this.provided());
                obj.experience(this.experience());
                obj.format(this.format());
                obj.duration(this.duration());
                obj.work_schedule(this.work_schedule());
                obj.pay(this.pay());
                this.job_service().index().add(obj.id());
                this.project().jobs([...this.project().jobs(), obj]);
                obj.project(this.project());
                this.$.$mol_state_arg.value('job', obj.id());
            }
        }
        $$.$care_app_job_add = $care_app_job_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/add/add.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_deck extends $mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//mol/deck/-view.tree/deck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[this.current()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/deck/deck.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_job_page extends $mol_page {
        name() {
            return this.job().name();
        }
        functions() {
            return this.job().functions();
        }
        requests() {
            return this.job().requests();
        }
        provided() {
            return this.job().provided();
        }
        experience() {
            return this.job().experience();
        }
        format() {
            return this.job().format();
        }
        duration() {
            return this.job().duration();
        }
        work_schedule() {
            return this.job().work_schedule();
        }
        pay() {
            return this.job().pay();
        }
        job() {
            const obj = new this.$.$care_app_job();
            return obj;
        }
        title() {
            return "Вакансия";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        experience_dict() {
            return this.add_page().experience_dict();
        }
        pay_dict() {
            return this.add_page().pay_dict();
        }
        format_dict() {
            return this.add_page().format_dict();
        }
        duration_dict() {
            return this.add_page().duration_dict();
        }
        work_schedule_dict() {
            return this.add_page().work_schedule_dict();
        }
        add_page() {
            const obj = new this.$.$care_app_job_add();
            return obj;
        }
        body() {
            return [
                this.Tabs()
            ];
        }
        Response_list() {
            const obj = new this.$.$mol_list();
            obj.title = () => "Отклики";
            obj.rows = () => this.response_rows();
            return obj;
        }
        Job() {
            const obj = new this.$.$mol_list();
            obj.title = () => "Информация";
            obj.rows = () => [
                this.Name_field(),
                this.Project_field(),
                this.Functions_field(),
                this.Requests_field(),
                this.Provided_field(),
                this.Experience_field(),
                this.Format_field(),
                this.Duration_field(),
                this.Work_shedule_field(),
                this.Pay_field(),
                this.Response_field()
            ];
            return obj;
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                job: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        tabs() {
            return [
                this.Job(),
                this.Response_list()
            ];
        }
        Tabs() {
            const obj = new this.$.$mol_deck();
            obj.items = () => this.tabs();
            return obj;
        }
        person_id(id) {
            return "";
        }
        person_full_name(id) {
            return "";
        }
        Person(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: this.person_id(id)
            });
            obj.title = () => this.person_full_name(id);
            return obj;
        }
        person_message(id) {
            return "";
        }
        Message(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.person_message(id);
            return obj;
        }
        person_response_status(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Status(id) {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.person_response_status(id, next);
            obj.options = () => ({
                wait: "На рассмотрении",
                apply: "Принят",
                decline: "Отклонено"
            });
            return obj;
        }
        response_list_rows(id) {
            return [
                this.Person(id),
                this.Message(id),
                this.Status(id)
            ];
        }
        Response_list_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.response_list_rows(id);
            return obj;
        }
        response_rows() {
            return [
                this.Response_list_row("0")
            ];
        }
        Name_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Название";
            obj.content = () => [
                this.name()
            ];
            return obj;
        }
        project_id() {
            return "";
        }
        project_name() {
            return "";
        }
        Project_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: this.project_id()
            });
            obj.title = () => this.project_name();
            return obj;
        }
        Project_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Проект";
            obj.content = () => [
                this.Project_link()
            ];
            return obj;
        }
        Functions_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Обязанности";
            obj.content = () => [
                this.functions()
            ];
            return obj;
        }
        Requests_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Требования";
            obj.content = () => [
                this.requests()
            ];
            return obj;
        }
        Provided_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Что предоставляется";
            obj.content = () => [
                this.provided()
            ];
            return obj;
        }
        experience_string() {
            return "";
        }
        Experience_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Опыт работы";
            obj.content = () => [
                this.experience_string()
            ];
            return obj;
        }
        format_string() {
            return "";
        }
        Format_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Формат";
            obj.content = () => [
                this.format_string()
            ];
            return obj;
        }
        duration_string() {
            return "";
        }
        Duration_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Продолжительность вакансии";
            obj.content = () => [
                this.duration_string()
            ];
            return obj;
        }
        work_schedule_string() {
            return "";
        }
        Work_shedule_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Название";
            obj.content = () => [
                this.work_schedule_string()
            ];
            return obj;
        }
        pay_string() {
            return "";
        }
        Pay_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Оплата";
            obj.content = () => [
                this.pay_string()
            ];
            return obj;
        }
        response_text(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        response_text_enabled() {
            return true;
        }
        Response_text() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "Сопроводительное сообщение";
            obj.value = (next) => this.response_text(next);
            obj.enabled = () => this.response_text_enabled();
            return obj;
        }
        response_submit(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Response_submit() {
            const obj = new this.$.$mol_button_major();
            obj.click = (next) => this.response_submit(next);
            obj.title = () => "Отправить";
            return obj;
        }
        response_wait() {
            return "На рассмотрении";
        }
        response_apply() {
            return "Вы приняты";
        }
        response_decline() {
            return "Вас не приняли";
        }
        response_content() {
            return [
                this.Response_text(),
                this.Response_submit(),
                this.response_wait(),
                this.response_apply(),
                this.response_decline()
            ];
        }
        Response_field() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Отклик на вакансию";
            obj.content = () => this.response_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "job", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "add_page", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Response_list", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Job", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Tabs", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_page.prototype, "Person", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_page.prototype, "Message", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_page.prototype, "person_response_status", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_page.prototype, "Status", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_page.prototype, "Response_list_row", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Name_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Project_link", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Project_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Functions_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Requests_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Provided_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Experience_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Format_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Duration_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Work_shedule_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Pay_field", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "response_text", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Response_text", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "response_submit", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Response_submit", null);
    __decorate([
        $mol_mem
    ], $care_app_job_page.prototype, "Response_field", null);
    $.$care_app_job_page = $care_app_job_page;
})($ || ($ = {}));
//care/app/job/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_job_page, {
            Body: {
                padding: $mol_gap.block,
            },
            Functions_field: {
                Content: {
                    whiteSpace: 'pre',
                },
            },
            Requests_field: {
                Content: {
                    whiteSpace: 'pre',
                },
            },
            Provided_field: {
                Content: {
                    whiteSpace: 'pre',
                },
            },
            Response_field: {
                Content: {
                    flex: {
                        direction: 'column',
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_job_page extends $.$care_app_job_page {
            domain() {
                return this.job().domain();
            }
            person() {
                return this.domain().person();
            }
            user() {
                return this.domain().user();
            }
            experience_string() {
                return this.experience_dict()[this.experience()];
            }
            format_string() {
                return this.format_dict()[this.format()];
            }
            duration_string() {
                return this.duration_dict()[this.duration()];
            }
            work_schedule_string() {
                return this.work_schedule_dict()[this.work_schedule()];
            }
            pay_string() {
                return this.pay_dict()[this.pay()];
            }
            project_id() {
                return this.job().project().id();
            }
            project_name() {
                return this.job().project().name();
            }
            user_responsed() {
                return this.user().response_list().includes(this.job());
            }
            user_responsed_status() {
                return this.user().response_status(this.job());
            }
            user_responsed_message() {
                return this.user().response_message(this.job());
            }
            response_content() {
                return [
                    ...this.user_responsed() ? [
                        ...this.user_responsed_status() === 'wait' ? [this.response_wait()] : [],
                        ...this.user_responsed_status() === 'apply' ? [this.response_apply()] : [],
                        ...this.user_responsed_status() === 'decline' ? [this.response_decline()] : [],
                    ] : [
                        this.Response_text(),
                        this.Response_submit(),
                    ],
                ];
            }
            response_submit() {
                this.job().response_list([...this.job().response_list(), this.user()]);
                this.user().response_list([...this.user().response_list(), this.job()]);
                this.job().response_status(this.user(), 'wait');
                this.job().response_message(this.user(), this.response_text());
            }
            person_id(id) {
                return id;
            }
            person_full_name(id) {
                const person = this.person().item(id);
                return `${person.name()} ${person.name_sur()}`;
            }
            person_message(id) {
                return this.person().item(id).response_message(this.job());
            }
            person_response_status(id, next) {
                const person = this.person().item(id);
                return this.job().response_status(person, next);
            }
            response_rows() {
                return this.job().response_list().map(obj => this.Response_list_row(obj.id()));
            }
        }
        $$.$care_app_job_page = $care_app_job_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_check_box_title] {\n\tmargin-left: .5rem;\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_delete extends $mol_icon {
        path() {
            return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z";
        }
    }
    $.$mol_icon_delete = $mol_icon_delete;
})($ || ($ = {}));
//mol/icon/delete/-view.tree/delete.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => "tel";
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_dec(val);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_inc(val);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number]:hover {\n\tz-index: 2;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n\n[mol_number_inc][disabled],\n[mol_number_dec][disabled] {\n\tvisibility: hidden;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((Number(this.value()) || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === 0)
                    return '0';
                if (!value)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_person_edit extends $mol_page {
        domain() {
            return this.person().domain();
        }
        about(next) {
            return this.person().about(next);
        }
        company_name(id, next) {
            return this.person().company_name(id, next);
        }
        company_position(id, next) {
            return this.person().company_position(id, next);
        }
        company_industry(id, next) {
            return this.person().company_industry(id, next);
        }
        company_tasks(id, next) {
            return this.person().company_tasks(id, next);
        }
        company_date_start(id, next) {
            return this.person().company_date_start(id, next);
        }
        company_date_end(id, next) {
            return this.person().company_date_end(id, next);
        }
        company_working_now(id, next) {
            return this.person().company_working_now(id, next);
        }
        education_level(id, next) {
            return this.person().education_level(id, next);
        }
        education_institution(id, next) {
            return this.person().education_institution(id, next);
        }
        education_department(id, next) {
            return this.person().education_department(id, next);
        }
        education_specialty(id, next) {
            return this.person().education_specialty(id, next);
        }
        education_year_end(id, next) {
            return this.person().education_year_end(id, next);
        }
        person() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        title() {
            return "Моя страница - редактироване";
        }
        contact_dict() {
            return {
                telegram: "Телеграм",
                mail: "Почта",
                website: "Сайт"
            };
        }
        body() {
            return [
                this.Form()
            ];
        }
        images(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        Images_control() {
            const obj = new this.$.$care_attach();
            obj.items = (next) => this.images(next);
            return obj;
        }
        Images_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Аватар";
            obj.control = () => this.Images_control();
            return obj;
        }
        About_control() {
            const obj = new this.$.$mol_textarea();
            obj.value = (next) => this.about(next);
            return obj;
        }
        About_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Обо мне";
            obj.control = () => this.About_control();
            return obj;
        }
        contact_label(id) {
            return "";
        }
        Contact_label(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.contact_label(id)
            ];
            return obj;
        }
        contact_value(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Contact_control(id) {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.contact_value(id, next);
            return obj;
        }
        Contact_row(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Contact_label(id),
                this.Contact_control(id)
            ];
            return obj;
        }
        contact_rows() {
            return [
                this.Contact_row("0")
            ];
        }
        Contact_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.contact_rows();
            return obj;
        }
        Contact_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Контакты";
            obj.content = () => [
                this.Contact_list()
            ];
            return obj;
        }
        Company_position(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Позиция";
            obj.value = (next) => this.company_position(id, next);
            return obj;
        }
        Company_name(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Имя компании";
            obj.value = (next) => this.company_name(id, next);
            return obj;
        }
        Company_industry(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Сфера деятельности";
            obj.value = (next) => this.company_industry(id, next);
            return obj;
        }
        Company_tasks(id) {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "Рабочие обязанности";
            obj.value = (next) => this.company_tasks(id, next);
            return obj;
        }
        Company_date_start_label(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => "Начало работы";
            return obj;
        }
        Company_date_start(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.company_date_start(id, next);
            return obj;
        }
        Company_date_start_bar(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Company_date_start_label(id),
                this.Company_date_start(id)
            ];
            return obj;
        }
        Company_working_now(id) {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Работаю тут";
            obj.checked = (next) => this.company_working_now(id, next);
            return obj;
        }
        company_date_end_moment(id, next) {
            if (next !== undefined)
                return next;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Company_date_end(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (next) => this.company_date_end_moment(id, next);
            return obj;
        }
        date_end_content(id) {
            return [
                this.Company_working_now(id),
                this.Company_date_end(id)
            ];
        }
        Company_date_end_bar(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => this.date_end_content(id);
            return obj;
        }
        Company_date(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Company_date_start_bar(id),
                this.Company_date_end_bar(id)
            ];
            return obj;
        }
        company_delete(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Company_delete_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Company_delete(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.company_delete(id, next);
            obj.sub = () => [
                this.Company_delete_icon(id)
            ];
            return obj;
        }
        company_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Company_add_icon(id) {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Company_add(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.company_add(id, next);
            obj.sub = () => [
                this.Company_add_icon(id)
            ];
            return obj;
        }
        Company_action(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Company_delete(id),
                this.Company_add(id)
            ];
            return obj;
        }
        Company_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Company_position(id),
                this.Company_name(id),
                this.Company_industry(id),
                this.Company_tasks(id),
                this.Company_date(id),
                this.Company_action(id)
            ];
            return obj;
        }
        company_list() {
            return [
                this.Company_row("0")
            ];
        }
        Company_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.company_list();
            return obj;
        }
        Company_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Опыт работы";
            obj.content = () => [
                this.Company_list()
            ];
            return obj;
        }
        education_level_dict() {
            return {
                level0: "Среднее",
                level1: "Средне-специальное",
                level2: "Неоконченое высшнее",
                level3: "Высшее",
                level4: "Бакалавр",
                level5: "Магистр",
                level6: "Кандидат наук",
                level7: "Доктор наук"
            };
        }
        Education_level(id) {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.education_level(id, next);
            obj.options = () => this.education_level_dict();
            return obj;
        }
        Education_institution(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Учебное заведение";
            obj.value = (next) => this.education_institution(id, next);
            return obj;
        }
        Education_depratment(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Факультет";
            obj.value = (next) => this.education_department(id, next);
            return obj;
        }
        Education_specialty(id) {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Специальность";
            obj.value = (next) => this.education_specialty(id, next);
            return obj;
        }
        Education_year_end(id) {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.education_year_end(id, next);
            return obj;
        }
        education_delete(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Education_delete_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Education_delete(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.education_delete(id, next);
            obj.sub = () => [
                this.Education_delete_icon(id)
            ];
            return obj;
        }
        education_add(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Education_add_icon(id) {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Education_add(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.education_add(id, next);
            obj.sub = () => [
                this.Education_add_icon(id)
            ];
            return obj;
        }
        Education_action(id) {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Education_delete(id),
                this.Education_add(id)
            ];
            return obj;
        }
        Education_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Education_level(id),
                this.Education_institution(id),
                this.Education_depratment(id),
                this.Education_specialty(id),
                this.Education_year_end(id),
                this.Education_action(id)
            ];
            return obj;
        }
        education_list() {
            return [
                this.Education_row("0")
            ];
        }
        Education_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.education_list();
            return obj;
        }
        Education_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Образование";
            obj.content = () => [
                this.Education_list()
            ];
            return obj;
        }
        skill_add_name(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Skill_add_name() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Название";
            obj.value = (next) => this.skill_add_name(next);
            return obj;
        }
        skill_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Skill_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Skill_add_button() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.skill_add(next);
            obj.sub = () => [
                this.Skill_add_icon()
            ];
            return obj;
        }
        Skill_add() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Skill_add_name(),
                this.Skill_add_button()
            ];
            return obj;
        }
        skill_name(id) {
            return "";
        }
        Skill_name(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.skill_name(id)
            ];
            return obj;
        }
        skill_delete(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Skill_delete_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Skill_delete(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.skill_delete(id, next);
            obj.sub = () => [
                this.Skill_delete_icon(id)
            ];
            return obj;
        }
        Skill(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Skill_name(id),
                this.Skill_delete(id)
            ];
            return obj;
        }
        skill_list() {
            return [
                this.Skill("0")
            ];
        }
        Skill_list() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.skill_list();
            return obj;
        }
        Skills() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Skill_add(),
                this.Skill_list()
            ];
            return obj;
        }
        Skill_list_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Навыки и умения";
            obj.content = () => [
                this.Skills()
            ];
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Images_field(),
                this.About_field(),
                this.Contact_field(),
                this.Company_field(),
                this.Education_field(),
                this.Skill_list_field()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "images", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Images_control", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Images_field", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "About_control", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "About_field", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Contact_label", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "contact_value", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Contact_control", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Contact_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Contact_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Contact_field", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_position", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_name", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_industry", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_tasks", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date_start_label", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date_start", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date_start_bar", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_working_now", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "company_date_end_moment", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date_end", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date_end_bar", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_date", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "company_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_delete_icon", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "company_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_add_icon", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_action", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Company_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Company_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Company_field", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_level", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_institution", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_depratment", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_specialty", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_year_end", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "education_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_delete_icon", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "education_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_add_icon", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_action", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Education_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Education_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Education_field", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "skill_add_name", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_add_name", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "skill_add", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_add_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_add_button", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_add", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Skill_name", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "skill_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Skill_delete_icon", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Skill_delete", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_edit.prototype, "Skill", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skills", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Skill_list_field", null);
    __decorate([
        $mol_mem
    ], $care_app_person_edit.prototype, "Form", null);
    $.$care_app_person_edit = $care_app_person_edit;
})($ || ($ = {}));
//care/app/person/edit/-view.tree/edit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_person_edit extends $.$care_app_person_edit {
            images(next) {
                return this.person().images(next && next.slice(-1));
            }
            contact_rows() {
                return Object.keys(this.contact_dict()).map(id => this.Contact_row(id));
            }
            contact_label(id) {
                return this.contact_dict()[id];
            }
            contact_value(id, next) {
                return this.person()[`contact_${id}`](next);
            }
            company_add(id) {
                const next = this.person().company_list().slice();
                const index = next.indexOf(id);
                if (index === -1) {
                    next.push($mol_guid());
                }
                else {
                    next.splice(index + 1, 0, $mol_guid());
                }
                this.person().company_list(next);
            }
            company_delete(id) {
                const list = this.person().company_list();
                this.person().company_list(list.filter(id2 => id2 !== id));
            }
            company_list() {
                const list = this.person().company_list();
                if (list.length === 0) {
                    return [this.Company_add(null)];
                }
                return list.map(id => this.Company_row(id));
            }
            date_end_content(id) {
                return [
                    this.Company_working_now(id),
                    ...!this.company_working_now(id) ? [this.Company_date_end(id)] : [],
                ];
            }
            company_date_end_moment(id, next) {
                if (!this.company_working_now(id)) {
                    return this.person().company_date_end(id, next) ?? new $mol_time_moment;
                }
                return next ?? new $mol_time_moment;
            }
            education_add(id) {
                const next = this.person().education_list().slice();
                const index = next.indexOf(id);
                if (index === -1) {
                    next.push($mol_guid());
                }
                else {
                    next.splice(index + 1, 0, $mol_guid());
                }
                this.person().education_list(next);
            }
            education_delete(id) {
                const list = this.person().education_list();
                this.person().education_list(list.filter(id2 => id2 !== id));
            }
            education_list() {
                const list = this.person().education_list();
                if (list.length === 0) {
                    return [this.Education_add(null)];
                }
                return list.map(id => this.Education_row(id));
            }
            skill_list() {
                const list = this.person().skill_list();
                if (list.length === 0) {
                    return [];
                }
                return list.map(id => this.Skill(id));
            }
            skill_add() {
                const name = this.skill_add_name();
                if (!name)
                    return;
                const list = this.person().skill_list();
                this.person().skill_list([...list, name]);
                this.skill_add_name('');
            }
            skill_delete(id) {
                const list = this.person().skill_list();
                this.person().skill_list(list.filter(id2 => id2 !== id));
            }
            skill_name(id) {
                return id;
            }
        }
        $$.$care_app_person_edit = $care_app_person_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/person/edit/edit.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_labeler extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                care_labeler_dir: this.dir()
            };
        }
        sub() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        dir() {
            return "column";
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $care_labeler.prototype, "Content", null);
    $.$care_labeler = $care_labeler;
})($ || ($ = {}));
//care/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("care/labeler/labeler.view.css", "[care_labeler_content] [care_labeler_label] {\n\tfont-weight: normal;\n}\n\n[care_labeler_content] [care_labeler] {\n\tpadding: 0;\n}\n");
})($ || ($ = {}));
//care/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        $mol_style_define($.$care_labeler, {
            padding: $mol_gap.space,
            Label: {
                color: $mol_theme.shade,
                font: {
                    weight: 'bold',
                },
            },
            Content: {
                padding: {
                    left: $mol_gap.block,
                },
                whiteSpace: 'break-spaces',
                flex: {
                    wrap: 'wrap',
                },
            },
            '@': {
                care_labeler_dir: {
                    column: {
                        flex: {
                            direction: 'column',
                        },
                    },
                    row: {
                        alignItems: 'flex-start',
                        flex: {
                            direction: 'row',
                        },
                        Label: {
                            maxWidth: rem(8),
                            flex: {
                                grow: 1,
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/labeler/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_person_page extends $mol_page {
        images() {
            return this.person().images();
        }
        name_full() {
            return this.person().name_full();
        }
        about() {
            return this.person().about();
        }
        contact_telegram() {
            return this.person().contact_telegram();
        }
        contact_mail() {
            return this.person().contact_mail();
        }
        contact_website() {
            return this.person().contact_website();
        }
        company_name(id) {
            return this.person().company_name(id);
        }
        company_position(id) {
            return this.person().company_position(id);
        }
        company_industry(id) {
            return this.person().company_industry(id);
        }
        company_tasks(id) {
            return this.person().company_tasks(id);
        }
        company_date_start(id) {
            return this.person().company_date_start(id);
        }
        company_date_end(id) {
            return this.person().company_date_end(id);
        }
        company_working_now(id) {
            return this.person().company_working_now(id);
        }
        education_level(id) {
            return this.person().education_level(id);
        }
        education_institution(id) {
            return this.person().education_institution(id);
        }
        education_department(id) {
            return this.person().education_department(id);
        }
        education_specialty(id) {
            return this.person().education_specialty(id);
        }
        education_year_end(id) {
            return this.person().education_year_end(id);
        }
        person() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        contact_dict() {
            return this.Page_edit().contact_dict();
        }
        education_level_dict() {
            return this.Page_edit().education_level_dict();
        }
        Page_edit() {
            const obj = new this.$.$care_app_person_edit();
            return obj;
        }
        title() {
            return "Моя страница";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        working_now() {
            return "По настоящее время";
        }
        body() {
            return [
                this.Person_head(),
                this.Person_body()
            ];
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                person: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        Image() {
            const obj = new this.$.$mol_image2();
            obj.links = () => this.images();
            return obj;
        }
        Name_full() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.name_full()
            ];
            return obj;
        }
        Person_head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Image(),
                this.Name_full()
            ];
            return obj;
        }
        About() {
            const obj = new this.$.$care_labeler();
            obj.title = () => "Обо мне";
            obj.content = () => [
                this.about()
            ];
            return obj;
        }
        Contact_telegram() {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Телеграм";
            obj.content = () => [
                this.contact_telegram()
            ];
            return obj;
        }
        Contanct_mail() {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Почта";
            obj.content = () => [
                this.contact_mail()
            ];
            return obj;
        }
        Website_link_iconed() {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.contact_website();
            return obj;
        }
        Contanct_website() {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Сайт";
            obj.content = () => [
                this.Website_link_iconed()
            ];
            return obj;
        }
        contact_rows() {
            return [
                this.Contact_telegram(),
                this.Contanct_mail(),
                this.Contanct_website()
            ];
        }
        Contact_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.contact_rows();
            return obj;
        }
        Contact() {
            const obj = new this.$.$care_labeler();
            obj.title = () => "Контакты";
            obj.content = () => [
                this.Contact_list()
            ];
            return obj;
        }
        Company_position(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Позиция";
            obj.content = () => [
                this.company_position(id)
            ];
            return obj;
        }
        Company_name(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Компания";
            obj.content = () => [
                this.company_name(id)
            ];
            return obj;
        }
        Company_industry(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Сфера деятельности";
            obj.content = () => [
                this.company_industry(id)
            ];
            return obj;
        }
        Company_tasks(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "column";
            obj.title = () => "Обязанности";
            obj.content = () => [
                this.company_tasks(id)
            ];
            return obj;
        }
        company_date_start_string(id) {
            return "";
        }
        Company_date_start(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Начало работы";
            obj.content = () => [
                this.company_date_start_string(id)
            ];
            return obj;
        }
        company_date_end_string(id) {
            return "";
        }
        Company_date_end(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Окончание";
            obj.content = () => [
                this.company_date_end_string(id)
            ];
            return obj;
        }
        company_row_rows(id) {
            return [
                this.Company_position(id),
                this.Company_name(id),
                this.Company_industry(id),
                this.Company_tasks(id),
                this.Company_date_start(id),
                this.Company_date_end(id)
            ];
        }
        Company_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.company_row_rows(id);
            return obj;
        }
        company_rows() {
            return [
                this.Company_row("0")
            ];
        }
        Company_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.company_rows();
            return obj;
        }
        Company() {
            const obj = new this.$.$care_labeler();
            obj.title = () => "Опыт работы";
            obj.content = () => [
                this.Company_list()
            ];
            return obj;
        }
        education_level_string(id) {
            return "";
        }
        Education_level(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Уровень";
            obj.content = () => [
                this.education_level_string(id)
            ];
            return obj;
        }
        Education_institution(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Учебное заведение";
            obj.content = () => [
                this.education_institution(id)
            ];
            return obj;
        }
        Education_depratment(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Факультет";
            obj.content = () => [
                this.education_department(id)
            ];
            return obj;
        }
        Education_specialty(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Специальность";
            obj.content = () => [
                this.education_specialty(id)
            ];
            return obj;
        }
        Education_year_end(id) {
            const obj = new this.$.$care_labeler();
            obj.dir = () => "row";
            obj.title = () => "Год выпуска";
            obj.content = () => [
                this.education_year_end(id)
            ];
            return obj;
        }
        Education_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Education_level(id),
                this.Education_institution(id),
                this.Education_depratment(id),
                this.Education_specialty(id),
                this.Education_year_end(id)
            ];
            return obj;
        }
        education_rows() {
            return [
                this.Education_row("0")
            ];
        }
        Eduaction_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.education_rows();
            return obj;
        }
        Education() {
            const obj = new this.$.$care_labeler();
            obj.title = () => "Образование";
            obj.content = () => [
                this.Eduaction_list()
            ];
            return obj;
        }
        skill_name(id) {
            return "";
        }
        Skill(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.skill_name(id)
            ];
            return obj;
        }
        skill_list() {
            return [
                this.Skill("0")
            ];
        }
        Skill_list() {
            const obj = new this.$.$care_labeler();
            obj.title = () => "Навыки и умения";
            obj.content = () => this.skill_list();
            return obj;
        }
        Person_body() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.About(),
                this.Contact(),
                this.Company(),
                this.Education(),
                this.Skill_list()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "person", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Page_edit", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Image", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Name_full", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Person_head", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "About", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Contact_telegram", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Contanct_mail", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Website_link_iconed", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Contanct_website", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Contact_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Contact", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_position", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_name", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_industry", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_tasks", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_date_start", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_date_end", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Company_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Company_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Company", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_level", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_institution", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_depratment", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_specialty", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_year_end", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Education_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Eduaction_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Education", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_page.prototype, "Skill", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Skill_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_page.prototype, "Person_body", null);
    $.$care_app_person_page = $care_app_person_page;
})($ || ($ = {}));
//care/app/person/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$care_app_person_page, {
            Body: {
                padding: $mol_gap.block,
            },
            Image: {
                width: rem(7),
                border: {
                    radius: per(50),
                },
                margin: {
                    right: $mol_gap.block,
                },
            },
            Name_full: {
                width: per(100),
                maxWidth: calc('100% - 7rem'),
                font: {
                    size: rem(1.25),
                },
            },
            Person_head: {
                width: per(100),
                alignItems: 'center',
                flex: {
                    direction: 'row',
                },
                margin: {
                    bottom: $mol_gap.block,
                },
            },
            About: {
                whiteSpace: 'pre',
            },
            Website_link_iconed: {
                padding: 0,
            },
            Skill: {
                padding: $mol_gap.text,
                color: $mol_theme.special,
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/person/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_person_page extends $.$care_app_person_page {
            company_rows() {
                return this.person().company_list().map(id => this.Company_row(id));
            }
            company_date_start_string(id) {
                return this.person().company_date_start(id).toString('MM.YYYY');
            }
            company_date_end_string(id) {
                if (this.person().company_working_now(id))
                    return this.working_now();
                return this.person().company_date_end(id)?.toString('MM.YYYY') ?? '';
            }
            education_rows() {
                return this.person().education_list().map(id => this.Education_row(id));
            }
            education_level_string(id) {
                return this.education_level_dict()[this.person().education_level(id)];
            }
            skill_list() {
                return this.person().skill_list().map(key => this.Skill(key));
            }
            skill_name(key) {
                return key;
            }
        }
        $$.$care_app_person_page = $care_app_person_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/person/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_person_activity extends $mol_page {
        person() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        title() {
            return "Деятельность";
        }
        msg() {
            return {
                wait: "На рассмотрении",
                apply: "Принята",
                decline: "Отклонена"
            };
        }
        body() {
            return [
                this.Tabs()
            ];
        }
        job_id(id) {
            return "";
        }
        job_name(id) {
            return "";
        }
        Job_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                job: this.job_id(id)
            });
            obj.title = () => this.job_name(id);
            return obj;
        }
        response_status(id) {
            return "";
        }
        Response_status(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.response_status(id);
            return obj;
        }
        Response_list_row(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Job_link(id),
                this.Response_status(id)
            ];
            return obj;
        }
        response_list_rows() {
            return [
                this.Response_list_row("0")
            ];
        }
        Response_list() {
            const obj = new this.$.$mol_list();
            obj.title = () => "Заявки";
            obj.rows = () => this.response_list_rows();
            return obj;
        }
        Tabs() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.Response_list()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_person_activity.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_activity.prototype, "Job_link", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_activity.prototype, "Response_status", null);
    __decorate([
        $mol_mem_key
    ], $care_app_person_activity.prototype, "Response_list_row", null);
    __decorate([
        $mol_mem
    ], $care_app_person_activity.prototype, "Response_list", null);
    __decorate([
        $mol_mem
    ], $care_app_person_activity.prototype, "Tabs", null);
    $.$care_app_person_activity = $care_app_person_activity;
})($ || ($ = {}));
//care/app/person/activity/-view.tree/activity.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_person_activity extends $.$care_app_person_activity {
            domain() {
                return this.person().domain();
            }
            job() {
                return this.domain().job();
            }
            response_list_rows() {
                return this.person().response_list().map(obj => this.Response_list_row(obj.id()));
            }
            job_id(id) {
                return id;
            }
            job_name(id) {
                return this.job().item(id).name();
            }
            response_status(id) {
                const key = this.person().response_status(this.job().item(id));
                return this.msg()[key];
            }
        }
        $$.$care_app_person_activity = $care_app_person_activity;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/person/activity/activity.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tune extends $mol_icon {
        path() {
            return "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z";
        }
    }
    $.$mol_icon_tune = $mol_icon_tune;
})($ || ($ = {}));
//mol/icon/tune/-view.tree/tune.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const host = {};
        const fiber = new $mol_wire_task(calculate.name, calculate, host, []);
        fiber.plan();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_wire_task(this + '.' + calculate.name, calculate, this, args);
            return fiber.async();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_sync(request) {
        throw new Error('Use $mol_wire_sync instead');
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        $mol_wire_fiber.sync();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    class $mol_fiber_solid extends $mol_wrapper {
        static func(task) {
            return task;
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber {
        static method = $mol_action;
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//mol/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_search_filter extends $mol_page {
        title() {
            return "Фильтры";
        }
        tools() {
            return [
                this.Close_page()
            ];
        }
        body() {
            return [
                this.List()
            ];
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                search_filter: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        Filter() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        back(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Back() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "К поиску";
            obj.click = (next) => this.back(next);
            return obj;
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Filter(),
                this.Back()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "back", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "Back", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter.prototype, "List", null);
    $.$care_app_search_filter = $care_app_search_filter;
    class $care_app_search_filter_dict extends $care_labeler {
        dict() {
            return {};
        }
        title() {
            return "Имя фильтра";
        }
        content() {
            return [
                this.Check_list()
            ];
        }
        check_title(id) {
            return "";
        }
        checked(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Check(id) {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.check_title(id);
            obj.checked = (next) => this.checked(id, next);
            return obj;
        }
        check_rows() {
            return [
                this.Check("0")
            ];
        }
        Check_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.check_rows();
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $care_app_search_filter_dict.prototype, "checked", null);
    __decorate([
        $mol_mem_key
    ], $care_app_search_filter_dict.prototype, "Check", null);
    __decorate([
        $mol_mem
    ], $care_app_search_filter_dict.prototype, "Check_list", null);
    $.$care_app_search_filter_dict = $care_app_search_filter_dict;
})($ || ($ = {}));
//care/app/search/filter/-view.tree/filter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_search_filter, {
            Body: {
                padding: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/search/filter/filter.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_search_filter extends $.$care_app_search_filter {
            back() {
                this.$.$mol_state_arg.value('search_filter', null);
            }
        }
        $$.$care_app_search_filter = $care_app_search_filter;
        class $care_app_search_filter_dict extends $.$care_app_search_filter_dict {
            check_rows() {
                return Object.keys(this.dict()).map(key => this.Check(key));
            }
            check_title(key) {
                return this.dict()[key];
            }
            checked(key, next) {
                return next ?? false;
            }
            filter(value) {
                const keys = Object.keys(this.dict());
                let some_checked = false;
                const result = keys.some(key => {
                    const flag = this.checked(key);
                    if (flag === true)
                        some_checked = true;
                    return flag && key === value;
                });
                return some_checked ? result : true;
            }
        }
        __decorate([
            $mol_mem_key
        ], $care_app_search_filter_dict.prototype, "checked", null);
        $$.$care_app_search_filter_dict = $care_app_search_filter_dict;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/search/filter/filter.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_job_search extends $mol_list {
        job_service() {
            const obj = new this.$.$care_app_job_service();
            return obj;
        }
        title() {
            return "Вакансии";
        }
        experience_dict() {
            return this.Job_add_page().experience_dict();
        }
        format_dict() {
            return this.Job_add_page().format_dict();
        }
        duration_dict() {
            return this.Job_add_page().duration_dict();
        }
        work_schedule_dict() {
            return this.Job_add_page().work_schedule_dict();
        }
        pay_dict() {
            return this.Job_add_page().pay_dict();
        }
        Job_add_page() {
            const obj = new this.$.$care_app_job_add();
            return obj;
        }
        rows() {
            return [
                this.Search(),
                this.Job_list()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Exp_filter(),
                this.Format_filter(),
                this.Duration_filter(),
                this.Work_schedule_filter(),
                this.Pay_filter()
            ];
            return obj;
        }
        query(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        suggests() {
            return [];
        }
        Search() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.query(next);
            obj.suggests = () => this.suggests();
            return obj;
        }
        job_name(id) {
            return "";
        }
        Job_name(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.query();
            obj.haystack = () => this.job_name(id);
            return obj;
        }
        job_id(id) {
            return "";
        }
        Job_row(id) {
            const obj = new this.$.$mol_link();
            obj.sub = () => [
                this.Job_name(id)
            ];
            obj.arg = () => ({
                job: this.job_id(id)
            });
            return obj;
        }
        rows_filtered() {
            return [
                this.Job_row("0")
            ];
        }
        Job_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.rows_filtered();
            return obj;
        }
        Exp_filter() {
            const obj = new this.$.$care_app_search_filter_dict();
            obj.dict = () => this.experience_dict();
            obj.title = () => "Опыт работы";
            return obj;
        }
        Format_filter() {
            const obj = new this.$.$care_app_search_filter_dict();
            obj.dict = () => this.format_dict();
            obj.title = () => "Формат";
            return obj;
        }
        Duration_filter() {
            const obj = new this.$.$care_app_search_filter_dict();
            obj.dict = () => this.duration_dict();
            obj.title = () => "Продолжительность трудоустройства";
            return obj;
        }
        Work_schedule_filter() {
            const obj = new this.$.$care_app_search_filter_dict();
            obj.dict = () => this.work_schedule_dict();
            obj.title = () => "График";
            return obj;
        }
        Pay_filter() {
            const obj = new this.$.$care_app_search_filter_dict();
            obj.dict = () => this.pay_dict();
            obj.title = () => "Оплата";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "job_service", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Job_add_page", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Search", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_search.prototype, "Job_name", null);
    __decorate([
        $mol_mem_key
    ], $care_app_job_search.prototype, "Job_row", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Job_list", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Exp_filter", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Format_filter", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Duration_filter", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Work_schedule_filter", null);
    __decorate([
        $mol_mem
    ], $care_app_job_search.prototype, "Pay_filter", null);
    $.$care_app_job_search = $care_app_job_search;
})($ || ($ = {}));
//care/app/job/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per } = $mol_style_unit;
        $mol_style_define($.$care_app_job_search, {
            Search: {
                width: per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/search/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_job_search extends $.$care_app_job_search {
            domain() {
                return this.job_service().domain();
            }
            rows_filtered() {
                const filter = this.job_service().find(obj => this.job_filter(obj));
                const search = filter.filter(obj => this.job_search(obj));
                return search.map(obj => this.Job_row(obj.id()));
            }
            job_id(id) {
                return id;
            }
            job_name(id) {
                return this.domain().job().item(id).name();
            }
            job_text(obj) {
                const text = [
                    obj.name(),
                    obj.functions(),
                    obj.requests(),
                    obj.provided(),
                    obj.experience(),
                    obj.format(),
                    obj.duration(),
                    obj.work_schedule(),
                    obj.pay(),
                    obj.project().name(),
                    obj.project().org().name(),
                ].join(' ').toLowerCase();
                return text;
            }
            job_search(obj) {
                const index = this.job_text(obj).indexOf(this.query().toLocaleLowerCase()) >= 0;
                return index;
            }
            job_filter(obj) {
                const flags = [
                    this.Exp_filter().filter(obj.experience()),
                    this.Pay_filter().filter(obj.pay()),
                    this.Duration_filter().filter(obj.duration()),
                    this.Work_schedule_filter().filter(obj.work_schedule()),
                    this.Format_filter().filter(obj.format()),
                ];
                const result = flags.every(val => val === true);
                return result;
            }
        }
        __decorate([
            $mol_mem
        ], $care_app_job_search.prototype, "rows_filtered", null);
        __decorate([
            $mol_mem_key
        ], $care_app_job_search.prototype, "job_text", null);
        __decorate([
            $mol_mem_key
        ], $care_app_job_search.prototype, "job_search", null);
        __decorate([
            $mol_mem_key
        ], $care_app_job_search.prototype, "job_filter", null);
        $$.$care_app_job_search = $care_app_job_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/job/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app_search extends $mol_page {
        job_service() {
            return this.domain().job();
        }
        domain() {
            const obj = new this.$.$care_app_domain();
            return obj;
        }
        tools() {
            return [
                this.Filter_open(),
                this.Close_page()
            ];
        }
        title() {
            return "Поиск";
        }
        body() {
            return [
                this.Tabs()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Filter_open_icon() {
            const obj = new this.$.$mol_icon_tune();
            return obj;
        }
        Filter_open() {
            const obj = new this.$.$mol_link();
            obj.hint = () => "Фильтры";
            obj.arg = () => ({
                search_filter: ""
            });
            obj.sub = () => [
                this.Filter_open_icon()
            ];
            return obj;
        }
        Close_page_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close_page() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                search: null
            });
            obj.sub = () => [
                this.Close_page_icon()
            ];
            return obj;
        }
        Job_search() {
            const obj = new this.$.$care_app_job_search();
            obj.job_service = () => this.job_service();
            return obj;
        }
        Tabs() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.Job_search()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "domain", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Filter_open_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Filter_open", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Close_page_icon", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Close_page", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Job_search", null);
    __decorate([
        $mol_mem
    ], $care_app_search.prototype, "Tabs", null);
    $.$care_app_search = $care_app_search;
})($ || ($ = {}));
//care/app/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$care_app_search, {
            Body: {},
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/search/seach.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app_search extends $.$care_app_search {
            Filter() {
                return this.Tabs().Content().Filter();
            }
        }
        $$.$care_app_search = $care_app_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $care_app extends $mol_book2 {
        attr() {
            return {
                mol_theme: "$mol_theme_light"
            };
        }
        person() {
            return this.domain().person();
        }
        sign() {
            return this.domain().sign();
        }
        org() {
            return this.domain().org();
        }
        project_service() {
            return this.domain().project();
        }
        job_service() {
            return this.domain().job();
        }
        person_service() {
            return this.domain().person();
        }
        domain() {
            const obj = new this.$.$care_app_domain();
            return obj;
        }
        pages() {
            return [
                this.Sign_up_page(),
                this.Sign_in_page(),
                this.Nav_page(),
                this.Org_list_page(),
                this.Org_page(),
                this.Org_add_page(),
                this.Project_page(),
                this.Project_add_page(),
                this.Job_page(),
                this.Job_add_page(),
                this.Person_page(),
                this.Person_edit_page(),
                this.Person_activity_page(),
                this.Search_page(),
                this.Search_filter_page()
            ];
        }
        Sign_up_page() {
            const obj = new this.$.$care_app_sign_up();
            return obj;
        }
        Sign_in_page() {
            const obj = new this.$.$care_app_sign_in();
            return obj;
        }
        sign_out(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Nav_page() {
            const obj = new this.$.$care_app_nav();
            obj.user = () => this.user();
            obj.title = () => "Забота";
            obj.sign_out = (next) => this.sign_out(next);
            return obj;
        }
        user() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        Org_list_page() {
            const obj = new this.$.$care_app_org_list();
            obj.user = () => this.user();
            return obj;
        }
        org_opened() {
            const obj = new this.$.$care_app_org();
            return obj;
        }
        Org_page() {
            const obj = new this.$.$care_app_org_page();
            obj.org = () => this.org_opened();
            return obj;
        }
        Org_add_page() {
            const obj = new this.$.$care_app_org_add();
            obj.org = () => this.org();
            return obj;
        }
        project_opened() {
            const obj = new this.$.$care_app_project();
            return obj;
        }
        Project_page() {
            const obj = new this.$.$care_app_project_page();
            obj.project = () => this.project_opened();
            return obj;
        }
        Project_add_page() {
            const obj = new this.$.$care_app_project_add();
            obj.project_service = () => this.project_service();
            obj.org = () => this.org_opened();
            return obj;
        }
        job_opened() {
            const obj = new this.$.$care_app_job();
            return obj;
        }
        Job_page() {
            const obj = new this.$.$care_app_job_page();
            obj.job = () => this.job_opened();
            return obj;
        }
        Job_add_page() {
            const obj = new this.$.$care_app_job_add();
            obj.job_service = () => this.job_service();
            obj.project = () => this.project_opened();
            return obj;
        }
        person_opened() {
            const obj = new this.$.$care_app_person();
            return obj;
        }
        Person_page() {
            const obj = new this.$.$care_app_person_page();
            obj.person = () => this.person_opened();
            return obj;
        }
        Person_edit_page() {
            const obj = new this.$.$care_app_person_edit();
            obj.person = () => this.user();
            return obj;
        }
        Person_activity_page() {
            const obj = new this.$.$care_app_person_activity();
            obj.person = () => this.user();
            return obj;
        }
        Search_filter() {
            return this.Search_page().Filter();
        }
        Search_page() {
            const obj = new this.$.$care_app_search();
            obj.domain = () => this.domain();
            return obj;
        }
        Search_filter_page() {
            const obj = new this.$.$care_app_search_filter();
            obj.Filter = () => this.Search_filter();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $care_app.prototype, "domain", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Sign_up_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Sign_in_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "sign_out", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Nav_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "user", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Org_list_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "org_opened", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Org_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Org_add_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "project_opened", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Project_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Project_add_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "job_opened", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Job_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Job_add_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "person_opened", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Person_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Person_edit_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Person_activity_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Search_page", null);
    __decorate([
        $mol_mem
    ], $care_app.prototype, "Search_filter_page", null);
    $.$care_app = $care_app;
})($ || ($ = {}));
//care/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        $mol_style_define($.$care_app, {
            Nav_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Org_add_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Org_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Org_list_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Project_add_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Project_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Job_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Job_add_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Person_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Person_edit_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Person_activity_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Search_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
            Search_filter_page: {
                flex: {
                    basis: rem(22),
                    shrink: 0,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/app.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $care_app extends $.$care_app {
            user() {
                return this.domain().user();
            }
            arg() {
                return this.$.$mol_state_arg.dict();
            }
            org_opened() {
                return this.org().item(this.arg().org);
            }
            project_opened() {
                return this.project_service().item(this.arg().project);
            }
            job_opened() {
                return this.job_service().item(this.arg().job);
            }
            person_opened() {
                return this.person_service().item(this.arg().person);
            }
            pages() {
                if (!this.user()) {
                    return [
                        ...this.arg().sign === 'in' ? [this.Sign_in_page()] : [],
                        ...this.arg().sign === 'up' ? [this.Sign_up_page()] : [],
                        ...!this.arg().sign ? [this.Sign_in_page()] : [],
                    ];
                }
                return [
                    this.Nav_page(),
                    ...this.arg().person ? [this.Person_page()] : [],
                    ...this.arg().person_edit === '' ? [this.Person_edit_page()] : [],
                    ...this.arg().person_activity === '' ? [this.Person_activity_page()] : [],
                    ...this.arg().search === '' ? [this.Search_page()] : [],
                    ...this.arg().search_filter === '' ? [this.Search_filter_page()] : [],
                    ...this.arg().orgs === '' ? [this.Org_list_page()] : [],
                    ...this.arg().org ? [this.Org_page()] : [],
                    ...this.arg().org === '' ? [this.Org_add_page()] : [],
                    ...this.arg().project === '' && this.arg().org ? [this.Project_add_page()] : [],
                    ...this.arg().project ? [this.Project_page()] : [],
                    ...this.arg().project && this.arg().job === '' ? [this.Job_add_page()] : [],
                    ...this.arg().job ? [this.Job_page()] : [],
                ];
            }
            sign_out() {
                this.sign().token('');
            }
        }
        $$.$care_app = $care_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//care/app/app.view.ts

//# sourceMappingURL=node.js.map