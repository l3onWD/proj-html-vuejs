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
        <div class="blog-image">
            <img :src="imgPath" :alt="title" class="img-fluid">

            <ul class="blog-actions">
                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-plus" size="xl" />
                    </button>
                </li>

                <li>
                    <button>
                        <FontAwesomeIcon icon="fas fa-link" size="xl" />
                    </button>
                </li>
            </ul>
        </div>

        <!-- Blog Info -->
        <div>
            <!-- Meta Data -->
            <ul class="d-flex my-2">
                <li class="me-3">
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


<style lang="scss" scoped>
.blog-card {

    .blog-image {
        position: relative;

        .blog-actions {
            position: absolute;
            inset: 0;

            display: none;
            gap: 1rem;
            justify-content: center;
            align-items: center;

            background-color: rgba($color: #000, $alpha: 0.5);
        }

        &:hover .blog-actions {
            display: flex;
        }

        button {
            width: 40px;
            height: 40px;

            border: 1px solid #fff;
            border-radius: 50%;
        }

    }
}
</style>