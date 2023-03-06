export interface Line {
	readonly character: string;
	readonly line: string;
	readonly act?: number;
	readonly line_no: number;
}

export interface Script {
	readonly lines: Line[];
}

export interface EDSpan {
	readonly correct: string;
	readonly incorrect?: string;
	readonly color: string;
}

declare module 'edit-distance';
