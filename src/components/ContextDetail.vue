<template>
<b-container fluid class="content">
  <b-row class="m-2">
    <b-col cols="1">{{contentId}}</b-col>
    <b-col cols="9">{{title}}</b-col>
    <b-col cols="2">
        <b-row>글쓴이 : {{user}}</b-row>
        <b-row>등록일 : {{created}}</b-row>
    </b-col>
  </b-row>
  <b-row class="m-2" style="min-height: 720px;">
    <b-col>{{context}}</b-col>
  </b-row>
  <b-row class="m-2">
    <b-col>
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>        
    </b-col>
  </b-row>
  <b-row class="m-2">
    <b-col>
        <CommentList :contentId="contentId"/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import data from '@/data'
import CommentList from './CommentList'
export default {
    name: 'ContextDetail',
    components: {
        CommentList
    },
    data() {
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Content.filter(item=> item.content_id == contentId)[0]
        return {
            contentId: contentId,
            title: contentData.title,
            context: contentData.context,
            user: data.User.filter(item=>item.user_id === contentData.user_id)[0].name,
            created: contentData.created_at,
        }
    },
    methods: {
        deleteData() {
            const content_index = data.Content.findIndex(item=>item.content_id === this.contentId);
            data.Content.splice(content_index,1);
            this.$router.push({
                path: '/board/free'
            })
        },
        updateData() {
            this.$router.push({
                path: `/board/free/create/${this.contentId}`
            })
        },
    },
}
</script>
<style scoped>
.content >.row {
  border: 1px solid;
}
</style>