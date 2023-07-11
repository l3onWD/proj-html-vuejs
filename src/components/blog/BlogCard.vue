<script>
export default {
    props: {
        id: Number,
        imgFile: String,
        title: String,
        comments: Number,
        content: String,
        published: String
    },

    computed: {

        imgPath() {
            const url = new URL(`../../assets/img/blog/${this.imgFile}`, import.meta.url);
            return url.href;
        },

        dateString() {
            return new Date(this.published).toLocaleDateString();
        }

    }

}
</script>


<template>
    <div class="blog-card p-2">

        <!-- Blog Image -->
        <img :src="imgPath" :alt="title" class="img-fluid">

        <!-- Blog Info -->
        <div>
            <!-- Meta Data -->
            <ul class="d-flex gap-2">
                <li>
                    <FontAwesomeIcon icon="fas fa-calendar-days" class="text-yellow" /> {{ dateString }}
                </li>
                <li>
                    <FontAwesomeIcon icon="fas fa-comments" class="text-yellow" /> {{ comments }} comment
                </li>
            </ul>

            <!-- Title -->
            <h5>{{ title }}</h5>
        </div>
    </div>
</template>


<style></style>