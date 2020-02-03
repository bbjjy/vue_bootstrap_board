<template>
  <div>
    <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage"  :fields="fields" @row-clicked="rowClick"></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>    
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from '@/data'

  export default {
      data() {
      let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
      items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
      return {
        currentPage: 1,
        perPage: 10,
        fields: [
            {
                key: 'content_id',
                label: '글번호'
            },
            {
                key: 'title',
                label: '제목'
            },
            {
                key: 'created_at',
                label: '작성일'
            },
            {
                key: 'user_name',
                label: '글쓴이'
            },
        ],
        items: items
      }
    },
    methods: {
        rowClick(item, index, event){
            this.$router.push({
                path: `/board/free/detail/${item.content_id}`
            })
        },
        writeContent(){
            this.$router.push({
                path:'/board/free/create'
            })
        }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    created () {           // 초기화 함수를 정의 한다.
        this.$store.commit('loadingOn');

        this.axios.get('/boardContent.do') 
          .then(response => {
            const toDoItems = response.data.map(r => r.data)     // 반환되는 값을 toDoItems에 저장한다.
            console.log(response.data);
            data.Content = response.data;
            this.items = response.data.sort((a,b) => {return b.content_id - a.content_id})
            this.items = this.items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})            
            console.log(this.items);
            //3초뒤에 로딩바 해제
            setTimeout(function(){ this.$store.commit('loadingOff') }.bind(this), 3000);
          })
          .catch(e => {
            console.log('error : ', e)          // 에러가 나는 경우 콘솔에 에러를 출력한다
          })
    }
  }
</script>