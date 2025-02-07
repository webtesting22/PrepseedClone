import { whatIsPrepseed } from "./about";
const support = "https://static.prepleaf.com/homepage/faq/support.webp";

export const tags = [
	{
		key: "preparation-portal",
		label: "Preparation Portal",
	},
	{
		key: "user-rating",
		label: "User Rating",
	},
	{
		key: "leaderboard",
		label: "Leaderboard",
	},
	{
		key: "general",
		label: "General",
	},
	{
		key: "account",
		label: "Account",
	},
];

const tagsByKey = {};
tags.forEach((tag) => {
	tagsByKey[tag.key] = tag;
});

const questions = [
	{
		key: "what-is-prepseed",
		question: "What is Prepseed?",
		answer: whatIsPrepseed,
		tags: ["general"],
	},
	{
		key: "does-prepseed-offer-free-solutions",
		question: "Does Prepseed offer free solutions?",
		answer:
			"Yes. Prepseed offers free preparation platform where you can learn, practice, and compete.",
		tags: ["general"],
	},
	{
		key: "what-can-my-username-be",
		question: "What can my username be?",
		answer:
			"In general, usernames should not be: offensive, impersonating someone else, or advertising. Usernames are public and could be displayed over the site.",
		tags: ["account"],
	},
	{
		key: "how-can-i-delete-my-account",
		question: "How can I delete my account?",
		answer:
			"You can email help@prepseed.com concerning your request to delete your account.",
		tags: ["account"],
	},
	{
		key: "all-available-topics-on-portal",
		question: "What all topics are available on the portal?",
		answer:
			"Quant and VARC are available for Jobs, and CAT aspirants. All the topics of Physics, Chemistry, and Maths of 11th and 12th standard are present for IIT-JEE aspirants.",
		tags: ["preparation-portal"],
	},
	{
		key: "what-is-xp",
		question: "What is XP?",
		answer:
			"XP is the reward points earned by the user. User can earn XP by solving practice problems correctly, outperforming competitors in assessments (live). User can access some features of portal by spending certain amount of XP.",
		tags: ["preparation-portal"],
	},
	{
		key: "how-daily-goal-works",
		question: "How does daily goal work?",
		answer:
			"User can set his/her daily goal (number of questions to be solved everyday) on the portal. Every time user complete his/her daily goal, his/her streak is extended. Higher the streak, more XP points are rewarded to the user.",
		tags: ["preparation-portal"],
	},
	{
		key: "what-is-streak",
		question: "What is streak and how is it calculated?",
		answer:
			"Streak is calculated the continuous number of days user completed his/her goals. Incase the user couldn't complete his/her daily goal, the streak is reset to 0. Everytime a user changes goal setting, streak is reset to 0.",
		tags: ["preparation-portal"],
	},
	{
		key: "can-i-see-questions-attempted-during-practice-sessions",
		question:
			"Can I see the questions I attempted during practice sessions?",
		answer:
			"Yes you can see and review questions attempted during a practice session.",
		tags: ["preparation-portal"],
	},
	{
		key: "what-is-rating-and-how-is-it-updated",
		question: "What is rating and how is it updated?",
		answer:
			"Rating is a metric for a user's competence strength. User starts with a rating of 1600, which increases/decreases as per his performance (relative to his competitors) in live assessments. Note: The rating of a user has significance only when compared to other user's rating (at that point of time).",
		tags: ["user-rating", "preparation-portal"],
	},
	{
		key:
			"why-do-i-have-lower-ranking-than-my-peer-who-has-scored-less-than-me",
		question:
			"Why do I have lower rating than my peer who has scored less than me?",
		answer: `<div class='content'>
            <p>Rating is a user's competence strength. The rating depends upon how much marks a student has scored, but it is not directly proportional to marks scored. It is calculated based on various factors, like attempted questions, difficulty level, speed, and many more.</p>
            <p>Example:<br/>
            Two students Jayant and Manoj attempt the same question paper. Initially, their ratings are equal. Jayant and Manoj both score 50 marks out of 100. Jayant has scored 50 marks in difficult questions and had got all easy questions wrong while Manoj has scored 50 marks in easy questions and had got all difficult questions wrong.
            <br/>
            In this case, just after this test, Jayant's rating will be higher than Manoj's rating.
            </p>
        </div>
        `,
		tags: ["user-rating", "preparation-portal"],
	},
	{
		key: "why-my-rating-has-changed-without-attempting-any-test",
		question:
			"Why has my rating changed/increased/decreased, without attempting any test?",
		answer: `<div>
            <div>As rating is a metric for user's competence strength, the rating might change when you do not attempt any test, but your peers do.</div>
            <div>Example:</div>
            <div class='content'>
                <ul>
                    <li>There are a total of 500 students in a class.</li>
                    <li>A student Jayant has full marks in first 10 tests.</li>
                    <li>Let's say his Rating is 2000 now</li>
                    <li>Now, from test #11 onwards, he stops attempting tests.</li>
                    <li>Let's say after test #15, Jayant comes back and opens his account, his rating is decreased to 1900.</li>
                </ul>
                <p>
                    Now he wonders, why has his ranking decreased?
                    <br/>
                    His rating has decreased as his peers (499 other students) might have improved their performance and have performed better.
                </p>
            </div>
        </div>`,
		tags: ["user-rating", "preparation-portal"],
	},
	{
		key: "how-do-ranks-and-leaderboards-work",
		question: "How do ranks and leaderboards work?",
		answer:
			"Assessment rank and leaderboard are calculated by users marks in assessment. Overall rank and leaderboard are, however, calculated by users rating. Overall rank and leaderboard are shown only after a user has attempted at least two assessments.",
		tags: ["user-rating", "leaderboard", "preparation-portal"],
	},
	{
		key: "i-am-having-an-issue-with-the-portal",
		question:
			"I am having an issue with the portal. Where can I report it?",
		answer: `<div>
                <div>
                    You can email help@prepseed.com, or send us a message
                    through support (as shown below) concerning your issue.
                </div>
                <div style="display: flex;justify-content: center;padding-top: 24px">
                    <img
                        alt="Customer Support example"
                        src="${support}"
                        style="max-width:100%"
                    />
                </div>
            </div>`,
		tags: ["preparation-portal"],
	},
	{
		key: "is-there-subscription-fee-for-the-preparation-portal",
		question: "Is there subscription fee for the preparation portal?",
		answer:
			"There is no subscription fee for the portal. However, for some of the content and features, you might have to pay or spend some XP.",
		tags: ["preparation-portal"],
	},
	{
		key: "do-you-disclose-student-s-information-to-other-students",
		question: "Do you disclose student's information to other students?",
		answer:
			"We do not disclose the student's personal information to other students. However, we do disclose the username, rating and display image of the user if he/she appears in the leaderboard. We also disclose the user's performance metric (anonymously) if he/she is the top performer in an assessment.",
		tags: ["preparation-portal"],
	},
];

export default questions;
