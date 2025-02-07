<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../styles/variables.scss";
@import "../../node_modules/bulma/sass/components/tabs.sass";

.tag-list {
	$border-color: #e0e0e0;
	border: solid 1px $border-color;
	border-radius: 8px;
	overflow: hidden;
	&-item {
		&-head,
		&-content,
		&-content-question {
			padding: 0.75rem 1rem;
			@media screen and (min-width: 800px) {
				padding-left: 4rem;
				padding-right: 2rem;
			}
		}
		&-content-question {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			font-size: 0.95rem;
			&:hover,
			&:focus {
				background-color: #d2e3fc;
			}
		}
		&-head {
			background-color: white;
			border-bottom: solid 1px $border-color;
		}
		&-content {
			background-color: #e8f0fe;
			max-height: 0;
			transition: ease max-height 500ms;
			overflow: hidden;
			padding-left: 0;
			padding-right: 0;
		}
		.down-arrow {
			background: transparent;
			border: none;
			padding: 0;
			cursor: pointer;
			height: 36px;
			width: 36px;
			border-radius: 36px;
			margin-right: -0.5rem;
			transition: transform ease 300ms;
			transform: rotateZ(180deg);
			&:hover,
			&:focus {
				background-color: rgba(0, 0, 0, 0.1);
			}
			.arrow-svg {
				height: 1.25rem;
			}
		}
		&.is-expanded &-content {
			max-height: 900px;
			transition: ease max-height 1000ms;
		}
		&.is-expanded .down-arrow {
			transform: rotateZ(0deg);
		}
		&:not(.is-expanded) &-content {
			padding: 0;
		}
		&:last-child &-head {
			border-bottom: none;
		}
	}
}
.background-color-transition {
	transition: background-color ease 300ms;
}
</style>

<script context="module">
export function preload(page) {
	const originalQueryTag = page.query.tag;
	return {
		activeTag: originalQueryTag,
		activeQuestionKey: page.query.question,
	};
}
</script>

<script>
import { onMount } from "svelte";

import questions, { tags as allTags } from "../data/faq";
function hasTag(question, tag) {
	let tagFound = false;
	if (tag.toLowerCase() === "all") {
		return true;
	}
	if (Array.isArray(question.tags)) {
		question.tags.forEach((questionTag) => {
			tagFound =
				tagFound ||
				questionTag.toLowerCase().includes(tag.toLowerCase());
		});
	}
	return tagFound;
}
export let activeTag;
export let activeQuestionKey;
let filteredQuestions;
$: {
	filteredQuestions = activeTag
		? questions.filter((question) => hasTag(question, activeTag))
		: questions;
}

function getAllQuestionsWithTag(tag) {
	return questions.filter((question) => hasTag(question, tag));
}

function getPosition(el) {
	var x = 0;
	var y = 0;
	while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
		x += el.offsetLeft - el.scrollLeft;
		y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	return { top: y, left: x };
}
let highlightElemId = null;

function onRouteChange(activeTag, questionKey) {
	if (typeof window !== "undefined") {
		const elemId = questionKey;
		setTimeout(() => {
			const elem = document.getElementById(elemId);
			if (elem) {
				const position = getPosition(elem);
				window.scrollTo(0, position.top - 68);
				highlightElemId = elemId;
				setTimeout(function () {
					highlightElemId = null;
				}, 2000);
			}
		}, 100);
	}
}
onMount(function () {
	const htmlElem = document.body.parentElement;
	htmlElem.setAttribute("itemscope", "");
	htmlElem.setAttribute("itemtype", "https://schema.org/FAQPage");
	const searchParams = new URLSearchParams(window.location.search);
	if (!activeTag) {
		if (searchParams.get("tag")) {
			activeTag = searchParams.get("tag");
		}
	}
	if (!activeQuestionKey) {
		if (searchParams.get("question")) {
			activeQuestionKey = searchParams.get("question");
		}
	}
	onRouteChange();
	return () => {
		htmlElem.removeAttribute("itemscope");
		htmlElem.removeAttribute("itemtype");
	};
});

let openTagKey = allTags[0].key;
$: {
	onRouteChange(activeTag, activeQuestionKey);
}
</script>

<svelte:head>
	<title>FAQ: Frequently Asked Questions | Prepseed</title>
</svelte:head>
<section class="section pt-0">
	<div class="container is-max-widescreen">
		{#if activeTag}
			<div class="tabs is-centered">
				<ul>
					<li><a href="/faq">All</a></li>
					{#each allTags as { label, key }}
						<li class:is-active="{activeTag === key}">
							<a href="/faq?tag={key}" role="button">{label}</a>
						</li>
					{/each}
				</ul>
			</div>
			{#each filteredQuestions as { answer, key: questionKey, question }}
				{#key questionKey}
					<div
						id="{questionKey}"
						itemscope
						itemprop="mainEntity"
						itemtype="https://schema.org/Question"
						class="card mb-4"
					>
						<div
							class="card-content background-color-transition"
							class:has-background-grey-lighter="{highlightElemId === questionKey}"
						>
							<h3 itemprop="name" class="title is-5 mb-0">
								<a
									class="has-text-black"
									href="/faq?tag={activeTag}&question={questionKey}"
								>{question}</a>
							</h3>
							<div
								itemscope
								itemprop="acceptedAnswer"
								itemtype="https://schema.org/Answer"
								class="is-size-6 content mb-4"
							>
								<div itemprop="text">
									{@html answer}
								</div>
							</div>
						</div>
					</div>
				{/key}
			{/each}
		{:else}
			<h2 class="title has-text-centered mt-1">
				Frequently Asked Questions
			</h2>
			<div class="tag-list">
				{#each allTags as { key, label }}
					<div
						class:is-expanded="{key === openTagKey}"
						class="tag-list-item"
					>
						<div
							class="tag-list-item-head is-flex is-justify-content-space-between is-align-items-center"
							on:click="{function () {
								if (openTagKey === key) {
									openTagKey = null;
								} else {
									openTagKey = key;
								}
							}}"
						>
							<a
								class="has-text-black has-text-weight-semibold"
								href="/faq?tag={key}"
							>{label}</a>
							<button
								class="down-arrow is-flex is-justify-content-center is-align-items-center"
							>
								<svg
									class="arrow-svg"
									viewBox="0 0 24 24"
									aria-label="Expanded menu"
								><path
										d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
									></path></svg>
							</button>
						</div>
						<div class="tag-list-item-content">
							{#each getAllQuestionsWithTag(key) as { question, key: questionKey }}
								<a
									class="is-flex has-text-black tag-list-item-content-question"
									href="/faq?tag={key}&question={questionKey}"
								>{question}</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
