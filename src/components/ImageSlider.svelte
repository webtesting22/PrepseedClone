<script>
    let root;
    const numberOfParts = 4;

    const lines = [
        ["https://static.prepseed.com/graphics/chat-bot.svg"],
        // ["Prepare", "with mentors"],
        ["https://static.prepseed.com/graphics/online-test.svg"],
        ["https://static.prepseed.com/graphics/to-do-list.svg"],
        [
            "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/9fbn5Kdyer3lRxkpGd6Y/progressive_app_light_pink%202.png",
        ],
        // ["Seamless", "Integrations"], // 5th Slide Added
        // ["Secure and", "Reliable"],
    ];
    const defaultHeightByDevice = {
        desktop: 109,
        mobile: 73,
        tablet: 109,
    };
    let itemHeightValue = defaultHeightByDevice[process.env.DEVICE];
    const handleResize = () => {
        itemHeightValue = 0;
        const task = () => {
            itemHeightValue =
                (root.scrollHeight + numberOfParts) / numberOfParts;
        };
        window && window.requestAnimationFrame
            ? window.requestAnimationFrame(task)
            : window && window.setTimeout(task, 30);
    };
</script>

<svelte:window on:resize={handleResize} />

<div
    use:handleResize
    bind:this={root}
    class="block root has-text-left mb-3"
    style="height: {itemHeightValue}px"
>
    <div class="scroller-item-list">
        {#each lines as line}
            <div
                class="is-size-1 is-size-3-mobile title has-text-weight-semibold is-family-secondary mb-0 scroller-item"
            >
                {#each line as item}
                    <img src={item} alt="" style="width:100%;" />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .root {
        overflow: hidden;
        display: inline-flex;
    }
    /* .scroller-item-list {
	animation: 6000ms ease-in-out 3000ms infinite normal none running an3;
}
@keyframes an3 {
	0% {
		transform: translateY(0px);
	}

	25% {
		transform: translateY(0px);
	}

	33% {
		transform: translateY(-100%);
	}

	58% {
		transform: translateY(-100%);
	}

	66% {
		transform: translateY(-200%);
	}

	91% {
		transform: translateY(-200%);
	}

	100% {
		transform: translateY(0px);
	}
}
*/
    .scroller-item {
        animation-name: firstChild;
        animation-duration: 6000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: none;
        padding: 10px;
    }
    .scroller-item:nth-child(1) {
        animation-delay: 2300ms;
    }
    .scroller-item:nth-child(2) {
        animation-delay: 4300ms;
    }
    .scroller-item:nth-child(3) {
        animation-delay: 6300ms;
    }

    .scroller-item:nth-child(4) {
        animation-delay: 8400ms;
    }

    @keyframes firstChild {
        0% {
            opacity: 1;
        }
        35% {
            opacity: 1;
        }
        50% {
            opacity: 0.1;
        }
        85% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }
    .scroller-item-list {
        animation: slideAnimation 10s ease-in-out infinite;
    }

    @keyframes slideAnimation {
        0%,
        25% {
            transform: translateY(0%);
        }
        30%,
        50% {
            transform: translateY(-100%);
        }
        55%,
        75% {
            transform: translateY(-200%);
        }
        80%,
        95% {
            transform: translateY(-300%);
        }
        100% {
            transform: translateY(0%);
        } /* Loops back to the first */
    }

    .scroller-item {
        animation: fadeEffect 10s ease-in-out infinite;
    }

    @keyframes fadeEffect {
        0%,
        20% {
            opacity: 1;
        }
        30%,
        100% {
            opacity: 1;
        }
    }
</style>
