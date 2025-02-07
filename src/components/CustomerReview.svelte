<script>
import LazyLoadImage from "./LazyLoadImage.svelte";

export let name, avatar, position, college, text;
</script>

<div class="box">
    <div class="is-flex block">
        {#if avatar}
            <div class="mr-4">
                <figure class="image is-64x64">
                    <LazyLoadImage
                        alt="{`Profile picture of ${name}`}"
                        class="is-rounded"
                        src="{avatar}"
                    />
                </figure>
            </div>
        {/if}
        <div class="">
            <div>
                <div class="title is-4 mb-0">{name}</div>
                <div class="has-text-info">{position}</div>
                <div class="has-text-info">{college}</div>
            </div>
        </div>
    </div>
    <div class="content">{text}</div>
</div>
