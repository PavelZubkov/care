declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        card: $mol_style_func<"var", "--mol_theme_card">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        special: $mol_style_func<"var", "--mol_theme_special">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): any;
        toJSON(): any;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, [...Args], Result>;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[], Result>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => Result>): {
        value: (this: Host, ...args: Args) => Result;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => Result) | undefined;
        set?: ((value: (...args: Args) => Result) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result, keys: number): (host: Host, args: Args) => $mol_wire_atom<Host, [...Args], Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_mem<Keys extends number>(keys: Keys): <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: string | Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    function $mol_wire_mem_func<Keys extends number>(keys: Keys): <Result, Host, Args extends unknown[], Func extends (this: Host, ...args: Args) => Result>(func: Func) => Func;
}

declare namespace $ {
    let $mol_mem: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: string | Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: string | Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key2: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: string | Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key3: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: string | Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, next?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host : (...args: Args) => Promise<Res> : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => infer Res_1 ? Res_1 extends Promise<any> ? Host[key] : (...args: Args_1) => Promise<Res_1> : Host[key]; };
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): Promise<void>;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer';
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint';
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'>])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
            size?: (BG_size | [BG_size, BG_size])[];
        };
        backdropFilter: string;
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch';
        scrollbar?: {
            color?: readonly [Color, Color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: {
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: Directions<Color> | Common;
            width?: Directions<Length> | Common;
        };
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
        opacity: number;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: {
        readonly block: $mol_style_func<"var", "--mol_gap_block">;
        readonly text: $mol_style_func<"var", "--mol_gap_text">;
        readonly round: $mol_style_func<"var", "--mol_gap_round">;
        readonly space: $mol_style_func<"var", "--mol_gap_space">;
        readonly blur: $mol_style_func<"var", "--mol_gap_blur">;
    };
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(val?: any): number;
        scroll_left(val?: any): number;
        field(): {
            tabIndex: number;
        };
        event(): {
            scroll: (event?: any) => any;
        };
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        sub(): readonly $mol_view[];
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<infer Res2> ? (...args: Args) => Res2 : Host : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => Promise<infer Res_1> ? (...args: Args_1) => Res_1 : Host[key]; };
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
}

declare namespace $ {
    type $hyoo_crowd_chunk = {
        readonly head: number;
        readonly self: number;
        readonly prev: number;
        readonly next: number;
        readonly peer: number;
        readonly time: number;
        readonly data: unknown;
    };
    function $hyoo_crowd_chunk_pack(this: $, raw: $hyoo_crowd_chunk): Uint8Array;
    function $hyoo_crowd_chunk_unpack(this: $, pack: Uint8Array): $hyoo_crowd_chunk;
    function $hyoo_crowd_chunk_compare(left: $hyoo_crowd_chunk, right: $hyoo_crowd_chunk): number;
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): Schema["Indexes"] extends infer T ? { [Name in keyof T]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema['Doc'];
        }>; } : never;
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $hyoo_crowd_clock extends Map<$hyoo_crowd_chunk['peer'], $hyoo_crowd_chunk['time']> {
        now: number;
        constructor(entries?: Iterable<readonly [number, number]>);
        sync(right: $hyoo_crowd_clock): void;
        see(peer: number, time: number): number;
        fresh(peer: number, time: number): boolean;
        ahead(clock: $hyoo_crowd_clock): boolean;
        tick(peer: number): number;
        clear(): void;
    }
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_crypto_auditor_pair(this: $): Promise<{
        public: $mol_crypto_auditor_public;
        private: $mol_crypto_auditor_private;
    }>;
    class $mol_crypto_auditor_public extends Object {
        readonly native: CryptoKey & {
            type: 'public';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'public';
        });
        static from(serial: DataView | ArrayBuffer): Promise<$mol_crypto_auditor_public>;
        serial(): Promise<ArrayBuffer>;
        verify(data: DataView | ArrayBuffer, sign: DataView | ArrayBuffer): Promise<boolean>;
    }
    class $mol_crypto_auditor_private extends Object {
        readonly native: CryptoKey & {
            type: 'private';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'private';
        });
        static from(serial: DataView | ArrayBuffer): Promise<$mol_crypto_auditor_private>;
        serial(): Promise<ArrayBuffer>;
        sign(data: DataView | ArrayBuffer): Promise<ArrayBuffer>;
    }
    const $mol_crypto_auditor_sign_size = 64;
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array;
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]>;
    };
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_booked: Set<string> | null;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    class $hyoo_crowd_node {
        readonly doc: $hyoo_crowd_doc;
        readonly head: $hyoo_crowd_chunk['head'];
        constructor(doc: $hyoo_crowd_doc, head: $hyoo_crowd_chunk['head']);
        static for<Node extends typeof $hyoo_crowd_node>(this: Node, doc: $hyoo_crowd_doc, head?: $hyoo_crowd_chunk['head']): InstanceType<Node>;
        as<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>;
        chunks(): readonly $hyoo_crowd_chunk[];
        nodes<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>[];
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next?: readonly unknown[]): readonly unknown[];
        insert(next: readonly unknown[], from?: number, to?: number): void;
        move(from: number, to: number): $hyoo_crowd_chunk;
        cut(seat: number): $hyoo_crowd_chunk;
    }
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
    }
}

declare namespace $ {
    class $hyoo_crowd_doc {
        readonly peer: number;
        constructor(peer?: number);
        destructor(): void;
        readonly _clock: $hyoo_crowd_clock;
        get clock(): $hyoo_crowd_clock;
        readonly pub: $mol_wire_pub;
        protected _chunk_all: Map<`${number}/${number}`, $hyoo_crowd_chunk>;
        protected _chunk_lists: Map<number, $hyoo_crowd_chunk[] & {
            dirty: boolean;
        }>;
        protected _chunk_alive: Map<number, $hyoo_crowd_chunk[] | undefined>;
        size(): number;
        chunk(head: $hyoo_crowd_chunk['head'], self: $hyoo_crowd_chunk['self']): $hyoo_crowd_chunk | null;
        protected chunk_list(head: $hyoo_crowd_chunk['head']): $hyoo_crowd_chunk[] & {
            dirty: boolean;
        };
        chunk_alive(head: $hyoo_crowd_chunk['head']): readonly $hyoo_crowd_chunk[];
        root: $hyoo_crowd_struct;
        id_new(): number;
        fork(peer: number): $hyoo_crowd_doc;
        delta(clock?: $hyoo_crowd_clock): readonly $hyoo_crowd_chunk[];
        toJSON(): readonly $hyoo_crowd_chunk[];
        resort(head: $hyoo_crowd_chunk['head']): $hyoo_crowd_chunk[] & {
            dirty: boolean;
        };
        apply(delta: readonly $hyoo_crowd_chunk[]): this;
        put(head: $hyoo_crowd_chunk['head'], self: $hyoo_crowd_chunk['self'], prev: $hyoo_crowd_chunk['prev'], data: $hyoo_crowd_chunk['data']): $hyoo_crowd_chunk;
        wipe(chunk: $hyoo_crowd_chunk): $hyoo_crowd_chunk;
        move(chunk: $hyoo_crowd_chunk, head: $hyoo_crowd_chunk['head'], prev: $hyoo_crowd_chunk['prev']): $hyoo_crowd_chunk;
        insert(chunk: $hyoo_crowd_chunk, head: $hyoo_crowd_chunk['head'], seat: number): $hyoo_crowd_chunk;
    }
}

declare namespace $ {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next?: unknown): unknown;
        str(next?: string): string;
        numb(next?: number): number;
        bool(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<$mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | string[];
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {
    let $hyoo_crowd_tokenizer: $mol_regexp<{
        readonly token: string;
        readonly indents: string;
        readonly spaces: string;
        readonly emoji: string;
        readonly Word: string;
        readonly word: string;
        readonly others: string;
        readonly 'line-break': string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly tab: string;
    }>;
}

declare namespace $ {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): {
            chunk: number;
            offset: number;
        };
        offset_by_point(point: {
            chunk: number;
            offset: number;
        }): number;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<void>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $mol_state_shared extends $mol_object2 {
        db(): $mol_db_database<{
            Docs: {
                Key: [string];
                Doc: readonly $hyoo_crowd_chunk[];
                Indexes: {};
            };
        }>;
        db_init(): Promise<$mol_db_database<{
            Docs: {
                Key: [string];
                Doc: readonly $hyoo_crowd_chunk[];
                Indexes: {};
            };
        }>>;
        server(): string;
        db_clock: $hyoo_crowd_clock;
        peer(): number;
        keys_serial(): {
            public: string;
            private: string;
        };
        keys(): {
            public: $mol_crypto_auditor_public;
            private: $mol_crypto_auditor_private;
        };
        store(): $hyoo_crowd_doc;
        path(): string;
        node(): $hyoo_crowd_struct;
        doc(key: string): $mol_state_shared;
        sub(key: string): $mol_state_shared;
        request_done(next?: (res: unknown) => void): (res: unknown) => void;
        sync(): null;
        db_sync(): null;
        db_load(): Promise<void>;
        db_save(): Promise<null>;
        server_sync(): null;
        value(next?: unknown): unknown;
        list(next?: readonly unknown[]): readonly unknown[];
        text(next?: string): string;
        selection(next?: number[]): number[];
        selection_range(next?: {
            chunk: number;
            offset: number;
        }[]): {
            chunk: number;
            offset: number;
        }[];
        server_clock(): $hyoo_crowd_clock;
        socket(reset?: null): WebSocket;
        heartbeat(): {
            destructor: () => void;
        };
        send(key: string, next?: readonly $hyoo_crowd_chunk[]): void;
        wait_connection(): Promise<unknown> | undefined;
    }
}

declare namespace $ {
    class $care_app_domain extends $mol_object2 {
        state(): $mol_state_shared;
        sign(): $care_app_sign;
        person(): $care_app_person_service;
        user(): $care_app_person | null;
        org(): $care_app_org_service;
        project(): $care_app_project_service;
        job(): $care_app_job_service;
    }
}

declare namespace $ {
    class $care_app_sign extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        token(next?: string): string;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        dom_name(): string;
        sub(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body(): readonly $mol_view_content[];
        body_scroll_top(val?: any): number;
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): {
            keydown: (event?: any) => any;
        };
        key(): {};
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(val?: any): readonly number[];
        auto(): readonly any[];
        field(): {
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
        };
        attr(): {
            maxlength: number;
            type: string;
        };
        event(): {
            input: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(val?: any): string;
        value_changed(val?: any): string;
        hint(): string;
        hint_visible(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        event_key_press(event?: any): any;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        bids(): readonly string[];
        label(): readonly any[];
        content(): readonly any[];
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
        style_size(): {};
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        error(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: boolean;
            "aria-checked": boolean;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        checked(val?: any): boolean;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
    }
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_password extends $mol_view {
        type(val?: any): string;
        sub(): readonly any[];
        hint(): string;
        value(val?: any): string;
        submit(event?: any): any;
        enabled(): boolean;
        Pass(): $$.$mol_string;
        checked(val?: any): boolean;
        Show_icon(): $mol_icon_eye;
        Show(): $mol_check_icon;
        content(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): {
            mol_theme: string;
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link extends $mol_view {
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        sub(): readonly $mol_view_content[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: {
            [key: string]: string;
        }): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_list {
        submit_blocked(): boolean;
        event(): {
            keydown: (event?: any) => any;
        };
        submit(event?: any): any;
        rows(): readonly any[];
        keydown(event?: any): any;
        form_fields(): readonly $mol_form_field[];
        body(): readonly $mol_form_field[];
        Body(): $$.$mol_list;
        buttons(): readonly $mol_view[];
        foot(): readonly $mol_view[];
        Foot(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $care_app_sign_up extends $mol_page {
        person(): $care_app_person_service;
        sign(): $care_app_sign;
        domain(): $care_app_domain;
        title(): string;
        error(): {
            required: string;
            phone_taken: string;
            password_short: string;
            password_not_match: string;
        };
        body(): readonly any[];
        name_bid(): string;
        name(next?: any): string;
        Name_control(): $$.$mol_string;
        Name_field(): $$.$mol_form_field;
        name_sur_bid(): string;
        name_sur(next?: any): string;
        Name_sur_control(): $$.$mol_string;
        Name_sur_field(): $$.$mol_form_field;
        phone_bid(): string;
        phone(next?: any): string;
        Phone_control(): $$.$mol_string;
        Phone_field(): $$.$mol_form_field;
        password_bid(): string;
        password(next?: any): string;
        Password_control(): $$.$mol_password;
        Password_field(): $$.$mol_form_field;
        password_confirm_bid(): string;
        password_confirm(next?: any): string;
        Password_confirm_control(): $$.$mol_password;
        Password_confirm_field(): $$.$mol_form_field;
        submit_label(): string;
        submit(next?: any): any;
        submit_enabled(): boolean;
        Submit(): $mol_button_major;
        sign_in_link_label(): string;
        Sign_in_link(): $$.$mol_link;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_sign_up extends $.$care_app_sign_up {
        name_bid(): string;
        name_sur_bid(): string;
        phone_bid(): string;
        password_bid(): string;
        password_confirm_bid(): string;
        submit_enabled(): boolean;
        submit(): void;
    }
}

declare namespace $ {
    class $care_app_sign_in extends $mol_page {
        person(): $care_app_person_service;
        sign(): $care_app_sign;
        domain(): $care_app_domain;
        title(): string;
        error(): {
            required: string;
            wrong: string;
        };
        body(): readonly any[];
        phone_bid(): string;
        phone(next?: any): string;
        Phone_control(): $$.$mol_string;
        Phone_field(): $$.$mol_form_field;
        password_bid(): string;
        password(next?: any): string;
        Password_control(): $$.$mol_password;
        Password_field(): $$.$mol_form_field;
        submit_label(): string;
        submit(next?: any): any;
        submit_enabled(): boolean;
        Submit(): $mol_button_major;
        sign_in_link_label(): string;
        Sign_up_link(): $$.$mol_link;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_sign_in extends $.$care_app_sign_in {
        phone_bid(next?: string): string;
        password_bid(next?: string): string;
        submit_enabled(): boolean;
        submit(): string | undefined;
        bid_clear(): void;
        auto(): void;
    }
}

declare namespace $ {
    class $care_app_index extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        list(next?: string[]): string[];
        add(id: string): void;
        drop(id: string): void;
        find<Obj extends {
            id: () => string;
            domain: () => $care_app_domain;
        }>(Obj: new () => Obj, fn?: (obj: Obj) => boolean): Obj[];
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $care_app_job_service extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        index(): $care_app_index;
        find(fn?: (obj: $care_app_job) => boolean): $care_app_job[];
        item(id: string): $care_app_job;
    }
    class $care_app_job extends $mol_object2 {
        id(): string;
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        name(next?: string): string;
        functions(next?: string): string;
        requests(next?: string): string;
        provided(next?: string): string;
        experience(next?: string): string;
        format(next?: string): string;
        duration(next?: string): string;
        work_schedule(next?: string): string;
        pay(next?: string): string;
        urgented(next?: boolean): boolean;
        project(next?: $care_app_project): $care_app_project;
        response_list(next?: $care_app_person[]): $care_app_person[];
        response_status(key: $care_app_person, next?: 'wait' | 'decline' | 'apply'): "wait" | "decline" | "apply";
        response_message(key: $care_app_person, next?: string): string;
    }
}

declare namespace $ {
    class $care_app_project_service extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        index(): $care_app_index;
        find(fn?: (obj: $care_app_project) => boolean): $care_app_project[];
        item(id: string): $care_app_project;
    }
    class $care_app_project extends $mol_object2 {
        id(): string;
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        name(next?: string): string;
        description(next?: string): string;
        result(next?: string): string;
        duration(next?: string): string;
        date_start(next?: $mol_time_moment): $mol_time_moment;
        org(next?: $care_app_org): $care_app_org;
        jobs(next?: $care_app_job[]): $care_app_job[];
    }
}

declare namespace $ {
    class $care_app_org_service extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        index(): $care_app_index;
        find(fn?: (obj: $care_app_org) => boolean): $care_app_org[];
        item(id: string): $care_app_org;
    }
    class $care_app_org extends $mol_object2 {
        id(): string;
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        name(next?: string): string;
        description(next?: string): string;
        image(next?: string): string;
        owner(next?: $care_app_person): $care_app_person;
        project_list(next?: $care_app_project[]): $care_app_project[];
    }
}

declare namespace $ {
    class $care_app_person_service extends $mol_object2 {
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        index(): $care_app_index;
        find(fn?: (obj: $care_app_person) => boolean): $care_app_person[];
        item(id: string): $care_app_person;
    }
    class $care_app_person extends $mol_object2 {
        id(): string;
        domain(): $care_app_domain;
        state(): $mol_state_shared;
        name(next?: string): string;
        name_sur(next?: string): string;
        name_full(): string;
        phone(next?: string): string;
        password(next?: string): string;
        org_list(next?: $care_app_org[]): $care_app_org[];
        response_list(next?: $care_app_job[]): $care_app_job[];
        response_status(key: $care_app_job): "wait" | "decline" | "apply";
        response_message(key: $care_app_job): string;
        about(next?: string): string;
        images(next?: string[]): string[];
        contact_telegram(next?: string): string;
        contact_mail(next?: string): string;
        contact_website(next?: string): string;
        company_list(next?: string[]): string[];
        company_name(id: string, next?: string): string;
        company_website(id: string, next?: string): string;
        company_position(id: string, next?: string): string;
        company_industry(id: string, next?: string): string;
        company_tasks(id: string, next?: string): string;
        company_date_start(id: string, next?: $mol_time_moment): $mol_time_moment;
        company_date_end(id: string, next?: $mol_time_moment): $mol_time_moment | null;
        company_working_now(id: string, next?: boolean): boolean;
        education_list(next?: string[]): string[];
        education_level(id: string, next?: string): string;
        education_institution(id: string, next?: string): string;
        education_department(id: string, next?: string): string;
        education_specialty(id: string, next?: string): string;
        education_year_end(id: string, next?: string): number;
        skill_list(next?: string[]): string[];
    }
}

declare namespace $ {
    class $mol_icon_magnify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_logout extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_logout_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_briefcase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_office extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_office_building extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $care_app_nav extends $mol_page {
        user_id(): string;
        user(): $care_app_person;
        tools(): readonly any[];
        body(): readonly any[];
        Search_open_icon(): $mol_icon_magnify;
        Search_open(): $$.$mol_link;
        sign_out(next?: any): any;
        Sign_out_icon(): $mol_icon_logout_variant;
        Sign_out(): $mol_button_minor;
        Person_icon(): $mol_icon_account;
        person_label(): string;
        Person_link(): $$.$mol_link;
        Person_edit_icon(): $mol_icon_pencil;
        Person_edit_link(): $$.$mol_link;
        Person(): $mol_bar;
        Person_activity_icon(): $mol_icon_briefcase_outline;
        person_activity_label(): string;
        Person_activity(): $$.$mol_link;
        Org_list_icon(): $mol_icon_office_building;
        org_list_label(): string;
        Org_list(): $$.$mol_link;
        Job_search_icon(): $mol_icon_magnify;
        job_search_label(): string;
        Job_search(): $$.$mol_link;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $care_app_org_list extends $mol_page {
        user(): $care_app_person;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Row(id: any): $$.$mol_link;
        List_empty(): $mol_view;
        Org_add_icon(): $mol_icon_plus;
        Org_add(): $$.$mol_link;
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        rows(): readonly any[];
        List(): $$.$mol_list;
        org_id(id: any): string;
        org_name(id: any): string;
        list_empty_text(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_org_list extends $.$care_app_org_list {
        domain(): $care_app_domain;
        org(): $care_app_org_service;
        rows(): $mol_link[];
        org_id(id: string): string;
        org_name(id: string): string;
        body(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_image2 extends $mol_view {
        links(): readonly any[];
        aspect(): number;
        sub(): readonly any[];
        height(): string;
        background(): string;
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_image2 extends $.$mol_image2 {
        background(): string;
        height(): string;
    }
}

declare namespace $ {
    class $care_app_org_page extends $mol_page {
        org(): $care_app_org;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        org_image(): string;
        Org_image(): $$.$mol_image2;
        org_name(): string;
        Org_name(): $mol_view;
        Org_head(): $mol_view;
        org_description(): string;
        Description(): $mol_labeler;
        Project_add(): $$.$mol_link;
        project_id(id: any): string;
        project_name(id: any): string;
        Project_link(id: any): $$.$mol_link;
        project_rows(): readonly any[];
        Project_list(): $$.$mol_list;
        Activity(): $mol_labeler;
        Org_body(): $$.$mol_list;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_org_page extends $.$care_app_org_page {
        domain(): $care_app_domain;
        org_name(): string;
        org_image(): string;
        org_description(): string;
        project_rows(): $mol_link[];
        project_id(id: string): string;
        project_name(id: string): string;
    }
}

declare namespace $ {
    class $mol_stack extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
    class $mol_text_code_token extends $mol_dimmer {
        attr(): {
            mol_text_code_token_type: string;
        };
        type(): string;
    }
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name(): string;
        type(): string;
        attr(): {
            href: string;
            target: string;
            mol_text_code_token_type: string;
        };
        haystack(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_text_code_row extends $mol_paragraph {
        text(): string;
        minimal_height(): number;
        numb_showed(): boolean;
        Numb(): $mol_view;
        Token(id: any): $mol_text_code_token;
        Token_link(id: any): $mol_text_code_token_link;
        find_pos(id: any): any;
        numb(): number;
        token_type(id: any): string;
        token_text(id: any): string;
        highlight(): string;
    }
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code3: RegExp;
        code: RegExp;
        strike: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        tokens(path: number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $ {
    class $mol_icon_content_copy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_copy extends $mol_button_minor {
        text(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_content_copy;
    }
}

declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        click(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_text_code extends $mol_stack {
        attr(): {
            mol_text_code_sidebar_showed: boolean;
        };
        text(): string;
        text_lines(): readonly string[];
        find_pos(id: any): any;
        sub(): readonly any[];
        sidebar_showed(): boolean;
        render_visible_only(): boolean;
        row_numb(id: any): number;
        row_text(id: any): string;
        highlight(): string;
        Row(id: any): $$.$mol_text_code_row;
        rows(): readonly any[];
        Rows(): $$.$mol_list;
        Copy(): $$.$mol_button_copy;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        sub(): ($mol_list | $mol_button_copy)[];
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
        style(): {
            minHeight: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            paddingLeft: string;
        };
        checked(val?: any): boolean;
        enabled(): boolean;
        level_style(): string;
        expanded(val?: any): boolean;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_view {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(id: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        minimal_width(): number;
        sub(): readonly any[];
        Head(): $mol_grid_row;
        Row(id: any): $mol_grid_row;
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        Cell_number(id: any): $mol_grid_number;
        Col_head(id: any): $mol_float;
        Cell_branch(id: any): $$.$mol_check_expand;
        Cell_content(id: any): readonly any[];
        rows(): readonly $mol_view[];
        Table(): $mol_grid_table;
        head_cells(): readonly $mol_view[];
        cells(id: any): readonly $mol_view[];
        cell_content(id: any): readonly $mol_view_content[];
        cell_content_text(id: any): readonly $mol_view_content[];
        cell_content_number(id: any): readonly $mol_view_content[];
        col_head_content(id: any): readonly $mol_view_content[];
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any): boolean;
        needle(): string;
        cell_value(id: any): string;
        Cell_dimmer(id: any): $$.$mol_dimmer;
    }
    class $mol_grid_table extends $mol_list {
        dom_name(): string;
    }
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
    }
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
            loading: string;
        };
        uri(): string;
        loading(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        sub(): readonly any[];
        content(): readonly any[];
        host(): string;
        icon(): string;
        Icon(): $mol_image;
        title(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
    class $mol_embed_native extends $mol_scroll {
        dom_name(): string;
        window(): any;
        attr(): {
            data: string;
            type: string;
        };
        sub(): readonly any[];
        uri(val?: any): string;
        mime(): string;
        title(val?: any): string;
        Fallback_image(): $mol_image;
        Fallback_link(): $$.$mol_link;
    }
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        uri_listener(): $mol_dom_listener;
        uri_change(event?: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        param(): string;
        flow_tokens(): readonly any[];
        auto(): readonly any[];
        Paragraph(id: any): $$.$mol_paragraph;
        Quote(id: any): $$.$mol_text;
        List(id: any): $$.$mol_text;
        Header(id: any): $mol_text_header;
        Code(id: any): $$.$mol_text_code;
        Table(id: any): $$.$mol_grid;
        Table_row(id: any): $mol_grid_row;
        Table_cell(id: any): $$.$mol_text;
        String(id: any): $$.$mol_dimmer;
        Span(id: any): $mol_text_span;
        Code_line(id: any): $$.$mol_text_code_row;
        Link(id: any): $$.$mol_link_iconed;
        Link_http(id: any): $$.$mol_link_iconed;
        Image(id: any): $$.$mol_embed_native;
        auto_scroll(): any;
        block_content(id: any): readonly any[];
        uri_resolve(id: any): any;
        quote_text(id: any): string;
        list_text(id: any): string;
        header_level(id: any): string;
        header_arg(id: any): {};
        code_text(id: any): string;
        highlight(): string;
        code_sidebar_showed(): boolean;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        table_cells(id: any): readonly any[];
        table_cell_text(id: any): string;
        line_text(id: any): string;
        line_type(id: any): string;
        line_content(id: any): readonly any[];
        link_uri(id: any): string;
    }
    class $mol_text_header extends $mol_paragraph {
        sub(): readonly any[];
        arg(): {};
        content(): readonly any[];
        Link(): $$.$mol_link;
    }
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        block_type(index: number): string;
        rows(): ($mol_paragraph | $mol_text_code | $mol_grid | $mol_text | $mol_text_header)[];
        param(): any;
        header_level(index: number): string;
        header_arg(index: number): {
            [x: number]: string;
        };
        code_text(index: number): string;
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_resolve(uri: string): string | null;
        block_text(index: number): string;
        block_content(index: number): ($mol_dimmer | $mol_text_code_row | $mol_link_iconed | $mol_embed_native | $mol_text_span)[];
        line_tokens(path: readonly number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($mol_dimmer | $mol_text_code_row | $mol_link_iconed | $mol_embed_native | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        image_title(path: readonly number[]): string;
        auto_scroll(): void;
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_stack {
        attr(): {
            mol_textarea_clickable: boolean;
            mol_textarea_sidebar_showed: boolean;
        };
        event(): {
            keydown: (event?: any) => any;
            pointermove: (event?: any) => any;
        };
        sub(): readonly any[];
        clickable(val?: any): boolean;
        sidebar_showed(): boolean;
        press(event?: any): any;
        hover(event?: any): any;
        value(val?: any): string;
        hint(): string;
        enabled(): boolean;
        length_max(): number;
        selection(val?: any): readonly number[];
        Edit(): $mol_textarea_edit;
        row_numb(id: any): number;
        highlight(): string;
        View(): $$.$mol_text_code;
    }
    class $mol_textarea_edit extends $mol_string {
        dom_name(): string;
        field(): {
            scrollTop: number;
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
        };
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
    class $mol_icon_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_open extends $mol_button_minor {
        sub(): readonly any[];
        Icon(): $mol_icon_upload;
        files(next?: any): readonly any[];
        accept(): string;
        multiple(): boolean;
        Native(): $$.$mol_button_open_native;
    }
    class $mol_button_open_native extends $mol_view {
        dom_name(): string;
        files(next?: any): readonly any[];
        attr(): {
            type: string;
            accept: string;
            multiple: boolean;
        };
        event(): {
            change: (next?: any) => any;
        };
        accept(): string;
        multiple(): boolean;
        picked(next?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
    class $mol_attach extends $mol_view {
        items(val?: any): readonly string[];
        sub(): readonly any[];
        Add(): $mol_button_open;
        Item(id: any): $mol_button_minor;
        content(): readonly $mol_view[];
        Content(): $mol_row;
        attach_title(): string;
        attach_new(val?: any): any;
        item_drop(id: any, event?: any): any;
        item_uri(id: any): string;
        Image(id: any): $mol_image;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(files: File[]): void;
        content(): ($mol_button_minor | $mol_button_open)[];
        item_uri(index: number): string;
        item_drop(index: number, event?: Event): void;
    }
}

declare namespace $ {
    class $care_attach extends $mol_attach {
    }
}

declare namespace $.$$ {
    class $care_attach extends $.$care_attach {
        attach_new(files: File[]): void;
        to_base64(file: File): Promise<unknown>;
    }
}

declare namespace $ {
    class $care_app_org_add extends $mol_page {
        org(): $care_app_org_service;
        title(): string;
        error(): {
            required: string;
        };
        body(): readonly any[];
        name_bid(): string;
        name(next?: any): string;
        Name_control(): $$.$mol_textarea;
        Name_field(): $$.$mol_form_field;
        description_bid(): string;
        description(next?: any): string;
        Description_control(): $$.$mol_textarea;
        Description_field(): $$.$mol_form_field;
        images(next?: any): readonly any[];
        Image_control(): $$.$care_attach;
        Image_field(): $$.$mol_form_field;
        submit_enabled(): boolean;
        submit(next?: any): any;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_org_add extends $.$care_app_org_add {
        domain(): $care_app_domain;
        user(): $care_app_person;
        name_bid(): string;
        description_bid(): string;
        submit_enabled(): boolean;
        submit(): void;
    }
}

declare namespace $ {
    class $mol_check_list extends $mol_view {
        Option(id: any): $$.$mol_check;
        options(): {};
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, val?: any): boolean;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        option_hint(id: any): string;
        items(): readonly $mol_check[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        keys(): string[];
        items(): $mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
    class $mol_switch extends $mol_check_list {
        value(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly $mol_view_content[];
        style(): {
            maxHeight: number;
        };
        attr(): {
            mol_pop_align: string;
            tabindex: number;
        };
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
    }
}

declare namespace $ {
    class $mol_pick extends $mol_pop {
        event(): {
            keydown: (event?: any) => any;
        };
        Anchor(): $$.$mol_check;
        keydown(event?: any): any;
        trigger_enabled(): boolean;
        trigger_content(): readonly $mol_view_content[];
        hint(): string;
        Trigger(): $$.$mol_check;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_calendar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_hor extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_calendar extends $mol_list {
        sub(): readonly any[];
        weeks(): readonly $mol_view[];
        Weekday(id: any): $mol_calendar_day;
        Week(id: any): $$.$mol_hor;
        Day(id: any): $mol_calendar_day;
        month_string(): string;
        month_moment(): $mol_time_moment;
        title(): string;
        Title(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        weekdays(): readonly $mol_view[];
        Weekdays(): $$.$mol_hor;
        weekend(id: any): boolean;
        weekday(id: any): string;
        week_days(id: any): readonly $mol_view[];
        day_ghost(id: any): boolean;
        day_holiday(id: any): boolean;
        day_selected(id: any): boolean;
        day_theme(id: any): string;
        day_text(id: any): string;
        day_content(id: any): readonly any[];
    }
    class $mol_calendar_day extends $mol_view {
        minimal_height(): number;
        minimal_width(): number;
        attr(): {
            mol_calendar_holiday: boolean;
            mol_calendar_ghost: boolean;
            mol_calendar_selected: boolean;
            mol_theme: string;
        };
        holiday(): boolean;
        ghost(): boolean;
        selected(): boolean;
        theme(): string;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        weeks_count(): number;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        day_ghost(day: string): boolean;
        day_selected(day: string): boolean;
        day_theme(day: string): string;
    }
}

declare namespace $ {
    class $mol_date extends $mol_pick {
        Icon(): $mol_icon_calendar;
        bubble_content(): readonly any[];
        value_number(val?: any): number;
        value_moment(val?: any): $mol_time_moment;
        value(val?: any): string;
        input_hint(): string;
        enabled(): boolean;
        Input(): $$.$mol_string;
        month_moment(): $mol_time_moment;
        day_selected(id: any): boolean;
        day_click(id: any, event?: any): any;
        prev_hint(): string;
        prev(event?: any): any;
        Prev_icon(): $mol_icon_chevron_left;
        Prev(): $mol_button_minor;
        next_hint(): string;
        next(event?: any): any;
        Next_icon(): $mol_icon_chevron_right;
        Next(): $mol_button_minor;
        Calendar_tools(): $mol_view;
        Calendar_title(): $mol_view;
        Calendar(): $mol_date_calendar;
    }
    class $mol_date_calendar extends $mol_calendar {
        day_content(id: any): readonly any[];
        day_click(id: any, event?: any): any;
        Day_button(id: any): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): string[];
        value(val?: string): string;
        value_moment(val?: $mol_time_moment): $mol_time_moment;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
    }
}

declare namespace $ {
    class $care_app_project_add extends $mol_page {
        project_service(): $care_app_project_service;
        org(): $care_app_org;
        title(): string;
        body(): readonly any[];
        name(next?: any): string;
        Name_control(): $$.$mol_textarea;
        Name_field(): $$.$mol_form_field;
        description(next?: any): string;
        Description_control(): $$.$mol_textarea;
        Description_field(): $$.$mol_form_field;
        result(next?: any): string;
        Result_control(): $$.$mol_textarea;
        Result_field(): $$.$mol_form_field;
        duration(next?: any): string;
        duration_dict(): {
            one_time: string;
            month0: string;
            month1_3: string;
            month3_12: string;
            month12_plus: string;
            unlimited: string;
        };
        Duration_control(): $$.$mol_switch;
        Duration_field(): $$.$mol_form_field;
        date_start(next?: any): $mol_time_moment;
        Date_start_control(): $$.$mol_date;
        Date_start_field(): $$.$mol_form_field;
        submit(next?: any): any;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_project_add extends $.$care_app_project_add {
        domain(): $care_app_domain;
        submit(): void;
    }
}

declare namespace $ {
    class $care_app_project_page extends $mol_page {
        name(): string;
        description(): string;
        result(): string;
        duration(): string;
        date_start(): $mol_time_moment;
        project(): $care_app_project;
        duration_dict(): {
            one_time: string;
            month0: string;
            month1_3: string;
            month3_12: string;
            month12_plus: string;
            unlimited: string;
        };
        add_page(): $$.$care_app_project_add;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        Name_field(): $mol_labeler;
        Description_field(): $mol_labeler;
        Result_field(): $mol_labeler;
        duration_string(): string;
        Duration_field(): $mol_labeler;
        date_start_string(): string;
        Date_start_field(): $mol_labeler;
        Job_add(): $$.$mol_link;
        job_id(id: any): string;
        job_name(id: any): string;
        Job_link(id: any): $$.$mol_link;
        job_list_rows(): readonly any[];
        Job_list(): $$.$mol_list;
        Job_field(): $mol_labeler;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_project_page extends $.$care_app_project_page {
        domain(): $care_app_domain;
        duration_string(): any;
        date_start_string(): string;
        job_list_rows(): $mol_link[];
        job_id(id: string): string;
        job_name(id: string): string;
    }
}

declare namespace $ {
    class $care_app_job_add extends $mol_page {
        job_service(): $care_app_job_service;
        project(): $care_app_project;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        name(next?: any): string;
        Name_control(): $$.$mol_textarea;
        Name_field(): $$.$mol_form_field;
        functions(next?: any): string;
        Functions_control(): $$.$mol_textarea;
        Functions_field(): $$.$mol_form_field;
        requests(next?: any): string;
        Requests_control(): $$.$mol_textarea;
        Requests_field(): $$.$mol_form_field;
        provided(next?: any): string;
        Provided_control(): $$.$mol_textarea;
        Provided_field(): $$.$mol_form_field;
        experience(next?: any): string;
        experience_dict(): {
            no_matter: string;
            no_expirience: string;
            year1_3: string;
            year3_6: string;
            year6_plus: string;
        };
        Experience_control(): $$.$mol_switch;
        Experience_field(): $$.$mol_form_field;
        format(next?: any): string;
        format_dict(): {
            remotely: string;
            offline: string;
            both: string;
        };
        Format_control(): $$.$mol_switch;
        Format_field(): $$.$mol_form_field;
        duration(next?: any): string;
        duration_dict(): {
            one_time: string;
            month0: string;
            month1_3: string;
            month3_6: string;
            month6_12: string;
            month12_plus: string;
            unlimited: string;
        };
        Duration_control(): $$.$mol_switch;
        Duration_field(): $$.$mol_form_field;
        work_schedule(next?: any): string;
        work_schedule_dict(): {
            every_day: string;
            shift: string;
            flexible: string;
        };
        Work_shedule_control(): $$.$mol_switch;
        Work_shedule_field(): $$.$mol_form_field;
        pay(next?: any): string;
        pay_dict(): {
            no: string;
            yes: string;
        };
        Pay_control(): $$.$mol_switch;
        Pay_field(): $$.$mol_form_field;
        submit(next?: any): any;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_job_add extends $.$care_app_job_add {
        submit(): void;
    }
}

declare namespace $ {
    class $mol_deck extends $mol_list {
        items(): readonly $mol_view[];
        rows(): readonly $mol_view[];
        current(val?: any): string;
        switch_options(): {};
        Switch(): $$.$mol_switch;
        Content(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): any;
    }
}

declare namespace $ {
    class $care_app_job_page extends $mol_page {
        name(): string;
        functions(): string;
        requests(): string;
        provided(): string;
        experience(): string;
        format(): string;
        duration(): string;
        work_schedule(): string;
        pay(): string;
        job(): $care_app_job;
        title(): string;
        tools(): readonly any[];
        experience_dict(): {
            no_matter: string;
            no_expirience: string;
            year1_3: string;
            year3_6: string;
            year6_plus: string;
        };
        pay_dict(): {
            no: string;
            yes: string;
        };
        format_dict(): {
            remotely: string;
            offline: string;
            both: string;
        };
        duration_dict(): {
            one_time: string;
            month0: string;
            month1_3: string;
            month3_6: string;
            month6_12: string;
            month12_plus: string;
            unlimited: string;
        };
        work_schedule_dict(): {
            every_day: string;
            shift: string;
            flexible: string;
        };
        add_page(): $$.$care_app_job_add;
        body(): readonly any[];
        Response_list(): $$.$mol_list;
        Job(): $$.$mol_list;
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        tabs(): readonly any[];
        Tabs(): $$.$mol_deck;
        person_id(id: any): string;
        person_full_name(id: any): string;
        Person(id: any): $$.$mol_link;
        person_message(id: any): string;
        Message(id: any): $$.$mol_paragraph;
        person_response_status(id: any, next?: any): string;
        Status(id: any): $$.$mol_switch;
        response_list_rows(id: any): readonly any[];
        Response_list_row(id: any): $$.$mol_list;
        response_rows(): readonly any[];
        Name_field(): $mol_labeler;
        project_id(): string;
        project_name(): string;
        Project_link(): $$.$mol_link;
        Project_field(): $mol_labeler;
        Functions_field(): $mol_labeler;
        Requests_field(): $mol_labeler;
        Provided_field(): $mol_labeler;
        experience_string(): string;
        Experience_field(): $mol_labeler;
        format_string(): string;
        Format_field(): $mol_labeler;
        duration_string(): string;
        Duration_field(): $mol_labeler;
        work_schedule_string(): string;
        Work_shedule_field(): $mol_labeler;
        pay_string(): string;
        Pay_field(): $mol_labeler;
        response_text(next?: any): string;
        response_text_enabled(): boolean;
        Response_text(): $$.$mol_textarea;
        response_submit(next?: any): any;
        Response_submit(): $mol_button_major;
        response_wait(): string;
        response_apply(): string;
        response_decline(): string;
        response_content(): readonly any[];
        Response_field(): $mol_labeler;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_job_page extends $.$care_app_job_page {
        domain(): $care_app_domain;
        person(): $care_app_person_service;
        user(): $care_app_person;
        experience_string(): any;
        format_string(): any;
        duration_string(): any;
        work_schedule_string(): any;
        pay_string(): any;
        project_id(): string;
        project_name(): string;
        user_responsed(): boolean;
        user_responsed_status(): "wait" | "decline" | "apply";
        user_responsed_message(): string;
        response_content(): (string | $mol_button_major | $mol_textarea)[];
        response_submit(): void;
        person_id(id: string): string;
        person_full_name(id: string): string;
        person_message(id: string): string;
        person_response_status(id: string, next?: ReturnType<$care_app_job['response_status']>): "wait" | "decline" | "apply";
        response_rows(): $mol_list[];
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_delete extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_number extends $mol_view {
        precision_view(): number;
        precision_change(): number;
        value(val?: any): number;
        sub(): readonly any[];
        precision(): number;
        value_string(val?: any): string;
        hint(): string;
        enabled(): boolean;
        string_enabled(): boolean;
        String(): $$.$mol_string;
        event_dec(val?: any): any;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        event_inc(val?: any): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
    }
}

declare namespace $ {
    class $care_app_person_edit extends $mol_page {
        domain(): $care_app_domain;
        about(next?: any): string;
        company_name(id: any, next?: any): string;
        company_position(id: any, next?: any): string;
        company_industry(id: any, next?: any): string;
        company_tasks(id: any, next?: any): string;
        company_date_start(id: any, next?: any): $mol_time_moment;
        company_date_end(id: any, next?: any): $mol_time_moment | null;
        company_working_now(id: any, next?: any): boolean;
        education_level(id: any, next?: any): string;
        education_institution(id: any, next?: any): string;
        education_department(id: any, next?: any): string;
        education_specialty(id: any, next?: any): string;
        education_year_end(id: any, next?: any): number;
        person(): $care_app_person;
        title(): string;
        contact_dict(): {
            telegram: string;
            mail: string;
            website: string;
        };
        body(): readonly any[];
        images(next?: any): readonly any[];
        Images_control(): $$.$care_attach;
        Images_field(): $$.$mol_form_field;
        About_control(): $$.$mol_textarea;
        About_field(): $$.$mol_form_field;
        contact_label(id: any): string;
        Contact_label(id: any): $mol_view;
        contact_value(id: any, next?: any): string;
        Contact_control(id: any): $$.$mol_string;
        Contact_row(id: any): $mol_bar;
        contact_rows(): readonly any[];
        Contact_list(): $$.$mol_list;
        Contact_field(): $$.$mol_form_field;
        Company_position(id: any): $$.$mol_string;
        Company_name(id: any): $$.$mol_string;
        Company_industry(id: any): $$.$mol_string;
        Company_tasks(id: any): $$.$mol_textarea;
        Company_date_start_label(id: any): $$.$mol_paragraph;
        Company_date_start(id: any): $$.$mol_date;
        Company_date_start_bar(id: any): $mol_bar;
        Company_working_now(id: any): $mol_check_box;
        company_date_end_moment(id: any, next?: any): $mol_time_moment;
        Company_date_end(id: any): $$.$mol_date;
        date_end_content(id: any): readonly any[];
        Company_date_end_bar(id: any): $mol_bar;
        Company_date(id: any): $$.$mol_list;
        company_delete(id: any, next?: any): any;
        Company_delete_icon(id: any): $mol_icon_delete;
        Company_delete(id: any): $mol_button_minor;
        company_add(id: any, next?: any): any;
        Company_add_icon(id: any): $mol_icon_plus;
        Company_add(id: any): $mol_button_minor;
        Company_action(id: any): $mol_bar;
        Company_row(id: any): $$.$mol_list;
        company_list(): readonly any[];
        Company_list(): $$.$mol_list;
        Company_field(): $$.$mol_form_field;
        education_level_dict(): {
            level0: string;
            level1: string;
            level2: string;
            level3: string;
            level4: string;
            level5: string;
            level6: string;
            level7: string;
        };
        Education_level(id: any): $$.$mol_switch;
        Education_institution(id: any): $$.$mol_string;
        Education_depratment(id: any): $$.$mol_string;
        Education_specialty(id: any): $$.$mol_string;
        Education_year_end(id: any): $$.$mol_number;
        education_delete(id: any, next?: any): any;
        Education_delete_icon(id: any): $mol_icon_delete;
        Education_delete(id: any): $mol_button_minor;
        education_add(id: any, next?: any): any;
        Education_add_icon(id: any): $mol_icon_plus;
        Education_add(id: any): $mol_button_minor;
        Education_action(id: any): $mol_bar;
        Education_row(id: any): $$.$mol_list;
        education_list(): readonly any[];
        Education_list(): $$.$mol_list;
        Education_field(): $$.$mol_form_field;
        skill_add_name(next?: any): string;
        Skill_add_name(): $$.$mol_string;
        skill_add(next?: any): any;
        Skill_add_icon(): $mol_icon_plus;
        Skill_add_button(): $mol_button_minor;
        Skill_add(): $mol_bar;
        skill_name(id: any): string;
        Skill_name(id: any): $mol_view;
        skill_delete(id: any, next?: any): any;
        Skill_delete_icon(id: any): $mol_icon_delete;
        Skill_delete(id: any): $mol_button_minor;
        Skill(id: any): $mol_view;
        skill_list(): readonly any[];
        Skill_list(): $mol_row;
        Skills(): $$.$mol_list;
        Skill_list_field(): $$.$mol_form_field;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
    class $care_app_person_edit extends $.$care_app_person_edit {
        images(next?: string[]): string[];
        contact_rows(): $mol_bar[];
        contact_label(id: string): any;
        contact_value(id: string, next?: string): any;
        company_add(id: string): void;
        company_delete(id: string): void;
        company_list(): $mol_list[] | $mol_button_minor[];
        date_end_content(id: string): ($mol_date | $mol_check_box)[];
        company_date_end_moment(id: string, next?: $mol_time_moment): $mol_time_moment;
        education_add(id: string): void;
        education_delete(id: string): void;
        education_list(): $mol_list[] | $mol_button_minor[];
        skill_list(): $mol_view[];
        skill_add(): void;
        skill_delete(id: string): void;
        skill_name(id: string): string;
    }
}

declare namespace $ {
    class $care_labeler extends $mol_view {
        attr(): {
            care_labeler_dir: string;
        };
        sub(): readonly any[];
        dir(): string;
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $care_app_person_page extends $mol_page {
        images(): string[];
        name_full(): string;
        about(): string;
        contact_telegram(): string;
        contact_mail(): string;
        contact_website(): string;
        company_name(id: any): string;
        company_position(id: any): string;
        company_industry(id: any): string;
        company_tasks(id: any): string;
        company_date_start(id: any): $mol_time_moment;
        company_date_end(id: any): $mol_time_moment | null;
        company_working_now(id: any): boolean;
        education_level(id: any): string;
        education_institution(id: any): string;
        education_department(id: any): string;
        education_specialty(id: any): string;
        education_year_end(id: any): number;
        person(): $care_app_person;
        contact_dict(): {
            telegram: string;
            mail: string;
            website: string;
        };
        education_level_dict(): {
            level0: string;
            level1: string;
            level2: string;
            level3: string;
            level4: string;
            level5: string;
            level6: string;
            level7: string;
        };
        Page_edit(): $$.$care_app_person_edit;
        title(): string;
        tools(): readonly any[];
        working_now(): string;
        body(): readonly any[];
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        Image(): $$.$mol_image2;
        Name_full(): $mol_view;
        Person_head(): $mol_view;
        About(): $care_labeler;
        Contact_telegram(): $care_labeler;
        Contanct_mail(): $care_labeler;
        Website_link_iconed(): $$.$mol_link_iconed;
        Contanct_website(): $care_labeler;
        contact_rows(): readonly any[];
        Contact_list(): $$.$mol_list;
        Contact(): $care_labeler;
        Company_position(id: any): $care_labeler;
        Company_name(id: any): $care_labeler;
        Company_industry(id: any): $care_labeler;
        Company_tasks(id: any): $care_labeler;
        company_date_start_string(id: any): string;
        Company_date_start(id: any): $care_labeler;
        company_date_end_string(id: any): string;
        Company_date_end(id: any): $care_labeler;
        company_row_rows(id: any): readonly any[];
        Company_row(id: any): $$.$mol_list;
        company_rows(): readonly any[];
        Company_list(): $$.$mol_list;
        Company(): $care_labeler;
        education_level_string(id: any): string;
        Education_level(id: any): $care_labeler;
        Education_institution(id: any): $care_labeler;
        Education_depratment(id: any): $care_labeler;
        Education_specialty(id: any): $care_labeler;
        Education_year_end(id: any): $care_labeler;
        Education_row(id: any): $$.$mol_list;
        education_rows(): readonly any[];
        Eduaction_list(): $$.$mol_list;
        Education(): $care_labeler;
        skill_name(id: any): string;
        Skill(id: any): $mol_view;
        skill_list(): readonly any[];
        Skill_list(): $care_labeler;
        Person_body(): $$.$mol_list;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_person_page extends $.$care_app_person_page {
        company_rows(): $mol_list[];
        company_date_start_string(id: string): string;
        company_date_end_string(id: string): string;
        education_rows(): $mol_list[];
        education_level_string(id: string): any;
        skill_list(): $mol_view[];
        skill_name(key: string): string;
    }
}

declare namespace $ {
    class $care_app_person_activity extends $mol_page {
        person(): $care_app_person;
        title(): string;
        msg(): {
            wait: string;
            apply: string;
            decline: string;
        };
        body(): readonly any[];
        job_id(id: any): string;
        job_name(id: any): string;
        Job_link(id: any): $$.$mol_link;
        response_status(id: any): string;
        Response_status(id: any): $$.$mol_paragraph;
        Response_list_row(id: any): $$.$mol_list;
        response_list_rows(): readonly any[];
        Response_list(): $$.$mol_list;
        Tabs(): $$.$mol_deck;
    }
}

declare namespace $.$$ {
    class $care_app_person_activity extends $.$care_app_person_activity {
        domain(): $care_app_domain;
        job(): $care_app_job_service;
        response_list_rows(): $mol_list[];
        job_id(id: string): string;
        job_name(id: string): string;
        response_status(id: string): string;
    }
}

declare namespace $ {
    class $mol_icon_tune extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): readonly any[];
        keys_y(val?: any): readonly any[];
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): {
            keydown: (event?: any) => any;
        };
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_search extends $mol_pop {
        query(val?: any): string;
        suggests(): readonly string[];
        plugins(): readonly $mol_plugin[];
        showed(val?: any): boolean;
        align_hor(): string;
        Anchor(): $mol_view;
        bubble_content(): readonly $mol_view_content[];
        Suggest(id: any): $mol_button_minor;
        clear(val?: any): any;
        Hotkey(): $$.$mol_hotkey;
        nav_components(): readonly $mol_view[];
        nav_focused(component?: any): any;
        Nav(): $$.$mol_nav;
        suggests_showed(val?: any): boolean;
        hint(): string;
        submit(event?: any): any;
        enabled(): boolean;
        Query(): $$.$mol_string;
        Clear_icon(): $mol_icon_cross;
        Clear(): $mol_button_minor;
        anchor_content(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        suggest_select(id: any, event?: any): any;
        suggest_label(id: any): string;
        Suggest_label(id: any): $$.$mol_dimmer;
        suggest_content(id: any): readonly $mol_view_content[];
    }
}

declare namespace $ {
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_wire_task<{}, [], Value>;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber {
        static method: typeof $mol_wire_method;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
    class $care_app_search_filter extends $mol_page {
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        Filter(): $mol_view;
        back(next?: any): any;
        Back(): $mol_button_major;
        List(): $$.$mol_list;
    }
    class $care_app_search_filter_dict extends $care_labeler {
        dict(): {};
        title(): string;
        content(): readonly any[];
        check_title(id: any): string;
        checked(id: any, next?: any): boolean;
        Check(id: any): $mol_check_box;
        check_rows(): readonly any[];
        Check_list(): $$.$mol_list;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_search_filter extends $.$care_app_search_filter {
        back(): void;
    }
    class $care_app_search_filter_dict extends $.$care_app_search_filter_dict {
        check_rows(): $mol_check_box[];
        check_title(key: string): any;
        checked(key: string, next?: boolean): boolean;
        filter(value: any): boolean;
    }
}

declare namespace $ {
    class $care_app_job_search extends $mol_list {
        job_service(): $care_app_job_service;
        title(): string;
        experience_dict(): {
            no_matter: string;
            no_expirience: string;
            year1_3: string;
            year3_6: string;
            year6_plus: string;
        };
        format_dict(): {
            remotely: string;
            offline: string;
            both: string;
        };
        duration_dict(): {
            one_time: string;
            month0: string;
            month1_3: string;
            month3_6: string;
            month6_12: string;
            month12_plus: string;
            unlimited: string;
        };
        work_schedule_dict(): {
            every_day: string;
            shift: string;
            flexible: string;
        };
        pay_dict(): {
            no: string;
            yes: string;
        };
        Job_add_page(): $$.$care_app_job_add;
        rows(): readonly any[];
        Filter(): $$.$mol_list;
        query(next?: any): string;
        suggests(): readonly string[];
        Search(): $$.$mol_search;
        job_name(id: any): string;
        Job_name(id: any): $$.$mol_dimmer;
        job_id(id: any): string;
        Job_row(id: any): $$.$mol_link;
        rows_filtered(): readonly any[];
        Job_list(): $$.$mol_list;
        Exp_filter(): $$.$care_app_search_filter_dict;
        Format_filter(): $$.$care_app_search_filter_dict;
        Duration_filter(): $$.$care_app_search_filter_dict;
        Work_schedule_filter(): $$.$care_app_search_filter_dict;
        Pay_filter(): $$.$care_app_search_filter_dict;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_job_search extends $.$care_app_job_search {
        domain(): $care_app_domain;
        rows_filtered(): $mol_link[];
        job_id(id: string): string;
        job_name(id: string): string;
        job_text(obj: $care_app_job): string;
        job_search(obj: $care_app_job): boolean;
        job_filter(obj: $care_app_job): boolean;
    }
}

declare namespace $ {
    class $care_app_search extends $mol_page {
        job_service(): $care_app_job_service;
        domain(): $care_app_domain;
        tools(): readonly any[];
        title(): string;
        body(): readonly any[];
        Filter(): $mol_view;
        Filter_open_icon(): $mol_icon_tune;
        Filter_open(): $$.$mol_link;
        Close_page_icon(): $mol_icon_cross;
        Close_page(): $$.$mol_link;
        Job_search(): $$.$care_app_job_search;
        Tabs(): $$.$mol_deck;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app_search extends $.$care_app_search {
        Filter(): any;
    }
}

declare namespace $ {
    class $care_app extends $mol_book2 {
        attr(): {
            mol_theme: string;
        };
        person(): $care_app_person_service;
        sign(): $care_app_sign;
        org(): $care_app_org_service;
        project_service(): $care_app_project_service;
        job_service(): $care_app_job_service;
        person_service(): $care_app_person_service;
        domain(): $care_app_domain;
        pages(): readonly any[];
        Sign_up_page(): $$.$care_app_sign_up;
        Sign_in_page(): $$.$care_app_sign_in;
        sign_out(next?: any): any;
        Nav_page(): $care_app_nav;
        user(): $care_app_person;
        Org_list_page(): $$.$care_app_org_list;
        org_opened(): $care_app_org;
        Org_page(): $$.$care_app_org_page;
        Org_add_page(): $$.$care_app_org_add;
        project_opened(): $care_app_project;
        Project_page(): $$.$care_app_project_page;
        Project_add_page(): $$.$care_app_project_add;
        job_opened(): $care_app_job;
        Job_page(): $$.$care_app_job_page;
        Job_add_page(): $$.$care_app_job_add;
        person_opened(): $care_app_person;
        Person_page(): $$.$care_app_person_page;
        Person_edit_page(): $$.$care_app_person_edit;
        Person_activity_page(): $$.$care_app_person_activity;
        Search_filter(): any;
        Search_page(): $$.$care_app_search;
        Search_filter_page(): $$.$care_app_search_filter;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $care_app extends $.$care_app {
        user(): $care_app_person;
        arg(): {
            [key: string]: string;
        };
        org_opened(): $care_app_org;
        project_opened(): $care_app_project;
        job_opened(): $care_app_job;
        person_opened(): $care_app_person;
        pages(): ($care_app_sign_up | $care_app_sign_in)[] | ($care_app_org_list | $care_app_org_page | $care_app_org_add | $care_app_project_add | $care_app_project_page | $care_app_job_add | $care_app_job_page | $care_app_person_edit | $care_app_person_page | $care_app_person_activity | $care_app_search_filter | $care_app_search | $care_app_nav)[];
        sign_out(): void;
    }
}

export = $;