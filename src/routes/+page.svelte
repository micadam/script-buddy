<script lang="ts">
	import type { EDSpan, Line, Script } from '../my-types';
	import * as ed from 'edit-distance';

	let all_characters: string[] = [];
	let character = '';

	let current_line = 1;
	let start_line = 1;

	let fast_forward = false;
	let line_picking_mode = false;
	let script: Script | null = null;
	let speaking_promise: Promise<void> | null = null;
	let user_lines = new Map<Number, EDSpan[]>();

	const handleFileUpload = (event: any) => {
		if (event.target.files.length == 0) {
			return;
		}
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = (event) => {
			const result_string = event.target?.result as string;
			const result_lines = JSON.parse(result_string);
			for (let i = 0; i < result_lines.length; i++) {
				result_lines[i].line_no = i + 1;
			}
			script = { lines: result_lines };
			console.log(script);
			all_characters = [...new Set(script.lines.map((l) => l.character))];
			character = all_characters[0];
			speak_other_characters_lines();
		};
	};

	function speak_other_characters_lines() {
		async function impl() {
			if (script == null) {
				return;
			}
			while (script.lines[current_line - 1].character != character) {
				current_line += 1;
				if (!fast_forward) {
					await new Promise((r) => setTimeout(r, 1000));
				}
			}
		}
		speaking_promise =
			speaking_promise ||
			impl().then(() => {
				speaking_promise = null;
			});
	}

	function handle_user_input(event: KeyboardEvent) {
		if (event.key != 'Enter' || script == null) {
			return;
		}
		const line = (event.target as HTMLInputElement).value;
		const dist = ed.levenshtein(
			script.lines[current_line - 1].line,
			line,
			(_: any) => 1,
			(_: any) => 1,
			(a: any, b: any) => (a == b ? 0 : 1)
		);

		const spans = get_spans(dist);
		user_lines.set(current_line, spans);
		// This is for svelte to catch the change
		user_lines = user_lines;
		current_line += 1;
		const text_area = event.target as HTMLTextAreaElement;
		text_area.value = '';
		speak_other_characters_lines();
	}

	function get_spans(dist: any): EDSpan[] {
		let current_color: string = '';
		let current_correct: string = '';
		let current_incorrect: string = '';
		const spans: EDSpan[] = [];
		for (const p of dist.pairs().reverse()) {
			const [orig, edited] = p;
			const color = orig === edited ? 'green' : 'red';
			if (color != current_color && (current_correct != '' || current_incorrect != '')) {
				spans.push({
					correct: current_correct,
					incorrect: current_incorrect,
					color: current_color
				});
				current_correct = '';
				current_incorrect = '';
			}
			current_color = color;
			if (orig != null) {
				current_correct += orig;
			}
			if (edited != null && orig != edited) {
				current_incorrect += edited;
			}
		}
		if (current_correct != '' || current_incorrect != '') {
			spans.push({
				correct: current_correct,
				incorrect: current_incorrect,
				color: current_color
			});
		}
		return spans;
	}

	function pick_line(line: Line, event?: KeyboardEvent) {
		if (!line_picking_mode || (event != null && event.key != 'Enter')) {
			return;
		}
		line_picking_mode = false;
		start_line = line.line_no - 5;
		current_line = line.line_no;
		user_lines = new Map<Number, EDSpan[]>();
		speak_other_characters_lines();
	}

	function change_character(event: any) {
		user_lines = new Map<Number, EDSpan[]>();
		speak_other_characters_lines();
	}

	function init(el: HTMLElement) {
		if (line_picking_mode) {
			return;
		}
		el.focus();
		el.scrollIntoView(false);
	}
</script>

<div id="container">
	{#if script == null}
		<h1>No script uploaded</h1>
		Upload a script in .json format to get started.
		<br />
		<input type="file" accept=".json" on:change={handleFileUpload} />
	{:else}
		<div id="controls">
			<input type="checkbox" bind:checked={fast_forward} /> Fast forward
			<!-- A button to trigger line picking mode -->
			<button
				on:click={() => {
					line_picking_mode = true;
				}}>Pick line</button
			>
			<select bind:value={character} on:change={change_character}>
				{#each all_characters as c}
					<option value={c}>{c}</option>
				{/each}
			</select>
		</div>
		<div class="lines">
			{#each script.lines as line}
				{#if line_picking_mode || (line.line_no >= start_line && line.line_no <= current_line && !(line.line_no == current_line && line.character == character))}
					<div
						class="line"
						use:init
						on:click={() => {
							pick_line(line);
						}}
						on:keypress={(e) => {
							pick_line(line, e);
						}}
					>
						<h4>{line.character}</h4>
						{#if !line_picking_mode && user_lines.has(line.line_no)}
							{#each user_lines.get(line.line_no) || [{ correct: 'ERROR', color: 'red' }] as span}
								<span style="color: {span.color}"
									>{span.correct}<span style="text-decoration: line-through; font-size: 8pt;"
										>{span.incorrect}</span
									></span
								>
							{/each}
						{:else}
							{line.line}
						{/if}
					</div>
				{/if}
			{/each}
			{#if script.lines[current_line - 1].character == character}
				<div class="line">
					<h4>{character}</h4>
					<textarea
						id="user_input"
						on:keypress={handle_user_input}
						use:init
					/>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(html) {
		width: 100%;
		height: 100%;
	}
	:global(body) {
		background-color: white;
		width: 100%;
		height: 100%;
		margin: 0;
	}
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
		background-color: lightyellow;
		min-width: 50%;
		max-width: 500px;
		height: 100%;
		margin: auto;
		text-align: center;
	}
	.lines {
		width: 100%;
		margin-top: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: auto;
	}
	.line {
		width: 95%;
		background-color: gold;
		margin-bottom: 0.5em;
		scroll-margin: 1em;
		transition: background-color 0.5s;
	}
	.line:hover {
		background-color: yellow;
	}
	select {
		max-width: 100%;
	}
	#user_input {
		width: 90%;
		height: 3em;
	}
	h1 {
		padding-top: 0.5em;
		margin-top: 0;
	}
	h4 {
		margin: 0;
	}
	span {
		margin: 0;
	}
	button {
		margin: 0;
		background-color: goldenrod;
		border: none;
		padding: 0.2em;
		margin: 0.2em;
		font-family: arial, sans-serif;
		cursor: pointer;
		transition: background-color 0.5s;
	}
	button:hover {
		background-color: yellow;
	}
</style>
