declare module '*.svg' {
	/**
	 * Use `any` to avoid conflicts with
	 * `@svgr/webpack` plugin or
	 * `babel-plugin-inline-react-svg` plugin.
	 */
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled

declare module '*.png' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.jpg' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.jpeg' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.gif' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.webp' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.avif' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.ico' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}

declare module '*.bmp' {
	const content: import('../dist/client/image').StaticImageData;

	export default content;
}
