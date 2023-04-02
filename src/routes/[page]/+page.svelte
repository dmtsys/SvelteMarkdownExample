<script>
    export let data;
    import { marked } from "marked";
</script>


{@html marked(data.content)}