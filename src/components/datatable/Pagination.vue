<template>
    <div>
        <nav aria-label="..." class="float-right" style="cursor: pointer;background: #fff !important;">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
                    <a class="page-link" @click.prevent="changePage(1)"  >First page</a>
                </li>
                <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
                    <a class="page-link" @click.prevent="changePage(pagination.current_page - 1)">Previous</a>
                </li>

                <li class="page-item" v-for="page in pages"  :key="page" :class="isCurrentPage(page) ? 'active' : ''">
                    <a class="page-link" @click.prevent="changePage(page)">{{ page }}
                        <span v-if="isCurrentPage(page)" class="sr-only">(current)</span>
                    </a>
                </li>

                <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
                    <a class="page-link" @click.prevent="changePage(pagination.current_page + 1)">Next</a>
                </li>
                <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
                    <a class="page-link" @click.prevent="changePage(pagination.last_page)">Last page</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MyPagination',
        props: ['pagination','offset'],

        data(){
            return{
                pag: ''
            }
        },

        watch: {
            pagination(newVal) {
                this.pag = newVal;
            }
        },

        methods: {
            isCurrentPage(page){
                return this.pag.current_page === page
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pag.current_page = page;
                this.$emit('paginate', this.pag.current_page);
                console.log(this.pag.current_page);
            }
        },

        computed: {
            pages() {
                let pages = [];
                let from = this.pagination.current_page - Math.floor(this.offset / 2);
                if (from < 1) {
                    from = 1
                }
                let to = from + this.offset -1;
                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page
                }
                while (from <= to) {
                    pages.push(from);
                    from++
                }
                return pages
            }


        }
    }
</script>

<style scoped>
</style>